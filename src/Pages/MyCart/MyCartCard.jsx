import { Link } from "react-router-dom";
import placeHolderImage from "../../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const MyCartCard = ({ item, deletable, handleDelete }) => {
  const { name, image, brandName, type, price, _id } = item;
  return (
    <div>
      <div className="flex relative">
        <div className="w-full h-[400px] transition border-2 p-4 hover:scale-105 border-opacity-30 border-primary hover:border-blue-900  group hover:no-underline focus:no-underline">
          <Link
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-52 bg-gray-500 dark:bg-gray-500 "
              src={image || placeHolderImage}
            />
            <div className="pt-4 space-y-3">
              <h3 className="text-2xl font-bold group-hover:underline group-focus:underline">
                {name}
              </h3>
              <div className="flex items-center justify-between font-semibold text-gray-500">
                <p>{type}</p>
                <p>{brandName}</p>
                <p>{price}</p>
              </div>
              <div>
                <button className="btn btn-primary w-full mt-2">Buy Now</button>
              </div>
            </div>
          </Link>
        </div>
        {deletable && (
          <div
            onClick={() => handleDelete(_id)}
            className="absolute bg-gray-700 hover:bg-gray-800 p-3 rounded-full -top-4 -right-5 hover:scale-105"
          >
            <MdDeleteForever
              size={25}
              className="text-red-600 group-hover:text-secondary"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCartCard;
