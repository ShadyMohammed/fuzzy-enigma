export enum TypeScale {
  XS = -2,
  S,
  M = 1,
  LG,
  XL,
  XXL
}

export enum BreakPointsTypeScaleRatio {
  XL_SCREEN = 1.2,
  DESKTOP = 1.2,
  LG_TABLET = 1.2,
  TABLET = 1.2,
  PHONE = 1.2,
  SM_PHONE = 1.2
}

type CalcFontSize = (
  config: { size: TypeScale; scaleRatio?: BreakPointsTypeScaleRatio }
) => string;

export const calcFontSize: CalcFontSize = ({
  size,
  scaleRatio = BreakPointsTypeScaleRatio.PHONE
}) => {
  const ratio = Math.pow(scaleRatio, size);
  if (size < TypeScale.M) {
    return `${1 / -ratio}em`;
  } else {
    return `${ratio}em`;
  }
};

// type CalcSpacing = ({}) => string
