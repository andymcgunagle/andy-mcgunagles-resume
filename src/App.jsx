import Job from "./components/Job.jsx";
import { experience, skills } from "./data/index.js";

import IconAndText from "./components/IconAndText.jsx";
import ContentSection from "./components/ContentSection.jsx";
import Skill from "./components/Skill.jsx";
import Card from "./components/Card.jsx";
import Summary from "./components/Summary.jsx";

export default function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-100 md:p-4">
      <div className="flex flex-col gap-6 px-8 py-6 md:px-16 md:py-8 max-w-[800px] m-auto shadow-2xl bg-gray-50 border-2 border-gray-900 rounded-lg">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold">
            Andy McGunagle
          </h1>
          <div className="flex flex-wrap justify-center md:justify-evenly md:w-full">
            <IconAndText icon="place" text="San Diego, CA" />
            <IconAndText icon="email" text="amcgunagle@gmail.com" />
            <IconAndText icon="phone" text="(707) 490-8131" />
          </div>
          <Summary />
        </header>

        <main className="flex flex-col gap-6">
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
