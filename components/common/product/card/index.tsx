import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SizeDisplay from "./SizeDisplay";
import Text from "@components/common/typography";
import AddIcon from "@components/icons/add";
import ArrowButton from "@components/common/button/arrowButton";
import CheckMarkIcon from "@components/icons/checkmark";
import CrossIcon from "@components/icons/cross";
import ArrowDown from "@components/icons/arrowDown";
import ArrowUp from "@components/icons/arrowUp";
import {
  ActionBtn,
  ActionBtnContainer,
  AvailableBox,
  CardImg,
  CardSubTitle,
  CardTitle,
  CollectionNameBox,
  Container,
  Description,
  DescriptionBox,
  DisplayNameBox,
  Details,
  DetailsBoxLeft,
  DetailsBoxRight,
  GridCardImgContainer,
  Headline,
  ImgCell,
  ListCardImgContainer,
  Listings,
  NameBox,
  ProductDescriptionBox,
  ProductListTitle,
  ProductName,
  ProductInfoBox,
  ProductsInfoDetails,
  ProductsInfoRow,
  RowDetailButton,
  TableRow,
  TechnicalSpecification,
  TitleText,
  Wrapper,
} from "./styles";
import { css } from "@emotion/react";
import Arrow from "@components/common/icons/arrow";

