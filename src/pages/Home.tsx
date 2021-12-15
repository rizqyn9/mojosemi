import { CardLink, ICardLink } from "../components/Card";
import { Hero } from "../components/Hero";

export default function Home() {
    return (
        <div id='home'>
            <Hero/>
            <HomeCardSection {...PromosiAkhirTahun}/>
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


const PromosiAkhirTahun: IHomeCardSection = {
    title: "Promo Akhir Tahun",
    homeCard : [
        {
            title: "PAT 1",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "PAT 2",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "PAT 3",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
    ]
}

const PromosiSpesial: IHomeCardSection = {
    title: "Promo Spesial",
    homeCard : [
        {
            title: "PS 1",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "PS 2",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
        {
            title: "PS 3",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: "Pesan Sekarang"
        },
    ]
}
