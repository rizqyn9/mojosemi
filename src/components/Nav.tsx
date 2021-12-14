import React from 'react'


const links: string[] = ["Menu1", "Menu2"]
export default function Nav() {
    return (
        <nav>
            <div className="logo">Mojosemi</div>
            <div className="nav-link-container">
                {
                    links.map((val, i) => <a key={i}>{val}</a>)
                }
            </div>
        </nav>
    )
}
