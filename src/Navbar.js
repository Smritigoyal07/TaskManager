import React, { useContext } from "react"
import AuthContext from "./auth-context";

function Navbar(probs) {
    const ctx = useContext(AuthContext)
    return (

        // <div class="container">

        // <div class="navbar">
    
        <nav>
           
            <h1 className="Nav-heading">.taskez</h1>
            <ul id="menuitems">
                <li><i class="fas fa-home"></i>Overview</li>
                <li><i class="fas fa-chart-bar"></i>Stats</li>
                <li><i class="fas fa-folder-open"></i>Project</li>
                <li><i class="fas fa-comment-alt"></i>Chat</li>
                <li><i class="fas fa-calendar-alt"></i>Calender</li>
                <div className="nav-bottom">
                    <li><i class="fas fa-cog"></i>Setting</li>
                    <li><i class="fas fa-user-alt"></i>
                        <button className="log-btn" onClick={ctx.onLogout}>Log Out</button></li>
                </div>    
            </ul>
        </nav>

    //     </div>
    // </div>
    );
}

export default Navbar;