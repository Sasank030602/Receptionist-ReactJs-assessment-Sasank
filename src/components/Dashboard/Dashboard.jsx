import {
  FiCalendar,
  FiClock,
  FiUserPlus,
  FiCheckCircle,
  FiVideo,
} from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import "../../App.css";

const Dashboard = () => {
  let newRegCount = localStorage.getItem("new_registrations_count");
  if (!newRegCount) {
    newRegCount = 12;
  }

  return (
    <div className="dashboard-content w-100">
      <div className="mb-4">
        <h4 className="fw-bold">Front Desk Dashboard</h4>
        <p className="text-muted small">
          Patient registration, appointments & queue management
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiCalendar size={18} style={{ color: "#0084D1" }} />
              <span className="card-title-text">Today's Appointments</span>
            </div>
            <h6 className="card-value-text">5 Scheduled</h6>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiClock size={18} style={{ color: "#F54900" }} />
              <span className="card-title-text">In Queue</span>
            </div>
            <h6 className="card-value-text">1 Waiting</h6>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiUserPlus size={18} style={{ color: "#30B762" }} />
              <span className="card-title-text">New Registrations</span>
            </div>
            <h6 className="card-value-text">{newRegCount} Today</h6>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiCheckCircle size={18} style={{ color: "#009689" }} />
              <span className="card-title-text">Completed</span>
            </div>
            <h6 className="card-value-text">38 Patients</h6>
          </div>
        </div>
      </div>

      <div className="border my-4 py-4 px-4 bg-white rounded-16 shadow-sm">
        <h6 className="fw-bold mb-3">Quick Actions</h6>

        <div className="row">
          <div className="col-md-3">
            <div
              className="border p-3 text-center rounded"
              style={{ backgroundColor: "#00A6F4", color: "#ffffff" }}
            >
              <FiUserPlus size={24} />
              <p>New Patient</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border p-3 text-center rounded">
              <FiCalendar size={24} />
              <p>Book Appointment</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border p-3 text-center rounded">
              <LuClipboardList size={24} />
              <p>View Queue</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border p-3 text-center rounded">
              <FiVideo size={24} />
              <p>Teleconsult Setup</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border my-4 py-4 px-4 bg-white rounded-16 shadow-sm">
        <h6 className="fw-bold mb-3">Today's Appointments</h6>

        <table className="table table-custom">
  <thead>
    <tr>
      <th>Token</th>
      <th>Patient</th>
      <th>Doctor</th>
      <th>Time</th>
      <th>Type</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td className="token-badge">#3</td>
      <td>
        John Anderson <br /> <small>PAT001</small>
      </td>
      <td>Dr. James Wilson</td>
      <td>09:00</td>
      <td><span className="status-badge blue">Follow-Up</span></td>
      <td><span className="status-badge waiting">Waiting</span></td>
      <td>
        <button className="btn-checkin">Check In</button>
      </td>
    </tr>

    <tr>
      <td className="token-badge">#1</td>
      <td>
        Sarah Williams <br /> <small>PAT002</small>
      </td>
      <td>Dr. Lisa Brown</td>
      <td>10:30</td>
      <td><span className="status-badge blue">Consultation</span></td>
      <td><span className="status-badge scheduled">Scheduled</span></td>
      <td>
        <button className="btn-checkin">Check In</button>
      </td>
    </tr>

    <tr>
      <td className="token-badge">#5</td>
      <td>
        Michael Chen <br /> <small>PAT003</small>
      </td>
      <td>Dr. James Wilson</td>
      <td>11:00</td>
      <td><span className="status-badge blue">Consultation</span></td>
      <td><span className="status-badge scheduled">Scheduled</span></td>
      <td>
        <button className="btn-checkin">Check In</button>
      </td>
    </tr>

    <tr>
      <td className="token-badge">#</td>
      <td>
        Emily Davis <br /> <small>PAT004</small>
      </td>
      <td>Dr. Amanda Rodriguez</td>
      <td>14:00</td>
      <td><span className="status-badge blue">Follow-Up</span></td>
      <td><span className="status-badge scheduled">Scheduled</span></td>
      <td>
        <button className="btn-checkin">Check In</button>
      </td>
    </tr>

    <tr>
      <td className="token-badge">#</td>
      <td>
        Robert Taylor <br /> <small>PAT005</small>
      </td>
      <td>Dr. Emily Chen</td>
      <td>15:30</td>
      <td><span className="status-badge blue">Consultation</span></td>
      <td><span className="status-badge scheduled">Scheduled</span></td>
      <td>
        <button className="btn-checkin">Check In</button>
      </td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Dashboard;
