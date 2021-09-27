import Title from "./sub-components/Title";
import ArticleContainer from "./sub-components/ArticleContainer";
import Article from "./sub-components/Article";

import { briefIntro } from "../const";

const Introduction = () => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded py-5 px-3">
      <Title icon={"person"} title="Introduction" borderBottom={true} />
      <div className="pt-3">
        <ArticleContainer>
          <Article article={briefIntro} />
        </ArticleContainer>
      </div>
    </div>
  );
};

export default Introduction;
