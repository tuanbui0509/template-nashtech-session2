import React from 'react'
import logo from './Logo.png'
import './LeftBar.css'
import { Link } from 'react-router-dom'
function LeftBar() {
    return (
        <div className='left-bar'>
            <div className='left-bar__header'>
                <img className='left-bar__logo' src={logo}>
                </img>
                <h5 className='left-bar__title'>Online Asset Management</h5>
            </div>
            <div className='left-bar__menu'>
                <ul className='left-bar__list'>
                    <Link className='left-bar__link' to='/'>
                        <li className='left-bar__item'>Home</li>
                    </Link>
                    <Link className='left-bar__link' to='/manage-user'>
                        <li className='left-bar__item'>Manage User</li>
                    </Link>
                    <Link className='left-bar__link' to='/manage-asset'>

                        <li className='left-bar__item'>Manage Asset</li>
                    </Link>
                    <Link className='left-bar__link' to='/manage-assignment'>
                        <li className='left-bar__item'>Manage Assignment</li>
                    </Link>
                    <Link className='left-bar__link' to='/request'>
                        <li className='left-bar__item'>Request for Returning</li>
                    </Link>
                    <Link className='left-bar__link' to='/report'>
                        <li className='left-bar__item'>Report</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
