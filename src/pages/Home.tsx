import { CardLink, ICardLink } from "../components/Card";
import { Hero } from "../components/Hero";

export default function Home() {
    return (
        <div id='home'>
            <Hero/>
            <HomeCardSection {...PromoA}/>
            <HomeCardSection {...PromoB}/>
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


const PromoA: IHomeCardSection = {
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

const PromoB: IHomeCardSection = {
    title: "Promo Spesial",
    homeCard : [
        {
            title: "PB 1",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "PB 2",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "PB 3",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
    ]
}
