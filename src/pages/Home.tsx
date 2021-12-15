import { CardLink, ICardLink } from "../components/Card";
import { Hero } from "../components/Hero";

export default function Home() {
    return (
        <div id='home'>
            <Hero/>
            <HomeCardSection {...PromosiSpesial}/>
            <HomeCardSection {...PromosiSpesial}/>
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


const PromosiSpesial: IHomeCardSection = {
    title: "Promo Akhir Tahun",
    homeCard : [
        {
            title: "haha1",
            bgImgPath: "img1.jpg",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "haha1",
            bgImgPath: "img2.jpg",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "haha1",
            bgImgPath: "img3.jpg",
            link: "",
            subTitle: "Pesan Sekarang"
        },
    ]
}
