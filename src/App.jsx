import Job from "./components/Job.jsx";
import { experience, skills } from "./data/index.js";

import avatar from "./images/andy-mcgunagle.jpeg";

import IconAndText from "./components/IconAndText.jsx";
import ContentSection from "./components/ContentSection.jsx";
import Skill from "./components/Skill.jsx";
import Card from "./components/Card.jsx";
import Summary from "./components/Summary.jsx";

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-400 md:p-4">
      <div className="flex flex-col gap-4 px-8 py-6 md:px-12 max-w-[750px] m-auto shadow-2xl bg-gray-900 text-gray-50 md:rounded-lg">
        <header className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-semibold whitespace-nowrap">
              Andy McGunagle
            </h1>
            <IconAndText icon="place" text="San Diego, CA" />
            <IconAndText icon="email" text="amcgunagle@gmail.com" />
            <IconAndText icon="phone" text="(707) 490-8131" />
          </div>
          <img
            alt="Andy McGunagle"
            src={avatar}
            className="h-20 sm:h-40 justify-self-end sm:justify-self-center place-self-center rounded-full border-2 border-blue-700 p-1"
          />
        </header>

        <main className="flex flex-col gap-6">
          <Summary />

          <ContentSection icon="work" title="Experience">
            <div className="flex flex-col gap-4">
              {experience.map((item, index) => <Job key={index} {...item} />)}
            </div>
          </ContentSection>

          <ContentSection icon="school" title="Education">
            <Card>
              <div>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-lg font-bold">
                    California Polytechnic State University - San Luis Obispo
                  </h2>
                  <p className="text-xs text-center">
                    Class of 2013
                  </p>
                </div>
                <p className="text-sm">
                  Bachelor of Science in Kinesiology
                </p>
              </div>
            </Card>
          </ContentSection>

          <ContentSection icon="code" title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((item, index) => <Skill key={index} {...item} />)}
            </div>
          </ContentSection>
        </main>

      </div>
    </div>
  );
};
