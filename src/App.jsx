import { useEffect, useState } from 'react'
import Icon from './Icon'
import { educationOptions, getRecommendations, getRoadmap, interestOptions, normalizeList, roleCatalog, workStyleOptions } from './data'
import './App.css'

const STORAGE_KEYS = {
  profile: 'skill-match-profile',
  roadmap: 'skill-match-roadmap',
}

const features = [
  { icon: 'target', title: 'Career matches', copy: 'Compare your profile with role signals and see why a path may fit.', section: 'recommendations' },
  { icon: 'trend', title: 'Skill intelligence', copy: 'Separate your current strengths from the skills that unlock progress.', section: 'gaps' },
  { icon: 'calendar', title: 'Focused roadmap', copy: 'Turn a career direction into a practical 30-day sequence.', section: 'roadmap' },
  { icon: 'route', title: 'One career workspace', copy: 'Keep your assessment, signals, and next actions connected.', section: 'assessment' },
]

const weekPhases = ['Clarify your direction', 'Build a core skill', 'Create visible evidence', 'Reflect and extend']

function Brand({ onClick, inverse = false }) {
  return (
    <button type="button" className={inverse ? 'brand inverse' : 'brand'} onClick={onClick}>
      <span className="brand-mark">
        <Icon name="sparkles" size={17} />
      </span>
      <span>
        Skill
        <span>Bridge</span>
        AI
      </span>
    </button>
  )
}

function ScoreRing({ score, size = 'normal' }) {
  return (
    <div className={`score-ring ${size}`}>
      <svg viewBox="0 0 52 52">
        <circle className="ring-track" cx="26" cy="26" r="22" />
        <circle className="ring-progress" cx="26" cy="26" r="22" strokeDasharray={138} strokeDashoffset={138 * (1 - score / 100)} />
      </svg>
      <strong>
        {score}
        <small>%</small>
      </strong>
    </div>
  )
}

