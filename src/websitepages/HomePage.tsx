import { Button } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[300px] border border-emerald-500 md:min-h-[700px] bg-dark-bg">
      {/* The div below contains the image shown on this page */}
      <div className="relative w-full lg:w-1/2 min-h-[100px] md:min-h-[250px] lg:min-h-[230px] flex items-center justify-center overflow-hidden">
        {/* This is the large-screen-size image */}
        <img
          className="absolute hidden lg:flex h-full w-full object-cover rounded-t-full m-2"
          src="/Designer.jpeg"
          alt="Example"
        />
        {/* This is the small-screen-size image */}
        <img
          className="absolute lg:hidden h-full w-full object-cover rounded-t-full lg:rounded-none transform scale-y-[-1] mb-10"
          src="/Inverted-Designer-Image.png"
          alt="Example"
          style={{ objectPosition: "top" }}
        />
      </div>

      {/* This next div contains the logo text and buttons that appear on the right side of the screen */}

      <div className="w-full lg:w-1/2 overflow-y-auto flex flex-col items-center justify-center text-sm lg:text-lg mt-10 mr-2">
        <img
          className="w-auto max-w-full max-h-24 lg:max-h-30 mx-auto"
          src="/AWSLogo.png"
          alt="Example"
        />
        <p className="mt-6 text-center mb-2">COMMUNITY</p>
        <p className="text-center mb-2">--------Kenya--------</p>
        <p className="text-center text-balance mb-2">
          Pirate ipsum quarter aft yawl walk the plank Shiver me timbers Blimey
          spyglass bring a spring upon her cable rope's end nipper. Boom yardarm
          jury mast quarter coffer long clothes tack gangplank topgallant avast.
          Broadside maroon Jack Ketch coxswain piracy gibbet cutlass warp
          spirits weigh anchor.
        </p>
        <p className="text-center text-balance mb-2">
          Pirate ipsum quarter aft yawl walk the plank Shiver me timbers Blimey
          spyglass bring a spring upon her cable rope's end nipper. Boom yardarm
          jury mast quarter coffer long clothes tack gangplank topgallant avast.
          Broadside maroon Jack Ketch coxswain piracy gibbet cutlass warp
          spirits weigh anchor.
        </p>

        <p className="text-center text-balance mb-2">
          Pirate ipsum quarter aft yawl walk the plank Shiver me timbers Blimey
          spyglass bring a spring upon her cable rope's end nipper. Boom yardarm
          jury mast quarter coffer long clothes tack gangplank topgallant avast.
          Broadside maroon Jack Ketch coxswain piracy gibbet cutlass warp
          spirits weigh anchor.
        </p>
        <div className="flex space-x-12 mt-6">
          <Button className="bg-accent">Become A Member</Button>
          <Button className="bg-accent">Become A Sponsor</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
