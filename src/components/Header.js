import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="logo">Netflix</div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </nav>
            <div className="profile-icon">User</div>
        </header>
    );
}

export default Header;