// App.jsx
import React, { useRef, useEffect } from 'react';
import { logosData } from '../../Data/data';

const ImgSlider = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    if (logosRef.current) {
      let ul = logosRef.current;
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="relative antialiased font-inter">
      <main className="relative flex flex-col justify-center overflow-hidden bg-indigo-600">
        <div className="w-full max-w-5xl px-4 mx-auto py-14 md:px-6">
          <div className="text-center">
            {/* Logo Carousel animation */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {logosData.map((logo, index) => (
                  <li key={index}>
                    <img src={logo.src} alt={logo.alt} />
                  </li>
                ))}
              </ul>
            </div>
            {/* End: Logo Carousel animation */}
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default ImgSlider;
