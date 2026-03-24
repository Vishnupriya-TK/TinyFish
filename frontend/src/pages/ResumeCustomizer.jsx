import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function ResumeCustomizer() {
  const [job, setJob] = useState(null)
  const [originalResume, setOriginalResume] = useState({
    name: 'John Doe',
    title: 'Software Engineer',
    summary: 'Experienced software engineer with 5+ years in full-stack development.',
    skills: ['React', 'Node.js', 'Python', 'MongoDB']
  })
  const [customized, setCustomized] = useState(null)
  const [customizing, setCustomizing] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const savedJob = localStorage.getItem('selectedJob')
    if (savedJob) {
      setJob(JSON.parse(savedJob))
    } else {
      navigate('/jobs')
    }
  }, [navigate])

  const handleAICustomize = () => {
    setCustomizing(true)
    setTimeout(() => {
      const optimizedSkills = [...originalResume.skills, ...job.skills].filter((v, i, a) => a.indexOf(v) === i)
      const optimizedSummary = `${originalResume.summary} I am particularly excited about the ${job.title} role at ${job.company}, where I can leverage my skills in ${job.skills.join(', ')}.`
      
      setCustomized({
        ...originalResume,
        summary: optimizedSummary,
        skills: optimizedSkills
      })
      setCustomizing(false)
      toast.success('Resume customized successfully!')
    }, 1500)
  }

  const handleApply = () => {
    toast.success('Application submitted!')
    navigate('/applications')
  }

  if (!job) return <div>Loading...</div>

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Resume Customizer</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>AI-powered customization for {job.title} at {job.company}</p>

      <div style={{ background: '#eff6ff', padding: '20px', borderRadius: '16px', marginBottom: '24px', border: '1px solid #bfdbfe' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span className="material-icons" style={{ color: '#3b82f6' }}>work</span>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Target Job: {job.title}</h3>
        </div>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Required Skills:</strong> {job.skills.join(', ')}</p>
        <button className="btn-primary" onClick={handleAICustomize} disabled={customizing} style={{ marginTop: '16px' }}>
          {customizing ? 'AI Customizing...' : '✨ AI Customize Resume'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="card">
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Original Resume</h3>
          <p><strong>Name:</strong> {originalResume.name}</p>
          <p><strong>Title:</strong> {originalResume.title}</p>
          <p><strong>Summary:</strong> {originalResume.summary}</p>
          <p><strong>Skills:</strong> {originalResume.skills.join(', ')}</p>
        </div>

        <div className="card" style={{ background: customized ? '#f0fdf4' : 'white', borderColor: customized ? '#bbf7d0' : '#e2e8f0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
            {customized ? '✅ Customized Resume' : 'Customized Resume (AI will generate)'}
          </h3>
          {customized ? (
            <>
              <p><strong>Name:</strong> {customized.name}</p>
              <p><strong>Title:</strong> {customized.title}</p>
              <p><strong>Summary:</strong> {customized.summary}</p>
              <p><strong>Skills:</strong> {customized.skills.join(', ')}</p>
              <button className="btn-primary" onClick={handleApply} style={{ marginTop: '20px', width: '100%' }}>
                Apply with This Resume
              </button>
            </>
          ) : (
            <p style={{ color: '#64748b', textAlign: 'center', padding: '40px 0' }}>Click "AI Customize Resume" to generate optimized version</p>
          )}
        </div>
      </div>
    </div>
  )
}