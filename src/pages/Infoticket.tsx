import classNames from "classnames";
import { atom, useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { ticketsContent } from "../Data";

export default function InfoTicket() {
  return (
    <section id="infoticket">
      <h1 className="title">TIKET WAHANA</h1>
      <TicketContainer />
    </section>
  );
}

function TicketContainer() {
  return (
    <div className="ticket-container">
      {ticketsContent.map((val, i) => (
        <TicketItem key={i} {...val} />
      ))}
    </div>
  );
}

export interface ITicketItem {
  imgPath: string;
  title: string;
  date: string;
  price: string;
  link: string;
  desc: string;
}

function TicketItem(props: ITicketItem) {
  const [isActive, setIsActive] = useAtom(overlayCtx || false);
  const [data, setData] = useAtom(overlayItemCtx);

  const handleBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(true);
    setData(props);
  };

  return (
    <div className="ticket-item-container">
      <div className="img-container">
        <img src={props.imgPath} />
      </div>
      <div className="content">
        <p className="ticket__title">{props.title}</p>
        <p className="price">
          <span className="price__ticket">Rp {props.price} / Tiket</span>
          <span className="price__date">{props.date}</span>
        </p>
        <p className="desc">{props.desc}</p>
      </div>
      <div className="btn-container">
        <button onClick={handleBtnClick}>Beli</button>
      </div>
    </div>
  );
}

const overlayCtx = atom<boolean>(false);
const overlayItemCtx = atom<ITicketItem | null>(null);
export function Overlay() {
  const [isActive, setIsActive] = useAtom(overlayCtx);
  const [data, setData] = useAtom(overlayItemCtx);
  const [count, setCount] = useState(0);
  const [link, setLink] = useState<null | string>(null);

  useEffect(() => {
    setCount(0);
  }, [data, isActive]);

  useEffect(() => {
    document.body.classList.toggle("prevent-scroll", isActive);
  }, [isActive]);
  enum TypeButton {
    INCREMENT,
    DECREMENT,
  }

  const clickHandler = (type: TypeButton) => {
    if (type == TypeButton.DECREMENT && count == 0) return;
    else setCount(count - 1);

    if (type == TypeButton.INCREMENT) setCount(count + 1);
  };

  const closeHandler = () => {
    if (!isActive) return;
    setIsActive(false);
  };

  const buyHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (count <= 0 || !data) {
      e.preventDefault();
      return;
    }
    let res = generateLink({
      count,
      ...data,
    });
    setLink(res);
  };

  return (
    <div className={classNames("overlay-container", { active: isActive })}>
      <div className="container-wrapper">
        <button className="btn-close" onClick={closeHandler}>
          X
        </button>
        <div className="img-container">
          <img className="overlay__img" src={data?.imgPath} />
        </div>
        <h1 className="title">{data?.title}</h1>
        <p className="price">Rp {data?.price} / Tiket</p>
        <p>Jumlah Tiket</p>
        <div className="btn-container">
          <button onClick={() => clickHandler(TypeButton.DECREMENT)}>-</button>
          <p>{count}</p>
          <button onClick={() => clickHandler(TypeButton.INCREMENT)}>+</button>
        </div>
        <a
          className={classNames("btn-buy", { disabled: count <= 0 })}
          href={link || ""}
          target="_blank"
          onClick={buyHandler}
        >
          Beli
        </a>
      </div>
    </div>
  );
}

let numWA: string = "628113783000";
interface IGenLink {
  title: string;
  price: string;
  count: number;
}

export const WA_URL = "https://api.whatsapp.com/send?phone=";
export const RESERVE = "6282236335003";

function generateLink(props: IGenLink): string {
  let total = parseInt(props.price.replace(".", "")) * props.count;
  let msg = `
    @@ MOJOSEMI FOREST PARK
    - - - - - - - - - -
    TIKET : ${props.title}
    HARGA : ${props.price} / TIKET
    JUMLAH : ${props.count} TIKET
    TOTAL PEMBAYARAN : ${new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(total)}
    - - - - - - - - - -
    
    Hubungi Admin jika ada perubahan dalam pemesanan tiket.
    Whatsapp : 0811-3783-000

    Hubungi Admin Penginapan Untuk informasi penginapan.
    Whatsapp : 0822-3633-5003

    *BELI TIKET HANYA DI WWW.MOJOSEMIFORESTPARK.COM*
    `;

  let parseMsg = encodeURI(msg);
  return WA_URL.concat(numWA, "&text=", parseMsg);
}
