import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import "../../App.css";

const Appointments = () => {
  return (
    <div className="w-100 dashboard-content">
      <div className="mb-4 pb-2">
        <h3 className="fw-bold text-dark mb-1">Appointment Scheduling</h3>
        <p className="text-muted small">Book and manage patient appointments</p>
      </div>

      <div className="row g-4">
        {/* Left Column - Form */}
        <div className="col-lg-8">
          <div className="bg-white border rounded-16 p-4 p-md-5 shadow-sm h-100">
            <h5 className="fw-bold text-dark mb-4 pb-2">Schedule New Appointment</h5>
            
            <form>
              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <label className="form-label text-muted small mb-2 fw-medium">Patient</label>
                  <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="Search patient..." />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small mb-2 fw-medium">Department</label>
                  <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label text-muted small mb-2 fw-medium">Doctor</label>
                  <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small mb-2 fw-medium">Appointment Date</label>
                  <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" />
                </div>
                
                <div className="col-md-6">
                  <label className="form-label text-muted small mb-2 fw-medium">Appointment Time</label>
                  <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small mb-2 fw-medium">Appointment Type</label>
                  <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" />
                </div>
              </div>

              <div className="mb-4 pb-2">
                <label className="form-label text-muted small mb-2 fw-medium">Notes</label>
                <textarea className="form-control shadow-none border-light-grey rounded-3 py-2" rows="3" placeholder="Additional notes or patient concerns..."></textarea>
              </div>

              <button type="button" className="btn text-white px-4 py-2 d-inline-flex align-items-center gap-2 shadow-sm mt-3" style={{ backgroundColor: '#00A6F4', borderRadius: '8px', fontWeight: '500' }}>
                <FiCalendar /> Schedule Appointment
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Availability */}
        <div className="col-lg-4">
          <div className="bg-white border rounded-16 p-4 shadow-sm h-100">
            <h5 className="fw-bold text-dark mb-4 pb-2">Doctor Availability</h5>
            
            <div className="d-flex flex-column gap-3">
              {/* Doctor 1 */}
              <div className="rounded-3 p-3 transition-all hover-bg-light" style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', cursor: 'pointer' }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#22c55e' }}></div>
                  <span className="fw-medium text-dark" style={{ fontSize: '14.5px' }}>Dr. James Wilson</span>
                </div>
                <div className="text-muted small" style={{ marginLeft: '14px', color: '#475569' }}>
                  <div className="mb-1">Available: 9 AM - 5 PM</div>
                  <div>Slots: 8 available</div>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="rounded-3 p-3 transition-all hover-bg-light" style={{ backgroundColor: '#fff7ed', border: '1px solid #fed7aa', cursor: 'pointer' }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#f97316' }}></div>
                  <span className="fw-medium text-dark" style={{ fontSize: '14.5px' }}>Dr. Lisa Brown</span>
                </div>
                <div className="text-muted small" style={{ marginLeft: '14px', color: '#475569' }}>
                  <div className="mb-1">Available: 10 AM - 3 PM</div>
                  <div>Slots: 2 available</div>
                </div>
              </div>

              {/* Doctor 3 */}
              <div className="rounded-3 p-3 transition-all hover-bg-light" style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', cursor: 'pointer' }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#ef4444' }}></div>
                  <span className="fw-medium text-dark" style={{ fontSize: '14.5px' }}>Dr. Rodriguez</span>
                </div>
                <div className="text-muted small" style={{ marginLeft: '14px', color: '#475569' }}>
                  <div className="mb-1">Not available today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
