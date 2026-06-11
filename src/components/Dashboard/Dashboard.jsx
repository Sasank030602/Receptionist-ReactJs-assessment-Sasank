import React, { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiUserPlus, FiCheckCircle, FiClipboard, FiVideo } from 'react-icons/fi';
import "../../App.css";

const Dashboard = () => {
  const [activeAction, setActiveAction] = useState(() => {
    const saved = localStorage.getItem('dashboard_activeAction');
    return saved !== null ? JSON.parse(saved) : 0;
  });

  const [newRegCount, setNewRegCount] = useState(() => {
    const saved = localStorage.getItem('new_registrations_count');
    return saved !== null ? JSON.parse(saved) : 12;
  });

  useEffect(() => {
    localStorage.setItem('dashboard_activeAction', JSON.stringify(activeAction));
  }, [activeAction]);

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('new_registrations_count');
      if (saved !== null) {
        setNewRegCount(JSON.parse(saved));
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const stats = [
    { title: "Today's Appointments", value: "5", subtitle: "Scheduled", icon: <FiCalendar size={18} />, color: "text-primary" },
    { title: "In Queue", value: "1", subtitle: "Waiting", icon: <FiClock size={18} />, color: "text-danger" },
    { title: "New Registrations", value: newRegCount.toString(), subtitle: "Today", icon: <FiUserPlus size={18} />, color: "text-success" },
    { title: "Completed", value: "38", subtitle: "Patients", icon: <FiCheckCircle size={18} />, color: "text-secondary" },
  ];

  const quickActions = [
    { title: "New Patient", icon: <FiUserPlus size={24} /> },
    { title: "Book Appointment", icon: <FiCalendar size={24} /> },
    { title: "View Queue", icon: <FiClipboard size={24} /> },
    { title: "Teleconsult Setup", icon: <FiVideo size={24} /> },
  ];

  const [appointments, setAppointments] = useState([
    { id: 1, token: "#3", name: "John Anderson", idStr: "PAT001", doctor: "Dr. James Wilson", time: "09:00", type: "Follow-Up", status: "waiting" },
    { id: 2, token: "#1", name: "Sarah Williams", idStr: "PAT002", doctor: "Dr. Lisa Brown", time: "10:30", type: "Consultation", status: "scheduled" },
    { id: 3, token: "#5", name: "Michael Chen", idStr: "PAT003", doctor: "Dr. James Wilson", time: "11:00", type: "Consultation", status: "scheduled" },
    { id: 4, token: "#-", name: "Emily Davis", idStr: "PAT004", doctor: "Dr. Amanda Rodriguez", time: "14:00", type: "Follow-Up", status: "scheduled" },
    { id: 5, token: "#-", name: "Robert Taylor", idStr: "PAT005", doctor: "Dr. Emily Chen", time: "15:30", type: "Consultation", status: "scheduled" },
  ]);

  const handleCheckIn = (id) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: "active" } : apt
    ));
  };

  return (
    <div className="dashboard-content w-100">
      {/* Header */}
      <div className="mb-4">
        <h4 className="fw-bold text-dark mb-1">Front Desk Dashboard</h4>
        <p className="text-muted small">Patient registration, appointments & queue management</p>
      </div>

      {/* Stats Row */}
      <div className="row g-3 mb-4">
        {stats.map((stat, idx) => (
          <div className="col-md-3" key={idx}>
            <div className="stat-card p-3 border rounded-16 bg-white h-100">
              <div className="d-flex align-items-center gap-2 mb-2 text-muted">
                <span className={stat.color}>{stat.icon}</span>
                <span className="fw-medium" style={{ fontSize: '13.5px' }}>{stat.title}</span>
              </div>
              <div className="d-flex align-items-baseline gap-2 mt-1">
                <span className="fw-bold fs-5 text-dark">{stat.value}</span>
                <span className="text-muted" style={{ fontSize: '13px' }}>{stat.subtitle}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-4 bg-white border rounded-16 p-4">
        <h6 className="fw-bold text-dark mb-3">Quick Actions</h6>
        <div className="row g-3">
          {quickActions.map((action, idx) => (
            <div className="col-md-3" key={idx}>
              <div 
                className={`quick-action-card p-3 border rounded-16 text-center cursor-pointer transition-all ${activeAction === idx ? 'active-action' : 'inactive-action'}`}
                onClick={() => setActiveAction(idx)}
              >
                <div className="mb-2">{action.icon}</div>
                <span className="fw-medium" style={{ fontSize: '14px' }}>{action.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Appointments Table */}
      <div className="bg-white border rounded-16 p-4 mb-4">
        <h6 className="fw-bold text-dark mb-3">Today's Appointments</h6>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 custom-table">
            <thead className="table-light">
              <tr>
                <th className="fw-medium px-4 py-3 border-0 border-bottom">Token</th>
                <th className="fw-medium py-3 border-0 border-bottom">Patient</th>
                <th className="fw-medium py-3 border-0 border-bottom">Doctor</th>
                <th className="fw-medium py-3 border-0 border-bottom">Time</th>
                <th className="fw-medium py-3 border-0 border-bottom">Type</th>
                <th className="fw-medium py-3 border-0 border-bottom">Status</th>
                <th className="fw-medium px-4 py-3 border-0 border-bottom">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt, idx) => (
                <tr key={idx}>
                  <td className="px-4 border-bottom-0" style={{ borderBottom: '1px solid #f8f9fa' }}>
                    <span className="token-badge">{apt.token}</span>
                  </td>
                  <td style={{ borderBottom: '1px solid #f8f9fa' }}>
                    <div className="fw-medium text-dark" style={{ fontSize: '14px' }}>{apt.name}</div>
                    <div className="text-muted" style={{ fontSize: '13px' }}>{apt.idStr}</div>
                  </td>
                  <td className="text-dark" style={{ fontSize: '14px', borderBottom: '1px solid #f8f9fa' }}>{apt.doctor}</td>
                  <td className="text-dark" style={{ fontSize: '14px', borderBottom: '1px solid #f8f9fa' }}>{apt.time}</td>
                  <td style={{ borderBottom: '1px solid #f8f9fa' }}>
                    <span className={`type-badge ${apt.type === 'Follow-Up' ? 'badge-followup' : 'badge-consult'}`}>
                      {apt.type}
                    </span>
                  </td>
                  <td style={{ borderBottom: '1px solid #f8f9fa' }}>
                    <span className={`status-badge ${apt.status === 'waiting' ? 'badge-waiting' : apt.status === 'active' ? 'badge-active' : 'badge-scheduled'}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4" style={{ borderBottom: '1px solid #f8f9fa' }}>
                    <button 
                      className={`btn btn-sm px-3 py-1 rounded fw-medium border shadow-none action-btn ${apt.status === 'active' ? 'disabled-btn' : ''}`}
                      onClick={() => handleCheckIn(apt.id)}
                      disabled={apt.status === 'active'}
                    >
                      {apt.status === 'active' ? 'Check In' : 'Check In'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
