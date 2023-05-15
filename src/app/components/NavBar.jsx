import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className="over-header">
                <header>
                    <div className="headerLeft">
                        <div className="headerLeft-child">
                            <Link to="/">Главная</Link>
                        </div>
                        <div className="headerLeft-child">
                            <Link to="/blog">О блоге</Link>
                        </div>
                        <div className="headerLeft-child">
                            <Link to="/authors">Авторы</Link>
                        </div>
                    </div>
                    <div className="headerRight">
                        <Link to="/login">Стать автором</Link>
                    </div>
                </header>
            </div>
            <main className="contain">
                <Outlet />
            </main>
        </div>
    )
}

export default NavBar
