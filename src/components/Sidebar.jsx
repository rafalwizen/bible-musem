import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div
                className="sidebar-icon"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>☰ Kontakt</span>
            </div>
            <div className={`sidebar-content ${isOpen ? 'open' : ''}`}>
                <p>Tutaj dodamy co trzeba.</p>
            </div>
        </div>
    );
};

export default Sidebar;
