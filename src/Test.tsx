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
    <div className="border border-white min-h-screen grid grid-rows-3">
      <div className="flex items-center justify-center border border-red-500 text-center">
        AWS Community Kenya
      </div>
      <div className="border border-green-500 flex items-center justify-center">
        Card1
      </div>
      <div className="border border-blue-500 flex items-center justify-center">
        Card2
      </div>
    </div>
  );
};

export default Test;
