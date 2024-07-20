const Test = () => {
  return (
    // <section className="parallax border border-red-500">
    //   <div className="grid grid-col">
    //     <p className="border border-green-500 m-2">Testing This</p>
    //     <div className="flex justify-center border border-blue-500 m-2">
    //       <img src="/AWSLogo.png" alt="Example" />
    //       <p>Hello There</p>
    //     </div>
    //   </div>
    // </section>
    <section className="border border-white min-h-screen">
      <div className="grid grid-rows-2 h-full">
        <p className="border border-red-500 text-center lg:h-[700px]">
          AWS Community Kenya
        </p>
        <div className="border border-orange-700 grid grid-cols-2 lg:h-[700px] p-4 items-center justify-items-center">
          <p className="border border-green-500">
            Pirate ipsum quarter aft yawl walk the plank Shiver me timbers
            Blimey spyglass bring a spring upon her cable rope's end nipper.
            Boom yardarm jury mast quarter coffer long clothes tack gangplank
            topgallant avast. Broadside maroon Jack Ketch coxswain piracy gibbet
            cutlass warp spirits weigh anchor.
          </p>
          <p className="border border-blue-500">
            Pirate ipsum quarter aft yawl walk the plank Shiver me timbers
            Blimey spyglass bring a spring upon her cable rope's end nipper.
            Boom yardarm jury mast quarter coffer long clothes tack gangplank
            topgallant avast. Broadside maroon Jack Ketch coxswain piracy gibbet
            cutlass warp spirits weigh anchor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Test;
