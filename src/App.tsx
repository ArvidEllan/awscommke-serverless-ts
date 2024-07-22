import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Home from "./Home";
import Text from "./Test";

const App: React.FC = () => {
  const background = {
    image: "/plain-white-image.png",
    translateY: [0, 50] as [number, number],
    opacity: [1, 0.3] as [number, number],
    scale: [1.05, 1] as [number, number],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30] as [number, number],
    scale: [1, 1.05] as [number, number],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex items-center justify-center">
        <Home />
      </div>
    ),
  };

  const gradientOverlay = {
    opacity: [0, 0.9] as [number, number],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, gradientOverlay]}
        className="absolute inset-0 h-full w-full"
      />
      <section className="relative z-10">
        <Text />
      </section>
    </ParallaxProvider>
  );
};

export default App;
