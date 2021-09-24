import MaterialIcon from "@material/react-material-icon";
import { profile } from "../const";

const Contact = () => {
  return (
    <div className="border-b border-green-900 dark:border-green-200 m-auto py-3 ">
      <h3 className="flex items-center lg:text-xl text-lg text-gray-700 dark:text-white font-bold">
        <MaterialIcon
          icon="person"
          className="text-green-900 dark:text-green-200 mr-2 lg:text-4xl text-3xl"
        />
        Contact
      </h3>
      <ul className="px-5 lg:px-10">
        <li className="flex items-center">
          <MaterialIcon
            icon="work"
            className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
          />
          <h6 className="text-gray-600 dark:text-white inline-block text-sm lg:text-base">
            {profile.jobTitle}
          </h6>
        </li>
        <li className="flex items-center">
          <MaterialIcon
            icon="email"
            className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
          />
          <h6 className="text-gray-600 dark:text-white inline-block text-sm lg:text-base">
            {profile.email}
          </h6>
        </li>
        <li className="flex items-center">
          <MaterialIcon
            icon="phone"
            className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
          />
          <h6 className="text-gray-600 dark:text-white inline-block text-sm lg:text-base">
            {profile.phone}
          </h6>
        </li>
        <li className="flex items-center">
          <MaterialIcon
            icon="home"
            className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
          />
          <h6 className="text-gray-600 dark:text-white inline-block text-sm lg:text-base">
            {profile.city}
          </h6>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
