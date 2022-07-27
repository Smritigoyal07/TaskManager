import React from 'react'
import ToDo from './ToDo'
import Inprogress from './Inprogress'
import Completed from './Completed'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>
         <Navbar />
        <div className="App">
            <div className="app-top">
                    <input type="text" placeholder="Search.." name="search" />
                    <h2 className='user'><i class="fas fa-user-alt user-img" />Hi User!</h2>
                    
            </div>
            <h1 className='main'>PROJECTS</h1>
            <ToDo />
            <Inprogress />
            <Completed />
            </div>
        </div>
    );
}

export default Home