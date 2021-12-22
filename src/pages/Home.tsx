import { CardLink, ICardLink } from "../components/Card";
import { ContactItem, IContactItem } from "../components/Contact";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <HomeCardSection {...Promo} />
      <hr />
      <HomeCardSection {...LayananKami} />
      <ContactSection />
    </div>
  );
}

interface IHomeCardSection {
  title: string;
  homeCard: ICardLink[];
}

function HomeCardSection(props: IHomeCardSection) {
  return (
    <section className="card-section">
      <h2 className="card-section__title">{props.title}</h2>
      <div className="home-card-section">
        {props.homeCard.map((val, i) => {
          return <CardLink {...val} key={i} />;
        })}
      </div>
    </section>
  );
}

function ContactSection() {
  return <section className="contact-section"></section>;
}

const Promo: IHomeCardSection = {
  title: "Promo Tahun Baru",
  homeCard: [
    {
      title: "SOON !",
      bgImgPath: "logo.png",
      link: "/",
      subTitle: "",
    },
    {
      title: "MODERN CAMP",
      bgImgPath: "PA2.jpg",
      link: "/moderncamp",
      subTitle: "Baca Selengkapnya & Pesan Sekarang >",
    },
    {
      title: "SOON !",
      bgImgPath: "logo.png",
      link: "/",
      subTitle: "",
    },
  ],
};

const LayananKami: IHomeCardSection = {
  title: "Layanan Kami",
  homeCard: [
    {
      title: "FAMILY CAMP",
      bgImgPath: "LK1.jpg",
      link: "/familycamp",
      subTitle: "Baca Selengkapnya & Pesan Sekarang >",
    },
    {
      title: "DINO SHOW",
      bgImgPath: "LK2.jpg",
      link: "/dinoshow",
      subTitle: "Baca Selengkapnya & Pesan Sekarang >",
    },
    {
      title: "WISATA VIRTUAL",
      bgImgPath: "LK3.jpg",
      link: "/wisatavirtual",
      subTitle: "Baca Selengkapnya & Pesan Sekarang >",
    },
    {
      title: "SOON !",
      bgImgPath: "logo.png",
      link: "/",
      subTitle: "",
    },
  ],
};

const ContactList: IContactItem[] = [
  {
    imgPath: "facebook.png",
    to: "https://facebook.com/mojosemidinosauruspark",
  },
  {
    imgPath: "instagram.png",
    to: "https://instagram.com/mojosemiforestpark",
  },
  {
    imgPath: "whatsapp.png",
    to: "https://wa.me/628113783000",
  },
];

const HubungiKami: IHomeCardSection = {
  title: "Hubungi Kami",
  homeCard: [
    {
      title: "",
      bgImgPath: "facebook.png",
      link: "/",
      subTitle: "",
    },
    {
      title: "",
      bgImgPath: "instagram.png",
      link: "/",
      subTitle: "",
    },
    {
      title: "",
      bgImgPath: "whatsapp.png",
      link: "",
      subTitle: "",
    },
  ],
};
