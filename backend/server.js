const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'CareerForge API is running',
    timestamp: new Date().toISOString()
  })
})

// Jobs endpoint
app.get('/api/jobs', (req, res) => {
  const jobs = [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', skills: ['React', 'JavaScript', 'CSS'], type: 'Full-time', salary: '-' },
    { id: 2, title: 'Backend Engineer', company: 'DataFlow', location: 'New York', skills: ['Node.js', 'MongoDB', 'Python'], type: 'Full-time', salary: '-' },
    { id: 3, title: 'Full Stack Developer', company: 'StartupHub', location: 'San Francisco', skills: ['React', 'Node.js', 'PostgreSQL'], type: 'Remote', salary: '-' }
  ]
  res.json(jobs)
})

// Resume endpoint
app.get('/api/resume/me', (req, res) => {
  res.json({
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    summary: 'Experienced software engineer with 5+ years of experience.',
    skills: ['React', 'Node.js', 'Python', 'MongoDB']
  })
})

// AI Customize endpoint
app.post('/api/ai/customize', (req, res) => {
  const { resume, job } = req.body
  const customized = {
    ...resume,
    summary: resume.summary + ' I am excited about the ' + job.title + ' role at ' + job.company + '.',
    skills: [...new Set([...resume.skills, ...(job.skills || [])])]
  }
  res.json({ success: true, resume: customized })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log('========================================')
  console.log('🚀 CareerForge AI Backend Server')
  console.log('========================================')
  console.log('📡 Server running on: http://localhost:' + PORT)
  console.log('🏥 Health check: http://localhost:' + PORT + '/api/health')
  console.log('💼 Jobs API: http://localhost:' + PORT + '/api/jobs')
})
