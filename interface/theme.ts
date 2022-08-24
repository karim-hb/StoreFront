/* custom interface for MUI */
declare module "@mui/material/styles" {
  interface ThemeOptions {
    containers: {
      maxWidth: string;
      px: string;
    };
  }
  interface Theme {
    containers: {
      maxWidth: string;
      px: string;
    };
  }
  interface TypographyVariants {
    paragraph1: React.CSSProperties;
    paragraph2: React.CSSProperties;
    paragraph3: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }
  interface BreakpointsOptions {
    values: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    paragraph1?: React.CSSProperties;
    paragraph2?: React.CSSProperties;
    paragraph3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }
  interface Palette {
    texts: {
      title: string;
      subtitle: string;
      title_item: string;
      subtitle_item: string;
      links: string;
    };
    bright1: paletteCustom;
    bright2: paletteCustom;
    light1: paletteCustom;
    light2: paletteCustom;
    mild1: paletteCustom;
    mild2: paletteCustom;
    dark1: paletteCustom;
    dark2: paletteCustom;
    night1: paletteCustom;
    night2: paletteCustom;
  }
  interface PaletteOptions {
    texts: {
      title: string;
      subtitle: string;
      title_item: string;
      subtitle_item: string;
      links: string;
    };
    bright1?: paletteCustom;
    bright2?: paletteCustom;
    light1?: paletteCustom;
    light2?: paletteCustom;
    mild1?: paletteCustom;
    mild2?: paletteCustom;
    dark1?: paletteCustom;
    dark2?: paletteCustom;
    night1?: paletteCustom;
    night2?: paletteCustom;
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    underline: true;
    contained1: true;
  }
  interface ButtonPropsColorOverrides {
    alt: true;
    light: true;
    dark: true;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    paragraph1: true;
    paragraph2: true;
    paragraph3: true;
    label1: true;
    label2: true;
    caption1: true;
    caption2: true;
  }
}
export {};
interface paletteCustom {
  textColor: TypographyCustomColor;
  button: ButtonColorCustom;
  backgroundColor: string;
  overlayBackgroundColor: string;
  border: borderCustomColor;
  link: linkCustomStyle;
}
interface TypographyCustomColor {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  label1: string;
  label2: string;
  caption1: string;
  caption2: string;
  body1: string;
  body2: string;
}
interface ButtonColorCustom {
  primary: ColorOptionCustom;
  secondary: ColorOptionCustom;
  alt: ColorOptionCustom;
  success: ColorOptionCustom;
  error: ColorOptionCustom;
  info: ColorOptionCustom;
  warning: ColorOptionCustom;
  light: ColorOptionCustom;
  dark: ColorOptionCustom;
}
interface ColorOptionCustom {
  background: string;
  backgroundHover: string;
  backgroundFocus: string;
  backgroundActive: string;
  borderColor: string;
  textColor: string;
}
interface borderCustomColor {
  color: string;
  colorHover: string;
}
interface linkCustomStyle {
  heading: {
    color: string;
    colorHover: string;
  };
  text: {
    color: string;
    colorHover: string;
  };
}
