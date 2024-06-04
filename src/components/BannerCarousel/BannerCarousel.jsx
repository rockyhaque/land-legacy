import { Carousel } from 'react-responsive-carousel';

const BannerCarousel = () => {
    return (
        <div>
           <Carousel>
                <div>
                    <img src="https://i.ibb.co/FXkG0bD/ricardo-gomez-angel-F2i-CP-knaj8-unsplash.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/QK4cxS9/caleb-maxwell-Vex-Huc-E8a-Zk-unsplash.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/gwNb5cd/zoltan-tasi-Kl-NNqv-HCgw-unsplash.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/Kr3NVLt/boudewijn-boer-q-T515-Jd-ZNy8-unsplash.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> 
        </div>
    );
};

export default BannerCarousel;
