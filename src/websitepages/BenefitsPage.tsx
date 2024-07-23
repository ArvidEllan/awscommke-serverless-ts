import HoverCardComponent from "@/components/HoverCardComponent";
import {
  memberBenefits,
  sponsorBenefits,
  volunteerBenefits,
} from "@/websitetexts/BenefitsPageSectionText";

const BenefitsPage = () => {
  return (
    <div className="border border-red-500 min-h-[500px] flex flex-col items-center bg-light-bg text-light-text font-thin lg:font-normal">
      <h2 className="text-center justify-center border border-white m-8 bg-main w-full md:w-3/4 lg:w-1/2 p-1 md:p-2 lg:p-4 rounded-lg">
        What Benefits Will I Get From This Community?
      </h2>
      <div>{/* <HoverCardComponent /> */}</div>
      <div className="flex flex-col lg:flex-row lg:flex-grow border border-blue-500 max-w-screen-xl w-3/4 lg:w-full">
        <div className="flex-1 p-4 border border-green-500 m-2 sm:m-4 lg:m-6 max-h-[40vh] lg:max-h-[55vh] overflow-y-auto bg-main rounded-2xl">
          {memberBenefits}
        </div>
        <div className="flex-1 p-4 border border-green-500 m-2 sm:m-4 lg:m-6 max-h-[40vh] lg:max-h-[55vh] overflow-y-auto bg-main rounded-2xl">
          {sponsorBenefits}
        </div>
        <div className="flex-1 p-4 border border-green-500 m-2 sm:m-4 lg:m-6 max-h-[40vh] lg:max-h-[55vh] overflow-y-auto bg-main rounded-2xl">
          {volunteerBenefits}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
