import { createStyles, Theme } from '@material-ui/core/styles';

const sidebarStyle = (theme: Theme) => createStyles({
  sidebarContainer: {
    position: 'fixed',
    zIndex: 9999,
    color: "#999999",
    bottom: 0,
    padding: ".5rem",
    justifyContent: 'flex-start',
    flexDirection: "column",
    width: "52px",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "row",
      width: "100%",
      justifyContent: 'center',

    }
  },
  iconButton: {
    color: "white",
    fontSize: '2rem',
    textAlign: "center",
    width: "100%",
    "& i": {
      transition: "0.2s"
    },
    "&:hover i, &:hover img": {
      transform: "scale(0.8)",
      color: "#999999"
    },
    " &:hover img": {
      opacity: 0.7
    }
  },
  verticleLine: {
    display: "block",
    width: "1px",
    height: "10vh",
    margin: "1rem auto 0 auto",
    backgroundColor: "#999999"
  },
  zaloIcon: {
    width: "30px",
    height: "30px",
    transition: "0.2s"
  },
  zaloQr: {
    maxWidth: "400px"
  },
  popover: {
    padding: "0",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    lineHeight: "1.5em",
    background: "#fff",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "auto",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word",
  },
  popoverBottom: {
    marginTop: "5px",
  },
  popoverHeader: {
    backgroundColor: "#fff",
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: "#555",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)",
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: "#555",
  },
})

export default sidebarStyle;