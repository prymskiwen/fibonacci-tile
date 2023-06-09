import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";

const Wrapper = styled("div")(
  css({
    position: "relative",
    gridColumn: "1 / span 12",
    py: 80,
    width: "100%",
    [theme.mediaQueries.medium]: {
      py: 120,
    },
    ".slick-slider": {
      ".slick-list": {
        padding: "0 !important",
      },
    },
  })
);

const SlideItem = styled("div")(
  css({
    position: "relative",
    maxWidth: 265,
  })
);

const ContentWrapper = styled("div")(
  css({
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "auto",
    px: 40,
    zIndex: 9999,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: "white",
    width: "100%",
    span: {
      fontSize: 120,
      display: "flex",
      "&:first-child": {
        display: "flex",
        flex: 1,
      },
      "&:last-child": {
        display: "flex",
        justifyContent: "flex-end",
        flex: 1,
      },
    },
  })
);

const BottomBar = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mt: 40,
  })
);

const ProgBar = styled("div")(
  css({
    width: "100%",
    height: "3px",
    bg: "border",
  })
);
const ProgBarInner = styled("div")(
  css({
    height: "3px",
    bg: "charcoal",
    transition: "ease all 0.3s",
  })
);
const ProgBarText = styled("span")({
  fontFamily: "Everett",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "19.6px",
  color: theme.colors.charcoal,
});

const BottomBarInner = styled("div")(
  css({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: 24,
  })
);

const Loader = styled("div")(({ prog }: { prog: number }) =>
  css({
    width: "auto",
    svg: {
      width: 30,
      height: 30,
      circle: {
        width: 30,
        height: 30,
        position: "absolute",
        fill: "none",
        strokeWidth: "3",
        transform: "translate(3px, 3px)",
        strokeDasharray: "73",
        strokeLinecap: "round",
        "&:nth-of-type(1)": {
          strokeDashoffset: 0,
          stroke: "rgba(212,212,216,0.5)",
        },
        "&:nth-of-type(2)": {
          strokeDashoffset: `calc(73 - (73 * ${prog}) / 100)`,
          stroke: "#fff",
          animation: "percent 1.5s linear",
          animationDelay: "1s",
        },
      },
    },
  })
);

const LinkWrapper = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    columnGap: 20,
    svg: {
      transition: "ease all 0.3s",
    },
    paddingRight: "120px",
    "&:hover": {
      svg: {
        transform: "translateX(6px)",
      },
    },
    a: {
      textDecoration: "none",
      fontSize: 2,
      lineHeight: 2,
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

const LinkText = styled("span")(
  css({
    fontFamily: "Everett",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "19.6px",
    color: theme.colors.charcoal,
  })
);

const NextWrapper = styled("button")(
  css({
    display: "none",
    border: "none",
    position: "absolute",
    right: 0,
    bottom: 118,
    bg: "transparent",
    cursor: "pointer",
    padding: "0",
    outline: "none",
    [theme.mediaQueries.medium]: {
      display: "block",
    },
  })
);

const PreviousWrapper = styled("button")(
  css({
    display: "none",
    border: "none",
    position: "absolute",
    right: 0,
    bottom: 118,
    bg: "transparent",
    mr: 40,
    cursor: "pointer",
    padding: "0",
    outline: "none",
    [theme.mediaQueries.medium]: {
      display: "block",
    },
  })
);

const Title = styled("h2")(
  css({
    fontSize: "44px",
    lineHeight: "50.6px",
    paddingBottom: "32px",
  })
);

export {
  Wrapper,
  SlideItem,
  ContentWrapper,
  BottomBar,
  Loader,
  ProgBar,
  ProgBarInner,
  ProgBarText,
  BottomBarInner,
  LinkWrapper,
  LinkText,
  NextWrapper,
  PreviousWrapper,
  Title,
};
