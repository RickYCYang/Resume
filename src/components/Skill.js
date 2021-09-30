import Title from "./sub-components/Title";
import SubTitle from "./sub-components/SubTitle";
import ArticleContainer from "./sub-components/ArticleContainer";
import Article from "./sub-components/Article";
import { skill } from "../const";

const Skill = () => {
  return (
    <div className="border-b border-green-900 dark:border-green-200 m-auto py-3 ">
      <Title icon={"verified"} title="Skills" />
      <ArticleContainer>
        <ul>
          <li className="flex flex-col items-start mb-2">
            <SubTitle icon="wysiwyg" subTitle="Frontend" fontBold={true} />
            <Article article={skill.frontend} />
          </li>
          <li className="flex flex-col items-start mb-2">
            <SubTitle icon="view_in_ar" subTitle="Backend" fontBold={true} />
            <Article article={skill.backend} />
          </li>
          <li className="flex flex-col items-start mb-2">
            <SubTitle icon="list" subTitle="Others" fontBold={true} />
            <Article article={skill.others} />
          </li>
        </ul>
      </ArticleContainer>
    </div>
  );
};

export default Skill;
