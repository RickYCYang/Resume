import MaterialIcon from "@material/react-material-icon";

const Github = () => {
  return (
    <div className="border-b border-green-900 dark:border-green-200 m-auto py-3 lg:flex md:items-center">
      <h3 className="flex items-center text-gray-700 dark:text-white font-bold lg:text-xl text-lg">
        <MaterialIcon
          icon="star"
          className="text-green-900 dark:text-green-200 mr-2 lg:text-4xl text-3xl"
        />
        Github:
      </h3>
      <a
        href="https://github.com/RickYCYang"
        target="_blank"
        className="px-5 hover:text-green-900 dark:text-white dark:hover:text-green-200 lg:text-base text-sm"
      >
        https://github.com/RickYCYang
      </a>
    </div>
  );
};

export default Github;
