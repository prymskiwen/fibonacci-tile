import { useEffect, useState } from 'react';
import css from '@styled-system/css';
import { useAppContext } from '@contexts/AppContext';
import BreadCrumb from '@components/common/breadcrumb';
import SelectedProductCard from '@components/common/product/selectedCard';
import ArrowButton from '@components/common/button/arrowButton';
import Header from '@components/common/header';
import Text from '@components/common/typography';
import Samples from './components/samples';
import Details from './components/details';
import StepItem from './components/stepItem';
import Delivery from './components/delivery';
import Confirm from './components/confirm';
import Container from '@components/common/layout/container';
import {
  CheckoutStepWrapper,
  CheckoutContentWrapper,
  CheckoutContainer,
  CheckoutWrapper,
  LeftContent,
  RightContent,
  SelectionWrapper,
  NoSamples,
  //CheckoutFooter,
} from './styles';

const sampleSelectedCount = Number(
  process.env.NEXT_PUBLIC_SAMPLE_SELECTION_COUNT
);
const CheckoutPage = ({ notifications }) => {
  const [activeCheckoutStep, setActiveCheckoutStep] = useState(1);
  const { state, dispatch } = useAppContext();
  const { confirmedProducts, selectedProducts } = state;
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'OPEN_DRAWER',
        value: false,
      });
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (selectedProducts?.length > sampleSelectedCount) {
      setActiveCheckoutStep(1);
    } else {
      if (
        selectedProducts?.length > 0 &&
        selectedProducts?.length <= sampleSelectedCount
      ) {
        dispatch({
          type: 'AUTO_CONFIRM_PRODUCT_SELECTION',
          products: selectedProducts,
        });
        setActiveCheckoutStep(2);
      }
    }
  }, [selectedProducts, dispatch]);

  let disabled = false;
  if (
    confirmedProducts?.length === 0 ||
    confirmedProducts?.length > sampleSelectedCount
    // || selectedProducts?.length > sampleSelectedCount
  ) {
    disabled = true;
  }

  const crumbs = [
    { path: '/terrazzo', name: 'Terrazzo' },
    { name: 'Checkout' },
  ];
  const stepChange = (step) => {
    if (disabled) {
      return;
    }
    setActiveCheckoutStep(step);
  };

  return (
    <Container>
      <div
        css={css({
          position: 'absolute',
          maxWidth: '2560px',
          left: '32px',
          top: 92,
          pb: 0,
        })}
      >
        <BreadCrumb crumbs={crumbs} pt={0} />
      </div>
      <CheckoutContainer>
        <Header mode="dark" notifications={notifications} />
        <CheckoutWrapper>
          <LeftContent
            displayRight={
              activeCheckoutStep === 1 || activeCheckoutStep === 4
                ? false
                : true
            }
          >
            <CheckoutStepWrapper>
              {selectedProducts?.length !== 0 && (
                <>
                  {selectedProducts?.length > sampleSelectedCount && (
                    <StepItem
                      step={1}
                      activeStep={activeCheckoutStep}
                      stepChange={stepChange}
                    />
                  )}
                  <StepItem
                    step={
                      selectedProducts?.length > sampleSelectedCount ? 2 : 1
                    }
                    activeStep={activeCheckoutStep}
                    stepChange={stepChange}
                  />
                  <StepItem
                    step={
                      selectedProducts?.length > sampleSelectedCount ? 3 : 2
                    }
                    activeStep={activeCheckoutStep}
                    stepChange={stepChange}
                  />
                  <StepItem
                    step={
                      selectedProducts?.length > sampleSelectedCount ? 4 : 3
                    }
                    activeStep={activeCheckoutStep}
                    stepChange={stepChange}
                  />
                </>
              )}
            </CheckoutStepWrapper>
            {selectedProducts?.length > 0 && (
              <CheckoutContentWrapper>
                {activeCheckoutStep === 1 && (
                  <Samples disabled={disabled} stepChange={stepChange} />
                )}
                {activeCheckoutStep === 2 && (
                  <Details
                    disabled={disabled}
                    stepChange={stepChange}
                    activeCheckoutStep={activeCheckoutStep}
                  />
                )}
                {activeCheckoutStep === 3 && (
                  <Delivery
                    disabled={disabled}
                    stepChange={stepChange}
                    activeCheckoutStep={activeCheckoutStep}
                  />
                )}
                {activeCheckoutStep === 4 && (
                  <Confirm stepChange={stepChange} />
                )}
              </CheckoutContentWrapper>
            )}
            {selectedProducts?.length === 0 && (
              <NoSamples>
                <p>No selected samples</p>
                <ArrowButton
                  disabled={disabled}
                  mode="dark"
                  title="Continue Selections"
                  link="/terrazzo"
                />
              </NoSamples>
            )}
          </LeftContent>
          <RightContent
            displayRight={
              activeCheckoutStep === 2 || activeCheckoutStep === 3
                ? true
                : false
            }
          >
            <div
              css={css({
                pt: 35,
                pr: 20,
              })}
            >
              <Text variant="Body-Large">
                Selections (
                {confirmedProducts?.length > 0 ? confirmedProducts?.length : 0})
              </Text>
              <div
                css={css({
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  pt: 28,
                  columnGap: 24,
                  rowGap: 16,
                })}
              >
                {confirmedProducts?.length > 0 &&
                  confirmedProducts.map((product) => (
                    <SelectedProductCard
                      product={product}
                      isSelected={
                        state?.selectedProducts.findIndex(
                          (sp) => sp.id === product?.id
                        ) !== -1
                      }
                      toggleProductSelect={() =>
                        dispatch({
                          type: 'TOGGLE_CONFIRM_PRODUCT_SELECTION',
                          product,
                        })
                      }
                      key={`product-${product?.id}`}
                      confirmSample={true}
                      compact
                    />
                  ))}
              </div>
            </div>
          </RightContent>
        </CheckoutWrapper>

        {/* {activeCheckoutStep === 1 && selectedProducts?.length > 0 && (
        <CheckoutFooter contentAlign="right">
          <span>{`You currently have ${confirmedProducts.length} selected, you can choose up 6 samples`}</span>
          <ArrowButton
            mode="dark"
            bgColor="white"
            title="Continue to Details"
            link=""
            onClick={() => stepChange(2)}
            disabled={disabled}
          />
        </CheckoutFooter>
      )} */}

        {/* {activeCheckoutStep === 2 && (
        <CheckoutFooter contentAlign="right">
          <div className="back" onClick={() => stepChange(1)}>
            Back
          </div>
          <ArrowButton
            mode="dark"
            bgColor="white"
            title="Continue to Delivery"
            link=""
            onClick={() => stepChange(3)}
            disabled={disabled}
          />
        </CheckoutFooter>
      )} */}

        {/* {activeCheckoutStep === 3 && (
        <CheckoutFooter contentAlign="left">
          <ArrowButton
            mode="dark"
            bgColor="white"
            title="Continue to Confirmation"
            link=""
            onClick={() => stepChange(4)}
            disabled={disabled}
          />
          <div className="back" onClick={() => stepChange(2)}>
            Back
          </div>
        </CheckoutFooter>
      )} */}
      </CheckoutContainer>
    </Container>
  );
};

export default CheckoutPage;
