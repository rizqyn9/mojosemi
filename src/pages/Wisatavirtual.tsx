import { CardLink, ICardLink } from "../components/Card";
import { ContactItem, IContactItem } from "../components/Contact";

export default function WisataVirtual(){
    return (
        <section id='wisatavirtual' className="page">
            <HomeCardSection {...Wisatavirtual}/>
        </section>
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

                    })
                }
            </div>
        </section>
    )
}


const Wisatavirtual: IHomeCardSection = {
    title: "Wisata Virtual",
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
            link: "/moderncamp",
            subTitle: "Baca Selengkapnya & Pesan Sekarang >"
        },
        {
            title: "SOON !",
            bgImgPath: "logo.png",
            link: "/",
            subTitle: ""
        },
    ]
}