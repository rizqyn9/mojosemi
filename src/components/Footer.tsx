import { SiWhatsapp } from "react-icons/si";
import { SiMinutemailer } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";

export function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="container-bottom">
          <div className="row kantor-kami">
            <b>Kantor Kami</b>
            <p>
              Jl. Raya Sarangan Jl. Cemoro Sewu No.Km. 5, Kali Jumok, Sarangan,
              Kec. Plaosan, Kabupaten Magetan, Jawa Timur 63361
            </p>
          </div>

          <div className="row">
            <b>Kontak</b>
            <a href="https://wa.me/628113783000" target="_blank" rel="noreel">
              <p>
                <SiWhatsapp /> 0811-3783-000
              </p>
            </a>
            <a
              href="https://mailto:mojosemiforestpark@gmail.com"
              target="_blank"
              rel="noreel"
            >
              <p>
                <SiMinutemailer /> mojosemiforestpark@gmail.com
              </p>
            </a>
          </div>
          <div className="row">
            <b>Media Sosial</b>
            <a
              href="https://www.instagram.com/mojosemiforestpark"
              target="_blank"
              rel="noreel"
            >
              <p>
                <SiInstagram /> @mojosemiforestpark
              </p>
            </a>
            <a
              href="https://www.facebook.com/mojosemidinosauruspark"
              target="_blank"
              rel="noreel"
            >
              <p>
                <SiFacebook /> Mojosemi Forest Park
              </p>
            </a>
          </div>
        </div>
        <div className="copyright"> Copyright Mojosemi Forest Park @2021</div>
      </div>
    </footer>
  );
}

interface IListFooterItem {
  title: string;
}

function ListFooterContainer() {
  return (
    <div className="footer-item-container">
      <h2>afdfdsfsfa</h2>
    </div>
  );
}
