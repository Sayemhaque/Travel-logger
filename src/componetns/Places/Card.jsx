/* eslint-disable react/prop-types */
import Rating from "react-rating";
import location from "../../assets/placeholder.png";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";

const Card = ({ place }) => {
  return (
    <article
      className="rounded-lg bg-white
     flex flex-col md:flex-row gap-5 shadow-lg 
     hover:scale-105 duration-500">
      {/* image */}
      <figure>
        <img
          className="w-full object-cover md:w-[200px] h-full"
          src={place.image}
          alt=""
        />
      </figure>
      {/* information */}
      <div className="px-4 py-2 md:w-8/12 bg-white">
        <h2 className="text-md md:text-lg font-bold">{place.title}</h2>
        <p className="mt-3 w-/12">{place.details}</p>
        {/* Rating */}
        <div className="flex items-center gap-2">
          <Rating
            className="mt-2"
            readonly
            placeholderRating={place.rating}
            emptySymbol={<FaStar className="text-gray-400" />}
            placeholderSymbol={<FaStar className="text-green-400" />}
            fullSymbol={<FaStar className="text-green-500" />}
          />
          <p className="mt-1">{place.rating}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="flex pb-2 items-center gap-1 mt-2 text-sm font-bold">
              <img className="w-5 h-5" src={location} alt="" />
              {place.location}
            </h3>
          </div>
          <FaArrowAltCircleRight
            title="see details"
            className="text-lg
          text-green-500 cursor-pointer hover:scale-150 duration-300"
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
