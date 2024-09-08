import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  btn: {
    "&:hover": {
      backgroundColor: "violet",
    },
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  breakWork: {
    wordBreak: "break-all",
  },
}));

export default useStyles;
