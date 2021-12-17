import { CardLink, ICardLink } from "../components/Card";
import { Hero } from "../components/Hero";

export default function Home() {
    return (
        <div id='home'>
            <Hero/>
            <HomeCardSection {...Promo}/>
            <HomeCardSection {...LayananKami}/>
        </div>
    )
}

interface IHomeCardSection {
    title: string;
    homeCard : ICardLink[]
}

function HomeCardSection(props: IHomeCardSection) {
    return (
        <section className="card-section">
            <h2 className="card-section__title">{props.title}</h2>
            <div className="home-card-section">
                {
                    props.homeCard.map((val, i) => {
                        return <CardLink {...val} key={i}/>
                    })
                }
            </div>
        </section>
    )
}


const Promo: IHomeCardSection = {
    title: "Promo Tahun Baru",
    homeCard : [
        {
            title: "SOON !",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: ""
        },
        {
            title: "MODERN CAMP",
            bgImgPath: "PA2.jpg",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "SOON !",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: ""
        },
    ]
}

const LayananKami: IHomeCardSection = {
    title: "Layanan Kami",
    homeCard : [
        {
            title: "FAMILY CAMP",
            bgImgPath: "LK1.jpg",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "DINO SHOW",
            bgImgPath: "LK2.jpg",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "WISATA VIRTUAL",
            bgImgPath: "LK3.jpg",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "SOON !",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: ""
        },
    ]
}
