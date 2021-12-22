import React, { useState } from "react";
import { Link, useHref } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import classNames from "classnames";
import { atom, useAtom } from "jotai";
import { RESERVE, WA_URL } from "../pages/Infoticket";

const linkList: ILinkNav[] = [
  {
    title: "Reservasi Penginapan",
    to: `https://api.whatsapp.com/send?phone=${RESERVE}`,
    useLinkOuter: true,
  },
  {
    title: "Tiket Wahana",
    to: "/infoticket",
  },
];

const NavContext = atom<boolean>(false);

export default function Nav() {
  const [click, setClick] = useAtom(NavContext);

  const handleClick = () => setClick(!click);

  return (
    <div className="nav-wrapper">
      <nav>
        <Link to={"/"}>
          <img
            src="/logo.png"
            width="95"
            height="75"
            alt=""
            className="logo"
            onClick={() => setClick(false)}
          ></img>
        </Link>
        <div className={classNames("nav-link-container", { active: click })}>
          {linkList.map((val, i) => {
            return (
              <LinkNav
                key={i}
                title={val.title}
                to={val.to}
                onClick={handleClick}
                useLinkOuter={val.useLinkOuter}
              />
            );
          })}
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </div>
  );
}

interface ILinkNav {
  title: string;
  to: string;
  useLinkOuter?: boolean;
  onClick?: () => void;
}

function LinkNav(props: ILinkNav) {
  const [click, setClick] = useAtom(NavContext);

  const handleClick = () => {
    if (props.onClick) props.onClick();
  };

  return (
    <>
      {props.useLinkOuter ? (
        <a href={props.to} target="_blank" rel="noreel">
          <div
            className={classNames("link-nav", { active: click })}
            onClick={handleClick}
          >
            {props.title}
          </div>
        </a>
      ) : (
        <Link to={props.to}>
          <div
            className={classNames("link-nav", { active: click })}
            onClick={handleClick}
          >
            {props.title}
          </div>
        </Link>
      )}
    </>
  );
}
