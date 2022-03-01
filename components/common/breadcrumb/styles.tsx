import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const BottomBarInner = styled("div")(
  css({
    // width: "100%",
    display: "flex",
    alignItems: "center",
    pt: 130,
    pl: 19,
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    mt: 16,
    paddingRight: 10,
    columnGap: 10,
    fontSize: "12px",
    lineHeight: "16.8px",
    [theme.mediaQueries.small]: {
      fontSize: 2,
      lineHeight: 2,
      columnGap: 20,
      paddingRight: 14,
    },
    svg: {
      transition: "ease all 0.3s",
    },
    "&:hover": {
      svg: {
        transform: "rotate(-180deg) translateX(6px)",
      },
    },
    span: {
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
    },
    a: {
      textDecoration: "none",
      fontSize: "12px",
      lineHeight: "16.8px",
      [theme.mediaQueries.small]: {
        fontSize: 2,
        lineHeight: 2,
      },
      color: "charcoal",
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

const BackBttn = styled("div")(() =>
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    cursor: "pointer",
    paddingRight: 14,
    svg: {
      transition: "ease all 0.3s",
    },
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    span: {
      textDecoration: "none",
      color: "charcoal",
      fontSize: "12px",
      lineHeight: "16.8px",
      [theme.mediaQueries.small]: {
        fontSize: 2,
        lineHeight: 2,
      },
      "&:before": {
        position: "relative",
        backgroundColor: "charcoal",
        content: "' '",
        display: "block",
        height: "2px",
        width: "100%",
        transform: "translateY(40px)",
        transition: "ease all 0.3s",
        pointerEvents: "none",
        opacity: 0,
      },
      "&:hover": {
        "&:before": {
          transform: "translateY(28px)",
          opacity: 1,
        },
      },
    },
  })
);

export { BackBttn, BottomBarInner, LinkWrapper };
