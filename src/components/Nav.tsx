import { Link, useHref } from "react-router-dom"

const linkList: ILinkNav[] = [
    {
        title: "Reservasi Penginapan",
        to: "xxxx"
    },
    {
        title: "Tiket Wahana",
        to: "/infoticket"
    },
]

export default function Nav() {
    return (
        <div className="nav-wrapper">
            <nav>
                <Link to={"/"}>
                    <img src="/logo.png" width="95" height="75" alt="" className="logo"></img>
                </Link>
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
        </div>
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
