import Title from "./sub-components/Title";
import ArticleContainer from "./sub-components/ArticleContainer";

import { profile } from "../const";

import SubTitle from "./sub-components/SubTitle";

const Contact = () => {
  return (
    <div className="border-b border-green-900 dark:border-green-200 m-auto py-3 ">
      <Title icon={"person"} title="Contact" />
      <ArticleContainer>
        <ul>
          <li className="flex items-center">
            <SubTitle icon="work" subTitle={profile.jobTitle} />
          </li>
          <li className="flex items-center">
            <SubTitle icon="email" subTitle={profile.email} />
          </li>
          <li className="flex items-center">
            <SubTitle icon="phone" subTitle={profile.phone} />
          </li>
          <li className="flex items-center">
            <SubTitle icon="home" subTitle={profile.city} />
          </li>
        </ul>
      </ArticleContainer>
    </div>
  );
};

export default Contact;
