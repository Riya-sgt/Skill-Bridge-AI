# SkillBridge AI — Smart Career & Skill Gap Analyzer 🚀

**Discover your career direction. Identify skill gaps. Build your learning roadmap.**

SkillBridge AI is a web-based career guidance platform that helps users explore career opportunities based on their skills, interests, work style, and target career. It provides rule-based career recommendations, skill gap analysis, learning priorities, and a structured 30-day roadmap.

## 🌐 Live Links

| Resource | Link |
|---|---|
| Live Website | [SkillBridge AI](https://skill-bridge-ai-sigma-two.vercel.app) |
| GitHub Repository | [SkillBridge AI on GitHub](https://github.com/Riya-sgt/Skill-Bridge-AI) |
| Backend API | [SkillBridge AI Backend](https://skillbridge-ai-backend-3dwx.onrender.com) |
| Backend Health Check | [API Health](https://skillbridge-ai-backend-3dwx.onrender.com/api/health) |

## ✨ Features

### 1. Overview Dashboard
- View a summary of your career profile.
- Explore your strongest career match and skill coverage.
- Navigate between the main application modules.

### 2. My Profile
- Enter your preferred name and education level.
- Add existing skills and work interests.
- Select your preferred work style.
- Choose a target career and update your profile.

### 3. Career Matches
- Explore career recommendations based on profile information.
- Compare career match scores.
- Review matched skills and skills to develop.
- Explore different career paths.

### 4. Smart Skill Gap Analyzer
- Identify skills that match a selected career.
- Discover missing or underdeveloped skills.
- View learning priorities and suggested next steps.
- Review skill coverage for a target role.

### 5. Skill Intelligence
- Review existing strengths and skills to build.
- Explore a recommended learning sequence.
- Access suggested learning resources.
- Print or save a Skill Intelligence report as a PDF.

### 6. 30-Day Learning Roadmap
- Follow a structured, week-by-week learning plan.
- Mark completed learning activities.
- Track roadmap progress.

### 7. Career Report
- Generate a printable career report.
- Review profile details and career recommendations.
- View matched skills and skills to develop.
- Save the report as a PDF through the browser's print dialog.

## 🛠️ Technology Stack

| Component | Technologies |
|---|---|
| Frontend | React, Vite, JavaScript |
| UI | HTML, CSS |
| Backend | Python, Flask, Flask-CORS |
| Database | SQLite |
| Version Control | Git, GitHub |
| Frontend Deployment | Vercel |
| Backend Deployment | Render |

## 📁 Project Structure

```text
Skill-Match-AI/
├── backend/
│   ├── app.py
│   └── requirements.txt
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── data.js
│   ├── Icon.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── .gitignore
└── README.md
```

*Note: The SQLite database is generated or maintained by the backend as configured. Local database files, virtual environments, and environment files should not be committed if they contain private data or local configuration.*

## 💻 Run Locally

### Prerequisites

Install the following tools:

- [Node.js and npm](https://nodejs.org/)
- [Python](https://www.python.org/)
- [Git](https://git-scm.com/)

### Step 1: Clone the repository

```bash
git clone https://github.com/Riya-sgt/Skill-Bridge-AI.git
cd Skill-Match-AI
```

### Step 2: Install frontend dependencies

Run this command from the project root:

```bash
npm install
```

### Step 3: Set up the backend

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

Keep this terminal running.

### Step 4: Configure the frontend API URL

In the project root, create a `.env.local` file containing:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

This setting tells the frontend to use the local backend. Keep `.env.local` out of Git.

### Step 5: Start the frontend

Open a second terminal in the project root:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

### Step 6: Build for production

To verify the frontend production build, run:

```bash
npm run build
```

The generated frontend files are placed in the `dist/` directory.

## 🔌 Backend API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Check the backend status |
| GET | `/api/health` | Check API health |
| POST | `/api/profile` | Submit a profile for saving |
| GET | `/api/profiles` | Retrieve saved profiles |

Profile-saving success and data persistence depend on the backend deployment and database configuration.

## 🚀 Deployment

### Frontend — Vercel
The React + Vite frontend is deployed on Vercel.

Live URL: [Open SkillBridge AI](https://skill-bridge-ai-sigma-two.vercel.app)

### Backend — Render
The Flask API is deployed on Render.

Backend URL: [Open Backend](https://skillbridge-ai-backend-3dwx.onrender.com)

Health endpoint: [Check API Health](https://skillbridge-ai-backend-3dwx.onrender.com/api/health)

## 🔒 Data, Privacy, and Limitations

- Career match scores are based on rule-based matching logic and are not guaranteed job outcomes.
- The project does not claim that recommendations come from a trained machine-learning model.
- Some assessment or roadmap progress may be stored in the browser.
- Backend profile synchronization and persistent cloud storage must be verified before relying on them for long-term data retention.
- Do not commit credentials, private user information, local environment files, or databases containing sensitive data.

## 🔮 Future Improvements

- Reliable persistent cloud profile storage.
- Improved profile synchronization and error handling.
- More personalized learning resources.
- Enhanced career analytics and progress tracking.

## 👩‍💻 Author

**Riya**  
B.Tech — Computer Science Engineering (Artificial Intelligence & Machine Learning)

## 📄 Disclaimer

SkillBridge AI is an educational career guidance project. Its recommendations are intended for informational purposes and should not be treated as a guarantee of employment, salary, or career success.