function Progress({ value, label }) {
  return (
    <div className="progress-wrap">
      <div className="progress-meta">
        <span>{label}</span>
        <strong>
          {value}
          %
        </strong>
      </div>
      <div className="progress-bar">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

function EmptyState({ icon, title, copy, action, onAction }) {
  return (
    <div className="empty-state">
      <span className="empty-icon">
        <Icon name={icon} size={23} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
      {action ? (
        <button className="primary-button compact" type="button" onClick={onAction}>
          {action}
          <Icon name="arrow" size={16} />
        </button>
      ) : null}
    </div>
  )
}

function FeatureCard({ feature, onOpen }) {
  return (
    <article className="feature-card">
      <span className="feature-index">{features.indexOf(feature) + 1}</span>
      <div className="feature-icon">
        <Icon name={feature.icon} size={20} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.copy}</p>
      <button type="button" onClick={() => onOpen(feature.section)}>
        Explore tool
        <Icon name="arrow" size={15} />
      </button>
    </article>
  )
}

function Landing({ onOpenApp }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const open = (view) => {
    onOpenApp(view)
    setMenuOpen(false)
  }

  return (
    <div className="landing">
      <header className="site-header">
        <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <button type="button" className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
        </button>
        <nav className={menuOpen ? 'site-nav open' : 'site-nav'}>
          <a href="#tools" onClick={() => setMenuOpen(false)}>
            Product
          </a>
          <a href="#method" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <button type="button" onClick={() => open('assessment')}>
            Start exploring
            <Icon name="arrow" size={16} />
          </button>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              <i />
              Career planning, made practical
            </p>
            <h1>
              Know your next move <em>before you make it.</em>
            </h1>
            <p>SkillBridge AI turns the skills and interests you already have into clear career options and an actionable route forward.</p>
            <p className="hero-tagline">Bridge your skills to your future.</p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => open('assessment')}>
                Find my career path
                <Icon name="arrow" size={17} />
              </button>
              <button className="quiet-button" type="button" onClick={() => open('overview')}>
                View the workspace
              </button>
            </div>
            <div className="hero-proof">
              <span>
                <Icon name="info" size={14} />
              </span>
              <p>
                <strong>Transparent by design.</strong> This experience uses local sample data, not a live AI model.
              </p>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of a career planning workspace">
            <div className="visual-glow" />
            <div className="career-board">
              <header>
                <div>
                  <span className="board-kicker">Career signal</span>
                  <strong>Direction board</strong>
                </div>
                <span className="board-avatar">
                  <Icon name="user" size={15} />
                </span>
              </header>
              <div className="board-focus">
                <span className="focus-icon">
                  <Icon name="target" size={20} />
                </span>
                <div>
                  <small>Explore next</small>
                  <strong>Frontend Developer</strong>
                </div>
                <ScoreRing score={84} size="small" />
              </div>
              <div className="board-line">
                <span />
                <i />
                <i />
                <i />
              </div>
              <div className="board-stages">
                <span className="current">
                  <b>01</b>
                  Discover
                </span>
                <span>
                  <b>02</b>
                  Build
                </span>
                <span>
                  <b>03</b>
                  Launch
                </span>
              </div>
              <div className="board-skills">
                <p>Signals to build</p>
                <span>React</span>
                <span>Responsive CSS</span>
                <span>Git</span>
              </div>
            </div>
            <div className="visual-note signal-note">
              <span>
                <Icon name="trend" size={16} />
              </span>
              <div>
                <small>Profile signal</small>
                <strong>Skills mapped</strong>
              </div>
            </div>
            <div className="visual-note plan-note">
              <span>
                <Icon name="calendar" size={16} />
              </span>
              <div>
                <small>30-day plan</small>
                <strong>8 focused tasks</strong>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-section" id="tools">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A deliberate toolkit</p>
              <h2>
                Everything you need to find <br />
                a direction and <em>follow through.</em>
              </h2>
            </div>
            <p>One focused workspace, built around the decisions that matter most at the start of your career.</p>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} onOpen={open} />
            ))}
          </div>
        </section>
        <section className="method-section" id="method">
          <div className="method-intro">
            <p className="eyebrow">The workflow</p>
            <h2>
              Less noise. Better <em>career decisions.</em>
            </h2>
            <p>Your answers stay local to this browser. The guidance is simple, explainable, and designed to give you a credible starting point.</p>
            <button className="secondary-button" type="button" onClick={() => open('assessment')}>
              Start your assessment
              <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="method-list">
            <article>
              <span>01</span>
              <div>
                <h3>Map your starting point</h3>
                <p>Add the skills, interests, education context, and work style you want to use.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Review the role signals</h3>
                <p>See sample match scores and the specific signals behind them.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Commit to a next step</h3>
                <p>Use a lightweight roadmap and learning links to build evidence.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer>
        <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} inverse />
        <p>Local-first career exploration for students and early-career builders.</p>
        <button type="button" onClick={() => open('assessment')}>
          Open workspace
          <Icon name="arrow" size={15} />
        </button>
      </footer>
    </div>
  )
}

