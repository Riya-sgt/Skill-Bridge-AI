from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import os
from pathlib import Path

app = Flask(__name__)

_cors_origins = os.environ.get(
    "CORS_ORIGINS",
    "https://skill-bridge-ai-sigma-two.vercel.app"
).split(",")

CORS(
    app,
    origins=[o.strip() for o in _cors_origins if o.strip()],
    allow_headers=["Content-Type"],
    methods=["GET", "POST", "OPTIONS"]
)

DB_PATH = Path(__file__).parent / "skill_match.db"


def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS profiles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                education TEXT,
                skills TEXT,
                interests TEXT,
                workStyle TEXT,
                target TEXT
            )
        """)
        columns = [row[1] for row in conn.execute("PRAGMA table_info(profiles)").fetchall()]
        if "workStyle" not in columns:
            conn.execute("ALTER TABLE profiles ADD COLUMN workStyle TEXT")
        if "target" not in columns:
            conn.execute("ALTER TABLE profiles ADD COLUMN target TEXT")


@app.get("/")
def home():
    return jsonify({
        "message": "SkillBridge AI backend is running!",
        "status": "success"
    })


@app.get("/api/health")
def health():
    return jsonify({"status": "healthy"})


@app.post("/api/profile")
def save_profile():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()

    if not name:
        return jsonify({"error": "Name is required"}), 400

    education = str(data.get("education", ""))
    skills = data.get("skills", [])
    interests = data.get("interests", [])

    if not isinstance(skills, list) or not isinstance(interests, list):
        return jsonify({
            "error": "Skills and interests must be lists"
        }), 400

    workStyle = data.get("workStyle") or ""
    if isinstance(workStyle, list):
        workStyle = ",".join(map(str, workStyle))
    workStyle = str(workStyle)
    target = str(data.get("target") or "")

    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.cursor()
        cursor.execute(
            "SELECT id FROM profiles WHERE LOWER(name) = LOWER(?) ORDER BY id DESC LIMIT 1",
            (name,),
        )
        existing = cursor.fetchone()
        if existing:
            cursor.execute(
                """
                UPDATE profiles
                SET name = ?, education = ?, skills = ?, interests = ?, workStyle = ?, target = ?
                WHERE id = ?
                """,
                (
                    name,
                    education,
                    ",".join(map(str, skills)),
                    ",".join(map(str, interests)),
                    workStyle,
                    target,
                    existing[0],
                ),
            )
            profile_id = existing[0]
        else:
            cursor.execute(
                """
                INSERT INTO profiles (name, education, skills, interests, workStyle, target)
                VALUES (?, ?, ?, ?, ?, ?)
                """,
                (
                    name,
                    education,
                    ",".join(map(str, skills)),
                    ",".join(map(str, interests)),
                    workStyle,
                    target,
                ),
            )
            profile_id = cursor.lastrowid

    return jsonify({
        "status": "success",
        "profile": {
            "id": profile_id,
            "name": name,
            "education": education,
            "skills": skills,
            "interests": interests,
            "workStyle": workStyle,
            "target": target,
        },
    })


@app.get("/api/profiles")
def get_profiles():
    with sqlite3.connect(DB_PATH) as conn:
        conn.row_factory = sqlite3.Row
        rows = conn.execute(
            "SELECT * FROM profiles ORDER BY id DESC"
        ).fetchall()

    return jsonify([dict(row) for row in rows])


if __name__ == "__main__":
    init_db()
    app.run(debug=True, port=5000)