import { useEffect, useRef, useState } from 'react'
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
            <p className="save-status error">The server returned an error. Your profile was saved locally on this device only and has not been synced to the backend.</p>
          ) : null}
          {saveState === 'connection_error' ? (
            <p className="save-status error">Unable to connect to the backend server. Your profile was saved locally on this device only and has not been synced to the backend.</p>
          ) : null}
        </div>
      </form>
    </section>
  )
}

function Recommendations({ recommendations, onFocus, onAssessment, comparedCareers, toggleComparison }) {
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
        <>
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
              <button
                type="button"
                onClick={() => toggleComparison(rec.id)}
                aria-pressed={comparedCareers.includes(rec.id)}
                aria-label={comparedCareers.includes(rec.id) ? 'Remove from comparison' : 'Add to comparison'}
                style={{
                  padding: 0,
                  border: 0,
                  background: 'transparent',
                  color: comparedCareers.includes(rec.id) ? 'var(--blue)' : 'var(--muted)',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                {comparedCareers.includes(rec.id) ? 'Compared' : 'Compare'}
              </button>
            </article>
          ))}
        </div>
        {comparedCareers.length > 0 && (
          <section className="app-page" style={{ marginTop: 28 }}>
            <div className="page-heading split-heading">
              <div>
                <p className="eyebrow">Career comparison</p>
                <h1>Compare selected careers.</h1>
                <p>Select up to three careers to compare side by side.</p>
              </div>
              <button
                type="button"
                onClick={() => setComparedCareers([])}
                style={{
                  padding: '7px 12px',
                  border: '1px solid var(--rose)',
                  borderRadius: 8,
                  background: 'transparent',
                  color: 'var(--rose)',
                  fontSize: '11px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Clear comparison
              </button>
            </div>
            <CareerComparison careers={recommendations.filter((rec) => comparedCareers.includes(rec.id))} />
          </section>
        )}
        </>
      ) : (
        <EmptyState icon="target" title="Your career matches will appear here" copy="Complete your profile assessment to compare your skills and interests with our sample role profiles." action="Complete assessment" onAction={onAssessment} />
      )}
    </section>
  )
}


function skillPriorityLabel(index) {
  if (index === 0) return { label: 'High', color: 'var(--rose)' }
  if (index <= 2) return { label: 'Medium', color: 'var(--amber)' }
  return { label: 'Low', color: 'var(--green)' }
}

