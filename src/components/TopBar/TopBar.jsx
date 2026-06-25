import { IoSearchOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import "../../App.css";

const TopBar = () => {
  return (
    <div className="topbar-container d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom w-100">
      <div className="search-wrapper position-relative">
        <IoSearchOutline className="search-icon text-muted" size={20} />
        <input 
          type="text" 
          className="form-control search-input shadow-none" 
          placeholder="Search patients, ID, phone..." 
        />
      </div>

      <div className="topbar-right d-flex align-items-center gap-4">
        <div className="campus-pill d-flex align-items-center gap-2 px-3 py-2">
          <FiHome size={16} className="campus-icon" />
          <span className="fw-medium campus-text" style={{fontSize: '16px'}}>Main Campus</span>
        </div>

        <div className="notification-bell position-relative cursor-pointer">
          <LuBell size={16} className="text-muted" />
          <span className="position-absolute bg-danger rounded-circle notification-dot"></span>
        </div>

        <div className="user-text-info d-flex flex-column text-start ml-2">
          <span className="fw-semibold text-dark" style={{fontSize: '16px', lineHeight: '1.2'}}>Maria Rodriguez</span>
          <span className="text-muted" style={{fontSize: '13px', textAlign: 'left'}}>Front Desk</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
