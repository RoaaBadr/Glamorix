import React, { useState } from 'react'
import Brand1 from '../../assets/images/brand1.jpg'
import Brand2 from '../../assets/images/brand2.jpg'
import Brand3 from '../../assets/images/brand3.jpg'
function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const imgSrc = [
    Brand1,
    Brand2,
    Brand3,
  ]
  const nextSlide = () => setActiveSlide((activeSlide + 1) % 3);
  const prevSlide = () => setActiveSlide((activeSlide - 1 + 3) % 3);

  return (
    <div className="carousel w-full h-[67vh]">
      <div className="flex w-full h-full" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
    <div className="carousel-item relative w-full flex-shrink-0">
      <img
        src={imgSrc[0]}
        className="w-full h-full object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
    <div className="carousel-item relative w-full flex-shrink-0">
      <img
        src={imgSrc[1]}
        className="w-full h-full object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
    <div className="carousel-item relative w-full flex-shrink-0">
      <img
        src={imgSrc[2]}
        className="w-full h-full object-cover"
      />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
export default Hero;