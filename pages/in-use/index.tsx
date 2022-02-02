import Head from "next/head";
import { GetStaticProps } from "next";
import { PageQuery } from "@gql/pageGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import { ProjectsQuery } from "@gql/projectGQL";
import Footer from "@components/common/footer";
import ProjectsPage from "@components/pages/projects";
import client from "@utils/apolloClient";

const Projects = ({ heroDetails, types, projects }) => {
  return (
    <>
      <Head>
        <title>Projects | Fibonacci</title>
        <meta name="description" content="Fibonacci Projects page" />
      </Head>
      <ProjectsPage
        heroDetails={heroDetails}
        projects={projects}
        types={types}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async function () {
  const {
    data: { entry: heroDetails },
  } = await client.query({
    query: PageQuery,
    variables: { slug: "in-use" },
  });
  const {
    data: { categories: types },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "Sector",
    },
  });
  const {
    data: { entries: projects },
  } = await client.query({
    query: ProjectsQuery,
  });
  return {
    props: {
      heroDetails,
      types,
      projects,
    },
    revalidate: 500,
  };
};

export default Projects;
