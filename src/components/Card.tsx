import { Link } from "react-router-dom";

export interface IBaseCard {
    title: string;
    bgImgPath: string;
    subTitle: string;
}

export function BaseCard(props: IBaseCard) {
    return (
        <div
            className="card-container"
            style={{
                background: `url(${props.bgImgPath})`
            }}
        >
        <div className="card-container__content">
            <h2 className="card-container__title">{props.title}</h2>
            <p className="card-container__text">{props.subTitle}</p> 
        </div>
    </div>
    )
}


export interface ICardLink extends IBaseCard{
    link: string;
}

export function CardLink(props: ICardLink) {
    return (
        <Link to={props.link}>   
            <BaseCard {...props}/>
        </Link>
    )
}