
const Home = () => {
  return (
    <div className="border border-red-500 min-h-screen">
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-center justify-end">
          <div className="relative overflow-hidden w-64 h-32 sm:w-80 sm:h-40 md:w-96 md:h-48 lg:w-[850px] lg:h-[700px]">
            <img
              className="absolute w-full h-full lg:w-[850px] lg:h-[900px] object-cover rounded-full"
              src="/Designer.jpeg"
              alt="Example"
            />
          </div>
        </div>
        <div className="flex flex-col items-center border border-blue-500 mt-12">
          <img
            className="w-auto max-w-full max-h-32"
            src="/AWSLogo.png"
            alt="Example"
          />
          <p className="mt-6">COMMUNITY</p>
          <p className="p-2">--------Kenya--------</p>
          <p className="text-sm text-center text-balance mb-2">
            Pirate ipsum quarter aft yawl walk the plank Shiver me timbers
            Blimey spyglass bring a spring upon her cable rope's end nipper.
            Boom yardarm jury mast quarter coffer long clothes tack gangplank
            topgallant avast. Broadside maroon Jack Ketch coxswain piracy gibbet
            cutlass warp spirits weigh anchor.
          </p>
          <p className="text-sm text-center text-balance mb-2">
            Pirate ipsum quarter aft yawl walk the plank Shiver me timbers
            Blimey spyglass bring a spring upon her cable rope's end nipper.
            Boom yardarm jury mast quarter coffer long clothes tack gangplank
            topgallant avast. Broadside maroon Jack Ketch coxswain piracy gibbet
            cutlass warp spirits weigh anchor.
          </p>
          <p className="text-sm text-center text-balance">
            Pirate ipsum quarter aft yawl walk the plank Shiver me timbers
            Blimey spyglass bring a spring upon her cable rope's end nipper.
            Boom yardarm jury mast quarter coffer long clothes tack gangplank
            topgallant avast. Broadside maroon Jack Ketch coxswain piracy gibbet
            cutlass warp spirits weigh anchor.
          </p>

          <div className="flex flex-row gap-32 mt-4">
            <button>Become a Member</button>
            <button>Become a Sponsor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

