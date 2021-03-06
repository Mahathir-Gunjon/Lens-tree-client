import React from 'react';
import './Home.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div className='hero banner-bg h-screen bg-accent relative text-white'>
                <div className='hero-content flex-col lg:flex-row'>
                    <div>
                        <p
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='text-xl'
                        >
                            Best Quality
                        </p>
                        <h1
                            data-aos='fade-right'
                            data-aos-delay='400'
                            data-aos-duration='900'
                            className='text-5xl font-bold'
                        >
                            We are providing Professional Lenses with trusted products
                        </h1>
                        <p
                            data-aos='fade-right'
                            data-aos-delay='600'
                            data-aos-duration='800'
                            className='py-6 max-w-xl'
                        >
                            tools for your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
                        </p>
                        <button
                            data-aos='zoom-in'
                            data-aos-delay='1300'
                            className='btn btn-primary'
                        >
                            Get Started
                        </button>
                    </div>
                    <div className='h-[60vh] lg:w-3/6 shrink-0 flex justify-center items-center'>
                        <img src="https://i.ibb.co/KrPFhMQ/Untitlederts-design.png" className='rounded-lg' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;