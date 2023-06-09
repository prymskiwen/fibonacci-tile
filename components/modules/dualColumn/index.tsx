import Image from 'next/image';
import { css } from '@styled-system/css';
import Text from '@components/common/typography';
import AccentText, { AccentTextMobile } from '@components/common/accentText';
import ArrowButton from '@components/common/button/arrowButton';
import theme from '@styles/theme';
import {
  Container,
  ImageWrapper,
  LeftCol,
  RightCol,
  Segment,
  BottomRow,
} from './styles';

const DualColumnModule = ({ data }) => {
  return (
    <Container>
      <AccentText top={160}>{data.sideText}</AccentText>
      <LeftCol>
        <Segment>
          {data?.left1Image?.url && (
            <Image
              layout="responsive"
              placeholder="blur"
              objectFit="cover"
              blurDataURL={data.blurThumbLeft1}
              alt={data.left1Image.title}
              src={data.left1Image.url}
              width={data.left1Image.width}
              height={data.left1Image.height}
            />
          )}
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h6"
            variant="Display-Overline"
            dangerouslySetInnerHTML={{
              __html: data.left1Caption,
            }}
          />
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h3"
            variant="Display-Medium"
            dangerouslySetInnerHTML={{
              __html: data.left1Text,
            }}
          />
        </Segment>
        <Segment>
          {data?.left2Image?.url && (
            <Image
              layout="responsive"
              placeholder="blur"
              objectFit="cover"
              blurDataURL={data.blurThumbLeft2}
              alt={data.left2Image.title}
              src={data.left2Image.url}
              width={data.left2Image.width}
              height={data.left2Image.height}
            />
          )}
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h6"
            variant="Display-Overline"
            dangerouslySetInnerHTML={{
              __html: data.left2Caption,
            }}
          />
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h3"
            variant="Display-Medium"
            dangerouslySetInnerHTML={{
              __html: data.left2Text,
            }}
          />
        </Segment>
      </LeftCol>
      <RightCol>
        <div>
          <AccentTextMobile css={css({ pb: 60 })}>
            {data.sideText}
          </AccentTextMobile>
          <Text
            as="h4"
            variant="Display-Small"
            altFont
            css={css({
              color: theme.colors.charcoal,
              width: '50%',
              [theme.mediaQueries.medium]: {
                fontSize: 74,
              },
            })}
            dangerouslySetInnerHTML={{
              __html: data.rightText,
            }}
          />
        </div>
        <Segment>
          <ImageWrapper>
            {data?.right1Image?.url && (
              <Image
                layout="responsive"
                placeholder="blur"
                objectFit="cover"
                blurDataURL={data.blurThumbRight1}
                src={data.right1Image.url}
                alt={data.right1Image.title}
                width={data.right1Image.width}
                height={data.right1Image.height}
              />
            )}
          </ImageWrapper>
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h6"
            variant="Display-Overline"
            dangerouslySetInnerHTML={{
              __html: data.right1Caption,
            }}
          />
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h3"
            variant="Display-Medium"
            dangerouslySetInnerHTML={{
              __html: data.right1Text,
            }}
          />
        </Segment>
        <Segment>
          <ImageWrapper>
            {data?.right2Image?.url && (
              <Image
                layout="responsive"
                placeholder="blur"
                objectFit="cover"
                blurDataURL={data.blurThumbRight2}
                src={data.right2Image.url}
                alt={data.right2Image.title}
                width={data.right2Image.width}
                height={data.right2Image.height}
              />
            )}
          </ImageWrapper>
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h6"
            variant="Display-Overline"
            dangerouslySetInnerHTML={{
              __html: data.right2Caption,
            }}
          />
          <Text
            css={css({ color: theme.colors.charcoal })}
            as="h3"
            variant="Display-Medium"
            dangerouslySetInnerHTML={{ __html: data.right2Text }}
          />
        </Segment>
      </RightCol>
      <BottomRow>
        <Text
          css={css({ color: theme.colors.charcoal })}
          as="h3"
          variant="Display-Medium"
        >
          LIKE NO OTHER
        </Text>
        <ArrowButton title="Our design process" link="/our-story" />
      </BottomRow>
    </Container>
  );
};

export default DualColumnModule;
