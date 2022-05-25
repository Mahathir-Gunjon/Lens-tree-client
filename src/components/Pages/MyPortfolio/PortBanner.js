import React from 'react';

const PortBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-green-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="mx-auto">
                        <img className="shrink-0 lg:w-5/6" src="https://i.ibb.co/x3vmtgG/Untitled-fxghjghddesign4111.png" alt='' />
                    </div>
                    <div className="w-full">
                        <h1 className="text-5xl font-bold">Mahathir <span>Mohammad</span></h1>
                        <p className="py-6 text-3xl">I'm a Front-end web developer.</p>
                        <button className="btn btn-secondary">Get Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortBanner;