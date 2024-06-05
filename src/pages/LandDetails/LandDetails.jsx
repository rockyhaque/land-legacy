import { useEffect, useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { IoExpandOutline } from "react-icons/io5";
import { RiPriceTag3Line } from "react-icons/ri";
import { TbLocationPin } from "react-icons/tb";
import { useParams } from "react-router-dom";

const LandDetails = () => {
  const { id } = useParams();
  const [land, setLand] = useState(null);

  useEffect(() => {
    fetch("/lands.json")
      .then((res) => res.json())
      .then((data) => {
        const foundLand = data.find((item) => item.id === parseInt(id));
        setLand(foundLand);
      })
      .catch((error) => console.error("Error fetching land details:", error));
  }, [id]);

  if (!land) {
    return (
      <div>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  const {
    title,
    description,
    status,
    image,
    price,
    area,
    location,
    segment_name,
    facilities,
    additional_info,
  } = land;

  return (
    <section className="bg-gradient-to-r from-stone-50 to-teal-50 py-16">
      <div className="container mx-auto">
        {/* Details Heading */}
        <div className="text-center space-y-3">
          <h5 className="text-customTeal font-semibold text-xl">Details</h5>
          <h2 className="font-semibold text-3xl">{title}</h2>
          <div className="flex gap-1 justify-center items-center pt-4">
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
            <h1 className="border-2 border-neutral-900 bg-black w-8"></h1>
            <h1 className="border-2 border-neutral-400 text-neutral-800 w-3"></h1>
          </div>
        </div>

        {/* Main Details */}
        <div>
          <div className="mt-10">
            <img
              className="h-[500px] w-full object-cover rounded-lg shadow-2xl"
              src={image}
              alt={title}
            />
          </div>
          <div className="mt-10">
            <p className="text-xl bg-gray-200 inline-block px-6 py-1 rounded-md font-semibold">
              For {status}
            </p>
            <h1 className="text-6xl font-semibold mt-2">{title}</h1>
            <h2 className="text-3xl font-semibold mt-14">Description</h2>
            <p className="text-lg mt-3 text-gray-600">{description}</p>
            <hr className="my-8" />

            <h2 className="text-3xl font-semibold mt-14">Land Features</h2>
            <p className="text-lg mt-3 text-gray-600">
              This property offers modern amenities, spacious interiors, scenic
              views, and a prime location. With high-quality construction and
              versatile design, it suits both residential and commercial
              purposes. Ideal for anyone seeking comfort and convenience.
            </p>

            <h2 className="text-3xl font-semibold mt-14">Land Details</h2>

            <div className="flex  justify-center gap-24 text-lg mt-3">
              {/* details left side */}
              <div className="border border-gray-300 rounded-2xl p-6 w-full md:w-1/2 lg:w-1/2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <BiCategoryAlt />
                    <p>Category</p>
                  </div>
                  <div>
                    <p>{segment_name}</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <RiPriceTag3Line />
                    <p>Price</p>
                  </div>
                  <div>
                    <p>{price} ৳</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <IoExpandOutline />
                    <p>Area Size</p>
                  </div>
                  <div>
                    <p>{area} sq ft</p>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <TbLocationPin />
                    <p>Location</p>
                  </div>
                  <div>
                    <p>{location}</p>
                  </div>
                </div>
                <hr />
              </div>

              {/* details right side */}
              <div className="border border-gray-300 rounded-2xl p-6 w-full md:w-1/2 lg:w-1/2">
                <h3 className="text-lg font-semibold">Facilities</h3>
                <ul className="list-disc list-inside mt-2">
                  {facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border border-gray-300 rounded-2xl p-6 w-full mt-4">
              {additional_info && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    Additional Information
                  </h3>
                  <ul className="list-disc list-inside mt-2">
                    {additional_info.minerals && (
                      <li>
                        <strong>Minerals:</strong>{" "}
                        {additional_info.minerals.join(", ")}
                      </li>
                    )}
                    {additional_info.mining_permits && (
                      <li>
                        <strong>Mining Permits:</strong>{" "}
                        {additional_info.mining_permits}
                      </li>
                    )}
                    {additional_info.shoreline_length && (
                      <li>
                        <strong>Shoreline Length:</strong>{" "}
                        {additional_info.shoreline_length}
                      </li>
                    )}
                    {additional_info.water_activities && (
                      <li>
                        <strong>Water Activities:</strong>{" "}
                        {additional_info.water_activities.join(", ")}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandDetails;
