import React, { useState } from "react";
import { Wrapper, Item, Top, Inner, Toggle } from "./styles";
import mockData from "./constants";
import theme from "styles/theme";
import Text from "@components/common/typography";
import { css } from "@styled-system/css";
import Arrow from "@components/icons/arrowDown";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
      <Wrapper>
        {mockData.map((item, index) => {
          return (
            <Item key={index}>
              <Top
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <Text
                  variant="Display-Small"
                  css={css({
                    fontSize: 26,
                    [theme.mediaQueries.small]: {
                      fontSize: 32,
                    },
                  })}
                >
                  {item.heading}
                </Text>
                <Toggle
                  css={css({
                    svg: {
                      transition: "ease all 0.3s",
                      transform: activeIndex === index && "rotate(180deg)",
                    },
                  })}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <Arrow width={18} />
                </Toggle>
              </Top>
              {index === activeIndex && (
                <Inner>
                  {item.secondaryHeading && (
                    <Text variant="Body-Large" css={css({ mb: 16 })}>
                      <strong>{item.secondaryHeading}</strong>
                    </Text>
                  )}
                  <span>{item.content}</span>
                </Inner>
              )}
            </Item>
          );
        })}
      </Wrapper>
  );
};

export default Accordion;