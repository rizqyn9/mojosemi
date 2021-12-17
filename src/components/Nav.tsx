import { Link } from "react-router-dom"

const linkList: ILinkNav[] = [
    {
        title: "HARGA TIKET & JADWAL",
        to: "/infotiket.html"
    },
    {
        title: "BELI TIKET",
        to: "/beli.html"
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
