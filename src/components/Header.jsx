import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="bg-body-tertiary ">
                <div className="container-fluid d-flex flex-wrap bg-warning">
                    <ul className="nav me-2">
                        <li className="nav-item1"><NavLink to="#" className="nav-NavLink NavLink-body-emphasis  active text-white p-2 text-decoration-none" aria-current="page">Become a seller</NavLink></li>
                        <li className="nav-item2"><NavLink to="#" className="nav-NavLink NavLink-body-emphasis  text-white p-2 text-decoration-none">Payments and Recharge</NavLink></li>
                        <li className="nav-item3"><NavLink to="#" className="nav-NavLink NavLink-body-emphasis text-white p-2 text-decoration-none">Help and Support</NavLink></li>
                        
                    </ul>
                    
                </div>
            </nav>
            <header className="bg-warning pb-2">
                <div className="container d-flex flex-wrap justify-content-center">
                    
                    <NavLink to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto NavLink-body-emphasis text-decoration-none">

                       
                    </NavLink>
                    <span className=" text-light "><h1>Daraz</h1></span>
                    <form className="col-6 " role="search">
                     <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                     </form>
                        <ul className="nav">
                        <li className="nav-item5"><NavLink to="/login" className=" btn btn-success text-white nav-NavLink   ">Login</NavLink></li>
                        <li className="nav-item6"><NavLink to="/register" className=" btn btn-success text-white nav-NavLink  ">Sign up</NavLink></li>
               
                    </ul>
                             
                    
                </div>
            </header>
        </>
    )
}

export default Header