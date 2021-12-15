import { Link } from "react-router-dom"

const links: string[] = ["Menu1", "Menu2"]

export default function Nav() {
    return (
        <nav>
            <div className="logo">Mojosemi</div>
            <div className="nav-link-container">
                {
                    links.map((val, i) => <Link to={val} key={i}>{val}</Link>)
                }
            </div>
        </nav>
    )
}
