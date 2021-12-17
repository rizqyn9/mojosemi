import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Hero() {
    return (
        <Carousel>
            <CarouselItem imgPath="logo.png"/>
            <CarouselItem imgPath="sampul.jpg"/>
        </Carousel>
    )
}

interface ICarouselItem {
    imgPath: string;
}

function CarouselItem(props: ICarouselItem) {
    return (
        <div 
            className="img-container" 
            style={{background: `url(${props.imgPath})`}}>
        </div>
    )
}