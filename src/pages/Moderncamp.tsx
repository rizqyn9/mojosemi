import { CardLink, ICardLink } from "../components/Card";
import { ContactItem, IContactItem } from "../components/Contact";

export default function ModernCamp(){
    return (
        <section id='moderncamp' className='page'>
            <HomeCardSection {...Moderncamp}/>
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


const Moderncamp: IHomeCardSection = {
    title: "Modern Camp",
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