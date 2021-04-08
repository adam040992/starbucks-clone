import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Example } from './Example';
import { selectUser } from './features/userSlice';
import FindAStore from './FindAStore';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import './Header.css';
import LogOutButton from './LogOutButton';

function Header({ menuPage }) {
    const user = useSelector(selectUser);

    return (
        <div className={`header ${menuPage && 'header__menuPage'}`}>
            <div className="header__left">
                <Link className="header__logo" to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks_icon" />
                    
                </Link>
                <Link className="header__link" to="/menu">
                    Menu
                </Link>
                <Link className="header__link" >Rewards</Link>
                <Link className="header__link" >Gift Cards</Link>
            </div>
            
            <div className="header__right">
                <Example />
                <FindAStore />
                {/* USER HERE */}
                {!user ? (
                    <>
                    <Link to='/account/signin'>
                        <SignInButton />
                    </Link>
                    <Link to='/account/create'>
                        <SignUpButton />
                    </Link>
                    </>
                ) : (
                    <div className="header__logout">
                        {menuPage ? <LogOutButton /> : <Link to="/menu">Order Now</Link>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header

