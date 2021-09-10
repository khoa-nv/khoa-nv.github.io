import { createStyles } from "@material-ui/core/styles";
const HomePageStyle = createStyles({
  background: {
    background: "#333333",
    width: '100%',
    height: '100vh',
    paddingTop: "80px",
  },
  ellipse: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 0,
    height: 'auto',
    maxWidth: "30vw"
  }
})

export default HomePageStyle;