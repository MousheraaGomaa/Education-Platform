import { memo } from 'react'
import { useState, useEffect } from 'react';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import styles from './slider-controls.module.css'

const SliderControls = ({ sliderRef, currentSlide }) => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef) {
        let currentBreakPoint = sliderRef.state.breakpoint || null;
        let breakpoint = sliderRef.innerSlider.props.responsive?.find((bp) => bp.breakpoint === currentBreakPoint) || null;
        let numberOfSlides = breakpoint ? breakpoint.settings.slidesToShow : sliderRef.props.slidesToShow;
        setSlidesToShow(numberOfSlides);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sliderRef]);

  const next = () => {
    sliderRef?.slickNext();
  };
  const previous = () => {
    sliderRef?.slickPrev();
  };

  const isPrevEnabled = () => {
    if (sliderRef) {
      return currentSlide !== 0;
    }
    return false;
  }
  const isNextEnabled = () => {
    if (sliderRef) {
      let slickItemsCount = sliderRef.innerSlider.state.slideCount;
      return (slidesToShow + currentSlide) !== slickItemsCount;
    }
    return false;
  }
  return (
    <div className={`${styles['slider-navigation-btns']}`}>
      <button
        disabled={!isPrevEnabled()}
        onClick={previous}
        className={styles?.['control-button']}
      >
        <IoIosArrowBack />
      </button>
      <button
        disabled={!isNextEnabled()}
        onClick={next}
        className={styles?.['control-button']}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default memo(SliderControls);
