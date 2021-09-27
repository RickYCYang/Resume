import Title from "./sub-components/Title";
import SubTitle from "./sub-components/SubTitle";
import ArticleContainer from "./sub-components/ArticleContainer";

const Work = () => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded mb-2 py-4 px-4">
      <Title icon={"work"} title="Work Experience" borderBottom={true} />
      <div className="py-2 border-b border-gray-300">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg">
          <a className="bg-pic-tsmc inline-block bg-no-repeat bg-cover bg-center lg:w-9 lg:h-9 w-7 h-7 align-middle mr-2 rounded"></a>
          TSMC 台灣積體電路製造股份有限公司
        </h5>
        <ArticleContainer>
          <SubTitle
            icon="desktop_mac"
            subTitle="Full Stack Engineer / Project Manager"
            fontBold={true}
            colorfulText={true}
          />
          <SubTitle
            icon="date_range"
            subTitle="Aug. 2016 - Feb. 2021, May. 2021 - Current"
            fontBold={true}
            colorfulText={true}
          />
          <SubTitle
            icon="star"
            subTitle="Best Performer Award in the 1st Quarter of 2020"
            fontBold={true}
          />
          <SubTitle
            icon="star"
            subTitle="Outstanding Contribution Award in the 3th Quarter of 2020"
            fontBold={true}
          />
        </ArticleContainer>
      </div>
      <div className="py-2 border-b border-gray-300">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg">
          <a className="bg-pic-cht inline-block bg-no-repeat bg-cover bg-center lg:w-9 lg:h-9 w-7 h-7 align-middle mr-2 rounded"></a>
          CHT 中華電信
        </h5>
        <ArticleContainer>
          <div className="md:flex space-x-3">
            <SubTitle
              icon="desktop_mac"
              subTitle="Backend Engineer"
              fontBold={true}
              colorfulText={true}
            />
            <SubTitle
              icon="date_range"
              subTitle="Feb. 2021 - Mar. 2021"
              fontBold={true}
              colorfulText={true}
            />
          </div>
        </ArticleContainer>
      </div>
      <div className="py-2">
        <h5 className="font-bold text-gray-700 dark:text-white text-lg">
          <a className="bg-pic-itri inline-block bg-no-repeat bg-cover bg-center lg:w-9 lg:h-9 w-7 h-7 align-middle mr-2 rounded"></a>
          ITRI 工業技術研究院
        </h5>
        <ArticleContainer>
          <div className="md:flex space-x-3">
            <SubTitle
              icon="desktop_mac"
              subTitle="Intern"
              fontBold={true}
              colorfulText={true}
            />
            <SubTitle
              icon="date_range"
              subTitle="Mar. 2015 - Mar. 2016"
              fontBold={true}
              colorfulText={true}
            />
          </div>
        </ArticleContainer>
      </div>
    </div>
  );
};
export default Work;
