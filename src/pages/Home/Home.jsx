import { useLoaderData } from "react-router-dom";
import BannerSwiper from "../../components/BannerSwiper/BannerSwiper";
import Service from "../../components/Service/Service";
import Speciality from "../../components/Speciality/Speciality";
import Land from "../../components/Land/Land";

const Home = () => {
  const lands = useLoaderData();

  return (
    <div>
      <BannerSwiper></BannerSwiper>
      {/* Lands Cards */}
      <section className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 pb-10">
        <div className="text-center space-y-3 py-16">
          <h5 className="text-customTeal font-semibold text-xl">Lands For You</h5>
          <h2 className="font-semibold text-3xl">Choose Your Dream Land</h2>
          <div className="flex gap-1 justify-center items-center pt-4">
                <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
                <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
                <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {lands.map((land) => (
            <Land key={lands.id} land={land}></Land>
          ))}
        </div>
      </section>
      <Speciality></Speciality>
      <Service></Service>
    </div>
  );
};

export default Home;
