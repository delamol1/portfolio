import React from 'react'

function Header({clickHandler}) {




    return (
        <div>
            <span className="header-my-name" >
                Alexandr Hubenko
			</span>

            <ul className="header-nav" >
                <li
                    onClick={clickHandler}
                    className="header-nav-item"
                    data-view-visibility="ABOUT">
                    About
				</li>
                <li 
                    onClick={clickHandler}
                    className="header-nav-item"
                    data-view-visibility="PORTFOLIO">
                    Portfolio
				</li>
                <li
                    onClick={clickHandler}
                    className="header-nav-item"
                    data-view-visibility="CONTACT">
                    Contact
				</li>
            </ul>
        </div>
    )
}

export default Header