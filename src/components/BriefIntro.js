import MaterialIcon from "@material/react-material-icon";
import { briefIntro } from "../const";

const BriefIntro = () => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded py-5 px-3">
      <article className="dark:text-white">{briefIntro}</article>
    </div>
  );
};

export default BriefIntro;
