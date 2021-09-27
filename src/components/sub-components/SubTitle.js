import MaterialIcon from "@material/react-material-icon";

const SubTitle = (props) => {
  const { icon, subTitle, colorfulText, fontBold } = props;
  const textColorClass = colorfulText
    ? "text-green-900 dark:text-green-200"
    : "text-gray-700 dark:text-white";
  const fontBoldClass = fontBold ? "font-bold" : "";
  const className = `${textColorClass} ${fontBoldClass} flex items-center`;
  return (
    <h6 className={className}>
      {icon ? (
        <MaterialIcon
          icon={icon}
          className="text-green-900 dark:text-green-200 mr-2 lg:text-xl text-lg"
        />
      ) : (
        []
      )}
      {subTitle}
    </h6>
  );
};

export default SubTitle;
