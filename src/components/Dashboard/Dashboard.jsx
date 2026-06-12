import React from "react";
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

      <div className="row">
        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <FiCalendar />
            <p>Today's Appointments</p>
            <h5>5 Scheduled</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <FiClock />
            <p>In Queue</p>
            <h5>1 Waiting</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <FiUserPlus />
            <p>New Registrations</p>
            <h5>{newRegCount} Today</h5>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <FiCheckCircle />
            <p>Completed</p>
            <h5>38 Patients</h5>
          </div>
        </div>

      </div>

      <h6 className="fw-bold mb-3">Quick Actions</h6>

      <div className="row">
        <div className="col-md-3">
          <div className="border p-3 text-center rounded bg-info">
            <FiUserPlus />
            <p>New Patient</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="border p-3 text-center rounded">
            <FiCalendar />
            <p>Book Appointment</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="border p-3 text-center rounded">
            <LuClipboardList />
            <p>View Queue</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="border p-3 text-center rounded">
            <FiVideo />
            <p>Teleconsult Setup</p>
          </div>
        </div>

      </div>

      <h6 className="fw-bold mb-3">Today's Appointments</h6>

      <table className="table">
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
            <td>#3</td>
            <td>John Anderson <br /> <small>PAT001</small></td>
            <td>Dr. James Wilson</td>
            <td>09:00</td>
            <td>Follow-Up</td>
            <td>waiting</td>
            <td><button className="btn btn-sm btn-secondary text-white">Check In</button></td>
          </tr>

          <tr>
            <td>#1</td>
            <td>Sarah Williams <br /> <small>PAT002</small></td>
            <td>Dr. Lisa Brown</td>
            <td>10:30</td>
            <td>Consultation</td>
            <td>scheduled</td>
            <td><button className="btn btn-sm btn-secondary text-white">Check In</button></td>
          </tr>

          <tr>
            <td>#5</td>
            <td>Michael Chen <br /> <small>PAT003</small></td>
            <td>Dr. James Wilson</td>
            <td>11:00</td>
            <td>Consultation</td>
            <td>scheduled</td>
            <td><button className="btn btn-sm btn-secondary text-white">Check In</button></td>
          </tr>

          <tr>
            <td>#</td>
            <td>Emily Davis <br /> <small>PAT004</small></td>
            <td>Dr.Amanda Rodriguez</td>
            <td>14:00</td>
            <td>Follow-up</td>
            <td>scheduled</td>
            <td><button className="btn btn-sm btn-secondary text-white">Check In</button></td>
          </tr>

          <tr>
            <td>#</td>
            <td>Robert Taylor <br /> <small>PAT005</small></td>
            <td>Dr. Emily Chen</td>
            <td>15:30</td>
            <td>consultation</td>
            <td>scheduled</td>
            <td><button className="btn btn-sm btn-secondary text-white">Check In</button></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Dashboard;