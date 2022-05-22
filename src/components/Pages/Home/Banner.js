import React from 'react';
import './Home.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div class='hero banner-bg h-screen lg:h-[70vh] bg-accent relative'>
                <div class='hero-content flex-col lg:flex-row'>
                    <div>
                        <p
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-delay='200'
                            className='text-xl'
                        >
                            Best Quality tools
                        </p>
                        <h1
                            data-aos='fade-right'
                            data-aos-delay='400'
                            data-aos-duration='900'
                            class='text-5xl font-bold'
                        >
                            Professional tools for your business
                        </h1>
                        <p
                            data-aos='fade-right'
                            data-aos-delay='600'
                            data-aos-duration='800'
                            class='py-6 max-w-xl'
                        >
                            tools for your business. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.
                        </p>
                        <button
                            data-aos='zoom-in'
                            data-aos-delay='1300'
                            class='btn btn-primary'
                        >
                            Get Started
                        </button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src="" class='h-full' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;