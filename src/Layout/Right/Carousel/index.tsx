import React from "react";
import Swiper from "react-id-swiper";
import ImageCard from "./ImageCard";



const Carousel = ({ products }: any) => {
    const params = {
        slidesPerView: 2,
        spaceBetween: 32,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    return (
        <div className='product-detail__slider'>
            <Swiper
                {...params}
                renderNextButton={() => (
                    <button className='swiper-button-next'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            width={16}
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8.25 4.5l7.5 7.5-7.5 7.5'
                            />
                        </svg>
                    </button>
                )}
            >
                {products.map((product: any, index: number) => (
                    <div key={index}>
                        <ImageCard product={product} />
                    </div>
                ))}
            </Swiper>
        </div>
    );
};
export default Carousel;
