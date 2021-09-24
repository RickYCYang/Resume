import MaterialIcon from "@material/react-material-icon";
import { language } from "../const";

const Language = () => {
  return (
    <div className=" m-auto py-3 ">
      <h3 className="flex items-center lg:text-xl text-lg text-gray-700 dark:text-white font-bold">
        <MaterialIcon
          icon="language"
          className="text-green-900 dark:text-green-200 mr-2 lg:text-4xl text-3xl"
        />
        Language
      </h3>
      <ul className="px-5 lg:px-10">
        <li>
          <h6 className="text-gray-600 dark:text-white">{language}</h6>
        </li>
      </ul>
    </div>
  );
};

export default Language;
