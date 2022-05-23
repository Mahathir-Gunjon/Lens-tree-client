import React from 'react';

const BusinesssSummery = () => {
    return (
        <div className='py-32 bg-green-50'>
            <div className='w-full lg:w-5/6 mx-auto'>
                <div>
                    <h1 className="text-5xl text-center font-semibold text-secondary mb-5">Millions Business Trust US</h1>
                    <p className="text-2xl text-center text-black font-semibold">Millions Business Trust US</p>
                    <p className="text-6xl text-center font-semibold text-secondary mt-[-100px]">______________ __ ____</p>
                </div>
                <div>
                    <div className="flex flex-wrap justify-center mt-28">
                        <div className="w-full lg:w-3/12 p-4 flex justify-center">
                            <div class="card w-72">
                                <figure class="px-10 pt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="text-5xl font-extrabold">72</h2>
                                    <h2 class="text-2xl text-secondary">Countries</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 p-4 flex justify-center">
                            <div class="card w-72">
                                <figure class="px-10 pt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="text-5xl font-extrabold">932</h2>
                                    <h2 class="text-2xl text-secondary">Project Completed</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 p-4 flex justify-center">
                            <div class="card w-72">
                                <figure class="px-10 pt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="text-5xl font-extrabold">432</h2>
                                    <h2 class="text-2xl text-secondary">Happy Clients</h2>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-3/12 p-4 flex justify-center">
                            <div class="card w-72">
                                <figure class="px-10 pt-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="text-5xl font-extrabold">672</h2>
                                    <h2 class="text-2xl text-secondary">Feedbacks</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-20">
                        <div class="stats glass rounded-sm text-primary-content shadow-2xl lg:p-10">
                            <div class="stat">
                                <div class="stat-title">
                                    <h1 className="text-5xl text-secondary font-semibold mb-7">Have any question about us? or 
                                    <br />
                                    Get a product request?</h1>
                                    <h1 className="text-3xl text-black">Dont hesitet to contact us</h1>
                                </div>
                            </div>
                            <div class="stat flex items-center">
                                <div class="stat-actions">
                                    <button class="btn btn-lg btn-secondary mx-3 shadow-md">Withdrawal</button>
                                    <button class="btn btn-lg btn-accent mx-3 shadow-md">deposit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinesssSummery;