import { createStyles, Theme } from "@material-ui/core";


const avatarStyle = (theme: Theme) => createStyles({
  avatarWrapper : {
    width: "100%",
    height: "calc(100vh - 80px)",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      height: "auto"
    }
  },
  avatarImg: { 
    maxWidth: "20vw",
    userSelect: "none",
    filter: "drop-shadow(0px 0px 50px rgba(0,0,0,.5));",
    position: 'relative',
    borderTop: "3px solid rgba(255,151,58, 1)",
    borderBottom: "3px solid rgba(255,151,58, 1)",
    borderRadius: '50%',
    zIndex: 9999
  }
});

export default avatarStyle;