import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Hero() {
    return (
        <Carousel>
            {/* <CarouselItem imgPath="logo.png"/> */}
            <CarouselItem imgPath="sampul1.jpg"/>
            <CarouselItem imgPath="sampul2.jpg"/>
            <CarouselItem imgPath="sampul3.jpg"/>
        </Carousel>
    )
}

interface ICarouselItem {
    imgPath: string;
}

function CarouselItem(props: ICarouselItem) {
    return (
        <div className="img-container" >
            <img src={props.imgPath}/>
        </div>
    )
}