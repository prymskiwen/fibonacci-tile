import css from "@styled-system/css";
import styled from "@emotion/styled";
import theme from "styles/theme";
export interface containerProps {
  navOpen: boolean;
  position: string;
  mode: string;
}

export interface navItemProps {
  mode: string;
}

export interface NavIconProps {
  isOpen: boolean;
  mode: string;
}

const Container = styled("div")(({ ...props }: containerProps) =>
  css({
    position: props.position ? props.position : "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: props.mode === "dark" && "white",
    borderBottom: "1px solid",
    transition: "ease all 0.3s",
    borderColor: props.navOpen ? "white" : "stone",
    zIndex: 1000,
  })
);

const Wrapper = styled("div")(() =>
  css({
    width: "100%",
    maxWidth: 2560,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 32,
    height: 80,
    "@media screen and (max-width: 768px)": {
      px: 10,
    },
  })
);

const LogoWrapper = styled("div")(() =>
  css({
    justifySelf: "center",
  })
);

const NavRight = styled("div")(() =>
  css({
    display: "flex",
    flex: 1,
    minWidth: "-webkit-min-content",
    columnGap: [15, 15, 15, 15, 15, 30, 30],
    justifyContent: "flex-end",
    a: {
      display: "none",
      "&:nth-last-of-type(1)": {
        display: "flex",
      },
    },
    [theme.mediaQueries.small]: {
      a: {
        "&:nth-last-of-type(2)": {
          display: "flex",
        },
      },
    },
    [theme.mediaQueries.medium]: {
      a: {
        display: "flex !important",
      },
    },
  })
);

const NavLeft = styled("div")(() =>
  css({
    display: "flex",
    flex: 0,
    minWidth: "-webkit-min-content",
    columnGap: [15, 15, 15, 15, 15, 30, 30],
    a: {
      display: "none",
    },
    [theme.mediaQueries.xSmall]: {
      flex: 1,
      a: {
        "&:nth-child(1)": {
          display: "flex",
        },
      },
    },
    [theme.mediaQueries.small]: {
      a: {
        "&:nth-child(1)": {
          display: "flex",
        },
        "&:nth-child(2)": {
          display: "flex",
        },
      },
    },
    [theme.mediaQueries.medium]: {
      a: {
        display: "flex !important",
      },
    },
  })
);

const NavItem = styled("a")(({ mode }: navItemProps) =>
  css({
    display: "flex",
    textDecoration: "none",
    fontSize: [1, 1, 1, 1, 1, 3, 3],
    fontFamily: 1,
    color: mode === "light" ? "white" : "charcoal",
    alignSelf: "center",
    alignItems: "center",
    fontWeight: 300,
    columnGap: "8px",
  })
);

const NavIcon = styled("button")(({ isOpen, mode }: NavIconProps) =>
  css({
    padding: 0,
    background: "none",
    border: "none",
    marginRight: "6px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    cursor: "pointer",
    [theme.mediaQueries.medium]: {
      display: "none",
    },
    "&:before": {
      position: "relative",
      backgroundColor: mode === "dark" ? "charcoal" : "white",
      content: "' '",
      display: "block",
      height: "2px",
      marginBottom: isOpen ? "0px" : "4px",
      transition: "all .2s ease-in-out",
      width: 16,
      transform: isOpen && "translateY(1px) rotate(135deg)",
    },
    "&:after": {
      position: "relative",
      backgroundColor: mode === "dark" ? "charcoal" : "white",
      content: "' '",
      display: "block",
      height: "2px",
      transition: "all .2s ease-in-out",
      width: 16,
      transform: isOpen && "translateY(-1px) rotate(-135deg)",
    },
    [theme.mediaQueries.medium]: {
      display: "none",
    },
  })
);

const NavDrawer = styled("div")(() =>
  css({
    position: "absolute",
    top: 80,
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 80px)",
    width: "100%",
    boxSizing: "border-box",
    zIndex: 999,
  })
);

const DrawerInner = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: "100%",
    background: "white",
    padding: "16px",
    a: {
      color: "charcoal",
      textAlign: "left",
      fontSize: 3,
      mr: "auto",
      py: "7px",
      mb: "15px",
    },
  })
);

const DrawerFooter = styled("div")(() =>
  css({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    rowGap: "8px",
    a: { mr: "auto", color: "charcoal" },
    bg: "cold",
    px: 15,
    py: 20,
  })
);

const AlertBar = styled("div")(
  css({
    boxSizing: "border-box",
    width: "100%",
    bg: "taupe",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    py: 10,
    px: 28,
  })
);

const AlertLabel = styled("span")(
  css({
    color: "white",
    fontSize: 1,
    lineHeight: 0,
  })
);

const AlertClose = styled("button")(
  css({
    position: "absolute",
    right: 28,
    height: 16,
    width: 16,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    "&:before": {
      position: "relative",
      bg: "white",
      content: "' '",
      display: "block",
      height: "2px",
      transition: "all .2s ease-in-out",
      width: 16,
      borderRadius: 2,
    },
  })
);

export {
  Container,
  Wrapper,
  NavLeft,
  NavRight,
  NavItem,
  LogoWrapper,
  NavIcon,
  NavDrawer,
  DrawerFooter,
  DrawerInner,
  AlertBar,
  AlertLabel,
  AlertClose,
};
