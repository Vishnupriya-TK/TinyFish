import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function UploadResume() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      toast.success('File selected: ' + selectedFile.name)
    }
  }

  const handleUpload = () => {
    if (!file) {
      toast.error('Please select a file first')
      return
    }
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      toast.success('Resume uploaded successfully!')
    }, 2000)
  }

  return (
    <div>
      <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>Upload Resume</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Upload your existing resume to get started</p>

      <div className="card">
        <div style={{
          border: '2px dashed #e2e8f0',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          cursor: 'pointer'
        }}>
          <span className="material-icons" style={{ fontSize: '48px', color: '#94a3b8', marginBottom: '16px' }}>cloud_upload</span>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Drag & drop your resume here</h3>
          <p style={{ color: '#64748b', marginBottom: '16px' }}>or</p>
          <label className="btn-primary" style={{ cursor: 'pointer', display: 'inline-block' }}>
            Browse Files
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '16px' }}>Supported: PDF, DOC, DOCX (Max 5MB)</p>
        </div>

        {file && (
          <div style={{ marginTop: '24px', padding: '16px', background: '#f1f5f9', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="material-icons" style={{ color: '#3b82f6' }}>description</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '500' }}>{file.name}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{(file.size / 1024).toFixed(2)} KB</div>
              </div>
              <button className="btn-primary" onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
