# SkillBridge AI — Smart Career & Skill Gap Analyzer 🚀

**Discover your career direction. Identify skill gaps. Build your learning roadmap.**

SkillBridge AI is a web-based career guidance platform that helps users explore career opportunities based on their existing skills, interests, work style, and target role. It provides rule-based career recommendations, skill gap analysis, learning priorities, and a 30-day roadmap.

## 🌐 Live Demo

- **Live Website:** https://skill-bridge-ai-sigma-two.vercel.app
- **GitHub Repository:** https://github.com/Riya-sgt/Skill-Bridge-AI
- **Backend API:** https://skillbridge-ai-backend-3dwx.onrender.com

## ✨ Features

### 1. Overview Dashboard
- View a summary of your career profile.
- See your strongest career match and skill coverage.
- Navigate to the main project modules.

### 2. My Profile
- Enter your name and education level.
- Add existing skills and work interests.
- Select a preferred work style and target career.
- Update your profile to explore different career directions.

### 3. Career Matches
- Explore career recommendations based on profile information.
- Compare career match scores.
- Review relevant skills and skills that need improvement.
- Explore career options and learning roadmaps.

### 4. Smart Skill Gap Analyzer
- Identify skills that match a selected career.
- Find missing or underdeveloped skills.
- View learning priorities and suggested next steps.
- Review skill coverage for the target role.

### 5. Skill Intelligence
- Review matched skills and skills to build.
- Explore a recommended learning sequence.
- Access suggested learning resources.
- Print or save a Skill Intelligence report as a PDF.

### 6. 30-Day Roadmap
- Follow a structured, week-by-week learning plan.
- Track completed learning tasks.
- Monitor roadmap progress.

### 7. Career Report
- Generate a printable career report.
- Review profile details, career matches, matched skills, and skill gaps.
- Save the report as a PDF using the browser's print dialog.

## 🛠️ Technology Stack

**Frontend**
- React
- Vite
- JavaScript
- HTML and CSS

**Backend**
- Python
- Flask
- Flask-CORS

**Database**
- SQLite

**Development Tools**
- Visual Studio Code
- Git and GitHub
- Vercel for frontend deployment
- Render for backend deployment

## 🏗️ Project Structure

```text
Skill-Match-AI/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── skill_match.db
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── data.js
│   ├── Icon.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── index.html
└── README.md
```

*Note: The SQLite database file may be created locally by the backend. Do not commit private data or local environment files.*

## 💻 Run the Project Locally

### Prerequisites
- Node.js and npm
- Python 3
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Riya-sgt/Skill-Bridge-AI.git
cd Skill-Match-AI
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Configure and start the backend

Open a terminal:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python app.py
```

The backend normally runs at:

`http://127.0.0.1:5000`

If PowerShell blocks activation, use the Python executable inside the virtual environment directly instead.

### 4. Configure the frontend API URL

Create a `.env.local` file in the project root:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

Keep local environment files out of Git.

### 5. Start the frontend

Open a second terminal in the project root:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

### 6. Build for production

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## 🔌 Backend API

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Backend status |
| GET | `/api/health` | Health check |
| POST | `/api/profile` | Save a profile |
| GET | `/api/profiles` | Retrieve saved profiles |

Profile API availability and persistence depend on the deployed backend and database configuration.

## 🔒 Data and Privacy

- Career recommendations are based on local, rule-based matching logic; they are not guaranteed job outcomes or predictions from a trained AI model.
- The application may retain some progress in the current browser.
- Backend profile synchronization and persistent database storage should be verified before relying on them for long-term data retention.
- Never commit credentials, secrets, private user data, or local environment files.

## 🚀 Future Improvements

- Reliable cloud profile persistence.
- More personalized learning resources.
- Enhanced career analytics.
- Additional progress tracking and reporting.

## 👩‍💻 Author

**Riya**  
B.Tech — Computer Science Engineering (Artificial Intelligence & Machine Learning)

## 📄 Disclaimer

SkillBridge AI is an educational career guidance project. Its recommendations are informational and should not be treated as a guarantee of employment or career success.

