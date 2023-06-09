import Header from "@components/common/header";
import Slider from "./blocks/Slider";
import SectionTitle from "./blocks/SectionTitle";
import CTAPanel from "./blocks/CTAPanel";
import CollectionsItem from "./blocks/CollectionItem";
import { Container } from "./styles";

const CollectionsPage = ({
  pageData,
  terrazzoPageData,
  collections,
  collectionProducts,
  notifications,
  cta1,
  cta2,
}) => {
  const banners = [];
  if (pageData?.bannerImage?.length > 0) {
    banners.push({
      blurThumb: pageData.blurThumb[0],
      bannerImage: pageData.bannerImageThumb[0],
      bannerIntro: pageData.bannerIntro,
      bannerHeading: pageData.bannerHeading,
      bannerSubline: pageData.bannerInnerSubline,
      bannerCTA: pageData.bannerCTA,
    });
  }
  if (terrazzoPageData?.bannerImage?.length > 0) {
    banners.push({
      blurThumb: terrazzoPageData.blurThumb[0],
      bannerImage: terrazzoPageData.bannerImageThumb[0],
      bannerIntro: terrazzoPageData.bannerIntro,
      bannerHeading: terrazzoPageData.bannerHeading,
      bannerSubline: terrazzoPageData.bannerInnerSubline,
      bannerCTA: terrazzoPageData.bannerCTA,
      bannerLinkTo: "/terrazzo",
    });
  }
  return (
    <Container>
      <Header notifications={notifications} />
      <Slider items={banners} disableNext={true} />
      {pageData.bannerSubline && (
        <SectionTitle show={false} title={pageData.bannerSubline} />
      )}

      {collections.length > 0 &&
        collections.map((collection) => {
          return (
            <CollectionsItem
              key={collection.id}
              collectionProducts={collectionProducts}
              collection={collection}
            />
          );
        })}
      {cta1?.CTAFields?.length > 0 && (
        <CTAPanel data={cta1.CTAFields[0]} imagePosition="right" />
      )}
      {cta2?.CTAFields?.length > 0 && (
        <CTAPanel data={cta2.CTAFields[0]} imagePosition="left" />
      )}
    </Container>
  );
};

export default CollectionsPage;
