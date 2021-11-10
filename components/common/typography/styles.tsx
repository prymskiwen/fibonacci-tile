import css from "@styled-system/css";
import { variant } from 'styled-system';

const DisplayXLarge = ({ ...props }) =>
  css({
    fontFamily: [1],
    fontSize: [11],
    lineHeight: [0],
    fontWeight: 0,
    color: props.color || "charcoal",
    letterSpacing: 2,
  });

const DisplayLarge = ({ ...props }) => 
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: props.altFont ? [9] : [10],
    lineHeight: [0],
    fontWeight: 0,
    color: props.color || "charcoal",
  });

const DisplayMedium = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: props.altFont ? [7] : [8],
    lineHeight: props.altFont ? [2] : [1],
    fontWeight: 0,
    color: props.color || "charcoal",
    letterSpacing: props.altFont ? 1 : 0,
  })
);

const DisplaySmall = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: [6],
    lineHeight: props.altFont ? [1] : [2],
    fontWeight: 0,
    color: props.color || "charcoal",
    letterSpacing: props.altFont ? 0 : 1,
  })
);

const DisplayXSmall = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: props.altFont ? 4 : 5,
    lineHeight: props.altFont ? 1 : 2,
    fontWeight: 0,
    color: props.color || "charcoal",
    letterSpacing: 0,
  })
);

const DisplayXXSmall = ({ ...props }) => (
  css({
    fontFamily: props.altFont ? [0] : [1],
    fontSize: 3,
    lineHeight: props.altFont ? 4 : 2,
    fontWeight: 0,
    color: props.color || "charcoal",
    letterSpacing: 0,
  })
);

const DisplayOverline = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 0,
    lineHeight: 4,
    fontWeight: 0,
    color: props.color || "nero",
    letterSpacing: 3,
  });

const BodyXLarge = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 4,
    lineHeight: 4,
    fontWeight: 0,
    color: props.color || "charcoal",
  });

const BodyLarge = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 3,
    lineHeight: 4,
    fontWeight: 0,
    color: props.color || "charcoal",
  });

const BodyRegular = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 2,
    lineHeight: 4,
    fontWeight: 0,
    color: props.color || "charcoal",
  });

const BodySmall = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 1,
    lineHeight: 4,
    fontWeight: 0,
    color: props.color || "charcoal",
  });

const BodyXSmall = ({ ...props }) =>
  css({
    fontFamily: 1,
    fontSize: 0,
    lineHeight: 4,
    fontWeight: 0,
    color: props.color || "charcoal",
  });

export {
  DisplayXLarge,
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
  DisplayXXSmall,
  DisplayOverline,
  BodyXLarge,
  BodyLarge,
  BodyRegular,
  BodySmall,
  BodyXSmall,
};
