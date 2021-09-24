import MaterialIcon from "@material/react-material-icon";

const Work = () => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded mb-2 py-4 px-3">
      <h3 className="text-gray-700 dark:text-white text-xl font-bold border-b-2 border-green-900 dark:border-green-200 w-full flex items-center">
        <MaterialIcon
          icon="work"
          className="text-green-900 dark:text-green-200 mr-2 text-3xl align-middle"
        />
        Work Experience
      </h3>
      <div className="py-2 border-b border-gray-300">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg mb-2">
          <a className="bg-pic-tsmc inline-block bg-no-repeat bg-cover bg-center lg:w-10 lg:h-10 w-7 h-7 align-middle mr-2 rounded"></a>
          TSMC 台灣積體電路製造股份有限公司
        </h5>
        <div className="lg:pl-12">
          <h6 className="text-green-900 dark:text-green-200 font-bold mb-2 flex items-center lg:text-base text-sm">
            <MaterialIcon
              icon="desktop_mac"
              className="text-green-900 dark:text-green-200 mr-2"
            />
            Full Stack Engineer / Project Manager
          </h6>
          <h6 className="text-green-900 dark:text-green-200 font-bold flex items-center mb-2 lg:text-base text-sm">
            <MaterialIcon icon="date_range" className="mr-2" />
            Aug. 2016 - Feb. 2021, May. 2021 -{" "}
            <span className="md:ml-1 bg-green-900 text-white px-2 rounded">
              Current
            </span>
          </h6>
          <h6 className="text-gray-500 dark:text-white font-bold flex items-center mb-2 lg:text-base text-sm">
            <MaterialIcon icon="bookmark" className="mr-2" />
            Best Performer Award in the 1st Quarter of 2020
          </h6>
          <h6 className="text-gray-500 dark:text-white font-bold flex items-center mb-2 lg:text-base text-sm">
            <MaterialIcon icon="bookmark" className="mr-2" />
            Outstanding Contribution Award in the 3th Quarter of 2020
          </h6>
        </div>
      </div>
      <div className="py-2 border-b border-gray-300">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg mb-2">
          <a className="bg-pic-cht inline-block bg-no-repeat bg-cover bg-center lg:w-10 lg:h-10 w-7 h-7 align-middle mr-2 rounded"></a>
          CHT 中華電信
        </h5>
        <div className="lg:pl-12 md:flex">
          <h6 className="text-green-900 dark:text-green-200 font-bold mb-2 flex items-center mr-3 lg:text-base text-sm">
            <MaterialIcon
              icon="desktop_mac"
              className="text-green-900 dark:text-green-200 mr-2"
            />
            Backend Engineer
          </h6>
          <h6 className="text-green-900 dark:text-green-200 font-bold flex items-center mb-2 lg:text-base text-sm">
            <MaterialIcon icon="date_range" className="mr-2" />
            Feb. 2021 - Mar. 2021
          </h6>
        </div>
      </div>
      <div className="py-2">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg mb-2">
          <a className="bg-pic-itri inline-block bg-no-repeat bg-cover bg-center lg:w-10 lg:h-10 w-7 h-7 align-middle mr-2 rounded"></a>
          ITRI 工業技術研究院
        </h5>
        <div className="lg:pl-12 md:flex">
          <h6 className="text-green-900 dark:text-green-200 font-bold mb-2 flex items-center mr-3 lg:text-base text-sm">
            <MaterialIcon
              icon="desktop_mac"
              className="text-green-900 dark:text-green-200 mr-2"
            />
            Intern
          </h6>
          <h6 className="text-green-900 dark:text-green-200 font-bold flex items-center mb-2 lg:text-base text-sm">
            <MaterialIcon icon="date_range" className="mr-2" />
            Mar. 2015 - Mar. 2016
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Work;
