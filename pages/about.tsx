import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { NewLine } from "../components/new-line";
import { Page } from "../components/page";
import { PageHeader } from "../components/page-header";
import { PreviousCities } from "../components/previous-cities";
import { ResumeItem, ResumeItemProps } from "../components/resume-item";
import { SectionHeader } from "../components/section-header";

interface AboutProps {
  resumeItems: ResumeItemProps[];
  title: string;
  description: string;
}

const About: NextPage<AboutProps> = ({ resumeItems, title, description }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: `${title} | Joshua Hollis`,
          description,
          url: "https://joshhollis.dev/about",
          images: [
            {
              url: "https://joshhollis.dev/static/images/social/about.jpeg",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <Page>
        <PageHeader question="Who is Josh?" />
        <div className="mt-8">
          <div className="inline">
            <Image
              height={320}
              width={320}
              alt="Joshua Hollis Headshot"
              src="/static/images/headshot.jpg"
              className="float-right rounded-2xl mb-6 ml-6 w-48 md:w-72 lg:w-80"
            />
            <p>
              Hey 👋
              <NewLine />
              I'm Joshua Hollis, a software engineer based out of
              <span className="ml-2 text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
                Boston
              </span>
              . ☘️
              <NewLine />
              In the past I've lived in <PreviousCities />
              <NewLine /> During football season, you'll find me cheering on the
              Atlanta Falcons 🏈 and UGA Bulldogs 🐶. While studying at Boston
              University, I lived in Student Village 2 (StuVi2) and played on the
              golf team. Go Terriers! 🐾
              <NewLine />
              I'm an entrepreneur, trader, quant, developer, and product manager
              driven by the thrill of building impactful products. My focus is on
              creating meaningful solutions, working across the entire stack, and
              using any tools or technologies necessary to make something truly
              awesome. 🤙
              <NewLine />
              Beyond technical expertise, I take pride in my adaptability and
              ability to wear many hats. I enjoy talking to customers, managing
              products, designing, and documenting—all to bring projects to life
              from end to end. 🚀
            </p>
          </div>
        </div>
        <div className="mt-8">
          <SectionHeader text="Career" />
          <div className="mt-6">
            {resumeItems.map((resumeItem) => (
              <ResumeItem {...resumeItem} key={resumeItem.company} />
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};

export async function getStaticProps() {
  const resumeItems: ResumeItemProps[] = [
    {
      company: "Movez",
      logo: "workos",
      title: "CEO | Full Stack Engineer | Project Manager",
      link: "https://movez.com",
      location: "Boston, MA",
      startDate: new Date(2022, 0).toISOString(),
      endDate: new Date(2023, 11).toISOString(),
    },
    {
      company: "Boston University Pardee School of Global Studies",
      logo: "workos",
      title: "Software Engineer Intern",
      link: "https://bu.edu",
      location: "Boston, MA",
      startDate: new Date(2021, 4).toISOString(),
      endDate: new Date(2021, 7).toISOString(),
    },
    {
      company: "Boston University",
      logo: "workos",
      title: "Software Engineer Intern",
      link: "https://bu.edu",
      location: "Boston, MA",
      startDate: new Date(2021, 4).toISOString(),
      endDate: new Date(2021, 7).toISOString(),
    },
    {
      company: "Southern Company",
      logo: "att",
      title: "Software Engineer Intern",
      link: "https://southerncompany.com/",
      location: "Atlanta, GA",
      startDate: new Date(2020, 5).toISOString(),
      endDate: new Date(2020, 7).toISOString(),
    },
    {
      company: "AT&T Labs",
      logo: "att",
      title: "Software Engineer Intern",
      link: "https://about.att.com/sites/labs",
      location: "Atlanta, GA",
      startDate: new Date(2020, 5).toISOString(),
      endDate: new Date(2020, 7).toISOString(),
    },
    {
      company: "AT&T",
      logo: "att",
      title: "Software Engineer Intern",
      link: "https://att.com",
      location: "Atlanta, GA",
      startDate: new Date(2021, 4).toISOString(),
      endDate: new Date(2021, 7).toISOString(),
    },
  ];

  return {
    props: {
      resumeItems,
      description:
        "I'm Joshua Hollis, a software engineer based out of Boston, Massachusetts. I graduated from Notre Dame Computer Science and have worked at WorkOS, Qualtrics and others.",
      title: "About",
    },
  };
}

export default About;
