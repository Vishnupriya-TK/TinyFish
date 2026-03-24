import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function PortfolioGenerator() {
  const [link, setLink] = useState('')
  const [generating, setGenerating] = useState(false)

  const generate = () => {
    setGenerating(true)
    setTimeout(() => {
      setLink('https://portfolio.careerforge.ai/johndoe')
      setGenerating(false)
      toast.success('Portfolio generated!')
    }, 1500)
  }

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Portfolio Generator</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Create a stunning portfolio website</p>

      <div className="card">
        <button className="btn-primary" onClick={generate} disabled={generating}>
          {generating ? 'Generating...' : '✨ Generate Portfolio'}
        </button>

        {link && (
          <div style={{ marginTop: '24px', padding: '16px', background: '#f0fdf4', borderRadius: '12px' }}>
            <p><strong>Your portfolio is ready!</strong></p>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>{link}</a>
            <button className="btn-secondary" style={{ marginLeft: '12px' }} onClick={() => navigator.clipboard.writeText(link)}>Copy Link</button>
          </div>
        )}
      </div>
    </div>
  )
}
