import React, { useState } from 'react';
import { FiUserPlus, FiSearch, FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { PiIdentificationCard } from 'react-icons/pi';
import { BiScan } from 'react-icons/bi';
import "../../App.css";

const PatientRegistration = () => {
  const [activeTab, setActiveTab] = useState('new');

  const handleRegister = (e) => {
    e.preventDefault();
    const currentCount = JSON.parse(localStorage.getItem('new_registrations_count') || '12');
    localStorage.setItem('new_registrations_count', JSON.stringify(currentCount + 1));
    alert("Patient registered successfully! Check the Dashboard for updated New Registrations count.");
    e.target.reset();
  };

  return (
    <div className="w-100 dashboard-content">
      <div className="mb-4">
        <h3 className="fw-bold text-dark mb-1">Patient Registration</h3>
        <p className="text-muted small">Register new patients or update returning patient information</p>
      </div>

      <div className="d-flex align-items-center mb-4">
        <div className="bg-white border rounded-16 p-1 d-inline-flex shadow-sm">
          <button 
            className={`btn px-4 py-2 d-flex align-items-center gap-2 shadow-none transition-all rounded-16 ${activeTab === 'new' ? 'text-white' : 'bg-transparent border-0 text-muted hover-bg-light'}`}
            style={activeTab === 'new' ? { backgroundColor: '#00A6F4', fontWeight: '500' } : { fontWeight: '500' }}
            onClick={() => setActiveTab('new')}
          >
            <FiUserPlus /> New Patient
          </button>
          <button 
            className={`btn px-4 py-2 d-flex align-items-center gap-2 shadow-none transition-all rounded-16 ${activeTab === 'returning' ? 'text-white' : 'bg-transparent border-0 text-muted hover-bg-light'}`}
            style={activeTab === 'returning' ? { backgroundColor: '#00A6F4', fontWeight: '500' } : { fontWeight: '500' }}
            onClick={() => setActiveTab('returning')}
          >
            <FiSearch /> Returning Patient
          </button>
        </div>
      </div>

      {activeTab === 'new' ? (
        <div className="bg-white border rounded-16 p-4 p-md-5 shadow-sm">
          <h5 className="fw-bold text-dark mb-1">New Patient Registration</h5>
          <p className="text-muted small mb-4 pb-2">Enter patient details to create a new record</p>

          <form onSubmit={handleRegister}>
            <h6 className="fw-bold text-dark mb-3">Personal Information</h6>
            <hr className="text-muted my-3" style={{opacity: 0.15}} />
            <div className="row g-4 mb-4 pb-2">
              <div className="col-md-5">
                <label className="form-label text-muted small mb-2 fw-medium">Full Name *</label>
                <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="Enter full name" required />
              </div>
              <div className="col-md-3">
                <label className="form-label text-muted small mb-2 fw-medium">Age *</label>
                <input type="number" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="Age" required />
              </div>
              <div className="col-md-4">
                <label className="form-label text-muted small mb-2 fw-medium">Gender *</label>
                <select className="form-select shadow-none border-light-grey rounded-3 py-2 text-muted" required>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <h6 className="fw-bold text-dark mb-3 mt-4">Contact Information</h6>
            <hr className="text-muted my-3" style={{opacity: 0.15}} />
            <div className="row g-4 mb-4 pb-2">
              <div className="col-md-6">
                <label className="form-label text-muted small mb-2 d-flex align-items-center gap-2 fw-medium">
                  <FiPhone /> Phone Number *
                </label>
                <input type="tel" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="+1-555-0000" required />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted small mb-2 d-flex align-items-center gap-2 fw-medium">
                  <FiMail /> Email Address
                </label>
                <input type="email" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="patient@email.com" />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted small mb-2 d-flex align-items-center gap-2 fw-medium">
                  <PiIdentificationCard size={20} /> Aadhaar / ID Number
                </label>
                <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="1234-5678-9012" />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted small mb-2 d-flex align-items-center gap-2 fw-medium">
                  Blood Group
                </label>
                <select className="form-select shadow-none border-light-grey rounded-3 py-2 text-muted">
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="O+">O+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>

            <h6 className="fw-bold text-dark mb-3 mt-4">Address & Emergency Contact</h6>
            <hr className="text-muted my-3" style={{opacity: 0.15}} />
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <label className="form-label text-muted small mb-2 d-flex align-items-center gap-2 fw-medium">
                  <FiMapPin /> Address
                </label>
                <textarea className="form-control shadow-none border-light-grey rounded-3 py-2" rows="2" placeholder="Enter full address"></textarea>
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted small mb-2 d-flex align-items-center gap-2 fw-medium">
                  Emergency Contact Number *
                </label>
                <input type="tel" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="+1-555-0000" required />
              </div>
            </div>

            <hr className="text-muted my-4" style={{opacity: 0.15}} />

            <div className="d-flex align-items-center gap-3 mt-4">
              <button type="submit" className="btn text-white px-4 py-2 d-flex align-items-center gap-2 shadow-sm" style={{ backgroundColor: '#00A6F4', borderRadius: '8px', fontWeight: '500' }}>
                <FiCheckCircle /> Register Patient
              </button>
              <button type="reset" className="btn btn-light px-4 py-2 shadow-sm" style={{ backgroundColor: '#f8f9fa', color: '#475569', borderRadius: '8px', fontWeight: '500', border: '1px solid #e2e8f0' }}>
                Clear Form
              </button>
              <button type="button" className="btn btn-link text-muted text-decoration-none d-flex align-items-center gap-2" style={{ fontWeight: '500' }}>
                <PiIdentificationCard size={20} /> Scan Aadhaar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white border rounded-16 p-4 p-md-5 shadow-sm">
          <h5 className="fw-bold text-dark mb-1">Find Returning Patient</h5>
          <p className="text-muted small mb-4 pb-2">Search by name, phone, email, or patient ID</p>

          <div className="position-relative mb-4 pb-2">
            <FiSearch className="position-absolute text-muted" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} size={18} />
            <input 
              type="text" 
              className="form-control shadow-none border-light-grey" 
              placeholder="Search patients..." 
              style={{ paddingLeft: '44px', paddingTop: '12px', paddingBottom: '12px', borderRadius: '8px', fontSize: '14.5px' }}
            />
          </div>

          <div className="d-flex flex-column gap-3">
            {[
              { name: "John Anderson", id: "PAT001", bg: "O+", phone: "+1-555-0101", email: "john.anderson@email.com", age: "45 / Male", visit: "2025-12-28" },
              { name: "Sarah Williams", id: "PAT002", bg: "A+", phone: "+1-555-0201", email: "sarah.williams@email.com", age: "32 / Female", visit: "2026-01-02" },
              { name: "Michael Chen", id: "PAT003", bg: "B+", phone: "+1-555-0301", email: "michael.chen@email.com", age: "28 / Male", visit: "2026-01-03" },
              { name: "Emily Davis", id: "PAT004", bg: "AB+", phone: "+1-555-0401", email: "emily.davis@email.com", age: "55 / Female", visit: "2025-12-30" },
              { name: "Robert Taylor", id: "PAT005", bg: "O-", phone: "+1-555-0501", email: "robert.taylor@email.com", age: "67 / Male", visit: "2026-01-01" },
            ].map((pt, idx) => (
              <div key={idx} className="border rounded-16 p-3 px-4 d-flex justify-content-between align-items-center hover-bg-light transition-all">
                <div className="row w-100 align-items-end">
                  <div className="col-lg-3 col-md-4 mb-2 mb-md-0">
                    <div className="d-flex align-items-center gap-2 mb-2 pb-1">
                      <span className="fw-bold text-dark" style={{fontSize: '15.5px'}}>{pt.name}</span>
                      <span className="token-badge text-muted" style={{ padding: '2px 8px', fontSize: '11px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>{pt.id}</span>
                      <span className="fw-bold rounded-pill" style={{ padding: '2px 8px', fontSize: '11px', backgroundColor: '#e0f2fe', color: '#0284c7' }}>{pt.bg}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-muted small fw-medium">
                      <FiPhone size={14} /> {pt.phone}
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mb-2 mb-md-0">
                    <div className="d-flex align-items-center gap-2 text-muted small fw-medium">
                      <FiMail size={14} /> {pt.email}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 mb-2 mb-md-0">
                    <div className="text-muted small">
                      <span className="fw-medium">Age:</span> {pt.age}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-2 mb-md-0">
                    <div className="text-muted small">
                      <span className="fw-medium">Last Visit:</span> {pt.visit}
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 text-md-end">
                    <button className="btn text-white shadow-sm" style={{ backgroundColor: '#00A6F4', borderRadius: '8px', fontSize: '14px', fontWeight: '500', padding: '6px 16px' }}>
                      Select Patient
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRegistration;
