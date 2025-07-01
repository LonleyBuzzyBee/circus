import React, { useState } from "react";
import Carousel from "react-multi-carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'reactstrap';
import "react-multi-carousel/lib/styles.css";
import image_1 from '../../assets/images/performing_pictures/img-1.png';
import image_2 from "../../assets/images/performing_pictures/img-2.jpg";
import image_4 from "../../assets/images/performing_pictures/img-3.jpg";
import image_5 from "../../assets/images/performing_pictures/image-5.jpg";

function Carousel_component(){

  const [showCardIndex, setShowCardIndex] = useState(null)
;
  const handleOpen = (index) =>{
    setShowCardIndex(index);
  };
  const handleClose = () =>{
    setShowCardIndex(null);
  }
  const carouselItems = [
    {image: image_2},{image: image_1},{image: image_4}
  ]
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return(
        <div className="carousel-container">
            {/* <Carousel responsive={responsive}>
                <div className="carousel-item carousel-hover-effect"><img src={image_1}/></div>
                <div className="carousel-item carousel-hover-effect"><img src={image_2}/></div>
                <div className="carousel-item carousel-hover-effect"><img src={image_4}/></div>
                <div className="carousel-item carousel-hover-effect"><img src={image_5}/></div>
            </Carousel> */}

            {/* <Carousel responsive={responsive}>
              {carouselItems.map((item,index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img className="carousel-hover-effect"src={item.image} onClick={() => handleOpen(index)}/>
                  {showCardIndex === index &&(
                    <div className="popup">
                      <Card>
                      <Button className="close-btn" onClick={handleClose}>close &times;</Button>
                      <img src={item.image}/>
                      </Card>
            
                    </div>
                  )}
                </div>
              ))}
            </Carousel> */}


            <Carousel responsive={responsive}>
              {carouselItems.map((item,index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img className="carousel-hover-effect"src={item.image}/>
             
                </div>
              ))}
            </Carousel>
        </div>
    );
} export default Carousel_component;