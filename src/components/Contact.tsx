export interface IContactItem {
    imgPath: string;
    to: string;
}

export function ContactItem(props: IContactItem) {
    return (
        <div className="contact-item-container">
            <a href={props.to}>
                <img src={props.imgPath} />
            </a>
        </div>
    )
}