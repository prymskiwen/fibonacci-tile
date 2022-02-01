import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "@utils/apolloClient";
import { ProductsQuery } from "@gql/productGQL";
import Homepage from "@components/pages/home";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

interface HomePageProps {
  products: any;
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>Home | Fibonacci</title>
        <meta name="description" content="Fibonacci Homepage" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header mode="light" position="absolute" />
      <Homepage products={products} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async function () {
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });
  return {
    props: {
      products,
    },
    revalidate: 500,
  };
};

export default Home;
