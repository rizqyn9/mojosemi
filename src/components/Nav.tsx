import { Link } from "react-router-dom"

const linkList: ILinkNav[] = [
    {
        title: "Menu1",
        to: "/menu1"
    },
    {
        title: "Menu2",
        to: "/menu2"
    }
]

export default function Nav() {
    return (
        <nav>
            <img src="logo.png" width="95" height="75" alt="" className="logo"></img>
            <div className="nav-link-container">
                {
                    linkList.map((val, i) => {
                        return <LinkNav 
                                    key={i}
                                    title={val.title}
                                    to={val.to}
                                />
                    })
                }
            </div>
        </nav>
    )
}

interface ILinkNav {
    title: string;
    to: string;
}

function LinkNav(props: ILinkNav) {
    return (
        <Link to={props.to}>
            <div className="link-nav">
                {props.title}
            </div>
        </Link>
    )
}
