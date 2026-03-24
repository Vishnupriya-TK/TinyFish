import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const dummyJobs = [
  { id: 1, title: 'Frontend Developer', company: 'TechCorp', location: 'Remote', skills: ['React', 'JavaScript', 'CSS'], type: 'Full-time', salary: '$80k-$100k', match: 92 },
  { id: 2, title: 'Backend Engineer', company: 'DataFlow', location: 'New York', skills: ['Node.js', 'MongoDB', 'Python'], type: 'Full-time', salary: '$90k-$120k', match: 78 },
  { id: 3, title: 'Full Stack Developer', company: 'StartupHub', location: 'San Francisco', skills: ['React', 'Node.js', 'PostgreSQL'], type: 'Remote', salary: '$100k-$130k', match: 85 },
  { id: 4, title: 'AI Engineer', company: 'AI Innovations', location: 'Austin', skills: ['Python', 'TensorFlow', 'ML'], type: 'Full-time', salary: '$120k-$150k', match: 68 },
  { id: 5, title: 'DevOps Engineer', company: 'CloudNative', location: 'Seattle', skills: ['AWS', 'Docker', 'Kubernetes'], type: 'Contract', salary: '$110k-$140k', match: 71 },
]

export default function JobMatcher() {
  const [jobs, setJobs] = useState(dummyJobs)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  )

  const handleCustomize = (job) => {
    localStorage.setItem('selectedJob', JSON.stringify(job))
    navigate('/customize')
    toast.success(`Customizing resume for ${job.title}`)
  }

  const getMatchColor = (score) => {
    if (score >= 80) return '#10b981'
    if (score >= 60) return '#f59e0b'
    return '#ef4444'
  }

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Job Matcher</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Find jobs that match your skills</p>

      <div className="card" style={{ marginBottom: '24px' }}>
        <input
          type="text"
          placeholder="Search jobs or companies..."
          className="input-field"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredJobs.map(job => (
          <div key={job.id} className="job-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{job.title}</h3>
                <span style={{ background: '#e2e8f0', padding: '2px 8px', borderRadius: '20px', fontSize: '12px' }}>{job.type}</span>
              </div>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>{job.company} • {job.location} • {job.salary}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {job.skills.map(skill => (
                  <span key={skill} style={{ background: '#f1f5f9', padding: '4px 10px', borderRadius: '16px', fontSize: '12px' }}>{skill}</span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ marginBottom: '12px' }}>
                <span style={{ background: getMatchColor(job.match), color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: '600' }}>
                  {job.match}% Match
                </span>
              </div>
              <button className="btn-primary" onClick={() => handleCustomize(job)}>
                Customize Resume
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}