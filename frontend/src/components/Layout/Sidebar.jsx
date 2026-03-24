import { NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', icon: 'dashboard', path: '/' },
  { name: 'Upload Resume', icon: 'cloud_upload', path: '/upload' },
  { name: 'Resume Builder', icon: 'edit_note', path: '/resume-builder' },
  { name: 'Job Matcher', icon: 'work', path: '/jobs' },
  { name: 'Resume Customizer', icon: 'tune', path: '/customize' },
  { name: 'Portfolio', icon: 'link', path: '/portfolio' },
  { name: 'AI Agent', icon: 'smart_toy', path: '/agent' },
  { name: 'Applications', icon: 'description', path: '/applications' },
  { name: 'Tracker', icon: 'track_changes', path: '/tracker' },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>CareerForge<span>AI</span></h1>
        <p>Intelligent Career Suite</p>
      </div>
      <nav className="sidebar-nav">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'sidebar-nav-item active' : 'sidebar-nav-item'
            }
          >
            <span className="material-icons">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
