import Image from "next/image";
import router from "next/router";
import { useAppContext } from "@contexts/AppContext";
import Text from "@components/common/typography";
import {
  Container,
  Wrapper,
  TileWrapper,
  Tile,
  TileInner,
  Icon,
} from "./styles";

interface SupportModuleProps {
  title?: string;
  supports?: Array<any>;
  activePath?: string;
}

const SupportModule = ({
  title = "",
  supports,
  activePath = "/support",
}: SupportModuleProps) => {
  const { state, dispatch } = useAppContext();

  return (
    <Container>
      <Wrapper>
        {title !== "" && (
          <Text as="h6" variant="Display-Overline">
            {title}
          </Text>
        )}
        <TileWrapper>
          {supports.map((support) => (
            <Tile
              key={support.slug}
              href={support.href}
              active={activePath === support.href}
              onClick={() => {
                if (support.slug === "general-enquiry") {
                  dispatch({
                    type: "OPEN_DRAWER",
                    value:
                      state.activeDrawerTab !== "contact"
                        ? true
                        : !state.openDrawer,
                  });
                  dispatch({
                    type: "SET_ACTIVE_DRAWER_TAB",
                    value: "contact",
                  });
                }
              }}
            >
              <TileInner>
                <Icon>
                  <Image
                    alt={support.title}
                    src={support.icon}
                    width={48}
                    height={48}
                  />
                </Icon>
                <Text as="h5" variant="Display-XSmall" altFont>
                  {support.title}
                </Text>
              </TileInner>
            </Tile>
          ))}
        </TileWrapper>
      </Wrapper>
    </Container>
  );
};

export default SupportModule;
