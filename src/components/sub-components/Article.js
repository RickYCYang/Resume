const Article = (props) => {
  const { article } = props;
  return (
    <article className="text-gray-700 dark:text-white lg:text-base text-sm">
      {article}
    </article>
  );
};

export default Article;
