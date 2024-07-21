import AvatarComponents from "./components/AvatarComponents";

const Test = () => {
  return (
    <div className="border border-red-500 min-h-screen flex flex-col">
      {/* <nav className="bg-gray-800 p-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="#about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#speakers" className="text-white hover:text-gray-300">
              Speakers
            </a>
          </li>
          <li>
            <a href="#agenda" className="text-white hover:text-gray-300">
              Agenda
            </a>
          </li>
          <li>
            <a href="#volunteers" className="text-white hover:text-gray-300">
              Volunteers
            </a>
          </li>
          <li>
            <a href="#sponsors" className="text-white hover:text-gray-300">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#venue" className="text-white hover:text-gray-300">
              Venue
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav> */}
      <div className="text-center justify-center border border-white m-8">
        AWS Community Kenya
      </div>
      <div className="flex flex-grow border border-blue-500 justify-center">
        <div className="w-1/2 p-4 border border-green-500 m-2 max-h-[80vh] overflow-y-auto">
          AWS Community Day is a dynamic event celebrating the AWS community,
          uniting cloud enthusiasts, developers, and professionals from diverse
          fields. This event highlights the expansive universe of AWS
          technologies, offering participants the chance to dive into
          educational sessions, engage in practical workshops, and expand their
          professional networks. Attendees will explore cutting-edge trends and
          practical applications of AWS services, fostering a collaborative
          environment rich in knowledge exchange and innovation. The event is
          designed to provide a platform for learning and sharing, with
          opportunities to gain insights from AWS experts and industry leaders.
          Join us to connect with peers, enhance your AWS skills, and become
          part of a thriving community driven by shared learning and growth.
        </div>
        <div className="w-1/2 p-4 border border-blue-500 m-2 max-h-[80vh] overflow-y-auto">
          <AvatarComponents />
          AWS Community Day is a dynamic event celebrating the AWS community,
          uniting cloud enthusiasts, developers, and professionals from diverse
          fields. This event highlights the expansive universe of AWS
          technologies, offering participants the chance to dive into
          educational sessions, engage in practical workshops, and expand their
          professional networks. Attendees will explore cutting-edge trends and
          practical applications of AWS services, fostering a collaborative
          environment rich in knowledge exchange and innovation. The event is
          designed to provide a platform for learning and sharing, with
          opportunities to gain insights from AWS experts and industry leaders.
          Join us to connect with peers, enhance your AWS skills, and become
          part of a thriving community driven by shared learning and growth.
        </div>
      </div>
    </div>
  );
};

export default Test;
