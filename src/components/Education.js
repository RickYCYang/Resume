import MaterialIcon from "@material/react-material-icon";
import { education } from "../const";

const Education = () => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded mb-2 py-4 px-3">
      <h3 className="text-gray-700 dark:text-white text-xl font-bold border-b-2 border-green-900 dark:border-green-200 w-full flex items-center">
        <MaterialIcon
          icon="school"
          className="text-green-900 dark:text-green-200 mr-2 text-4xl "
        />
        Education
      </h3>
      <div className="py-2 border-b border-gray-300">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg mb-1">
          <a className="bg-pic-chiao-tung inline-block bg-no-repeat bg-cover bg-center lg:w-10 lg:h-10 w-7 h-7 align-middle mr-2 rounded-full"></a>
          National Chiao Tung Unversity / Institute of Information Management
        </h5>
        <div className="lg:pl-12">
          <h6 className="text-green-900 dark:text-green-200 font-bold mb-2 flex items-center">
            <MaterialIcon
              icon="school"
              className="text-green-900 dark:text-green-200 mr-2"
            />
            Master Degree
          </h6>
          <h6 className="text-green-900 dark:text-green-200 font-bold flex items-center mb-2">
            <MaterialIcon icon="date_range" className="mr-2" />
            Sep. 2014 - Jul. 2016
          </h6>
          <p className="dark:text-white">{education.chaioTungBriefPart1}</p>
          <p className="dark:text-white">{education.chaioTungBriefPart2}</p>
        </div>
      </div>
      <div className="py-2">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg mb-1">
          <a className="bg-pic-tamkang inline-block bg-no-repeat bg-cover bg-center lg:w-10 lg:h-10 w-7 h-7 align-middle mr-2 rounded-full"></a>
          Tamkang University / Department of Information Management
        </h5>
        <div className="lg:pl-12">
          <h6 className="text-green-900 dark:text-green-200 font-bold mb-2 flex items-center">
            <MaterialIcon
              icon="school"
              className="text-green-900 dark:text-green-200 mr-2"
            />
            Bachelor Degree
          </h6>
          <h6 className="text-green-900 dark:text-green-200 font-bold flex items-center mb-2">
            <MaterialIcon icon="date_range" className="mr-2" />
            Sep. 2009 - Jul. 2013
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Education;
