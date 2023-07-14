import { FaClipboardList, FaHome, FaUsers, FaUtensils } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-center text-3xl text-primary underline underline-offset-8">
        Our Services
      </h2>
      <div className="grid grid-cols-3 min-h-[80vh] items-center gap-5">
        <div className="card max-h-80 bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <AiOutlineSearch className="text-8xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-accent">
              Recipe Database and Search
            </h2>
            <p>
              Explore thousands of recipes worldwide. Powerful search for
              ingredients, time, diet, and cuisine types.
            </p>
          </div>
        </div>
        <div className="card max-h-80 bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <FaClipboardList className="text-8xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-accent">
              Meal Planning and Grocery List
            </h2>
            <p>
              Effortlessly plan meals and generate a shopping list. Personalized
              recipes and seamless shopping experience.
            </p>
          </div>
        </div>
        <div className="card max-h-80 bg-base-200 shadow-lg">
          <figure className="px-10 pt-10">
            <FaUsers className="text-8xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-accent">
              Recipe Community and User Submissions
            </h2>
            <p>
              Effortlessly plan meals and generate a shopping list. Personalized
              recipes and seamless shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
