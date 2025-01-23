import { Carousel } from 'react-bootstrap';
import './CarouselStyles.css'; 

const Home = () => {
  return (
    <Carousel interval={3000} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/coffee1.jpg"
          alt="First slide"
          height={600}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/coffee2.jpg"
          alt="Second slide"
          height={600}
        />
        <Carousel.Caption>
          <p>Indulge in rich, smooth brews made from the best beans.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/coffee3.jpg"
          alt="Third slide"
          height={600}
        />
        <Carousel.Caption>
          <p>Let our skilled baristas create your perfect cup of coffee.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/coffee.jpg"
          alt="Fourth slide"
          height={600}
        />
        <Carousel.Caption>
          <p>Every sip is a moment to savor and relax.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
