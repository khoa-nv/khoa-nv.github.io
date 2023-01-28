/* eslint-disable  no-useless-escape */

import { useState } from "react";
import validator from "validator";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import MyFirebase from "lib/firebase/MyFirebase";

const myFireBase = new MyFirebase("messages");

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    fullName: "",
    message: "",
  });

  const [status, setStatus] = useState({
    email: -1,
    fullName: -1,
    message: -1,
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const _handleSubmit = () => {
    setIsSubmited(true);
    const bodyData = { ...data };
    let error = {};
    if (!bodyData.fullName.trim()) {
      error = {
        ...error,
        fullName: 0,
      };
    }

    if (!bodyData.email.trim() || !validator.isEmail(bodyData.email)) {
      error = {
        ...error,
        email: 0,
      };
    }

    if (!bodyData.message.trim()) {
      error = {
        ...error,
        message: 0,
      };
    }

    setStatus(error);
    if (Object.keys(error).length > 0) return;

    try {
      myFireBase.add(data);
    } catch (err) {
      /* eslint-disable no-console */
      console.log(err);
    }
  };

  const _hanldeChange = (key, value) => {
    if (isSubmited) setIsSubmited(false);
    setData({
      ...data,
      [key]: value,
    });
  };

  return (
    <MKBox component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <MKBox
            width="100%"
            bgColor="white"
            borderRadius="xl"
            shadow="xl"
            mb={6}
            sx={{ overflow: "hidden" }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: ({
                    palette: { gradients },
                    functions: { rgba, linearGradient },
                  }) =>
                    `${linearGradient(
                      rgba(gradients.dark.main, 0.8),
                      rgba(gradients.dark.state, 0.8)
                    )}, url("https://resources.khoanv.dev/images/contact-background.jpg")`,
                  backgroundSize: "cover",
                }}
              >
                <MKBox
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <MKTypography variant="h3" color="white" mb={1}>
                      Contact Information
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="white"
                      opacity={0.8}
                      mb={3}
                    >
                      Fill up the form and I will get back to you within 24
                      hours.
                    </MKTypography>
                    <MKBox display="flex" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-phone" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        (+84) 78-375-6567
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-envelope" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        contact@khoanv.dev
                      </MKTypography>
                    </MKBox>
                    <MKBox display="flex" color="white" p={1}>
                      <MKTypography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                      </MKTypography>
                      <MKTypography
                        component="span"
                        variant="button"
                        color="white"
                        opacity={0.8}
                        ml={2}
                        fontWeight="regular"
                      >
                        Tra Vinh Province, Vietnam
                      </MKTypography>
                    </MKBox>
                    <MKBox mt={3}>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                        href="https://www.facebook.com/fb.khoanv"
                        target="_blank"
                      >
                        <i
                          className="fab fa-facebook"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                        href="https://www.linkedin.com/in/khoa-nguyen-viet-5b0110245/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-linkedin"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                        href="https://www.instagram.com/_ig.khoanv/"
                        target="_blank"
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="white"
                        size="large"
                        iconOnly
                        href="https://github.com/khoa-nv"
                        target="_blank"
                      >
                        <i
                          className="fab fa-github"
                          style={{ fontSize: "1.25rem" }}
                        />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={7}>
                <MKBox component="form" p={2} method="post">
                  <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                    <MKTypography variant="h2" mb={1}>
                      Say Hi!
                    </MKTypography>
                    <MKTypography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </MKTypography>
                  </MKBox>
                  <MKBox pt={0.5} pb={3} px={3}>
                    <Grid container>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your name is"
                          placeholder="Full Name"
                          error={status.fullName === 0}
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          value={data.fullName}
                          success={data.fullName.trim() !== ""}
                          onChange={(e) =>
                            _hanldeChange(
                              "fullName",
                              e.target.value
                                .replaceAll(/[^\w\s]/gi, "")
                                .toLowerCase()
                                .replace(/\b[a-z]/g, (letter) => {
                                  return letter.toUpperCase();
                                })
                            )
                          }
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your email is"
                          placeholder="How can I contact with you?"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          error={status.email === 0}
                          success={status.email === 1}
                          value={data.email}
                          onChange={(e) => {
                            const test = validator.isEmail(
                              e.target.value.toString()
                            );

                            setStatus({
                              ...status,
                              email: test ? 1 : 0,
                            });

                            _hanldeChange("email", e.target.value);
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} pr={1} mb={6}>
                        <MKInput
                          variant="standard"
                          label="Your message"
                          placeholder="What're you want to say? :)"
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          multiline
                          rows={6}
                          error={status.message === 0}
                          success={data.message.trim() !== ""}
                          value={data.message}
                          onChange={(e) =>
                            _hanldeChange("message", e.target.value)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    >
                      <MKButton
                        variant="gradient"
                        color="info"
                        onClick={_handleSubmit}
                        disabled={isSubmited}
                      >
                        Send Message
                      </MKButton>
                    </Grid>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
};

export default Contact;
