import { GetStaticProps } from 'next';
import SEO from '../components/SEO';
import Content from '../components/Content';
import Info from "../components/info";
import { getHeroContent } from '../lib/mdx/getHeroContent';
import { getPersonSchema, getWebsiteSchema } from '../lib/seo.config';

interface HomeProps {
  heroContent: Awaited<ReturnType<typeof getHeroContent>>;
}

export default function Home({ heroContent }: HomeProps) {
  return (
    <div className="min-h-screen transition-colors duration-200">
      <SEO
        title="Product Designer & Engineer"
        description="Product designer and engineer specializing in Web3, open source, and modern web experiences. Building beautiful, functional digital products at DeveloperDAO."
        path="/"
        includeSchema={true}
      />
      
      <div className="container mx-auto px-4 py-8">
        <Info />
        <Content heroContent={heroContent} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const heroContent = await getHeroContent();

  return {
    props: {
      heroContent,
    },
  };
};