function Assessment({ profile, onSave, saveState }) {
  const [form, setForm] = useState({
    name: profile?.name || '',
    skills: profile?.skills?.join(', ') || '',
    interests: profile?.interests || [],
    workStyle: profile?.workStyle ? [profile?.workStyle] : [],
    education: profile?.education || '',
    target: profile?.target || '',
  })
  const [errors, setErrors] = useState({})

  const set = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const toggleInterest = (interest) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest) ? current.interests.filter((item) => item !== interest) : [...current.interests, interest],
    }))
  }

  const toggleWorkStyle = (value) => {
    setForm((current) => ({
      ...current,
      workStyle: current.workStyle.includes(value) ? current.workStyle.filter((item) => item !== value) : [...current.workStyle, value],
    }))
  }

  const submit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!normalizeList(form.skills).length) {
      nextErrors.skills = 'Add at least one skill, separated by commas.'
    }
    if (!form.interests.length) {
      nextErrors.interests = 'Choose at least one interest.'
    }
    if (!form.workStyle.length) {
      nextErrors.workStyle = 'Choose at least one work style that fits you.'
    }
    if (!form.education) {
      nextErrors.education = 'Select your current education level.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      return
    }
    onSave({
      name: form.name.trim(),
      skills: normalizeList(form.skills),
      interests: form.interests,
      workStyle: form.workStyle,
      education: form.education,
      target: form.target,
    })
  }

  return (
    <section className="app-page">
      <div className="page-heading">
        <p className="eyebrow">Profile assessment</p>
        <h1>Start with an honest inventory.</h1>
        <p>Use the skills, interests, and work style you want to explore. You can update this profile at any time.</p>
      </div>
      <form className="assessment-form" onSubmit={submit} noValidate>
        <div className="form-header">
          <span>
            <Icon name="user" size={18} />
          </span>
          <div>
            <strong>Your career starting point</strong>
            <p>These answers create transparent, local demo role signals.</p>
          </div>
        </div>
        <div className="form-grid">
          <label>
            Preferred name
            <span className="optional">Optional</span>
            <input value={form.name} onChange={(event) => set('name', event.target.value)} placeholder="How should we address you?" />
          </label>
          <label>
            Education level
            <select value={form.education} onChange={(event) => set('education', event.target.value)} aria-invalid={!!errors.education}>
              <option value="">Select your current level</option>
              {educationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.education ? <small className="error">{errors.education}</small> : null}
          </label>
        </div>
        <label>
          Skills you already have
          <span className="label-note">Comma separated</span>
          <textarea value={form.skills} onChange={(event) => set('skills', event.target.value)} aria-invalid={!!errors.skills} placeholder="For example: Excel, JavaScript, communication, Figma" rows={3} />
          {errors.skills ? <small className="error">{errors.skills}</small> : null}
        </label>
        <fieldset>
          <legend>What kinds of work interest you?</legend>
          <div className="interest-grid">
            {interestOptions.map((interest) => {
              const value = interest.toLowerCase()
              const selected = form.interests.includes(value)
              return (
                <label key={interest} className={selected ? 'interest-option selected' : 'interest-option'}>
                  <input type="checkbox" checked={selected} onChange={() => toggleInterest(value)} />
                  {interest}
                </label>
              )
            })}
          </div>
          {errors.interests ? <small className="error">{errors.interests}</small> : null}
        </fieldset>
        <fieldset>
          <legend>Which work style fits you best?</legend>
          <div className="work-style-grid">
            {workStyleOptions.map((workStyle) => {
              const value = workStyle.value
              const selected = form.workStyle.includes(value)
              return (
                <label key={workStyle.value} className={selected ? 'work-style-option selected' : 'work-style-option'}>
                  <input type="checkbox" name="work-style" value={value} checked={selected} onChange={() => toggleWorkStyle(value)} />
                  <strong>{workStyle.label}</strong>
                  <small>{workStyle.copy}</small>
                </label>
              )
            })}
          </div>
          {errors.workStyle ? <small className="error">{errors.workStyle}</small> : null}
        </fieldset>
        <label>
          Target career
          <span className="optional">Optional</span>
          <select value={form.target} onChange={(event) => set('target', event.target.value)}>
            <option value="">I am still exploring</option>
            {roleCatalog.map((role) => (
              <option key={role.id} value={role.id}>
                {role.title}
              </option>
            ))}
          </select>
        </label>
        <div className="form-footer">
          <p>
            <Icon name="info" size={16} /> Match scores use transparent, deterministic local rules. Nothing is sent to a server.
          </p>
          <button className="primary-button" type="submit" disabled={saveState === 'saving'}>
            {saveState === 'saving' ? 'Saving your profile...' : 'View my results'}
            <Icon name="arrow" size={16} />
          </button>
          {saveState === 'saved' ? (
            <p className="save-status success">Your profile was saved locally and to the backend.</p>
          ) : null}
          {saveState === 'error' ? (
            <p className="save-status error">We could not reach the server. Your profile was saved on this device.</p>
          ) : null}
        </div>
      </form>
    </section>
  )
}

