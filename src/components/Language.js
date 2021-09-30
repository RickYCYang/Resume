import Title from "./sub-components/Title";
import ArticleContainer from "./sub-components/ArticleContainer";
import Article from "./sub-components/Article";

import { language } from "../const";

const Language = () => {
  return (
    <div className=" m-auto py-3 ">
      <Title icon="language" title="Language" />
      <ArticleContainer>
        <ul>
          <li>
            <Article article={language}></Article>
          </li>
        </ul>
      </ArticleContainer>
    </div>
  );
};

export default Language;
