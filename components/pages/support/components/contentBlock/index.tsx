import { Container, Wrapper, ImageWrapper, EntryWrapper } from "./styles";
import Image from "next/image";
import SamplesImage from "public/assets/temp/product-guide.jpg";
import AccentText from "@components/common/accentText";
import ArrowButton from "@components/common/button/arrowButton";
import Text from "@components/common/typography";
import css from "@styled-system/css";
import theme from "@styles/theme";

const ContentWithImageModule = ({ content }) => {

  return (
    <Container mode={content.mode}>
      <Wrapper orientation={content.orientation} mode={content.mode}>
        <AccentText top={80}>{content.sectionTitle}</AccentText>
        {content.sectionTitle && (
          <Text as="h4" variant="Display-Small">
            {content.sectionTitle}
          </Text>
        )}
        {content.entries.map((entry, i) => {
          const { title, body, button } = entry;
          const entryCount = content.entries.length;
          return (
            <EntryWrapper key={i} entries={entryCount} mode={content.mode}>
              {title && entryCount > 1 && <Text as="h4" variant="Display-XSmall">{title}</Text>}
              {body && (
                <Text
                  as="p"
                  variant="Body-Regular"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              )}
              {button.label && (
                <ArrowButton mode={content.mode === "dark" ? "light": "dark" } title={button.label} link={button.link} />
              )}
            </EntryWrapper>
          );
        })}
      </Wrapper>
      <ImageWrapper orientation={content.orientation}>
        {content.image && (
          <Image
            alt=""
            src={content.image.src}
            layout="responsive"
            width={content.image.width}
            height={content.image.height}
          />
        )}
      </ImageWrapper>
    </Container>
  );
};

export default ContentWithImageModule;