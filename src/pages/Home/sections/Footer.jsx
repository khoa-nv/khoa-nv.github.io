import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const Footer = () => {
  return (
    <MKBox component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <MKTypography
              variant="h6"
              textTransform="uppercase"
              mb={{ xs: 2, lg: 3 }}
            >
              Khoa Nguyen Viet
            </MKTypography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="/"
                  rel="noreferrer"
                >
                  Home
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://www.facebook.com/fb.khoanv"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href="https://instagram.com/ins.khoanv"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </MKTypography>
              </MKBox>
              <MKBox component="li">
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  opacity={0.8}
                  component={Link}
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Zalo
                </MKTypography>
              </MKBox>
            </Stack>
            <MKTypography variant="button" opacity={0.8}>
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>2021
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            ml="auto"
            textAlign={{ xs: "center", lg: "right" }}
          >
            <MKTypography
              variant="body1"
              fontWeight="bold"
              mb={6}
              sx={{ fontSize: "1.125rem" }}
            >
              The reward for getting on the stage is fame. The price of fame is
              you can&apos;t get off the stage.
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};

export default Footer;
