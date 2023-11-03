import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Portfolio() {
  return (
    <div className="bg-[#020509] text-white">
        <div className="w-4/5 mx-auto py-20">
            <h3 className="text-green text-xl font-semibold ">My Recent Portfolio</h3>
            <h2 className="text-5xl font-bold pb-10">Elevate your brand to new heights<br />with our portfolio expertise</h2>
        </div>
        <div>
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              transitionTime={1000}
            >
              <div>
                <img src="/images/image3.png" alt="portfolio" />
              </div>
              <div>
                <img src="/images/image4.png" alt="portfolio" />
              </div>
              <div>
                <img src="/images/image5.png" alt="portfolio" />
              </div>
              <div>
                <img src="/images/image6.png" alt="portfolio" />
              </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Portfolio
