const ArticleContainer = (props) => {
  const { children } = props;
  return <div className="px-5 lg:px-10">{children}</div>;
};

export default ArticleContainer;
