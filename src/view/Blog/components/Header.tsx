import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import BellSvg from "../../../assets/svg/bell.svg";
import MoonSvg from "../../../assets/svg/moon.svg";
import SearchSvg from "../../../assets/svg/search.svg";
export default function Header() {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "#fff",
          borderBottom: "2px solid rgba(226, 232, 240, 1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            style={{
              flexGrow: 1,
              color: "#121729",
              fontFamily: "Roboto",
              fontWeight: "bold",
            }}
          >
            Hashnode
          </Typography>
          <Grid
            justifyContent={"end"}
            spacing={0.8}
            marginRight={"3rem"}
            container
          >
            <Grid item>
              <IconButton sx={{}}>
                <img src={SearchSvg}></img>
              </IconButton>
            </Grid>

            <Grid item>
              <Button
                disableElevation
                variant="contained"
                sx={{ textTransform: "none", borderRadius: "0.3rem" }}
              >
                Follow
              </Button>
            </Grid>

            <Grid item>
              <IconButton sx={{}}>
                <img src={MoonSvg} />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton sx={{}}>
                <img src={BellSvg}></img>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
