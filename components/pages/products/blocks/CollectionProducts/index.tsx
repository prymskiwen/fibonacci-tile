import React from "react";
import Text from "@components/common/typography";
import ProductCard from "@components/common/product/card";
import { useAppContext } from "@contexts/AppContext";
import { css } from "@styled-system/css";
import { CollectionProductsContainer } from "./styles";
import AccentText, { AccentTextMobile } from "@components/common/accentText";
import { CaptionText } from "./styles";
import theme from "@styles/theme";

const CollectionProducts = ({ products, backgroundColor, collection }) => {
  const { state, dispatch } = useAppContext();
  return (
    <CollectionProductsContainer
      css={css({
        background: backgroundColor ? backgroundColor : "#E6EBEA",
      })}
    >
      <AccentText top={202}>{collection.title} Collection</AccentText>
      <AccentTextMobile css={css({ pb: 80 })}>{collection.title} Collection</AccentTextMobile>
      <CaptionText>
        <Text
          as="h2"
          variant="Display-Medium"
          altFont
          dangerouslySetInnerHTML={{ __html: collection.subline }}
        />
      </CaptionText>
      {products.map((product: any) => (
        <ProductCard
          product={product}
          hoverBG={theme.colors.white}
          isSelected={
            state?.selectedProducts.findIndex((sp) => sp.id === product.id) !==
            -1
          }
          toggleProductSelect={() =>
            dispatch({
              type: "TOGGLE_PRODUCT_SELECTION",
              product,
            })
          }
          key={`product-${product.id}`}
        />
      ))}
    </CollectionProductsContainer>
  );
};

export default CollectionProducts;
