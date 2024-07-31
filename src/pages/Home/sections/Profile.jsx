import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKAvatar from "components/MKAvatar";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profileImg from "assets/img/profile-picture.jpg";

const Profile = () => {
  const handleShowResume = () => {
    window.open(
      "https://resources.khoanv.dev/documents/ReactJS_Khoa_Nguyen_Viet_Resume.pdf",
      "_blank"
    );
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={profileImg}
              alt="Khoa Nguyen"
              size="xxl"
              shadow="xl"
            />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <MKTypography variant="h3">Khoa Nguyen Viet</MKTypography>
                <MKButton
                  variant="outlined"
                  color="info"
                  size="small"
                  onClick={handleShowResume}
                >
                  Resume
                </MKButton>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" color="text">
                    Web Developer
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Welcome to my personal (React) website. I hope you can find
                something helpful about me! I love playing video games (League
                of Legends), watching Mixigaming live stream and photography. I
                also love learning new technologies and using them to solve real
                life&rsquo;s problems! I can coffee, code, debug, and repeat!{" "}
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};

export default Profile;
