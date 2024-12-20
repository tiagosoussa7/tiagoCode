"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function Slide({ containerStyles, btnStyles, iconStyles }) {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <div onClick={() => swiper.slidePrev()}>
          <PiCaretLeftBold
            className={iconStyles}
            onClick={() => swiper.slidePrev()}
          />
        </div>
      </button>

      <button className={btnStyles}>
        <PiCaretRightBold
          className={iconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
}
