import Image from "next/image";
import {
  SlideItem,
  ContentWrapper,
  SlideImage,
  SlideImageMobile,
} from "../styles";

const BannerType1 = ({ banner }) => {
  return (
    <>
      <SlideImage>
        <Image
          className="lrg-img"
          layout="responsive"
          src={banner.sliderImage[0].url}
          alt={banner.sliderImage[0].title}
          width={banner.sliderImage[0].width}
          height={banner.sliderImage[0].height}
        />
      </SlideImage>
      <SlideImageMobile>
        <Image
          layout="responsive"
          src={banner.sliderMobImage[0].url}
          alt={banner.sliderMobImage[0].title}
          width={banner.sliderMobImage[0].width}
          height={banner.sliderMobImage[0].height}
        />
      </SlideImageMobile>
      {banner.likeNoOtherText && (
        <ContentWrapper>
          <span>LIKE</span>
          <span>NO</span>
          <span>OTHER</span>
        </ContentWrapper>
      )}
    </>
  );
};

export default BannerType1;
