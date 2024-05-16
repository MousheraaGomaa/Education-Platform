import Slider from "react-slick";
import './slick.css';
const Slick = ({ settings  ,updateSliderRef, slickItems }) => {

  return (
    <div className="slick-container">
      <Slider
        {...settings}
        ref={slider => {
          updateSliderRef(slider)
        }}
      >
        {
          slickItems.map((item, index) => {
            return (
              <div className='px-2' key={index}>
                {
                  item
                }
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default Slick;