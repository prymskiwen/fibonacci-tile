import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticProps, NextPage } from "next";
import { withGlobalData } from "@hoc/withGlobalData";
import { PageQuery } from "@gql/pageGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import { ProjectsQuery } from "@gql/projectGQL";
import Footer from "@components/common/footer";
import ProjectsPage from "@components/pages/projects";
import { initializeApollo } from "@utils/apolloClient";

interface ProjectPageProps {
  heroDetails: any;
  types: any;
  initialProjects: any;
  notifications: any;
}
const client = initializeApollo();
const limit = 4;
const Projects: NextPage<ProjectPageProps> = ({
  heroDetails,
  types,
  initialProjects,
  notifications,
}) => {
  const [offset, setOffset] = useState(0);
  const [projects, setProjects] = useState(initialProjects);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  const handleSetCategory = (cat) => {
    setCategory(cat);
    setOffset(0);
  }

  const handleSetOffset = (value) => {
    setOffset(value);
  }

  // const loadMoreProjects = async (limit, offset, category) => {
  //   setLoading(true)
  //   try {
  //     const {
  //       data: { entries: moreProjects },
  //     } = await client.query({
  //       query: ProjectsQuery,
  //       variables: {
  //         limit: limit,
  //         offset: offset,
  //         sector: category !== "all" ? [category] : []
  //       },
  //     });
  //     setProjects([
  //       ...projects,
  //       ...moreProjects
  //     ]);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false)
  //   }
  // }  

  // useEffect(() => {
  //   if(offset > 0) {
  //     loadMoreProjects(limit, offset, category);
  //   }
  // }, [offset])

  
  
  useEffect(() => {
    const filterProjects = async () => {
      setLoading(true)
      try {
        const {
          data: { entries: moreProjects },
        } = await client.query({
          query: ProjectsQuery,
          variables: {
            limit: limit,
            offset: offset,
            sector: category !== "all" ? [category] : []
          },
        });
        if(category) {
          setProjects([
            ...moreProjects
          ]);
        }
        if(offset) {
          setProjects([
            ...projects,
            ...moreProjects
          ]);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false)
      }
    } 
    filterProjects();
  }, [category, offset])
  
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
        notifications={notifications}
        setOffset={handleSetOffset}
        handleSetCategory={handleSetCategory}
        limit={limit}
        offset={offset}
        loading={loading}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
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
    data: { entries: initialProjects },
  } = await client.query({
    query: ProjectsQuery,
    variables: {
      limit: limit
    },
  });
  return {
    props: {
      heroDetails,
      types,
      initialProjects,
    },
    revalidate: parseInt(process.env.NEXT_PAGE_REVALIDATE),
  };
});

export default Projects;
