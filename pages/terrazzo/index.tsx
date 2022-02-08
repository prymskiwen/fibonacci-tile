import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Footer from "@components/common/footer";
import ProductPage from "@components/pages/products";
import client from "@utils/apolloClient";
import { TerrazzoPageQuery } from "@gql/pageGQL";
import { ProductsQuery } from "@gql/productGQL";
import { CategoriesQuery } from "@gql/categoriesGQL";
import { sampleCta1Query, sampleCta2Query } from "@gql/globalGQL";
import { withGlobalData } from "@hoc/withGlobalData";

interface ProductPageProps {
  pageData: any;
  products: any;
  colourSchemes: any;
  productCategories: any;
  sampleCta1: any;
  sampleCta2: any;
  notifications: Array<any>;
}

const Products: NextPage<ProductPageProps> = ({
  pageData,
  products,
  colourSchemes,
  productCategories,
  sampleCta1,
  sampleCta2,
  notifications,
}) => {
  return (
    <>
      <Head>
        <title>Products | Fibonacci</title>
        <meta name="description" content="Fibonacci Products page" />
      </Head>
      <ProductPage
        pageData={pageData}
        products={products}
        colourSchemes={colourSchemes}
        productCategories={productCategories}
        cta1={sampleCta1}
        cta2={sampleCta2}
        notifications={notifications}
      />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = withGlobalData(async function () {
  const {
    data: { entry: pageData },
  } = await client.query({
    query: TerrazzoPageQuery,
    variables: {
      slug: "terrazzo",
    },
  });
  const {
    data: { entries: products },
  } = await client.query({
    query: ProductsQuery,
  });

  const {
    data: { globalSet: sampleCta1 },
  } = await client.query({
    query: sampleCta1Query,
  });

  const {
    data: { globalSet: sampleCta2 },
  } = await client.query({
    query: sampleCta2Query,
  });

  const {
    data: { categories: colourSchemes },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "colourSchemes",
    },
  });
  const {
    data: { categories: productCategories },
  } = await client.query({
    query: CategoriesQuery,
    variables: {
      group: "productCategories",
    },
  });
  return {
    props: {
      pageData,
      products,
      colourSchemes,
      productCategories,
      sampleCta1,
      sampleCta2,
    },
    revalidate: 500,
  };
});

export default Products;
