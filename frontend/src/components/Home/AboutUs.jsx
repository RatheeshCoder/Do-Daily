import React from 'react';

const AboutSection = () => {
    return (
        <div id="about" className="relative mt-16 overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                    </svg>

                    <div className="pt-1"></div>

                    <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="my-6 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                                About me
                            </h2>

                            <p>
                                Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                                volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                                ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                                posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                                velit. Mauris in maximus eros.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="object-cover object-top w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" alt="" />
            </div>
        </div>
    );
}

export default AboutSection;
