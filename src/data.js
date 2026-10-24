export const roleCatalog = [
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    icon: 'code',
    description: 'Build accessible, responsive interfaces that turn product ideas into useful web experiences.',
    interests: ['technology', 'design', 'problem solving'],
    workStyles: ['creative', 'collaborative', 'structured'],
    skills: ['javascript', 'html', 'css', 'react', 'git'],
    learning: ['React component patterns', 'Responsive layouts', 'Git and deployment'],
    roadmap: ['Recreate a responsive interface from a reference', 'Build a small interactive React feature', 'Deploy a project and document its decisions', 'Ask for code feedback and define your next improvement'],
    resources: [
      { label: 'MDN: Learn web development', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
      { label: 'React: Quick Start', url: 'https://react.dev/learn' },
    ],
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    icon: 'chart',
    description: 'Use data to answer business questions and help teams make confident decisions.',
    interests: ['data', 'business', 'problem solving'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['excel', 'sql', 'python', 'data visualization', 'statistics'],
    learning: ['SQL queries', 'Dashboard storytelling', 'Data cleaning with Python'],
    roadmap: ['Choose a public dataset and write three questions to answer', 'Query a small dataset with SQL', 'Build a concise chart or dashboard story', 'Publish a short analysis with findings and caveats'],
    resources: [
      { label: 'Kaggle Learn: Data courses', url: 'https://www.kaggle.com/learn' },
      { label: 'SQLBolt: Interactive SQL', url: 'https://sqlbolt.com/' },
    ],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    icon: 'palette',
    description: 'Research, prototype, and refine digital products around real human needs.',
    interests: ['design', 'people', 'creativity'],
    workStyles: ['creative', 'collaborative', 'analytical'],
    skills: ['figma', 'user research', 'wireframing', 'prototyping', 'ui design'],
    learning: ['Figma fundamentals', 'User interview practice', 'Portfolio case studies'],
    roadmap: ['Audit a familiar app flow and identify three usability questions', 'Sketch and test a low-fidelity flow', 'Create a clickable prototype for one scenario', 'Write a short case study explaining your design decisions'],
    resources: [
      { label: 'Figma: Get started', url: 'https://help.figma.com/hc/en-us/categories/360002051613-Get-started' },
      { label: 'NN/g: UX research articles', url: 'https://www.nngroup.com/articles/' },
    ],
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    icon: 'briefcase',
    description: 'Connect business goals, stakeholders, and evidence to improve how work gets done.',
    interests: ['business', 'people', 'problem solving'],
    workStyles: ['collaborative', 'analytical', 'structured'],
    skills: ['excel', 'communication', 'sql', 'requirements gathering', 'process mapping'],
    learning: ['Requirements documentation', 'Process mapping', 'Stakeholder communication'],
    roadmap: ['Map a real process and identify one bottleneck', 'Write a concise problem statement and requirements list', 'Practice turning a stakeholder question into a data request', 'Present a recommendation with assumptions and trade-offs'],
    resources: [
      { label: 'BA Times: Business analyst resources', url: 'https://www.batimes.com/' },
      { label: 'Atlassian: Process mapping guide', url: 'https://www.atlassian.com/work-management/project-management/process-mapping' },
    ],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    icon: 'brain',
    description: 'Develop and improve intelligent systems using software engineering and machine learning.',
    interests: ['technology', 'data', 'problem solving'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['python', 'machine learning', 'statistics', 'sql', 'git'],
    learning: ['Python for data work', 'Machine learning fundamentals', 'Model evaluation'],
    roadmap: ['Explore a small dataset and define a prediction or classification question', 'Build a baseline model and record its assumptions', 'Compare results with one evaluation metric', 'Write a model card describing limitations and next steps'],
    resources: [
      { label: 'Google: Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
      { label: 'Python: Official tutorial', url: 'https://docs.python.org/3/tutorial/' },
    ],
  },
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    icon: 'code',
    description: 'Build reliable server-side APIs, data models, and services behind real products.',
    interests: ['technology', 'data', 'problem solving'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['node', 'express', 'python', 'sql', 'rest apis'],
    learning: ['Node.js fundamentals', 'REST API design', 'Database modeling'],
    roadmap: ['Design a small API for a feature you want', 'Build a working backend endpoint', 'Add persistence with a database', 'Document the API contract and error handling'],
    resources: [
      { label: 'Node.js: Learn', url: 'https://nodejs.org/en/learn/' },
      { label: 'Express: Getting started', url: 'https://expressjs.com/' },
    ],
  },
  {
    id: 'full-stack-developer',
    title: 'Full-Stack Developer',
    icon: 'route',
    description: 'Connect frontend interfaces and backend services into complete product experiences.',
    interests: ['technology', 'design', 'problem solving'],
    workStyles: ['creative', 'collaborative', 'structured'],
    skills: ['javascript', 'react', 'node', 'sql', 'rest apis'],
    learning: ['React and API integration', 'Full-stack deployment basics', 'Database-backed features'],
    roadmap: ['Sketch the data your feature needs', 'Build the frontend and backend pieces', 'Connect them end to end', 'Ship the feature and write down decisions'],
    resources: [
      { label: 'React: Quick Start', url: 'https://react.dev/learn' },
      { label: 'MDN: Learn web development', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: 'chart',
    description: 'Turn messy data into evidence, models, and defensible decisions.',
    interests: ['data', 'technology', 'problem solving'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['python', 'statistics', 'machine learning', 'sql', 'data visualization'],
    learning: ['Python for data analysis', 'Statistical thinking', 'Machine learning basics'],
    roadmap: ['Pick a question worth answering', 'Clean and explore a small dataset', 'Build a simple baseline', 'Write findings with caveats'],
    resources: [
      { label: 'Google: Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
      { label: 'Kaggle Learn: Data courses', url: 'https://www.kaggle.com/learn' },
    ],
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    icon: 'target',
    description: 'Find the right problems, shape roadmaps, and guide teams toward shipped outcomes.',
    interests: ['business', 'people', 'technology'],
    workStyles: ['collaborative', 'analytical', 'creative'],
    skills: ['communication', 'roadmap planning', 'user research', 'analytics', 'prioritization'],
    learning: ['Product discovery', 'Roadmap writing', 'Metrics and prioritization'],
    roadmap: ['Talk to users and write problem statements', 'Define a roadmap with outcomes', 'Prioritize with evidence', 'Measure and iterate'],
    resources: [
      { label: 'Mind the Product', url: 'https://www.mindtheproduct.com/' },
      { label: 'Intercom: Product management resources', url: 'https://www.intercom.com/resources/product-management' },
    ],
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    icon: 'cloud',
    description: 'Design, deploy, and operate systems that run reliably in the cloud.',
    interests: ['technology', 'data', 'problem solving'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['cloud architecture', 'infrastructure as code', 'docker', 'ci cd', 'networking'],
    learning: ['Cloud fundamentals', 'Infrastructure as code', 'Cloud deployment patterns'],
    roadmap: ['Map a small cloud architecture you would use', 'Build a repeatable deployment script', 'Document cost and reliability tradeoffs', 'Run a post-deploy review'],
    resources: [
      { label: 'AWS Training', url: 'https://aws.amazon.com/training/' },
      { label: 'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/' },
    ],
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    icon: 'shield',
    description: 'Protect systems, find weaknesses, and respond to security risks with clear evidence.',
    interests: ['technology', 'people', 'problem solving'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['network security', 'incident response', 'python', 'risk assessment', 'log analysis'],
    learning: ['Security fundamentals', 'Threat analysis', 'Incident response basics'],
    roadmap: ['Map an asset and its trust boundaries', 'Run a small security review checklist', 'Write a findings report with severity', 'Define one hardening step'],
    resources: [
      { label: 'OWASP: Top Ten', url: 'https://owasp.org/www-project-top-ten/' },
      { label: 'TryHackMe: Cybersecurity rooms', url: 'https://tryhackme.com/' },
    ],
  },
  {
    id: 'digital-marketing-analyst',
    title: 'Digital Marketing Analyst',
    icon: 'megaphone',
    description: 'Turn audience and product data into measurable marketing stories and campaigns.',
    interests: ['business', 'design', 'creativity'],
    workStyles: ['creative', 'collaborative', 'analytical'],
    skills: ['analytics', 'content strategy', 'social media', 'seo', 'conversion testing'],
    learning: ['Marketing analytics', 'Content strategy', 'Experiment design'],
    roadmap: ['Pick a campaign question', 'Define metrics and audience segments', 'Build a simple measurement plan', 'Run a small test and report results'],
    resources: [
      { label: 'Google Analytics Academy', url: 'https://analytics.google.com/' },
      { label: 'HubSpot Academy: Marketing', url: 'https://academy.hubspot.com/' },
    ],
  },
  {
    id: 'power-bi-developer',
    title: 'Power BI Developer',
    icon: 'chart',
    description: 'Build data models and interactive dashboards that turn raw data into decisions.',
    interests: ['data', 'business', 'problem solving'],
    workStyles: ['analytical', 'structured', 'independent'],
    skills: ['power bi', 'sql', 'data modeling', 'excel', 'data visualization'],
    learning: ['Power BI fundamentals', 'Data modeling', 'DAX basics'],
    roadmap: ['Connect a dataset and shape the model', 'Build an executive dashboard', 'Write DAX measures', 'Publish and document the report'],
    resources: [
      { label: 'Microsoft Power BI Learning', url: 'https://learn.microsoft.com/power-bi/' },
      { label: 'SQLBolt: Interactive SQL', url: 'https://sqlbolt.com/' },
    ],
  },
  {
    id: 'qa-tester',
    title: 'QA Tester',
    icon: 'check',
    description: 'Find defects early by testing workflows, edge cases, and release readiness.',
    interests: ['technology', 'problem solving', 'people'],
    workStyles: ['analytical', 'independent', 'structured'],
    skills: ['test planning', 'automation', 'api testing', 'manual testing', 'bug reporting'],
    learning: ['Testing fundamentals', 'Test automation', 'API testing'],
    roadmap: ['Map the critical user workflows', 'Write test cases for edge cases', 'Run a manual test pass', 'Automate one repeatable check'],
    resources: [
      { label: 'ISTQB: Glossary', url: 'https://www.istqb.org/' },
      { label: 'Guru99: Software Testing', url: 'https://www.guru99.com/software-testing.html' },
    ],
  },
  {
    id: 'technical-project-coordinator',
    title: 'Technical Project Coordinator',
    icon: 'calendar',
    description: 'Keep technical work moving by planning milestones, dependencies, and communication.',
    interests: ['business', 'people', 'technology'],
    workStyles: ['collaborative', 'structured', 'analytical'],
    skills: ['project planning', 'communication', 'agile', 'stakeholder management', 'jira'],
    learning: ['Agile fundamentals', 'Project planning', 'Stakeholder communication'],
    roadmap: ['Define the project goal and scope', 'Break work into milestones', 'Set up a communication rhythm', 'Review progress and risks'],
    resources: [
      { label: 'Atlassian: Project management', url: 'https://www.atlassian.com/project-management' },
      { label: 'PMI: Project management resources', url: 'https://www.pmi.org/' },
    ],
  },
]

export const interestOptions = ['Technology', 'Data', 'Design', 'Business', 'People', 'Creativity', 'Problem solving']

export const workStyleOptions = [
  { value: 'analytical', label: 'Analytical', copy: 'I like solving complex problems.' },
  { value: 'creative', label: 'Creative', copy: 'I like shaping ideas and experiences.' },
  { value: 'collaborative', label: 'Collaborative', copy: 'I like working closely with people.' },
  { value: 'structured', label: 'Structured', copy: 'I like clear systems and plans.' },
  { value: 'independent', label: 'Independent', copy: 'I like deep, self-directed work.' },
]

export const educationOptions = ['High school', 'Undergraduate student', 'Graduate student', 'Bootcamp or self-taught', 'Career switcher']

export function normalizeList(value) {
  return value
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
}

export function getRecommendations(profile) {
  if (!profile?.skills?.length || !profile?.interests?.length) return []

  return roleCatalog
    .map((role) => {
      const skillMatches = role.skills.filter((skill) => profile.skills.some((userSkill) => userSkill.includes(skill) || skill.includes(userSkill)))
      const interestMatches = role.interests.filter((interest) => profile.interests.includes(interest))
      const workStyleMatch = Boolean(profile.workStyle && role.workStyles.includes(profile.workStyle))
      const skillAlignment = Math.round((skillMatches.length / role.skills.length) * 100)
      const interestAlignment = Math.round((interestMatches.length / role.interests.length) * 100)
      const targetAlignment = profile.target === role.id ? 10 : 0
      const score = Math.round((skillAlignment * 0.55) + (interestAlignment * 0.25) + (workStyleMatch ? 10 : 0) + targetAlignment)

      return {
        ...role,
        score,
        skillAlignment,
        interestAlignment,
        skillMatches,
        interestMatches,
        workStyleMatch,
        missingSkills: role.skills.filter((skill) => !skillMatches.includes(skill)),
      }
    })
    .sort((a, b) => b.score - a.score)
}


export function getRoadmap(role) {
  const focus = role?.title || 'Career Exploration';
  const skills = role?.learning?.length
    ? role.learning
    : ['Core skills', 'Practical project', 'Communication'];

  const activities = role?.roadmap || [
    'Explore the career',
    'Practice a core skill',
    'Build a small project',
    'Review your progress',
  ];

  const resources = role?.resources || [];
  const taskPrefix = role?.id || 'explore';

  const taskData = [
    // Week 1: Discover and plan (Days 1–7)
    {
      title: `Explore the ${focus} role`,
      detail: 'Review typical responsibilities, entry-level jobs, and expected outcomes.',
    },
    {
      title: 'Assess your current skills',
      detail: 'List your existing skills and identify your strongest three.',
    },
    {
      title: `Explore ${skills[0]}`,
      detail: 'Study the fundamentals and write five key points in your own words.',
      resource: resources[0],
    },
    {
      title: 'Set a learning goal',
      detail: `Define one achievable outcome related to ${focus} for the next 30 days.`,
    },
    {
      title: `Practice ${skills[0]}`,
      detail: 'Complete one beginner exercise and save your work.',
      resource: resources[0],
    },
    {
      title: 'Research job descriptions',
      detail: 'Compare three entry-level job descriptions and note their common requirements.',
    },
    {
      title: 'Review Week 1',
      detail: 'Summarize your learning, challenges, and priorities for next week.',
    },

    // Week 2: Build core skills (Days 8–14)
    {
      title: `Learn ${skills[1] || 'a core skill'}`,
      detail: 'Complete a focused beginner lesson and save your notes.',
      resource: resources[1] || resources[0],
    },
    {
      title: 'Practice with an example',
      detail: 'Apply your new knowledge to one small, realistic exercise.',
    },
    {
      title: `Continue practicing ${skills[1] || skills[0]}`,
      detail: 'Complete a second exercise and compare it with your earlier attempt.',
    },
    {
      title: 'Identify your skill gaps',
      detail: 'Compare your current abilities with the requirements of your target role.',
    },
    {
      title: 'Work on your highest-priority gap',
      detail: 'Spend a focused session practicing the skill you need most.',
      resource: resources[0],
    },
    {
      title: activities[0],
      detail: `Apply your learning through a practical ${focus} exercise.`,
    },
    {
      title: 'Review Week 2',
      detail: 'Record what you can now do independently and what needs more practice.',
    },

    // Week 3: Create evidence (Days 15–21)
    {
      title: `Explore ${skills[2] || 'a practical project'}`,
      detail: 'Learn the basics of another useful skill for your selected career.',
      resource: resources[1] || resources[0],
    },
    {
      title: 'Choose a mini-project',
      detail: 'Select a small problem that you can solve within the remaining days.',
    },
    {
      title: 'Plan your project',
      detail: 'Write the problem, intended users, requirements, and expected result.',
    },
    {
      title: 'Build the first version',
      detail: 'Create a simple working version instead of trying to make it perfect.',
    },
    {
      title: 'Test your work',
      detail: 'Try different examples, check for errors, and record your findings.',
    },
    {
      title: activities[1],
      detail: 'Improve your project using the skills you have practiced.',
    },
    {
      title: 'Review Week 3',
      detail: 'Save your project files and list the improvements still needed.',
    },

    // Week 4: Polish and present (Days 22–30)
    {
      title: 'Improve your project',
      detail: 'Fix one important weakness and make the result easier to use.',
    },
    {
      title: 'Document your process',
      detail: 'Explain the problem, approach, tools, and important decisions.',
    },
    {
      title: 'Ask for feedback',
      detail: 'Ask a classmate, mentor, or peer to review your work.',
    },
    {
      title: 'Apply feedback',
      detail: 'Make at least one useful improvement based on the feedback received.',
    },
    {
      title: 'Prepare a project summary',
      detail: 'Create a short explanation of the problem, solution, and outcome.',
    },
    {
      title: 'Update your career profile',
      detail: 'Add your new skills and project evidence to your portfolio or resume.',
    },
    {
      title: activities[2],
      detail: 'Review your progress against the goals you set at the start.',
    },
    {
      title: activities[3],
      detail: 'Choose the next skill to learn and define a realistic follow-up goal.',
    },
    {
      title: 'Complete your 30-day review',
      detail: `Summarize your achievements in ${focus}, remaining skill gaps, and next steps.`,
    },
  ];

  return taskData.map((task, index) => ({
    id: `${taskPrefix}-day-${index + 1}`,
    day: index + 1,
    week: index < 7
      ? 'Week 1'
      : index < 14
        ? 'Week 2'
        : index < 21
          ? 'Week 3'
          : 'Week 4',
    title: task.title,
    detail: task.detail,
    ...(task.resource ? { resource: task.resource } : {}),
  }));
}
