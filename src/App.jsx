import { useState } from "react";
import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
import Topbar from "./components/TopBar/TopBar";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientRegistration from "./components/PatientRegistration/PatientRegistration";
import Appointments from "./components/Appointments/Appointments";
import QueueManagement from "./components/QueueManagement/QueueManagement";
import Billing from "./components/Billing/Billing";

function App() {
  const [activePage, setActivePage] = useState(() => {
    const saved = localStorage.getItem('sidebar_activeNav');
    return saved !== null ? JSON.parse(saved) : 0;
  });

  const handlePageChange = (index) => {
    setActivePage(index);
    localStorage.setItem('sidebar_activeNav', JSON.stringify(index));
  };

  return (
    <div className="d-flex vh-100 vw-100">
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      <div className="flex-grow-1 d-flex flex-column bg-light" style={{ overflow: 'hidden' }}>
        <Topbar />
        <div className="p-4 flex-grow-1" style={{ overflowY: 'auto' }}>
          {activePage === 0 && <Dashboard />}
          {activePage === 1 && <PatientRegistration />}
          {activePage === 2 && <Appointments />}
          {activePage === 3 && <QueueManagement />}
          {activePage === 4 && <Billing />}
          {activePage > 4 && (
             <div className="bg-white border rounded-16 p-4">
               <h5 className="text-muted">This page is under construction.</h5>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
