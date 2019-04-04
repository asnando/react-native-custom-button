export default function resolveColorScheme(props) {
  const colors = {};
  const { style } = props;
  if (style) {
    if (style.backgroundColor) {
      colors.backgroundColor = style.backgroundColor;
    }
    if (style.textColor) {
      colors.color = style.textColor;
    }
  }
  return colors;
}