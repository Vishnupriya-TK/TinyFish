import { Link } from 'react-router-dom'

export default function Dashboard() {
  const stats = {
    resumes: 1,
    applied: 3,
    interviews: 1,
    atsScore: 85
  }

  return (
    <div>
      <div className="welcome-banner">
        <h1>Hello, User! 👋</h1>
        <p>Your AI career assistant is ready. Let's find your dream job!</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{stats.resumes}</div>
          <div className="stat-label">📄 Resumes Created</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.applied}</div>
          <div className="stat-label">📤 Jobs Applied</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.interviews}</div>
          <div className="stat-label">🎯 Interviews</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.atsScore}%</div>
          <div className="stat-label">📊 ATS Score</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div className="card">
          <h3>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <Link to="/upload" className="btn-primary" style={{ textDecoration: 'none', justifyContent: 'center' }}>📄 Upload Resume</Link>
            <Link to="/jobs" className="btn-secondary" style={{ textDecoration: 'none', justifyContent: 'center' }}>🔍 Find Jobs</Link>
            <Link to="/agent" className="btn-outline" style={{ textDecoration: 'none', justifyContent: 'center' }}>🤖 Run AI Agent</Link>
          </div>
        </div>

        <div className="card">
          <h3>Recent Activity</h3>
          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid #bbf7d0' }}>
              <span className="material-icons" style={{ color: '#22c55e' }}>check_circle</span>
              <div>
                <div style={{ fontWeight: '500' }}>Applied to Frontend Developer</div>
                <div style={{ fontSize: '12px', color: '#2d6a4f' }}>2 hours ago</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0' }}>
              <span className="material-icons" style={{ color: '#22c55e' }}>description</span>
              <div>
                <div style={{ fontWeight: '500' }}>Resume uploaded</div>
                <div style={{ fontSize: '12px', color: '#2d6a4f' }}>1 day ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', border: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ color: '#14532d' }}>🌱 AI Pro Tip</h3>
            <p style={{ color: '#166534' }}>Customize your resume for each job to increase chances by 40%</p>
          </div>
          <span className="material-icons" style={{ fontSize: '48px', color: '#22c55e' }}>lightbulb</span>
        </div>
      </div>
    </div>
  )
}
