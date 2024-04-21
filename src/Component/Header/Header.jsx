import React from "react";
import "./Header.css"

function Header() {
    return (
        <header>
            <h2>gemini</h2>
            <div className="user-img">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" className="w-100 h-100"/>
            </div>
        </header>
    )
}
export default Header;