function Recommendations({ recommendations, onFocus, onAssessment }) {
  return (
    <section className="app-page">
      <div className="page-heading split-heading">
        <div>
          <p className="eyebrow">Career matches</p>
          <h1>Explore your strongest signals.</h1>
          <p>Each score is a local sample calculation based on your skills, interests, work style, and optional target role.</p>
        </div>
        <span className="demo-badge">
          <Icon name="info" size={14} />
          Demo matching
        </span>
      </div>
      {recommendations.length ? (
        <div className="recommendation-grid">
          {recommendations.map((rec, index) => (
            <article key={rec.id} className={index === 0 ? 'recommendation-card featured' : 'recommendation-card'}>
              <div className="recommendation-card-top">
                <span className="role-icon">
                  <Icon name={rec.icon} size={21} />
                </span>
                <ScoreRing score={rec.score} />
              </div>
              <div className="role-title">
                <h2>{rec.title}</h2>
                {index === 0 ? <span>Strongest signal</span> : null}
              </div>
              <p className="role-description">{rec.description}</p>
              <div className="reason-block">
                <strong>Why this may fit</strong>
                {rec.skillMatches.length ? (
                  <p>
                    <Icon name="check" size={14} />
                    {rec.skillMatches.length} {rec.skillMatches.length > 1 ? 's' : ''} related skill {rec.skillMatches.length > 1 ? 's' : ''} in your profile
                  </p>
                ) : null}
                {rec.interestMatches.length ? (
                  <p>
                    <Icon name="check" size={14} />
                    Aligned with {rec.interestMatches.join(' and ')}
                  </p>
                ) : null}
                {rec.workStyleMatch ? (
                  <p>
                    <Icon name="check" size={14} />
                    Aligned with your preferred work style
                  </p>
                ) : null}
                {!rec.skillMatches.length && !rec.interestMatches.length ? (
                  <p>
                    <Icon name="info" size={14} />
                    A role to investigate against your goals
                  </p>
                ) : null}
              </div>
              <button className="card-action" type="button" onClick={() => onFocus(rec.id)}>
                Use as my focus
                <Icon name="arrow" size={15} />
              </button>
            </article>
          ))}
        </div>
      ) : (
        <EmptyState icon="target" title="Your career matches will appear here" copy="Complete your profile assessment to compare your skills and interests with our sample role profiles." action="Complete assessment" onAction={onAssessment} />
      )}
    </section>
  )
}


function SkillDonut({ matched, total }) {
  const safeTotal = Math.max(total, 1)
  const percent = Math.round((matched / safeTotal) * 100)
  const radius = 48
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - matched / safeTotal)

  return (
    <div className="analytics-donut">
      <svg viewBox="0 0 120 120" role="img"
        aria-label={`${matched} of ${total} required skills matched`}>
        <circle cx="60" cy="60" r={radius} fill="none"
          stroke="#e3eaf5" strokeWidth="12" />
        <circle cx="60" cy="60" r={radius} fill="none"
          stroke="#3478f6" strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)" />
        <text x="60" y="57" textAnchor="middle"
          fontSize="21" fontWeight="700" fill="currentColor">
          {percent}%
        </text>
        <text x="60" y="73" textAnchor="middle"
          fontSize="9" fill="currentColor">
          skill coverage
        </text>
      </svg>
      <p>{matched} matched · {Math.max(total - matched, 0)} to build</p>
    </div>
  )
}

