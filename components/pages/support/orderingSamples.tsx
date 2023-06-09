import { useRouter } from "next/router";
import HeadingLeftTextRight from "./components/HeadingLeftTextRight";
import LeftImageRightText from "./components/LeftImageRightText";
import Hero from "@components/pages/support/components/hero";
import SupportModule from "@components/modules/support";
import { supports } from "./constants";
import { HeroOverlayWrapper } from "./styles";

const OrderingSamples = ({ pageData }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <>
      <Hero pageTitle={pageData.pageHeading} />
      <HeroOverlayWrapper>
        <SupportModule activePath={asPath} supports={supports} />
      </HeroOverlayWrapper>
      {pageData?.orderSamplesComponents?.length > 0 &&
        pageData.orderSamplesComponents.map((component: any, index: number) => {
          switch (component.typeHandle) {
            case "headingLeftTextRight":
              return (
                <HeadingLeftTextRight
                  key={`component-${index}`}
                  story={{
                    accentText: component.sideText,
                    title: component.headingText,
                    content: component.textRight,
                  }}
                />
              );
            case "leftImageRightText":
              return (
                <LeftImageRightText
                  key={`component-${index}`}
                  data={{
                    thumbnail: component.imageThumb,
                    blurThumb: component.blurThumb,
                    textHeading: component.textHeading,
                    text: component.text,
                  }}
                />
              );
          }
        })}
    </>
  );
};

export default OrderingSamples;
