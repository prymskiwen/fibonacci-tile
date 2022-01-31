import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useAppContext } from "@contexts/AppContext";
import Link from "next/link";
import Logo from "public/assets/brandmarks/logo-primary.svg";
import LogoWhite from "public/assets/brandmarks/logo-secondary.svg";
import {
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
} from "./styles";
import { Transition } from "react-transition-group";
import Text from "@components/common/typography";
import ProductSelectionCount from "@components/common/product/selectionCount";
import SelectionCart from "@components/common/selectionCart";

const duration = 400;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Header = ({ mode = "light", position = "relative" }) => {
  const { state, dispatch } = useAppContext();
  const [navOpen, setNavOpen] = useState(false);
  const [newSelection, setNewSelection] = useState(false);
  const [selectionsCount, setSelectionsCount] = useState(0);
  const [alertActive, setAlertActive] = useState(true);
  const selectionsMounted = useRef(false);
  const activeLogo = mode === "dark" ? Logo : LogoWhite;

  useEffect(() => {
    const alertState = sessionStorage.getItem("alert-state");
    const alertToBool = alertState === "true";
    alertState && setAlertActive(alertToBool);
  }, []);

  useEffect(() => {
    if (
      selectionsMounted.current &&
      state.selectedProducts.length > selectionsCount &&
      state.openDrawer !== true
    ) {
      dispatch({
        type: "OPEN_DRAWER",
        value: true,
      });
      setNewSelection(true);
      const timerId = setTimeout(() => {
        setNewSelection(false);
        dispatch({
          type: "OPEN_DRAWER",
          value: false,
        });
      }, 4000);
      timerId;
    } else selectionsMounted.current = true;
    setSelectionsCount(state.selectedProducts.length);
  }, [state.selectedProducts]);
  useEffect(() => {
    sessionStorage.setItem("alert-state", alertActive.toString());
  }, [alertActive]);

  return (
    <div>
      {/* <div css={css({position: 'sticky', top: 0, zIndex: 999})}> */}
      {alertActive && (
        <AlertBar>
          <AlertLabel>
            Join Fibonacci today and save up to 20% on your order using code
            SPRING at checkout. Promotion valid for new users only.
          </AlertLabel>
          <AlertClose onClick={() => setAlertActive(false)} />
        </AlertBar>
      )}
      <Container position={position} navOpen={navOpen} mode={mode}>
        <Wrapper>
          <NavIcon
            mode={mode}
            isOpen={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          />
          <NavLeft>
            <NavItem href="/products" mode={mode}>
              Our Products
            </NavItem>
            <NavItem href="/projects" mode={mode}>
              In Use
            </NavItem>
            <NavItem href="#" mode={mode}>
              Our Story
            </NavItem>
            <NavItem href="/latest" mode={mode}>
              Latest
            </NavItem>
          </NavLeft>
          <LogoWrapper>
            <Link href="/">
              <a>
                <Image
                  src={activeLogo}
                  width="158"
                  height="40"
                  alt="Fibonacci"
                />
              </a>
            </Link>
          </LogoWrapper>
          <NavRight>
            <NavItem
              href="#"
              mode={mode}
              onClick={() => (
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "support"
                      ? true
                      : !state.openDrawer,
                }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "support",
                })
              )}
            >
              Support
            </NavItem>
            <NavItem
              href="#"
              mode={mode}
              onClick={() => (
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "contact"
                      ? true
                      : !state.openDrawer,
                }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "contact",
                })
              )}
            >
              Contact
            </NavItem>
            <NavItem
              href="#"
              mode={mode}
              onClick={() => (
                dispatch({
                  type: "OPEN_DRAWER",
                  value:
                    state.activeDrawerTab !== "cart" ? true : !state.openDrawer,
                }),
                dispatch({
                  type: "SET_ACTIVE_DRAWER_TAB",
                  value: "cart",
                })
              )}
            >
              Selections <ProductSelectionCount />
            </NavItem>
          </NavRight>
        </Wrapper>
        <SelectionCart
          tab={state.activeDrawerTab}
          active={state.openDrawer}
          newSelection={newSelection}
        />
        <Transition
          in={navOpen}
          timeout={duration}
          appear
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <NavDrawer
              css={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              <DrawerInner>
                <NavItem mode={mode} href="/products">
                  Our Products
                </NavItem>
                <NavItem mode={mode} href="/projects">
                  In Use
                </NavItem>
                <NavItem mode={mode} href="#">
                  Our Story
                </NavItem>
                <NavItem mode={mode} href="#">
                  Latest
                </NavItem>
                <NavItem mode={mode} href="#">
                  Support
                </NavItem>
                <NavItem mode={mode} href="#">
                  Contact
                </NavItem>
              </DrawerInner>
              <DrawerFooter>
                <Text as="h4" variant="Body-Regular">
                  Follow Us
                </Text>
                <NavItem mode={mode} href="#">
                  Instagram
                </NavItem>
                <NavItem mode={mode} href="#">
                  Facebook
                </NavItem>
                <NavItem mode={mode} href="#">
                  LinkedIn
                </NavItem>
              </DrawerFooter>
            </NavDrawer>
          )}
        </Transition>
      </Container>
    </div>
  );
};

export default Header;