function SkillCoverageChart({ skills, matchedSkills }) {
  const matchedSet = new Set(
    matchedSkills.map((skill) => skill.toLowerCase().trim())
  )

  return (
    <div className="coverage-chart">
      {skills.map((skill) => {
        const matched = matchedSet.has(skill.toLowerCase().trim())

        return (
          <div className="coverage-row" key={skill}>
            <div className="coverage-label">
              <span>{skill}</span>
              <strong className={matched ? 'coverage-match' : 'coverage-gap'}>
                {matched ? 'Matched' : 'To build'}
              </strong>
            </div>
            <div
              className="coverage-track"
              role="img"
              aria-label={`${skill}: ${matched ? 'matched' : 'to build'}`}
            >
              <span
                className={matched ? 'coverage-fill matched' : 'coverage-fill missing'}
                style={{ width: matched ? '100%' : '12%' }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Gaps({ role, onAssessment }) {
  const [showAll, setShowAll] = useState(false)

  if (!role) {
    return (
      <section className="app-page">
        <EmptyState
          icon="trend"
          title="Choose a career direction first"
          copy="Complete your profile assessment to explore skill matches and learning priorities."
          action="Complete assessment"
          onAction={onAssessment}
        />
      </section>
    )
  }

  const skills = role.skills || []
  const matchedSkills = role.skillMatches || []
  const missingSkills = role.missingSkills || []
  const total = skills.length
  const matchedCount = matchedSkills.length
  const alignment = total
    ? Math.round((matchedCount / total) * 100)
    : 0

  const visibleGaps = showAll
    ? missingSkills
    : missingSkills.slice(0, 5)

  const priorityFor = (index) => {
    if (index === 0) return 'High'
    if (index <= 2) return 'Medium'
    return 'Low'
  }

  const downloadReport = () => {
    window.print()
  }

  return (
    <section className="app-page">
      <div className="page-heading split-heading">
        <div>
          <p className="eyebrow">Skill intelligence</p>
          <h1>Turn gaps into a plan.</h1>
          <p>
            Explore your current skill signals, compare them with your target
            career, and decide what to practise next.
          </p>
        </div>
        <span className="focus-label">
          <Icon name={role.icon} size={15} />
          {role.title}
        </span>
      </div>

      <div className="gap-layout">
        <article className="gap-overview">
          <div className="gap-overview-head">
            <div>
              <p>Focused career direction</p>
              <h2>{role.title}</h2>
            </div>
            <SkillDonut matched={matchedCount} total={total} />
          </div>
          <Progress value={alignment} label="Required skill coverage" />
          <p className="gap-explainer">
            This compares skills listed in your profile with the role's sample
            requirements. It is not a verified proficiency or job-readiness score.
          </p>
        </article>

        <article className="analytics-card">
          <div className="panel-head">
            <div>
              <h2>Skill match distribution</h2>
              <p>How your listed skills compare with role requirements</p>
            </div>
          </div>
          <SkillDonut matched={matchedCount} total={total} />
        </article>

        <article className="analytics-card">
          <div className="panel-head">
            <div>
              <h2>Skill coverage by requirement</h2>
              <p>Each bar indicates a profile match, not skill proficiency.</p>
            </div>
          </div>
          {skills.length ? (
            <SkillCoverageChart
              skills={skills}
              matchedSkills={matchedSkills}
            />
          ) : (
            <p className="empty-copy">No role requirements are available.</p>
          )}
        </article>

        <article className="skills-panel">
          <div className="panel-head">
            <div>
              <span className="success-icon">
                <Icon name="check" size={16} />
              </span>
              <div>
                <h2>Strengths you shared</h2>
                <p>Skills that match this role's requirements</p>
              </div>
            </div>
            <span>{matchedCount}</span>
          </div>
          {matchedSkills.length ? (
            <div className="skill-chip-list">
              {matchedSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          ) : (
            <p className="empty-copy">
              No direct matches yet. Choose one requirement to practise first.
            </p>
          )}
        </article>

        <article className="skills-panel">
          <div className="panel-head">
            <div>
              <span className="build-icon">
                <Icon name="trend" size={16} />
              </span>
              <div>
                <h2>Skills to build</h2>
                <p>Suggested learning priorities</p>
              </div>
            </div>
            <span>{missingSkills.length}</span>
          </div>
          {missingSkills.length ? (
            <div className="learning-list"> 
                {visibleGaps.map((skill, index) => {
                const priority = priorityFor(index)

                return (
                    <div className="skill-gap-item" key={skill}>
                    <div className="skill-gap-heading">
                        <span className="skill-gap-name">{skill}</span>
                        <span className={`priority-badge priority-${priority.toLowerCase()}`}>
                        {priority} priority
                        </span>
                    </div>

                    <p className="skill-gap-description">
                        {index === 0
                        ? 'Start here: focus on this skill first.'
                        : 'Practise this skill through a guided exercise or mini-project.'}
                    </p>

                    <small>
                        Suggested action: spend 30 minutes learning and 30 minutes practising.
                    </small>
                    </div>
                )
                })}

              {missingSkills.length > 5 && (
                <button
                  className="secondary-button compact"
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                >
                  {showAll ? 'Show fewer skills' : 'Show all skills'}
                </button>
              )}
            </div>
          ) : (
            <p className="empty-copy">
              All listed role requirements currently match your profile.
              Try a practical project to validate your skills.
            </p>
          )}
        </article>

        <article className="learning-plan">
          <p className="eyebrow">Recommended sequence</p>
          <h2>Build evidence, one skill at a time.</h2>
          <ol>
            {(role.learning || []).map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </article>

        <article className="resource-panel">
          <div>
            <p className="eyebrow">Learning resources</p>
            <h2>Start with a trusted guide.</h2>
          </div>
          <div>
            {(role.resources || []).map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
              >
                {resource.label}
                <Icon name="arrow" size={14} />
              </a>
            ))}
          </div>
        </article>

        <article className="analytics-card report-card">
          <div>
            <h2>Save your assessment report</h2>
            <p>
              Print this page or choose Save as PDF in your browser's print
              dialog. The report reflects the current role and profile.
            </p>
          </div>
          <button
            type="button"
            className="primary-button compact"
            onClick={downloadReport}
          >
            <Icon name="arrow" size={15} />
            Print / Save as PDF
          </button>
        </article>
      </div>
    </section>
  )
}

function Roadmap({ tasks, progress, onToggle, onAssessment }) {
  const doneCount = tasks.filter((task) => progress[task.id]).length
  const percent = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0
  const weeks = [...new Set(tasks.map((task) => task.week))]

  return (
    <section className="app-page">
      <div className="page-heading split-heading">
        <div>
          <p className="eyebrow">30-day roadmap</p>
          <h1>Build momentum that lasts.</h1>
          <p>Focused weekly actions based on your selected career direction. Progress is saved in this browser.</p>
        </div>
        {tasks.length ? (
          <div className="roadmap-score">
            <strong>{percent}%</strong>
            <span>
              {doneCount} / {tasks.length} tasks
            </span>
          </div>
        ) : null}
      </div>
      {tasks.length ? (
        <>
          <Progress value={percent} label="Roadmap completion" />
          <div className="roadmap-grid">
            {weeks.map((week, index) => (
              <section key={week} className="week-card">
                <div className="week-heading">
                  <span>{index + 1}</span>
                  <div>
                    <strong>{week}</strong>
                    <p>{weekPhases[index]}</p>
                  </div>
                </div>
                {tasks.filter((task) => task.week === week).map((task) => (
                  <div key={task.id} className={progress[task.id] ? 'roadmap-task done' : 'roadmap-task'}>
                    <label>
                      <input type="checkbox" checked={!!progress[task.id]} onChange={() => onToggle(task.id)} />
                      <span className="checkbox-mark">
                        <Icon name="check" size={12} stroke={3} />
                      </span>
                      <span>
                        <strong>{task.title}</strong>
                        <small>{task.detail}</small>
                      </span>
                    </label>
                    {task.resource ? (
                      <a className="task-resource" href={task.resource.url} target="_blank" rel="noreferrer">
                        {task.resource.label}
                        <Icon name="arrow" size={12} />
                      </a>
                    ) : null}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </>
      ) : (
        <EmptyState icon="calendar" title="Your roadmap starts with a direction" copy="Complete the assessment to create a practical local plan from your strongest career match." action="Complete assessment" onAction={onAssessment} />
      )}
    </section>
  )
}

function Overview({ profile, recommendations, tasks, progress, onNavigate }) {
  const doneCount = tasks.filter((task) => progress[task.id]).length
  const percent = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0
  const nextTask = tasks.find((task) => !progress[task.id])
  const focused = recommendations[0]
    const completeness = [profile?.skills?.length, profile?.interests?.length, profile?.workStyle?.length, profile?.education, profile?.target].filter(Boolean).length
  const profilePercent = Math.round((completeness / 5) * 100)
  const heading = profile?.name ? `Welcome back, ${profile.name}.` : 'Your career workspace.'

  return (
    <section className="app-page overview-page">
      <div className="overview-title">
        <div>
          <p className="eyebrow">Overview</p>
          <h1>{heading}</h1>
          <p>{profile ? 'Your current signals, next skills, and roadmap are all in one focused place.' : 'Build a local profile to turn this workspace into a useful starting point.'}</p>
        </div>
        {profile ? (
          <button className="secondary-button compact" type="button" onClick={() => onNavigate('assessment')}>
            Update profile
          </button>
        ) : null}
      </div>
      {profile ? (
        <>
          <div className="overview-metrics">
            <article>
              <span className="metric-icon blue">
                <Icon name="user" size={18} />
              </span>
              <div>
                <small>Profile status</small>
                <strong>{profilePercent} % complete</strong>
              </div>
              <button type="button" aria-label="Update profile" onClick={() => onNavigate('assessment')}>
                <Icon name="arrow" size={14} />
              </button>
            </article>
            <article>
              <span className="metric-icon violet">
                <Icon name="target" size={18} />
              </span>
              <div>
                <small>Strongest role signal</small>
                <strong>{focused?.title || 'Exploring'}</strong>
              </div>
              <button type="button" aria-label="View career matches" onClick={() => onNavigate('recommendations')}>
                <Icon name="arrow" size={14} />
              </button>
            </article>
            <article>
              <span className="metric-icon green">
                <Icon name="calendar" size={18} />
              </span>
              <div>
                <small>30-day progress</small>
                <strong>
                  {doneCount} of {tasks.length} tasks
                </strong>
              </div>
              <button type="button" aria-label="View roadmap" onClick={() => onNavigate('roadmap')}>
                <Icon name="arrow" size={14} />
              </button>
            </article>
          </div>
          <div className="dashboard-grid">
            <section className="dashboard-card signal-card">
              <div className="card-title">
                <div>
                  <p className="eyebrow">Career signal</p>
                  <h2>{focused?.title}</h2>
                </div>
                <button type="button" onClick={() => onNavigate('recommendations')}>
                  All matches
                  <Icon name="arrow" size={15} />
                </button>
              </div>
              <div className="signal-content">
                <ScoreRing score={focused?.score || 0} size="large" />
                <div>
                  <p>{focused?.description}</p>
                  <div className="signal-reasons">
                    {focused?.skillMatches.slice(0, 3).map((skill) => (
                      <span key={skill}>
                        <Icon name="check" size={12} />
                        {skill}
                      </span>
                    ))}
                    {focused?.workStyleMatch ? (
                      <span>
                        <Icon name="check" size={12} />
                        work style
                      </span>
                    ) : null}
                    {!focused?.skillMatches.length ? (
                      <span>
                        <Icon name="info" size={12} />
                        Explore your role signals
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
              <button className="card-footer-action" type="button" onClick={() => onNavigate('gaps')}>
                View skill intelligence
                <Icon name="arrow" size={15} />
              </button>
            </section>
            <section className="dashboard-card skills-card">
              <div className="card-title">
                <div>
                  <p className="eyebrow">Skill match</p>
                  <h2>Your current signals</h2>
                </div>
                <button type="button" onClick={() => onNavigate('gaps')}>
                  Details
                  <Icon name="arrow" size={15} />
                </button>
              </div>
              <Progress value={focused ? Math.round((focused.skillMatches.length / focused.skills.length) * 100) : 0} label="Role alignment" />
              <div className="skills-summary">
                <div>
                  <strong>{focused?.skillMatches.length || 0}</strong>
                  <span>matched skills</span>
                </div>
                <div>
                  <strong>{focused?.missingSkills.length || 0}</strong>
                  <span>skills to build</span>
                </div>
              </div>
              <div className="mini-skill-list">
                {focused?.missingSkills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </section>
            <section className="dashboard-card roadmap-card">
              <div className="card-title">
                <div>
                  <p className="eyebrow">Up next</p>
                  <h2>{nextTask ? nextTask.title : 'Roadmap complete'}</h2>
                </div>
                <span className="task-status">
                  {percent}
                  %
                </span>
              </div>
              <p className="task-detail">{nextTask ? nextTask.detail : 'You completed this plan. Revisit your profile to set a new focused direction.'}</p>
              <div className="roadmap-mini">
                <span>
                  <i style={{ width: `${percent}%` }} />
                </span>
                <p>
                  {doneCount} of {tasks.length} actions complete
                </p>
              </div>
              <button className="primary-button compact" type="button" onClick={() => onNavigate('roadmap')}>
                {nextTask ? 'Open roadmap' : 'Review roadmap'}
                <Icon name="arrow" size={15} />
              </button>
            </section>
          </div>
        </>
      ) : (
        <EmptyState icon="sparkles" title="Build your career starting point" copy="Add your skills, interests, education, and work style. We will use transparent local rules to organize your next steps." action="Start assessment" onAction={() => onNavigate('assessment')} />
      )}
    </section>
  )
}

function Workspace({ profile, recommendations, progress, setProgress, active, onNavigate, onSaveProfile, onHome, saveState }) {
  const focused = recommendations.find((rec) => rec.id === profile?.target) || recommendations[0]
  const tasks = profile ? getRoadmap(focused) : []
  const navItems = [
    { id: 'overview', icon: 'chart', label: 'Overview' },
    { id: 'assessment', icon: 'user', label: 'My profile' },
    { id: 'recommendations', icon: 'target', label: 'Career matches' },
    { id: 'gaps', icon: 'trend', label: 'Skill intelligence' },
    { id: 'roadmap', icon: 'calendar', label: '30-day roadmap' },
  ]

  const toggleTask = (id) => {
    setProgress((current) => ({ ...current, [id]: !current[id] }))
  }

  const handleFocus = (id) => {
    onSaveProfile({ ...profile, target: id })
    onNavigate('gaps')
  }

  let page
  if (active === 'assessment') {
    page = <Assessment profile={profile} onSave={onSaveProfile} saveState={saveState} />
  } else if (active === 'recommendations') {
    page = <Recommendations recommendations={recommendations} onFocus={handleFocus} onAssessment={() => onNavigate('assessment')} />
  } else if (active === 'gaps') {
    page = <Gaps role={focused} onAssessment={() => onNavigate('assessment')} />
  } else if (active === 'roadmap') {
    page = <Roadmap tasks={tasks} progress={progress} onToggle={toggleTask} onAssessment={() => onNavigate('assessment')} />
  } else {
    page = <Overview profile={profile} recommendations={recommendations} tasks={tasks} progress={progress} onNavigate={onNavigate} />
  }

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Brand onClick={onHome} inverse />
        <nav aria-label="Workspace navigation">
          {navItems.map((item) => (
            <button key={item.id} type="button" className={active === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}>
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-status">
          <span>
            <Icon name="info" size={15} />
          </span>
          <p>
            <strong>Private local workspace</strong>
            Your assessment and task progress stay in this browser.
          </p>
        </div>
      </aside>
      <div className="app-content">
        <header className="app-header">
          <button className="home-link" type="button" onClick={onHome}>
            <Icon name="arrowLeft" size={16} />
            Home
          </button>
          <div className="app-header-note">
            <span />
            Local sample experience
          </div>
          <button className="profile-pill" type="button" onClick={() => onNavigate('assessment')}>
            <span>{profile?.name ? profile.name.slice(0, 1).toUpperCase() : <Icon name="user" size={14} />}</span>
            {profile?.name || 'My profile'}
          </button>
        </header>
        <nav className="mobile-app-nav" aria-label="Application navigation">
          {navItems.map((item) => (
            <button key={item.id} type="button" className={active === item.id ? 'active' : ''} onClick={() => onNavigate(item.id)}>
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        {page}
      </div>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState('landing')
  const [active, setActive] = useState('overview')
  const [profile, setProfile] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.profile))
    } catch {
      return null
    }
  })
  const [roadmap, setRoadmap] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.roadmap)) || {}
    } catch {
      return {}
    }
  })

  const recommendations = getRecommendations(profile)

  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile))
    }
  }, [profile])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.roadmap, JSON.stringify(roadmap))
  }, [roadmap])

  const [saveState, setSaveState] = useState('idle')

  const navigate = (next) => {
    setActive(next)
    setView('app')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000'

  const saveProfile = async (nextProfile) => {
  setProfile(nextProfile)
  setActive('recommendations')
  setSaveState('saving')

  try {
    const response = await fetch(`${API_BASE_URL}/api/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nextProfile.name || 'Riya',
        education: nextProfile.education || '',
        skills: Array.isArray(nextProfile.skills) ? nextProfile.skills : [],
        interests: Array.isArray(nextProfile.interests) ? nextProfile.interests : [],
      }),
    })

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`)
    }

    setSaveState('saved')
  } catch {
    setSaveState('error')
  }
}

  const goHome = () => {
    setView('landing')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (view === 'landing') {
    return <Landing onOpenApp={navigate} />
  }

  return (
    <Workspace
      profile={profile}
      recommendations={recommendations}
      progress={roadmap}
      setProgress={setRoadmap}
      active={active}
      onNavigate={navigate}
      onSaveProfile={saveProfile}
      onHome={goHome}
      saveState={saveState}
    />
  )
}
