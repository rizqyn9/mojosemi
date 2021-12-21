import classNames from "classnames";
import { ReactNode } from "react";
import {
  SiWhatsapp,
  SiMinutemailer,
  SiInstagram,
  SiFacebook,
} from "react-icons/si";

// export function Footer() {
//   return (
//     <footer>
//       <div className="footer-wrapper">
//         <div className="container-bottom">
//           <div className="row kantor-kami">
//             <b>Kantor Kami</b>
//             <p>
//               Jl. Raya Sarangan Jl. Cemoro Sewu No.Km. 5, Kali Jumok, Sarangan,
//               Kec. Plaosan, Kabupaten Magetan, Jawa Timur 63361
//             </p>
//           </div>

//           <div className="row">
//             <b>Kontak</b>
//             <a href="https://wa.me/628113783000" target="_blank" rel="noreel">
//               <p>
//                 <SiWhatsapp /> 0811-3783-000
//               </p>
//             </a>
//             <a
//               href="https://mailto:mojosemiforestpark@gmail.com"
//               target="_blank"
//               rel="noreel"
//             >
//               <p>
//                 <SiMinutemailer /> mojosemiforestpark@gmail.com
//               </p>
//             </a>
//           </div>
//           <div className="row">
//             <b>Media Sosial</b>
//             <a
//               href="https://www.instagram.com/mojosemiforestpark"
//               target="_blank"
//               rel="noreel"
//             >
//               <p>
//                 <SiInstagram /> @mojosemiforestpark
//               </p>
//             </a>
//             <a
//               href="https://www.facebook.com/mojosemidinosauruspark"
//               target="_blank"
//               rel="noreel"
//             >
//               <p>
//                 <SiFacebook /> Mojosemi Forest Park
//               </p>
//             </a>
//           </div>
//         </div>
//         <div className="copyright"> Copyright Mojosemi Forest Park @2021</div>
//       </div>
//     </footer>
//   );
// }

export function Footer() {
  const useLinkIcon = (
    link: string,
    text: string,
    icon: ReactNode
  ): ReactNode => {
    return (
      <a href={link} target="_blank" rel="noreel" className="item-container">
        <div className="icon-container">{icon}</div>
        <p className="content">{text}</p>
      </a>
    );
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-main-content">
          <ListFooterContainer title="Kantor Kami" className="kantor-kami">
            <div className="content">
              <p>
                Jl. Raya Sarangan Jl. Cemoro Sewu No.Km. 5, Kali Jumok,
                Sarangan,
              </p>
              <p>Kec. Plaosan, Kabupaten Magetan, Jawa Timur 63361</p>
            </div>
          </ListFooterContainer>
          <ListFooterContainer title="Kontak">
            {useLinkIcon("asd", "WhatsApp", <SiWhatsapp />)}
            {useLinkIcon("asd", "WhatsApp", <SiWhatsapp />)}
          </ListFooterContainer>
          <ListFooterContainer title="Media Sosial">
            {useLinkIcon("asd", "WhatsApp", <SiWhatsapp />)}
            {useLinkIcon("asd", "WhatsApp", <SiWhatsapp />)}
          </ListFooterContainer>
        </div>
        <div className="copyright">Copyright Mojosemi Forest Park @2021</div>
      </div>
    </footer>
  );
}

interface IListFooterItem {
  title: string;
  children?: ReactNode;
  className?: string;
}

function ListFooterContainer(props: IListFooterItem) {
  return (
    <div className={classNames("footer-item-container", props.className)}>
      <h2 className="title">{props.title}</h2>
      {props.children}
    </div>
  );
}
