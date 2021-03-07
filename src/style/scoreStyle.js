export const scoreStyle = ({
  palette,
  spacing
}) => {
  return {
      container: {
        padding: spacing(2)
      },
      table: {
          backgroundColor: palette.text.primary,
          //color: palette.secondary.main
      },
      text: {
        textAlign: "center",
        fontWeight: "bold",
        color: palette.secondary.main
      }
  }
}
  