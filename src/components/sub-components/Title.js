import MaterialIcon from "@material/react-material-icon";

const Title = (props) => {
  const { icon, title, borderBottom } = props;
  const borderBottomClass = borderBottom
    ? "border-b-2 border-green-900 dark:border-green-200"
    : "";
  const className = `${borderBottomClass} flex items-center lg:text-xl text-lg text-gray-700 dark:text-white font-bold`;
  return (
    <h3 className={className}>
      {icon ? (
        <MaterialIcon
          icon={icon}
          className="text-green-900 dark:text-green-200 mr-2 lg:text-4xl text-3xl"
        />
      ) : (
        []
      )}
      {title}
    </h3>
  );
};

export default Title;
