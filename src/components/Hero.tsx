import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/background-placeholder.jpeg"
          aria-label="Moon Lounge Toronto hookah lounge atmosphere video"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: '/background-placeholder.jpeg',
            }}
          />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
          <span className="text-white">
            Moon Lounge
          </span>
          <br />
          <span className="text-white text-3xl md:text-4xl font-light">
            Toronto
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed font-light">
          Experience premium shisha in a luxurious, upscale setting.<br />
          Where exceptional hookah meets cozy ambiance.
        </p>

        <div className="flex justify-center">
          <button 
             onClick={()=>{
                document.getElementById("location")?.scrollIntoView({behavior:"smooth"});
             }}
            className="brand-color text-white px-8 py-4 border border-white font-semibold text-lg transition-all duration-300 hover:scale-105 "
          >
            Make Reservation
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown size={32} className="text-white mx-auto" />
        </div>
      </div>
    </section>
  );
}