import Title from "./sub-components/Title";
import ArticleContainer from "./sub-components/ArticleContainer";

const Github = () => {
  return (
    <div className="border-b border-green-900 dark:border-green-200 m-auto py-3 ">
      <Title icon="star" title="Github" />
      <ArticleContainer>
        <a
          href="https://github.com/RickYCYang"
          target="_blank"
          className="hover:text-green-900 dark:text-white dark:hover:text-green-200 lg:text-base text-sm"
        >
          https://github.com/RickYCYang
        </a>
      </ArticleContainer>
    </div>
  );
};

export default Github;
