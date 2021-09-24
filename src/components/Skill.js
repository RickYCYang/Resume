import MaterialIcon from "@material/react-material-icon";
import { skill } from "../const";

const Skill = () => {
  return (
    <div className="border-b border-green-900 dark:border-green-200 m-auto py-3 ">
      <h3 className="flex items-center lg:text-xl text-lg text-gray-700 dark:text-white font-bold">
        <MaterialIcon
          icon="verified"
          className="text-green-900 dark:text-green-200 mr-2 lg:text-4xl text-3xl"
        />
        Skills
      </h3>
      <ul className="px-5 lg:px-10">
        <li className="flex flex-col items-start mb-2">
          <h6 className="text-gray-700 dark:text-white flex items-center font-bold">
            <MaterialIcon
              icon="wysiwyg"
              className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
            />
            Frontend
          </h6>
          <p className="text-gray-700 dark:text-white lg:text-base text-sm">
            {skill.frontend}
          </p>
        </li>
        <li className="flex flex-col items-start mb-2">
          <h6 className="text-gray-700 dark:text-white flex items-center font-bold">
            <MaterialIcon
              icon="view_in_ar"
              className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
            />
            Backend
          </h6>
          <p className="text-gray-700 dark:text-white lg:text-base text-sm">
            {skill.backend}
          </p>
        </li>
        <li className="flex flex-col items-start mb-2">
          <h6 className="text-gray-700 dark:text-white flex items-center font-bold">
            <MaterialIcon
              icon="list"
              className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg "
            />
            Others
          </h6>
          <p className="text-gray-700 dark:text-white lg:text-base text-sm">
            {skill.others}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Skill;
