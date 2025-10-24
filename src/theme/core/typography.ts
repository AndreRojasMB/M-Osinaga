import type { CSSObject, Breakpoint, TypographyVariantsOptions } from '@mui/material/styles';

import { pxToRem, setFont } from 'minimal-shared/utils';

import { createTheme as getTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type FontStyleExtend = {
  fontWeightSemiBold: CSSObject['fontWeight'];
  fontSecondaryFamily: CSSObject['fontFamily'];
};

export type ResponsiveFontSizesInput = Partial<Record<Breakpoint, number>>;
export type ResponsiveFontSizesResult = Record<string, { fontSize: string }>;

const defaultMuiTheme = getTheme();

function responsiveFontSizes(obj: ResponsiveFontSizesInput): ResponsiveFontSizesResult {
  const breakpoints: Breakpoint[] = defaultMuiTheme.breakpoints.keys;

  return breakpoints.reduce((acc, breakpoint) => {
    const value = obj[breakpoint];

    if (value !== undefined && value >= 0) {
      acc[defaultMuiTheme.breakpoints.up(breakpoint)] = {
        fontSize: pxToRem(value),
      };
    }

    return acc;
  }, {} as ResponsiveFontSizesResult);
}

// ----------------------------------------------------------------------

const primaryFont = setFont('"League Spartan", "Roboto", "Helvetica", "Arial", sans-serif');
const secondaryFont = setFont('"Poppins", sans-serif');

export const typography: TypographyVariantsOptions = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightLight: '300',
  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
  h1: {
    fontFamily: secondaryFont,
    fontWeight: 800,
    lineHeight: 1.2,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontFamily: secondaryFont,
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontFamily: secondaryFont,
    fontWeight: 700,
    lineHeight: 1.3,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: secondaryFont,
    fontWeight: 700,
    lineHeight: 1.4,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ md: 24 }),
  },
  h5: {
    fontFamily: secondaryFont,
    fontWeight: 600,
    lineHeight: 1.4,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19 }),
  },
  h6: {
    fontFamily: secondaryFont,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18 }),
  },
  subtitle1: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.6,
    fontSize: pxToRem(14),
  },
  body1: {
    fontFamily: primaryFont,
    fontWeight: 400,
    lineHeight: 1.6,
    fontSize: pxToRem(16),
  },
  body2: {
    fontFamily: primaryFont,
    fontWeight: 400,
    lineHeight: 1.6,
    fontSize: pxToRem(14),
  },
  caption: {
    fontFamily: primaryFont,
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontFamily: primaryFont,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: secondaryFont,
    fontWeight: 600,
    lineHeight: 1.7,
    fontSize: pxToRem(14),
    textTransform: 'none',
  },
};
