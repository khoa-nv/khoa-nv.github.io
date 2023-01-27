import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import Contact from "pages/Home/sections/Contact";
import Profile from "pages/Home/sections/Profile";
// Images
import bgImage from "assets/images/city-profile.jpg";

const Home = () => {
  return (
    <>
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({
              functions: { linearGradient, rgba },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url("https://resources.khoanv.dev/images/header-background.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
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
