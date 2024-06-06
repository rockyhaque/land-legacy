import { MdOutlinePayment } from "react-icons/md";
import { RiHomeGearLine } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row py-20 px-10 md:px-2 lg:px-0 gap-10">
      <div className="w-full md:w-1/2 lg:w-1/2">
        <div className="space-y-4">
          <h6 className="uppercase text-customTeal text-sm font-semibold" data-aos="flip-up">
            Let&apos;s take a tour
          </h6>
          <h1 className="text-3xl font-semibold w-full md:w-4/5 lg:w-4/5" data-aos="ease-in-out-quad">
            Helping People to Find The Right Propert
          </h1>
          <p className="text-gray-700 text-md" data-aos="zoom-in-left">
            Our platform is dedicated to helping people find the right property,
            whether it&apos;s buying, selling, or renting. Experience seamless
            transactions, expert guidance, and a wide range of options tailored
            to your needs.
          </p>
        </div>
        <div className="space-y-8 mt-8">
          <div className="flex justify-center items-center gap-3">
            <div className="bg-teal-50 w-20 p-4 rounded-full">
              <RiHomeGearLine className="text-4xl text-customTeal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">The Perfect Residency</h3>
              <p className="text-gray-700 mt-2" data-aos="zoom-in-right">
              Find your ideal land with our curated listings, tailored to match your lifestyle and preferences.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-teal-50 w-20 p-4 rounded-full">
              <VscWorkspaceTrusted className="text-4xl text-customTeal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Trusted By Thousands</h3>
              <p className="text-gray-700 mt-2" data-aos="zoom-in-right">
              Join a community of satisfied clients who rely on our expertise for their property needs.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-teal-50 w-20 p-4 rounded-full">
              <MdOutlinePayment className="text-4xl text-customTeal" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Total Payment Trasparency</h3>
              <p className="text-gray-700 mt-2" data-aos="zoom-in-right">
              Enjoy complete clarity with every transaction, ensuring trust and confidence in your property dealings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2">

          <img
            className="rounded-2xl mt-8 md:mt-0 lg:mt-0"
            src="https://i.ibb.co/D4RJMth/jaime-spaniol-LLXh-Vpp-SMe-A-unsplash.jpg"
            alt=""
          />

        
      </div>
    </div>
  );
};

export default Service;
