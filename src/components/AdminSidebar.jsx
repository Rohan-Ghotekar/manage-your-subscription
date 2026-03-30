import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSidebar } from '../context/SidebarContext'

function AdminSidebar() {
  const location = useLocation()
  const { isOpen, setIsOpen } = useSidebar()
  const [plansOpen, setPlansOpen] = useState(
    location.pathname.startsWith('/admin/plans')
  )

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`admin-sidebar${isOpen ? ' sidebar--open' : ''}`}>

        {/* Overview */}
        <div className="sidebar-section-label">Overview</div>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            'sidebar-item' + (isActive ? ' active' : '')
          }
        >
          <span className="sidebar-item-icon">📊</span>
          Dashboard
        </NavLink>

        {/* Plans */}
        <div className="sidebar-section-label">Management</div>
        <div
          className={
            'sidebar-item' +
            (location.pathname.startsWith('/admin/plans') ? ' active' : '')
          }
          onClick={() => setPlansOpen(o => !o)}
          style={{ justifyContent: 'space-between', cursor: 'pointer' }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="sidebar-item-icon">📋</span>
            Manage Plans
          </span>
          <span style={{ fontSize: '11px', opacity: 0.6 }}>
            {plansOpen ? '▲' : '▼'}
          </span>
        </div>

        {plansOpen && (
          <>
            <NavLink
              to="/admin/plans"
              end
              className={({ isActive }) =>
                'sidebar-sub-item' + (isActive ? ' active' : '')
              }
            >
              📄 All Plans
            </NavLink>
            <NavLink
              to="/admin/plans/create"
              className={({ isActive }) =>
                'sidebar-sub-item' + (isActive ? ' active' : '')
              }
            >
              ➕ Create Plan
            </NavLink>
          </>
        )}

        {/* Insights */}
        <div className="sidebar-section-label">Insights</div>
        <NavLink to="/admin/analytics" className={({ isActive }) =>
          'sidebar-item' + (isActive ? ' active' : '')
        }>
          <span className="sidebar-item-icon">📈</span>
          Analytics
        </NavLink>
        <NavLink to="/admin/users" className={({ isActive }) =>
          'sidebar-item' + (isActive ? ' active' : '')
        }>
          <span className="sidebar-item-icon">👥</span>
          Users
        </NavLink>
        <NavLink
          to="/admin/payments"
          className={({ isActive }) =>
            "sidebar-item" + (isActive ? " active" : "")
          }
        >
          <span className="sidebar-item-icon">💳</span>
          Payments
        </NavLink>

      </aside>
    </>
  )
}

export default AdminSidebar
