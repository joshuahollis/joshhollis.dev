import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Title } from "../components/title";

interface HomeProps {
  title: string;
  description: string;
}

const Home: NextPage<HomeProps> = ({ title, description }) => {
  const seoDescription = `Josh is a software engineer in Boston ${description.toLowerCase()}.`;
  return (
    <>
      <NextSeo
        description={seoDescription}
        openGraph={{
          title,
          description: seoDescription,
          url: "https://joshhollis.dev",
          images: [
            {
              url: "https://joshhollis.dev/static/images/social/index.jpeg",
              type: "image/jpeg",
            },
          ],
        }}
      />

      <div className="flex flex-grow items-center">
        <Title title={title} description={description} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: "Joshua Hollis",
      description:
        "A Project Manager & Software Developer Committed to Creating Polished Software",
    },
  };
}

export default Home;
