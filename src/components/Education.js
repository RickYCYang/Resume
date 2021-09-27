import Title from "./sub-components/Title";
import SubTitle from "./sub-components/SubTitle";
import ArticleContainer from "./sub-components/ArticleContainer";
import Article from "./sub-components/Article";

import { education } from "../const";

const Education = () => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded mb-2 py-4 px-3">
      <Title icon={"school"} title="Education" borderBottom={true} />

      <div className="py-2 border-b border-gray-300">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg">
          <a className="bg-pic-chiao-tung inline-block bg-no-repeat bg-cover bg-center lg:w-9 lg:h-9 w-7 h-7 align-middle mr-2 rounded-full"></a>
          National Chiao Tung Unversity / Institute of Information Management
        </h5>
        <ArticleContainer>
          <SubTitle
            icon="school"
            subTitle="Master Degree"
            fontBold={true}
            colorfulText={true}
          />
          <SubTitle
            icon="date_range"
            subTitle="Sep. 2014 - Jul. 2016"
            fontBold={true}
            colorfulText={true}
          />
          <Article article={education.chaioTungBriefPart1} />
          <Article article={education.chaioTungBriefPart2} />
        </ArticleContainer>
      </div>
      <div className="py-2">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg">
          <a className="bg-pic-tamkang inline-block bg-no-repeat bg-cover bg-center lg:w-9 lg:h-9 w-7 h-7 align-middle mr-2 rounded-full"></a>
          Tamkang University / Department of Information Management
        </h5>
        <ArticleContainer>
          <SubTitle
            icon="school"
            subTitle="Bachelor Degree"
            fontBold={true}
            colorfulText={true}
          />
          <SubTitle
            icon="date_range"
            subTitle="Sep. 2009 - Jul. 2013"
            fontBold={true}
            colorfulText={true}
          />
        </ArticleContainer>
      </div>
    </div>
  );
};

export default Education;
