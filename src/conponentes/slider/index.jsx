/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import {useRef,memo} from 'react';
import './sytle.css'

const Slider = memo(({children}) => {
  const sliderContentRef = useRef(null);
  const startX = useRef(null);
  const scrollLeft = useRef(null);

  const onHandleClickNext = () => {
      sliderContentRef.current.scrollLeft += sliderContentRef.current.children[0].offsetWidth;
  }

  const onHandleClickPrevius = () => {
      sliderContentRef.current.scrollLeft -= sliderContentRef.current.children[0].offsetWidth;
  }

  const onHandleTouchStart = (event) => {
      startX.current = event.touches[0].clientX - sliderContentRef.current.offsetLeft;
      scrollLeft.current = sliderContentRef.current.scrollLeft;
  }

  const onHandleTouchEnd = (event) => {
      event.preventDefault();
  }

  const onHandleTouchMove = (event) => {
      event.preventDefault();
      const x = event.touches[0].clientX - sliderContentRef.current.offsetLeft;
      const walk = (x - startX.current) * 3;
      sliderContentRef.current.scrollLeft = scrollLeft.current - walk;
  }
  

    return (
      <div className="slider">
        <button onClick={onHandleClickPrevius} type="button" className="previus-btn btn-slider">
          &lt;
        </button>
        <div 
          ref={sliderContentRef} 
          className="slider-container"
          onTouchStart={onHandleTouchStart}
          onTouchEnd={onHandleTouchEnd}
          onTouchMove={onHandleTouchMove}
          >
          {children}
        </div>
        <button onClick={onHandleClickNext} type="button" className="next-btn btn-slider">
          &gt;
        </button>
      </div>
    );
  }
);
export default Slider