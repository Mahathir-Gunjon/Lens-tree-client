import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import useReviews from "../../../Hooks/useReviews";

const Reviews = () => {

    const [reviews] = useReviews()

    const recentReviews = [...reviews].reverse();

    return (
        <>
            <div className="my-10">
                <h1 className="text-4xl text-center text-secondary font-semibold">Reviews</h1>
                <p className="text-xl text-center">What Our Customer Feel About us</p>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper my-20"
            >
                {
                    recentReviews.map(review => <SwiperSlide key={review._id}>
                        <div className="card w-96 bg-gray-50 shadow-xl">
                            <figure className="px-10 pt-12">
                                <img src={review.user} alt="Shoes" className="rounded-xl mt-[-20px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p>{review.description}</p>
                                <h2 className="card-title">Rating: {review.rating}⭐️</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
};

export default Reviews;