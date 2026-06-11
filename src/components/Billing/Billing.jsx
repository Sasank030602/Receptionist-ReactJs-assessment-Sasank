import React, { useState } from 'react';
import "../../App.css";

const Billing = () => {
  const [items, setItems] = useState([
    { id: 1, description: '', qty: 1, unitPrice: 0 }
  ]);

  const handleAddItem = () => {
    setItems([...items, { id: Date.now(), description: '', qty: 1, unitPrice: 0 }]);
  };

  const handleItemChange = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const addQuickService = (desc, price) => {
    if (items.length === 1 && items[0].description === '' && items[0].unitPrice === 0) {
      setItems([{ id: Date.now(), description: desc, qty: 1, unitPrice: price }]);
    } else {
      setItems([...items, { id: Date.now(), description: desc, qty: 1, unitPrice: price }]);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + (Number(item.qty) * Number(item.unitPrice || 0)), 0);
  const tax = subtotal * 0.10;
  const total = subtotal + tax;

  const handleGenerateBill = () => {
    alert("Bill generated successfully using frontend state!");
    setItems([{ id: Date.now(), description: '', qty: 1, unitPrice: 0 }]);
  };

  return (
    <div className="w-100 dashboard-content">
      <div className="mb-4 pb-2">
        <h3 className="fw-bold text-dark mb-1">Billing Initiation</h3>
        <p className="text-muted small mb-0">Create bills and process payments</p>
      </div>

      <div className="row g-4">
        {/* Left Column */}
        <div className="col-lg-8">
          <div className="bg-white border rounded-16 p-4 p-md-5 shadow-sm h-100">
            <h5 className="fw-bold text-dark mb-4 pb-2">New Bill</h5>
            
            <div className="mb-3">
              <label className="form-label text-muted small mb-2 fw-medium">Patient</label>
              <input type="text" className="form-control shadow-none border-light-grey rounded-3 py-2" placeholder="Search patient..." />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <label className="form-label text-muted small mb-0 fw-medium">Bill Items</label>
              <button 
                type="button"
                className="btn btn-light btn-sm px-3 py-1 fw-medium shadow-none transition-all hover-bg-light" 
                style={{ backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '6px' }}
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>

            {/* Table Header */}
            <div className="row g-3 mb-2 px-3 py-2 rounded-3 align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="col-5"><span className="fw-bold text-dark" style={{ fontSize: '13px' }}>Description</span></div>
              <div className="col-2"><span className="fw-bold text-dark" style={{ fontSize: '13px' }}>Qty</span></div>
              <div className="col-3"><span className="fw-bold text-dark" style={{ fontSize: '13px' }}>Unit Price</span></div>
              <div className="col-2 text-end"><span className="fw-bold text-dark" style={{ fontSize: '13px' }}>Total</span></div>
            </div>

            {/* Table Rows */}
            {items.map((item) => (
              <div className="row g-3 mb-3 px-3 align-items-center" key={item.id}>
                <div className="col-5">
                  <input 
                    type="text" 
                    className="form-control shadow-none border-light-grey rounded-3 py-2" 
                    placeholder="Service/Item" 
                    value={item.description}
                    onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                  />
                </div>
                <div className="col-2">
                  <input 
                    type="number" 
                    className="form-control shadow-none border-light-grey rounded-3 py-2" 
                    min="1"
                    value={item.qty}
                    onChange={(e) => handleItemChange(item.id, 'qty', e.target.value)}
                  />
                </div>
                <div className="col-3">
                  <input 
                    type="number" 
                    className="form-control shadow-none border-light-grey rounded-3 py-2" 
                    min="0"
                    placeholder="0"
                    value={item.unitPrice === 0 && item.description === '' ? '' : item.unitPrice}
                    onChange={(e) => handleItemChange(item.id, 'unitPrice', e.target.value)}
                  />
                </div>
                <div className="col-2 text-end">
                  <span className="text-dark" style={{ fontSize: '14.5px' }}>
                    ₹{(Number(item.qty) * Number(item.unitPrice || 0)).toFixed(0)}
                  </span>
                </div>
              </div>
            ))}

            <hr className="text-muted my-4" style={{opacity: 0.15}} />

            {/* Summary */}
            <div className="mb-4 pb-2">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted" style={{ fontSize: '14.5px', color: '#64748b' }}>Subtotal:</span>
                <span className="text-dark" style={{ fontSize: '14.5px' }}>₹{subtotal.toFixed(0)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted" style={{ fontSize: '14.5px', color: '#64748b' }}>Tax (10%):</span>
                <span className="text-dark" style={{ fontSize: '14.5px' }}>₹{tax.toFixed(0)}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span className="text-dark" style={{ fontSize: '14.5px', color: '#334155' }}>Total:</span>
                <span className="text-dark" style={{ fontSize: '14.5px' }}>₹{total.toFixed(0)}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 mt-4">
              <button onClick={handleGenerateBill} className="btn text-white px-4 py-2 shadow-sm" style={{ backgroundColor: '#00A6F4', borderRadius: '8px', fontWeight: '500' }}>
                Generate Bill
              </button>
              <button className="btn btn-light px-4 py-2 shadow-sm" style={{ backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '8px', fontWeight: '500', border: 'none' }}>
                Save Draft
              </button>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-4">
          <div className="bg-white border rounded-16 p-4 shadow-sm h-100">
            <h5 className="fw-bold text-dark mb-4 pb-2">Quick Services</h5>
            
            <div className="d-flex flex-column gap-3">
              <div 
                className="p-3 rounded-3 transition-all hover-bg-light" 
                style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                onClick={() => addQuickService('Consultation', 500)}
              >
                <span className="text-muted" style={{ fontSize: '14.5px' }}>Consultation - ₹500</span>
              </div>
              <div 
                className="p-3 rounded-3 transition-all hover-bg-light" 
                style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                onClick={() => addQuickService('ECG', 400)}
              >
                <span className="text-muted" style={{ fontSize: '14.5px' }}>ECG - ₹400</span>
              </div>
              <div 
                className="p-3 rounded-3 transition-all hover-bg-light" 
                style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                onClick={() => addQuickService('X-Ray', 800)}
              >
                <span className="text-muted" style={{ fontSize: '14.5px' }}>X-Ray - ₹800</span>
              </div>
              <div 
                className="p-3 rounded-3 transition-all hover-bg-light" 
                style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
                onClick={() => addQuickService('Blood Test', 300)}
              >
                <span className="text-muted" style={{ fontSize: '14.5px' }}>Blood Test - ₹300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
