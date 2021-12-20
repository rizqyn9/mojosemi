import classNames from "classnames";
import { atom, useAtom} from "jotai";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";

export default function InfoTicket(){
    return (
        <div id='infoticket'>
            <h1 className="title">HARGA TIKET & JADWAL</h1>
            <TicketContainer/>
            <Footer/>
        </div>
    )
}

function TicketContainer() {
    return (
        <div className="ticket-container">
            <Overlay/>
            {
                ticketsContent.map((val,i) => <TicketItem key={i} {...val}/>)
            }
        </div>
    )
}

interface ITicketItem {
    imgPath: string;
    title: string;
    date: string;
    price: string;
    link: string;
    desc: string;
}

function TicketItem(props: ITicketItem) {
    const [isActive, setIsActive] = useAtom(overlayCtx || false)
    const [data, setData] = useAtom(overlayItemCtx)

    const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsActive(true)
        setData(props)
    }

    return (
        <div className="ticket-item-container">
            <div className="img-container">
                <img src={props.imgPath} />
            </div>
            <div className="content">
                <p className="title">{props.title}</p>
                <p className="price">Rp {props.price} <span>{props.date}</span></p>
                <p className="desc">{props.desc}</p>
            </div>
            <div className="btn-container">
                <button onClick={handleBtnClick}>Beli</button>
            </div>
        </div>
    )
}

const overlayCtx = atom<boolean>(false)
const overlayItemCtx = atom<ITicketItem | null>(null)
function Overlay() {
    const [isActive, setIsActive] = useAtom(overlayCtx)
    const [data, setData] = useAtom(overlayItemCtx)
    const [count, setCount] = useState(0)
    const [link, setLink] = useState<null | string>(null)

    useEffect(() => {
        setCount(0)
    }, [data, isActive])

    enum TypeButton {
        INCREMENT,
        DECREMENT
    }

    const clickHandler = (type: TypeButton) => {
        if(type == TypeButton.DECREMENT && count == 0) return
        else setCount(count - 1)

        if(type == TypeButton.INCREMENT) setCount(count + 1)
    }

    const closeHandler = () => {
        if(!isActive) return;
        setIsActive(false) 
    }
    
    const buyHandler = () => {
        if(!data) return;
        setLink(
            generateLink({
                count,
                ...data
            })
        )
    }

    return (
        <div className={classNames("overlay-container", {active: isActive})}>
            <div className="container-wrapper">
                <button className="btn-close" onClick={closeHandler}>X</button>
                <img src={data?.imgPath} />
                <h1 className="title">{data?.title}</h1>
                <p className="price">Rp. {data?.price}</p>
                <div className="btn-container">
                    <button onClick={() => clickHandler(TypeButton.DECREMENT)}>-</button>
                    <p>{count}</p>
                    <button onClick={() => clickHandler(TypeButton.INCREMENT)}>+</button>
                </div>
                <a className="btn-buy" href={link || ""} target="_blank" onClick={buyHandler}>Beli</a>
            </div>
        </div>
    )
}

const ticketsContent: ITicketItem[] = [
    {
        imgPath: "logo.png",
        title:"asdsa",
        date: " Senin - Jum'at",
        price: "10.000",
        link: "",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, doloremque."
    },
    {
        imgPath: "logo.png",
        title:"Test2",
        date: " Senin - Jum'at",
        price: "10.000",
        link: "",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, doloremque."
    }
] 


let tempWA = "https://api.whatsapp.com/send?phone=628985665498&text=TIKET%20%5BJUDUL%5D%0D%0AHARGA%20%3A%20%5Bprice%5D%20%2F%20tiket%0D%0AJUMLAH%20%3A%20%5Bcount%5D%20tiket"

let numWA: string = "6281327844939"
interface IGenLink {
    title: string;
    price: string;
    count: number;
}
function generateLink(props: IGenLink): string {
    let test = `https://api.whatsapp.com/send?phone=${numWA}&text=TIKET%20${props.title}%0D%0AHARGA%20%3A%20${props.price}%20%2F%20tiket%0D%0AJUMLAH%20%3A%20${props.count}%20tiket`
    console.log(test);
    return test;
}