function SmartSkillGapAnalyzer({ profile, recommendations }) {
  if (!profile || !recommendations || recommendations.length === 0) {
    return (
      <section className="app-page">
        <div className="page-heading split-heading">
          <div>
            <p className="eyebrow">Smart Skill Gap Analyzer</p>
            <h1>Analyze skill gaps for any career.</h1>
            <p>Complete your profile to see matched and missing skills for your target careers.</p>
          </div>
        </div>
        <div className="empty-state" style={{ textAlign: 'center', padding: '40px 20px', margin: '20px auto' }}>
          <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
            No profile or career data available. Complete the My Profile assessment to get started.
          </p>
        </div>
      </section>
    )
  }

  const [selectedId, setSelectedId] = useState(recommendations[0].id)
  const selected = recommendations.find((r) => r.id === selectedId) || recommendations[0]
  const matchedSkills = selected.skillMatches || []
  const missingSkills = selected.missingSkills || []
  const totalRequired = selected.skills?.length || 0
  const coverage = totalRequired ? Math.round((matchedSkills.length / totalRequired) * 100) : 0

  return (
    <section className="app-page">
      <div className="page-heading split-heading">
        <div>
          <p className="eyebrow">Smart Skill Gap Analyzer</p>
          <h1>Skill gaps for {selected.title}</h1>
          <p>See which required skills you already have and which ones to build next.</p>
        </div>
        <select
          value={selectedId}
          onChange={(event) => setSelectedId(event.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid var(--line)',
            borderRadius: 8,
            background: '#0f1729',
            color: 'var(--ink)',
            fontSize: '13px',
            cursor: 'pointer',
            marginLeft: 'auto',
          }}
        >
          {recommendations.map((rec) => (
            <option key={rec.id} value={rec.id}>
              {rec.title} — {rec.score}% match
            </option>
          ))}
        </select>
      </div>

      <div className="overview-metrics" style={{ marginTop: 24 }}>
        <article style={{ minWidth: 0 }}>
          <span className="metric-icon blue">
            <span style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--blue)' }}>
              <Icon name="target" size={16} />
            </span>
          </span>
          <div style={{ minWidth: 0, display: 'grid', gap: 4, flex: 1 }}>
            <small>Target career</small>
            <strong style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selected.title}</strong>
          </div>
        </article>
        <article style={{ minWidth: 0 }}>
          <span className="metric-icon green">
            <span style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--green)' }}>
              <Icon name="check" size={16} />
            </span>
          </span>
          <div style={{ minWidth: 0, display: 'grid', gap: 4, flex: 1 }}>
            <small>Skills matched</small>
            <strong>{matchedSkills.length}</strong>
          </div>
        </article>
        <article style={{ minWidth: 0 }}>
          <span className="metric-icon amber">
            <span style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: 'var(--amber)' }}>
              <Icon name="trend" size={16} />
            </span>
          </span>
          <div style={{ minWidth: 0, display: 'grid', gap: 4, flex: 1 }}>
            <small>Skills missing</small>
            <strong>{missingSkills.length}</strong>
          </div>
        </article>
        <article style={{ minWidth: 0 }}>
          <span className="metric-icon violet">
            <span style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', color: '#a78bfa' }}>
              <Icon name="chart" size={16} />
            </span>
          </span>
          <div style={{ minWidth: 0, display: 'grid', gap: 4, flex: 1 }}>
            <small>Skill coverage</small>
            <strong>{coverage}%</strong>
          </div>
        </article>
      </div>

      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <section className="dashboard-card" style={{ minWidth: 0 }}>
          <div className="panel-head">
            <div>
              <h2 style={{ color: 'var(--ink)', font: '700 14px var(--display)', margin: 0 }}>Matched skills</h2>
              <p style={{ color: 'var(--muted-soft)', fontSize: '10px', marginTop: 2 }}>Skills you already have for this career</p>
            </div>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', flexWrap: 'wrap', gap: 8, minWidth: 0 }}>
            {matchedSkills.length ? (
              matchedSkills.map((s) => (
                <span
                  key={s}
                  style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    color: 'var(--green)',
                    border: '1px solid var(--green-soft)',
                    borderRadius: 6,
                    background: 'var(--green-soft)',
                    fontSize: '11px',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {s}
                </span>
              ))
            ) : (
              <p style={{ color: 'var(--muted-soft)', fontSize: '12px', fontStyle: 'italic' }}>No matched skills yet.</p>
            )}
          </div>
        </section>

        <section className="dashboard-card" style={{ minWidth: 0 }}>
          <div className="panel-head">
            <div>
              <h2 style={{ color: 'var(--ink)', font: '700 14px var(--display)', margin: 0 }}>Missing skills</h2>
              <p style={{ color: 'var(--muted-soft)', fontSize: '10px', marginTop: 2 }}>Skills to develop for this career</p>
            </div>
          </div>
          <div style={{ padding: '16px 20px', minWidth: 0 }}>
            {missingSkills.length ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
                {missingSkills.map((skill, index) => {
                  const priority = skillPriorityLabel(index)
                  return (
                    <div
                      key={skill}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '8px',
                        border: '1px solid var(--line)',
                        borderRadius: 8,
                        background: 'var(--card)',
                        minWidth: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          color: priority.color,
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          padding: '2px 8px',
                          borderRadius: 11,
                          border: `1px solid ${priority.color}40`,
                          background: `${priority.color}15`,
                          flexShrink: 0,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {priority.label} priority
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--ink)', minWidth: 0, flex: 1 }}>{skill}</span>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p style={{ color: 'var(--muted-soft)', fontSize: '12px', fontStyle: 'italic' }}>No missing skills — you meet all requirements.</p>
            )}
          </div>
        </section>
      </div>

      <section className="dashboard-card" style={{ marginTop: 24, minWidth: 0 }}>
        <div className="panel-head">
          <div>
            <h2 style={{ color: 'var(--ink)', font: '700 14px var(--display)', margin: 0 }}>Learning priorities</h2>
            <p style={{ color: 'var(--muted-soft)', fontSize: '10px', marginTop: 2 }}>Suggested next steps for each missing skill</p>
          </div>
        </div>
        <div style={{ padding: '16px 20px', minWidth: 0 }}>
          {missingSkills.length ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
              {missingSkills.map((skill, index) => {
                const priority = skillPriorityLabel(index)
                const suggestions = {
                  High: `Start with the fundamentals of ${skill}. Complete one beginner exercise and document your notes.`,
                  Medium: `Practise ${skill} through a small guided project or tutorial.`,
                  Low: `Explore ${skill} at your own pace after higher-priority skills are complete.`,
                }
                return (
                  <div
                    key={skill}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      padding: '10px',
                      border: '1px solid var(--line)',
                      borderRadius: 8,
                      background: 'var(--card-lift)',
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        color: priority.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        padding: '2px 8px',
                        borderRadius: 11,
                        border: `1px solid ${priority.color}40`,
                        background: `${priority.color}15`,
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                        marginTop: 1,
                      }}
                    >
                      {priority.label}
                    </span>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <strong style={{ color: 'var(--ink)', fontSize: '12px', display: 'block', marginBottom: 3 }}>{skill}</strong>
                      <p style={{ margin: 0, fontSize: '11px', color: 'var(--muted)', lineHeight: 1.5 }}>{suggestions[priority.label]}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p style={{ color: 'var(--muted-soft)', fontSize: '12px', fontStyle: 'italic' }}>All required skills are matched. Keep building your portfolio.</p>
          )}
        </div>
      </section>

      <p style={{ marginTop: 16, fontSize: '10px', color: 'var(--muted-soft)', lineHeight: 1.45 }}>
        Coverage = (matched required skills ÷ total required skills) × 100. Match data is rule-based and local — not guaranteed job outcomes.
      </p>
    </section>
  )
}

function difficultyLabel(score) {
  if (score >= 60) return { label: 'Beginner-friendly', color: 'var(--green)' }
  if (score >= 30) return { label: 'Moderate effort', color: 'var(--amber)' }
  return { label: 'Advanced', color: 'var(--rose)' }
}

function CareerComparison({ careers }) {
  if (!careers || careers.length === 0) return null

  return (
    <section className="dashboard-card" style={{ marginTop: 16 }}>
      <p className="eyebrow">Side-by-side comparison</p>
      <div style={{ overflowX: 'auto', marginBottom: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: '12px' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--line-strong)' }}>
              <th style={{ padding: '10px 12px', color: 'var(--muted-soft)', fontWeight: 800, textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.5px', borderBottom: '1px solid var(--line)' }}>
                Career
              </th>
              {careers.map((rec) => (
                <th
                  key={rec.id}
                  style={{
                    padding: '10px 12px',
                    color: 'var(--ink)',
                    fontWeight: 800,
                    width: '200px',
                    minWidth: 180,
                    borderBottom: '1px solid var(--line)',
                    borderLeft: '1px solid var(--line)',
                    background: 'var(--card)',
                  }}
                >
                  {rec.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '10px 12px', color: 'var(--muted-soft)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', verticalAlign: 'top' }}>
                Match score
              </td>
              {careers.map((rec) => {
                const diff = difficultyLabel(rec.score)
                return (
                  <td
                    key={rec.id}
                    style={{
                      padding: '10px 12px',
                      verticalAlign: 'top',
                      borderLeft: '1px solid var(--line)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                      <strong style={{ fontSize: '18px', color: diff.color }}>{rec.score}%</strong>
                      <span style={{ fontSize: '10px', color: diff.color, fontWeight: 700 }}>{diff.label}</span>
                    </div>
                    <div style={{ height: 6, background: '#1e2d4d', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${rec.score}%`, background: diff.color }} />
                    </div>
                  </td>
                )
              })}
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '10px 12px', color: 'var(--muted-soft)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', verticalAlign: 'top' }}>
                Matched skills
              </td>
              {careers.map((rec) => {
                const matched = rec.skillMatches || []
                return (
                  <td key={rec.id} style={{ padding: '10px 12px', verticalAlign: 'top', borderLeft: '1px solid var(--line)' }}>
                    {matched.length ? (
                      matched.map((s) => (
                        <span
                          key={s}
                          style={{
                            display: 'inline-block',
                            padding: '3px 7px',
                            borderRadius: 11,
                            fontSize: '10px',
                            fontWeight: 700,
                            margin: '0 4px 4px 0',
                            color: 'var(--green)',
                            border: '1px solid var(--green-soft)',
                            background: 'var(--green-soft)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {s}
                        </span>
                      ))
                    ) : (
                      <span style={{ fontSize: '11px', color: 'var(--muted-soft)', fontStyle: 'italic' }}>None</span>
                    )}
                  </td>
                )
              })}
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '10px 12px', color: 'var(--muted-soft)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', verticalAlign: 'top' }}>
                Skills to build
              </td>
              {careers.map((rec) => {
                const missing = rec.missingSkills || []
                return (
                  <td key={rec.id} style={{ padding: '10px 12px', verticalAlign: 'top', borderLeft: '1px solid var(--line)' }}>
                    {missing.length ? (
                      missing.map((s) => (
                        <span
                          key={s}
                          style={{
                            display: 'inline-block',
                            padding: '3px 7px',
                            borderRadius: 11,
                            fontSize: '10px',
                            fontWeight: 700,
                            margin: '0 4px 4px 0',
                            color: 'var(--rose)',
                            border: '1px solid var(--rose-soft)',
                            background: 'var(--rose-soft)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {s}
                        </span>
                      ))
                    ) : (
                      <span style={{ fontSize: '11px', color: 'var(--muted-soft)', fontStyle: 'italic' }}>None</span>
                    )}
                  </td>
                )
              })}
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line)' }}>
              <td style={{ padding: '10px 12px', color: 'var(--muted-soft)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', verticalAlign: 'top' }}>
                Description
              </td>
              {careers.map((rec) => (
                <td key={rec.id} style={{ padding: '10px 12px', verticalAlign: 'top', borderLeft: '1px solid var(--line)', color: 'var(--ink)', lineHeight: 1.5, minWidth: 0 }}>
                  {rec.description}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: '10px 12px', color: 'var(--muted-soft)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px', verticalAlign: 'top' }}>
                Learning steps
              </td>
              {careers.map((rec) => {
                const learning = rec.learning || []
                return (
                  <td key={rec.id} style={{ padding: '10px 12px', verticalAlign: 'top', borderLeft: '1px solid var(--line)' }}>
                    {learning.length ? (
                      learning.map((s, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 6,
                            marginBottom: 6,
                            minWidth: 0,
                          }}
                        >
                          <span style={{ fontSize: '10px', color: 'var(--blue)', fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                          <span style={{ fontSize: '11px', color: 'var(--ink)', lineHeight: 1.45, minWidth: 0 }}>{s}</span>
                        </div>
                      ))
                    ) : (
                      <span style={{ fontSize: '11px', color: 'var(--muted-soft)', fontStyle: 'italic' }}>None listed</span>
                    )}
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: '10px', color: 'var(--muted-soft)', lineHeight: 1.45 }}>
        Match percentages are local estimates based on your profile data and rule-based matching — not guaranteed job outcomes.
      </p>
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

function CareerMatchChart({ recommendations }) {
  if (!recommendations || !recommendations.length) return null;
  const [sortBy, setSortBy] = useState('match');
  const [filterCat, setFilterCat] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const categories = [...new Set(recommendations.map((r) => r.category))].filter(Boolean);
  const sorted = [...recommendations].sort((a, b) => {
    if (sortBy === 'alpha') return a.title.localeCompare(b.title);
    return b.score - a.score || a.title.localeCompare(b.title);
  });
  const filtered = filterCat === 'all'
    ? sorted
    : sorted.filter((r) => r.category === filterCat);

  const scoreColor = (score) => (score >= 60 ? 'var(--green)' : score >= 30 ? 'var(--amber)' : 'var(--rose)');

  const chip = (text, matched) => (
    <span
      key={text}
      style={{
        display: 'inline-block',
        padding: '2px 7px',
        borderRadius: 11,
        fontSize: '10px',
        fontWeight: 700,
        marginRight: 6,
        color: matched ? 'var(--green)' : 'var(--rose)',
        border: `1px solid ${matched ? 'var(--green-soft)' : 'var(--rose-soft)'}`,
        background: matched ? 'var(--green-soft)' : 'var(--rose-soft)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: 140,
      }}
    >
      {text}
    </span>
  );

  return (
    <section className="dashboard-card">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 12,
          marginBottom: 20,
        }}
      >
        <div className="dashboard-card">
          <p className="eyebrow">Top career match</p>
          <h2 style={{ margin: '8px 0' }}>
            {sorted[0]?.title || 'Explore careers'}
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 13 }}>
            Your highest-scoring career based on your profile.
          </p>
        </div>

        <div className="dashboard-card">
          <p className="eyebrow">Match score</p>
          <h2 style={{ margin: '8px 0', color: 'var(--blue)' }}>
            {sorted[0]?.score ?? 0}%
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 13 }}>
            Based on your current skills and interests.
          </p>
        </div>

        <div className="dashboard-card">
          <p className="eyebrow">Careers compared</p>
          <h2 style={{ margin: '8px 0' }}>{recommendations.length}</h2>
          <p style={{ color: 'var(--muted)', fontSize: 13 }}>
            Career paths evaluated for your profile.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
        <p className="eyebrow">Career match scores</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setSortBy('match')}
            style={{
              padding: '4px 9px',
              border: `1px solid ${sortBy === 'match' ? 'var(--blue)' : 'var(--line)'}`,
              borderRadius: 8,
              background: sortBy === 'match' ? 'var(--blue-soft)' : 'transparent',
              color: sortBy === 'match' ? 'var(--blue)' : 'var(--muted)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Match
          </button>
          <button
            type="button"
            onClick={() => setSortBy('alpha')}
            style={{
              padding: '4px 9px',
              border: `1px solid ${sortBy === 'alpha' ? 'var(--blue)' : 'var(--line)'}`,
              borderRadius: 8,
              background: sortBy === 'alpha' ? 'var(--blue-soft)' : 'transparent',
              color: sortBy === 'alpha' ? 'var(--blue)' : 'var(--muted)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            A-Z
          </button>
          <button
            type="button"
            onClick={() => setFilterCat('all')}
            style={{
              padding: '4px 9px',
              border: `1px solid ${filterCat === 'all' ? 'var(--blue)' : 'var(--line)'}`,
              borderRadius: 8,
              background: filterCat === 'all' ? 'var(--blue-soft)' : 'transparent',
              color: filterCat === 'all' ? 'var(--blue)' : 'var(--muted)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCat(cat)}
              style={{
                padding: '4px 9px',
                border: `1px solid ${filterCat === cat ? 'var(--blue)' : 'var(--line)'}`,
                borderRadius: 8,
                background: filterCat === cat ? 'var(--blue-soft)' : 'transparent',
                color: filterCat === cat ? 'var(--blue)' : 'var(--muted)',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '0 0 4px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {filtered.map((rec) => {
          const isExpanded = expandedId === rec.id;
          const matchedSkills = rec.skillMatches || [];
          const missingSkills = rec.missingSkills || [];
          return (
            <div
              key={rec.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : rec.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10,
                  padding: '9px 10px',
                  border: `1px solid ${isExpanded ? 'var(--blue)' : 'var(--line)'}`,
                  borderRadius: 8,
                  background: isExpanded ? 'var(--blue-soft)' : 'transparent',
                  color: 'var(--ink)',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all .2s ease',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--muted)',
                      minWidth: 150,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {rec.title}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: scoreColor(rec.score),
                      minWidth: 30,
                      display: 'inline-block',
                      fontWeight: 800,
                    }}
                  >
                    {rec.score}%
                  </span>
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    color: isExpanded ? 'var(--blue)' : 'var(--muted-soft)',
                    transform: `rotate(${isExpanded ? 180 : 0}deg)`,
                    transition: 'transform .2s ease',
                    display: 'inline-block',
                  }}
                >
                  ▾
                </span>
              </button>
              {isExpanded && (
                <div
                  style={{
                    padding: '8px 10px 10px',
                    borderLeft: `1px solid var(--line)`,
                    borderRight: `1px solid var(--line)`,
                    borderBottom: `1px solid var(--line)`,
                    borderRadius: `0 0 8px 8px`,
                    background: 'var(--card-lift)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'space-between' }}>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <span style={{ fontSize: '10px', color: 'var(--muted-soft)', display: 'block', marginBottom: 4 }}>Matched skills</span>
                      {matchedSkills.length ? (
                        matchedSkills.map((s) => chip(s, true))
                      ) : (
                        <span style={{ fontSize: '11px', color: 'var(--muted-soft)', fontStyle: 'italic' }}>None</span>
                      )}
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <span style={{ fontSize: '10px', color: 'var(--muted-soft)', display: 'block', marginBottom: 4 }}>Skills to build</span>
                      {missingSkills.length ? (
                        missingSkills.map((s) => chip(s, false))
                      ) : (
                        <span style={{ fontSize: '11px', color: 'var(--muted-soft)', fontStyle: 'italic' }}>None</span>
                      )}
                    </div>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize: '10px', color: 'var(--muted-soft)', display: 'block', marginBottom: 4 }}>Required skills</span>
                    {rec.skills.map((s) => chip(s, matchedSkills.includes(s)))}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize: '10px', color: 'var(--muted-soft)', display: 'block', marginBottom: 4 }}>Beginner learning suggestions</span>
                    {(rec.learning || []).map((s) => (
                      <span
                        key={s}
                        style={{
                          display: 'inline-block',
                          padding: '2px 7px',
                          borderRadius: 11,
                          fontSize: '10px',
                          fontWeight: 700,
                          marginRight: 6,
                          color: 'var(--blue)',
                          border: '1px solid var(--blue-soft)',
                          background: 'var(--blue-soft)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: 140,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p style={{ margin: 0, fontSize: '10px', color: 'var(--muted-soft)', lineHeight: 1.45 }}>
                    Scores are local estimates based on your profile data, not guaranteed job outcomes.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SkillCoverageBar({ matched, missing }) {
  const total = Math.max(matched + missing, 1);
  return (
    <section className="dashboard-card">
      <p className="eyebrow">Skill coverage</p>
      <div style={{ padding: '14px 0 4px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', minWidth: 150 }}>Matched skills</span>
          <div style={{ flex: 1, minWidth: 0, height: 8, background: '#1e2d4d', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(matched / total) * 100}%`, background: 'var(--green)' }} />
          </div>
          <strong style={{ fontSize: '11px', color: 'var(--ink)', minWidth: 30, display: 'inline-block' }}>{matched}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '11px', color: 'var(--muted)', minWidth: 150 }}>Skills to build</span>
          <div style={{ flex: 1, minWidth: 0, height: 8, background: '#1e2d4d', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(missing / total) * 100}%`, background: 'var(--amber)' }} />
          </div>
          <strong style={{ fontSize: '11px', color: 'var(--ink)', minWidth: 30, display: 'inline-block' }}>{missing}</strong>
        </div>
      </div>
    </section>
  );
}

function difficultyFor(score) {
  if (score >= 60) return { label: 'Beginner-friendly', color: 'var(--green)' };
  if (score >= 30) return { label: 'Moderate effort', color: 'var(--amber)' };
  return { label: 'Advanced', color: 'var(--rose)' };
}

function BestCareerMatches({ recommendations, onNavigate }) {
  if (!recommendations || !recommendations.length) return null;
  const top = recommendations.slice(0, 3);
  return (
    <section className="dashboard-card">
      <p className="eyebrow">Best matches for you</p>
      <p style={{ marginBottom: 12, fontSize: '10px', color: 'var(--muted-soft)' }}>
        Top careers based on your skills, interests, work style, and target role.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {top.map((rec, index) => {
          const diff = difficultyFor(rec.score);
          const matchedSkills = rec.skillMatches || [];
          const missingSkills = rec.missingSkills || [];
          return (
            <div
              key={rec.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px',
                border: '1px solid var(--line)',
                borderRadius: 12,
                background: index === 0 ? 'var(--blue-soft)' : 'var(--card-lift)',
              }}
            >
              <span
                style={{
                  width: 26,
                  height: 26,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 8,
                  background: index === 0 ? 'var(--blue)' : '#1e2d4d',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                #{index + 1}
              </span>
              <div style={{ minWidth: 0, flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'var(--ink)',
                      fontWeight: 800,
                      minWidth: 0,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {rec.title}
                  </span>
                  <strong
                    style={{
                      fontSize: '12px',
                      color: diff.color,
                      fontWeight: 800,
                    }}
                  >
                    {rec.score}% match
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: '10.5px', color: 'var(--muted)', lineHeight: 1.45, minWidth: 0 }}>
                  {rec.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '10px', color: 'var(--muted-soft)', fontWeight: 700 }}>Difficulty:</span>
                  <span
                    style={{
                      fontSize: '10px',
                      color: diff.color,
                      fontWeight: 800,
                      padding: '2px 7px',
                      borderRadius: 11,
                      border: `1px solid ${diff.color}`,
                      background: `${diff.color}1a`,
                    }}
                  >
                    {diff.label}
                  </span>
                  {matchedSkills.length && (
                    <>
                      <span style={{ fontSize: '10px', color: 'var(--muted-soft)', fontWeight: 700 }}>{matchedSkills.length} matched</span>
                      {matchedSkills.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          style={{
                            display: 'inline-block',
                            padding: '2px 7px',
                            borderRadius: 11,
                            fontSize: '9.5px',
                            fontWeight: 700,
                            marginRight: 6,
                            color: 'var(--green)',
                            border: '1px solid var(--green-soft)',
                            background: 'var(--green-soft)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: 110,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                      {matchedSkills.length > 4 && <span style={{ fontSize: '9.5px', color: 'var(--muted-soft)' }}>{matchedSkills.length - 4} more</span>}
                    </>
                  )}
                  {missingSkills.length && (
                    <>
                      <span style={{ fontSize: '10px', color: 'var(--muted-soft)', fontWeight: 700 }}>{missingSkills.length} to build</span>
                      {missingSkills.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          style={{
                            display: 'inline-block',
                            padding: '2px 7px',
                            borderRadius: 11,
                            fontSize: '9.5px',
                            fontWeight: 700,
                            marginRight: 6,
                            color: 'var(--rose)',
                            border: '1px solid var(--rose-soft)',
                            background: 'var(--rose-soft)',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: 110,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                      {missingSkills.length > 3 && <span style={{ fontSize: '9.5px', color: 'var(--muted-soft)' }}>{missingSkills.length - 3} more</span>}
                    </>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                <button
                  type="button"
                  onClick={() => onNavigate('gaps')}
                  style={{
                    padding: '7px 11px',
                    border: '1px solid var(--line-strong)',
                    borderRadius: 8,
                    background: 'transparent',
                    color: 'var(--ink)',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Explore
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('roadmap')}
                  style={{
                    padding: '7px 11px',
                    border: `1px solid var(--blue)`,
                    borderRadius: 8,
                    background: 'var(--blue)',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Open roadmap
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ marginTop: 10, fontSize: '10px', color: 'var(--muted-soft)', lineHeight: 1.4 }}>
        Match percentages are local estimates based on your profile data and rule-based matching — not guaranteed job outcomes or real AI predictions.
      </p>
    </section>
  );
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

          <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr' }}>
            {recommendations && recommendations.length ? <CareerMatchChart recommendations={recommendations} /> : null}
            {profile && (
              <SkillCoverageBar
                matched={focused?.skillMatches.length || 0}
                missing={focused?.missingSkills.length || 0}
              />
            )}
          </div>

          {recommendations && recommendations.length ? (
            <BestCareerMatches recommendations={recommendations} onNavigate={onNavigate} />
          ) : null}

          {profile && recommendations && recommendations.length ? (
            <SmartSkillGapAnalyzer profile={profile} recommendations={recommendations} />
          ) : null}

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

  const [comparedCareers, setComparedCareers] = useState([])

  const toggleComparison = (id) => {
    setComparedCareers((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id)
      }
      if (current.length >= 3) {
        return current
      }
      return [...current, id]
    })
  }

  const handleFocus = (id) => {
    onSaveProfile({ ...profile, target: id })
    onNavigate('gaps')
  }

  let page
  if (active === 'assessment') {
    page = <Assessment profile={profile} onSave={onSaveProfile} saveState={saveState} />
  } else if (active === 'recommendations') {
    page = (
      <Recommendations
        recommendations={recommendations}
        onFocus={handleFocus}
        onAssessment={() => onNavigate('assessment')}
        comparedCareers={comparedCareers}
        toggleComparison={toggleComparison}
      />
    )
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

  const backendLoaded = useRef(false)

  const loadProfile = async () => {
    if (backendLoaded.current) return
    backendLoaded.current = true
    if (profile) return
    try {
      const response = await fetch(`${API_BASE_URL}/api/profiles`)
      if (!response.ok) return
      const profiles = await response.json()
      if (!Array.isArray(profiles) || !profiles.length) return
      const latest = profiles[0]
      const loaded = {
        name: latest.name,
        education: latest.education || '',
        skills: typeof latest.skills === 'string' ? latest.skills.split(',').filter(Boolean) : Array.isArray(latest.skills) ? latest.skills : [],
        interests: typeof latest.interests === 'string' ? latest.interests.split(',').filter(Boolean) : Array.isArray(latest.interests) ? latest.interests : [],
        workStyle: typeof latest.workStyle === 'string' ? latest.workStyle.split(',').filter(Boolean) : Array.isArray(latest.workStyle) ? latest.workStyle : [],
        target: latest.target || '',
      }
      setProfile(loaded)
      localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(loaded))
    } catch {
      // Backend unavailable; continue with localStorage profile (may be null).
    }
  }

  useEffect(() => {
    loadProfile()
  }, [])

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
        name: nextProfile.name || '',
        education: nextProfile.education || '',
        skills: Array.isArray(nextProfile.skills) ? nextProfile.skills : [],
        interests: Array.isArray(nextProfile.interests) ? nextProfile.interests : [],
        workStyle: Array.isArray(nextProfile.workStyle) ? nextProfile.workStyle : (nextProfile.workStyle ? [nextProfile.workStyle] : []),
        target: nextProfile.target || '',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Server returned ${response.status}`)
    }

    const data = await response.json()
    setSaveState('saved')
    return data
  } catch (error) {
    const isConnectionError = error instanceof TypeError || /failed to fetch/i.test(error.message) || /connection/i.test(error.message)
    setSaveState(isConnectionError ? 'connection_error' : 'error')
    return null
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
