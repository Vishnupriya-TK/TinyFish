import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    summary: '',
    skills: []
  })
  const [newSkill, setNewSkill] = useState('')

  const addSkill = () => {
    if (newSkill && !resume.skills.includes(newSkill)) {
      setResume({ ...resume, skills: [...resume.skills, newSkill] })
      setNewSkill('')
    }
  }

  const removeSkill = (skill) => {
    setResume({ ...resume, skills: resume.skills.filter(s => s !== skill) })
  }

  const handleSave = () => {
    toast.success('Resume saved successfully!')
  }

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Resume Builder</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Create an ATS-friendly resume</p>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Personal Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
          <input type="text" placeholder="Full Name" className="input-field" value={resume.name} onChange={(e) => setResume({ ...resume, name: e.target.value })} />
          <input type="text" placeholder="Professional Title" className="input-field" value={resume.title} onChange={(e) => setResume({ ...resume, title: e.target.value })} />
          <input type="email" placeholder="Email" className="input-field" value={resume.email} onChange={(e) => setResume({ ...resume, email: e.target.value })} />
          <input type="tel" placeholder="Phone" className="input-field" value={resume.phone} onChange={(e) => setResume({ ...resume, phone: e.target.value })} />
        </div>
        <textarea placeholder="Professional Summary" rows="4" className="input-field" value={resume.summary} onChange={(e) => setResume({ ...resume, summary: e.target.value })} />
      </div>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          {resume.skills.map(skill => (
            <span key={skill} style={{ background: '#e2e8f0', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {skill}
              <button onClick={() => removeSkill(skill)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}>×</button>
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <input type="text" placeholder="Add skill" className="input-field" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addSkill()} />
          <button className="btn-secondary" onClick={addSkill}>Add</button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn-primary" onClick={handleSave}>Save Resume</button>
      </div>
    </div>
  )
}
