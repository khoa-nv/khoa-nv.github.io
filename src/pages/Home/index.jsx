import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import Contact from "pages/Home/sections/Contact";
import Profile from "pages/Home/sections/Profile";
// Images
import bgImage from "assets/images/city-profile.jpg";

const Home = () => {
  return (
    <>
      <MKBox bgColor="transparent">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            position: "relative",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "50%",
              left: "50%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
          >
            <source src="https://i.imgur.com/X01qOLo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <MKBox
            sx={{
              background: ({
                functions: { linearGradient, rgba },
                palette: { gradients },
              }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}`,
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          {/* <Posts /> */}
        </Card>
        <Contact />
        {/* <Footer /> */}
      </MKBox>
    </>
  );
};

export default Home;
