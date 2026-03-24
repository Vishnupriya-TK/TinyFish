import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function AgentRunner() {
  const [running, setRunning] = useState(false)
  const [logs, setLogs] = useState([])

  const addLog = (message, type = 'info') => {
    setLogs(prev => [...prev, { message, type, time: new Date().toLocaleTimeString() }])
  }

  const startAgent = async () => {
    setRunning(true)
    setLogs([])
    
    addLog('🚀 Starting AI Auto-Apply Agent...', 'success')
    await new Promise(r => setTimeout(r, 500))
    
    addLog('📄 Fetching your resume...')
    await new Promise(r => setTimeout(r, 800))
    addLog('✅ Resume loaded: John Doe - Software Engineer', 'success')
    
    addLog('🔍 Searching for matching jobs...')
    await new Promise(r => setTimeout(r, 1000))
    addLog('📋 Found 5 matching jobs')
    
    const jobs = ['Frontend Developer at TechCorp', 'Backend Engineer at DataFlow', 'Full Stack Developer at StartupHub']
    
    for (const job of jobs) {
      addLog(`🎯 Processing: ${job}...`)
      await new Promise(r => setTimeout(r, 1200))
      addLog(`   ✨ AI customizing resume for ${job}...`)
      await new Promise(r => setTimeout(r, 1000))
      addLog(`   📤 Submitting application...`)
      await new Promise(r => setTimeout(r, 800))
      addLog(`   ✅ Applied to ${job}`, 'success')
    }
    
    addLog('🎉 Auto-apply process completed!', 'success')
    addLog(`📊 Total applications submitted: 3`, 'info')
    toast.success('AI Agent completed successfully!')
    setRunning(false)
  }

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>AI Auto-Apply Agent</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Let AI customize and submit applications automatically</p>

      <div className="card" style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Agent Configuration</h3>
        <p style={{ color: '#64748b', marginBottom: '20px' }}>The AI agent will:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px', color: '#475569' }}>
          <li>✓ Analyze your resume</li>
          <li>✓ Find matching jobs</li>
          <li>✓ Customize resume for each job</li>
          <li>✓ Submit applications automatically</li>
        </ul>
        <button className="btn-primary" onClick={startAgent} disabled={running} style={{ width: '100%', justifyContent: 'center' }}>
          {running ? '🤖 Agent Running...' : '🚀 Start Auto-Apply Agent'}
        </button>
      </div>

      <div className="logs-terminal">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid #334155' }}>
          <span style={{ fontWeight: '600' }}>Agent Logs</span>
          {logs.length > 0 && <span style={{ fontSize: '11px', color: '#64748b' }}>{logs.length} events</span>}
        </div>
        {logs.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#475569', padding: '40px 0' }}>Click "Start Auto-Apply Agent" to begin</p>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={`log-line ${log.type}`}>
              <span style={{ color: '#64748b' }}>[{log.time}]</span> {log.message}
            </div>
          ))
        )}
      </div>
    </div>
  )
}