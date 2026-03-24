import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/Layout/Sidebar'

// Pages
import Dashboard from './pages/Dashboard'
import UploadResume from './pages/UploadResume'
import ResumeBuilder from './pages/ResumeBuilder'
import JobMatcher from './pages/JobMatcher'
import ResumeCustomizer from './pages/ResumeCustomizer'
import PortfolioGenerator from './pages/PortfolioGenerator'
import AgentRunner from './pages/AgentRunner'
import Applications from './pages/Applications'
import Tracker from './pages/Tracker'

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <div className="app-wrapper">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<UploadResume />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/jobs" element={<JobMatcher />} />
            <Route path="/customize" element={<ResumeCustomizer />} />
            <Route path="/portfolio" element={<PortfolioGenerator />} />
            <Route path="/agent" element={<AgentRunner />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