const ProductCard = ({
  product,
  displayMode = "grid",
  isSelected = false,
  toggleProductSelect,
  compact = false,
  activeCollectionSlug = null,
}) => {
  const [detailShown, setDetailShown] = useState(false);
  let collectionSlug = activeCollectionSlug
    ? activeCollectionSlug
    : product?.collections[0]?.slug;

  if (displayMode === "list") {
    return (
      <TableRow detailView={detailShown}>
        <DetailsBoxLeft detailView={detailShown}>
          <ProductsInfoRow>
            <ProductName>
              <div>
                <Link
                  href={`/terrazzo/${collectionSlug}/${product.slug}`}
                  passHref
                >
                  <ProductListTitle>
                    <Text as="h3" variant="Display-XSmall" altFont={true}>
                      {product.title}
                    </Text>
                  </ProductListTitle>
                </Link>
              </div>
            </ProductName>
            <CollectionNameBox
              onClick={() => {
                setDetailShown(!detailShown);
              }}
            >
              <DisplayNameBox>
                <AvailableBox>
                  <div>
                    <Text as="h4" variant="Body-Regular">
                      {product.productCategories[0].title}
                    </Text>
                  </div>
                </AvailableBox>
                <NameBox>
                  <div>
                    <Text as="h4" variant="Body-Regular">
                      {product.collections[0].title}
                    </Text>
                  </div>
                </NameBox>
              </DisplayNameBox>
            </CollectionNameBox>
            <DescriptionBox
              onClick={() => {
                setDetailShown(!detailShown);
              }}
            >
              <div>
                <Text
                  as="h4"
                  variant="Body-Regular"
                  dangerouslySetInnerHTML={{ __html: product.subline }}
                />
              </div>
            </DescriptionBox>
          </ProductsInfoRow>
          <ProductsInfoDetails>
            <ProductInfoBox>
              <Details detailView={detailShown}>
                <div>
                  {product.label && (
                    <TitleText color="white" variant="Body-Regular">
                      # {product.label}
                    </TitleText>
                  )}
                </div>
                <Description detailView={detailShown}>
                  <Text
                    variant="Body-Regular"
                    dangerouslySetInnerHTML={{
                      __html: product.projectIntroduction,
                    }}
                  />
                </Description>
                <ArrowButton
                  mode="dark"
                  title="View product details"
                  link={`/terrazzo/${collectionSlug}/${product.slug}`}
                />
              </Details>
            </ProductInfoBox>

            <ProductDescriptionBox>
              <Details detailView={detailShown}>
                <Listings>
                  <ul>
                    <li>
                      <Headline>Material and composition</Headline>
                      {product.materialsComposition}
                    </li>
                    <li>
                      <Headline>Finish and appearance</Headline>
                      {product.finishAppearance}
                    </li>
                    <li>
                      <Headline>Sizes</Headline>
                      <SizeDisplay
                        productVariations={product.productVariations}
                      />
                    </li>
                    <li>
                      <Headline>Applications</Headline>
                      {product.applications}
                    </li>

                    <TechnicalSpecification href="#">
                      <span style={{ marginRight: "12px" }}>
                        Click here to copy technical specification
                      </span>
                      <Arrow type="short" direction="right" />
                    </TechnicalSpecification>
                  </ul>
                </Listings>
              </Details>
            </ProductDescriptionBox>
          </ProductsInfoDetails>
        </DetailsBoxLeft>
        <DetailsBoxRight>
          <ImgCell detailView={detailShown}>
            <ListCardImgContainer detailView={detailShown}>
              <CardImg detailView={detailShown}>
                {product?.thumbImageList?.[0]?.url && (
                  <Link href={`/terrazzo/${collectionSlug}/${product.slug}`}>
                    <a>
                      <Image
                        placeholder="blur"
                        blurDataURL={product.blurThumb[0].url}
                        src={product.thumbImageList[0].url}
                        alt={product.title}
                        width={product.thumbImageList[0].width}
                        height={product.thumbImageList[0].height}
                        objectFit="cover"
                      />
                    </a>
                  </Link>
                )}
              </CardImg>
              <ActionBtnContainer>
                <ActionBtn
                  checked={isSelected}
                  onClick={() => toggleProductSelect(product)}
                >
                  {!isSelected && (
                    <span className="hovered">
                      <AddIcon color="white" />{" "}
                      <Text color="white" variant="Body-XSmall">
                        Add To Selection
                      </Text>
                    </span>
                  )}
                  {!isSelected && (
                    <span className="initial">
                      <AddIcon color="black" />
                    </span>
                  )}
                  {isSelected && (
                    <span className="initial">
                      <CheckMarkIcon color="white" />
                    </span>
                  )}
                  {isSelected && (
                    <span className="hovered">
                      <CrossIcon />{" "}
                      <Text color="white" variant="Body-XSmall">
                        Remove Selection
                      </Text>
                    </span>
                  )}
                </ActionBtn>
              </ActionBtnContainer>
            </ListCardImgContainer>
          </ImgCell>
          <RowDetailButton detailView={detailShown}>
            <button
              onClick={() => {
                setDetailShown(!detailShown);
              }}
            >
              {!detailShown && <ArrowDown />}
              {detailShown && <ArrowUp />}
            </button>
          </RowDetailButton>
        </DetailsBoxRight>
      </TableRow>
    );
  }
  return (
    <Wrapper>
      <Container compact={compact}>
        <GridCardImgContainer compact={compact}>
          {product?.thumbImageList?.[0]?.url && (
            <Link href={`/terrazzo/${collectionSlug}/${product.slug}`}>
              <a css={css({ width: compact && "100%", cursor: "pointer" })}>
                <div
                  css={css({
                    position: "relative",
                    width: compact ? "100%" : 228,
                    height: compact ? "auto" : 228,
                    "&::after": compact && {
                      width: "100%",
                      content: '" "',
                      display: "block",
                      paddingBottom: "100%",
                      position: "absolute",
                      bottom: "0",
                    },
                  })}
                >
                  <Image
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={product.blurThumb[0].url}
                    src={product.thumbImageList[0].url}
                    alt={product.title}
                    width="228"
                    height="228"
                    objectFit="cover"
                  />
                </div>
              </a>
            </Link>
          )}
          <ActionBtnContainer>
            <ActionBtn
              checked={isSelected}
              onClick={() => toggleProductSelect(product)}
            >
              {!isSelected && (
                <span className="hovered">
                  <AddIcon color="white" />{" "}
                  <Text color="white" variant="Body-XSmall">
                    Add To Selection
                  </Text>
                </span>
              )}
              {!isSelected && (
                <span className="initial">
                  <AddIcon color="black" />
                </span>
              )}
              {isSelected && (
                <span className="initial">
                  <CheckMarkIcon color="white" />
                </span>
              )}
              {isSelected && (
                <span className="hovered">
                  <CrossIcon />{" "}
                  <Text color="white" variant="Body-XSmall">
                    Remove Selection
                  </Text>
                </span>
              )}
            </ActionBtn>
          </ActionBtnContainer>
        </GridCardImgContainer>
        <CardTitle
          as="h3"
          variant="Display-XSmall"
          altFont={true}
          marginTop="25px"
        >
          <Link href={`/terrazzo/${collectionSlug}/${product.slug}`}>
            <a>{product.title}</a>
          </Link>
        </CardTitle>
        {!compact && (
          <CardSubTitle as="h4" variant="Body-Small">
            {product.subline}
          </CardSubTitle>
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductCard;
