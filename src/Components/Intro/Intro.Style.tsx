import { createStyles, Theme } from '@material-ui/core/styles';

const introStyle = (theme: Theme) => createStyles({

  introWWrapper: {
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    color: "#fafafa",
    padding: "21%",
    [theme.breakpoints.down('sm')]: {
      padding: "5% 10%"
    }

  },
  name: {
    display: "inline",
    verticalAlign: "baseline",
    fontWeight: 700,
  },
  surnameWrapper: {
    display: 'inline-flex',
    flexDirection: "column-reverse",
    height: "100%",
    position: "relative"
  },
  span: {
    textTransform: "none",
    flexDirection: "column",
    fontSize: "1.5vw",
    display: "inline-block",
    position: "relative",
    lineHeight: "1vw",
    [theme.breakpoints.down('sm')]: {
      fontSize: "1rem",
      lineHeight: "2rem",

    }
  },
  h1: {
    fontSize: "6vw",
    display: "inline-block",
    textTransform: "uppercase",
    color: " rgba(255,151,58, 1)",
    [theme.breakpoints.down('sm')]: {
      fontSize: "3.5rem"
    }

  },
  h3: {
    fontSize: "4vw",
    textTransform: "uppercase",
    display: "inline-block",
    lineHeight: "3.5vw",
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem"
    }

  },
  titleWrapper:  {
    display: "inline-flex",
    paddingTop: "0.5rem"
  },

  title1 : { 
    textAlign: "justify",
    fontSize: "0.9vw",
    lineHeight: "1.5vw",
    padding: "0.5rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: "10px",
      lineHeight: "13px"
    },
  },
  actionWrapper:  {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "2vh",
    paddingLeft: "0.5rem",
    [theme.breakpoints.down('sm')]: {
      marginTop: "10px",
      justifyContent: "center",

    },
  },
  actionButton: { 
    textTransform: "none",
    color: '#333',
    fontWeight: 500,
    background: "rgba(255,151,58, 0.8)",
    transition: "0.2s cubic-bezier(.17,.67,.83,.67)",
    [theme.breakpoints.down('sm')]: {
      fontSize: "10px",

    },
    "&:hover" : {
      background: "rgba(255,151,58, 1)",
      transform: "scale(1.2)"
    }
  }

})
export default introStyle;