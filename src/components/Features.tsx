import { useState, useEffect } from 'react';
import { Crown, Flame, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: "Premium Hookahs & Setups",
    description: "We carry top-of-the-line pipes including Aeon Lounge, Vyro Versa, Khalil Mamoon, and more for the ultimate smoking experience."
  },
  {
    icon: Flame,
    title: "Exotic Flavor Menu",
    description: "Enjoy a vast array of shisha flavors, including rare imported blends and custom mixes crafted by our expert staff."
  },
  {
    icon: Heart,
    title: "Cozy, Upscale Ambience",
    description: "Relax in our carefully designed space with dim lighting, comfortable seating, and ambient music creating the perfect lounge vibe."
  },
  {
    icon: Users,
    title: "Attentive Service",
    description: "Our knowledgeable, friendly staff provide personalized recommendations and ensure your visit is enjoyable from start to finish."
  }
];

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleFeatures(prev => {
        if (prev.length < features.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Why Choose Moon Lounge?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Experience the finest in hookah culture with our premium offerings and exceptional service.
          </p>
        </div>

        {/* Creative animated layout */}
        <div className="relative">
          {/* Central circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full border-2 border-white/30 animate-pulse hidden lg:block">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">Moon</span>
            </div>
          </div>

          {/* Features arranged in a creative pattern */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group ${
                index % 2 === 0 ? 'md:justify-self-end md:mr-8 lg:mr-20' : 'md:justify-self-start md:ml-8 lg:ml-20'
              } ${
                visibleFeatures.includes(index) 
                  ? index % 2 === 0 
                    ? 'animate-slide-in-left' 
                    : 'animate-slide-in-right'
                  : 'opacity-0'
              }`}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20 max-w-md">
                <div className="bg-white/10 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <feature.icon size={36} className="text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-white mb-4 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light transition-colors">
                  {feature.description}
                </p>
              </div>
              
              {/* Connecting lines for desktop */}
              <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2">
                <div className={`w-16 h-0.5 bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'from-transparent to-white/30 -right-8 lg:-right-16' 
                    : 'from-white/30 to-transparent -left-8 lg:-left-16'
                } absolute`}></div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="mt-20 bg-white/5 rounded-2xl p-8 border border-white/20 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-semibold text-white mb-4 text-center">Beverages & Refreshments</h3>
          <p className="text-gray-300 text-center leading-relaxed max-w-4xl mx-auto font-light">
            In addition to shisha, Moon Lounge offers a full café-style drink menu. Sip on barista-made coffees and teas, or enjoy refreshing juices and mocktails. From energizing Red Bull and Barbican to fresh mango or orange juice and mint mojitos, we have the perfect beverage to complement your hookah session.
          </p>
        </div>
      </div>
    </section>
  );
}