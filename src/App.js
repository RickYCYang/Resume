import "./assets/styles/App.css";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Photo from "./components/Photo";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Github from "./components/Github";
import Language from "./components/Language";
import Work from "./components/Work";
import Education from "./components/Education";
import BriefIntro from "./components/BriefIntro";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="bg-gray-200 dark:bg-gray-800 px-5 pt-3 pb-8">
        <DarkModeSwitch />
        <div className="md:flex md:space-x-5 items-stretch ">
          <section className="bg-white dark:bg-gray-500 w-full md:w-1/3 shadow rounded mb-2 px-3">
            <Photo />
            <Contact />
            <Skill />
            <Github />
            <Language />
          </section>
          <section className="w-full md:w-2/3 mb-2">
            <Work />
            <Education />
            <BriefIntro />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
