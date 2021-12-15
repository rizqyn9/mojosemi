import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Hero() {
    return (
        <Carousel>
            <CarouselItem/>
            <CarouselItem/>
        </Carousel>
    )
}

interface ICarouselItem {
    imgPath?: string;
}

function CarouselItem(props: ICarouselItem) {
    return (
        <div 
            className="img-container" 
            style={{background: `url(${props.imgPath ? props.imgPath : 'logo.png'})`}}>
        </div>
    )
}