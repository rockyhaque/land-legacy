import { AiOutlineFileSearch } from "react-icons/ai";
import { FaLandmark } from "react-icons/fa";
import { LuNetwork } from "react-icons/lu";

const Speciality = () => {
  return (
    <div className="bg-[#ddebe5] py-10">
        <div className="text-center space-y-3">
            <h5 className="text-customTeal font-semibold text-xl">What we do</h5>
            <h2 className="font-semibold text-3xl">Our Main Speciality</h2>
        </div>
        <div className=" flex flex-col md:flex-row lg:flex-row justify-center items-center text-center gap-9 px-20 py-8">
      <div className="flex flex-col  justify-center items-center space-y-3 py-10">
        <div className="bg-white translation animate-bounce hover:bg-teal-200 p-4 rounded-xl flex justify-center items-center shadow-2xl">
          <AiOutlineFileSearch className="text-2xl " />
        </div>
        <h3 className="text-xl font-semibold">Transform Your Dreams</h3>
        <p className="w-5/6 text-gray-700 text-md" >
          Discover seamless solutions for buying, selling, and renting land.
          Empower your land ownership journey with our expert services.
        </p>
      </div>
      <div className="flex  flex-col justify-center items-center space-y-3 py-10">
        <div className="bg-white translation animate-bounce hover:bg-teal-200 p-4 rounded-xl flex justify-center items-center shadow-2xl">
        <FaLandmark className="text-2xl"/>
        </div>
        <h3 className="text-xl font-semibold">Your Land, Your Choice</h3>
        <p className="w-5/6 text-gray-700 text-md" >
        Explore hassle-free land transactions. Whether buying, selling, or renting, our platform ensures a smooth and secure process.
        </p>
      </div>
      <div className="flex  flex-col justify-center items-center space-y-3 py-10">
        <div className="bg-white translation animate-bounce hover:bg-teal-200 p-4 rounded-xl flex justify-center items-center shadow-2xl">
        <LuNetwork className="text-2xl"/>
        </div>
        <h3 className="text-xl font-semibold">Unlock Opportunities</h3>
        <p className="w-5/6 text-gray-700 text-md" >
        Experience effortless land deals. From purchasing to renting, our services cater to all your land ownership needs.
        </p>
      </div>
      
    </div>
    </div>
  );
};

export default Speciality;
