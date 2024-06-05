import { FaChartArea } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Land = ({ land }) => {
  const {
    id,
    segment_name,
    title,
    image,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = land;
  return (
    <div>
      <div className="card glass">
        <figure>
          <img className="h-64 w-full object-cover" src={image} alt="lands" />
        </figure>
        <div className="px-4">
          <div className="flex items-center gap-3 mt-4">
            <IoLocationOutline />
            <p>{location}</p>
          </div>
          <h2 className="card-title mt-3">{title}</h2>
          <div className="mt-2">
            {description.length > 50 ? (
              <p>
                {description.slice(0, 50)}...{" "}
                <Link to={`/land/${id}`} className="text-sky-600 font-semibold ml-2">
                  Read More...
                </Link>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="divider my-2"></div>
          <div className="flex justify-between items-center text-lg">
            <div className="flex gap-2">
              <p className="font-semibold">{price}</p>
              <span> ৳</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartArea className="text-xl" />
              <p className="font-semibold">{area} </p>
              <span>sq ft</span>
            </div>
          </div>
          <div className="text-center mt-6 mb-6">
            <Link to={`/land/${id}`} className="btn btn-md bg-customTeal border-0 font-semibold">View Property</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Land;
