// ** React Imports
import { useState, Fragment } from "react";

// ** Next Imports
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// ** MUI Components
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import { Formik } from "formik";

// ** Configs
import themeConfig from "src/configs/themeConfig";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";
import axiosMain from "src/https/axiosMain";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const ImgStyled = styled("img")(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4.5),
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

const RegisterPage = () => {
  // ** States
  const [imgSrc, setImgSrc] = useState("/images/avatars/1.png");
  const [files, setFiles] = useState();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  // ** Hook
  const theme = useTheme();
  const router = useRouter();

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
      setFiles(files[0]);
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registerUser = async (requestBody) => {
    try {
      const response = await axiosMain.post(
        "/api/events/register",
        { ...requestBody, files },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        toast.success("Registered Successfully");
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response ? err.response.data.error : err.message);
    }
    // if()
  };

  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              User Registration
            </Typography>
          </Box>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ImgStyled src={imgSrc} alt="Profile Pic" />
              <Box>
                <ButtonStyled
                  component="label"
                  variant="contained"
                  htmlFor="account-settings-upload-image"
                >
                  Upload New Photo
                  <input
                    hidden
                    type="file"
                    onChange={onChange}
                    accept="image/png, image/jpeg"
                    id="account-settings-upload-image"
                  />
                </ButtonStyled>
                <ResetButtonStyled
                  color="error"
                  variant="outlined"
                  onClick={() => setImgSrc("/images/avatars/1.png")}
                >
                  Reset
                </ResetButtonStyled>
                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 2MB.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Formik
            initialValues={{
              email: "",
              name: "",
              phone: "",
              organisation: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              registerUser(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <TextField
                  autoFocus
                  fullWidth
                  name="name"
                  id="name"
                  label="Full Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  sx={{ marginBottom: 4 }}
                />
                <TextField
                  fullWidth
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="email"
                  label="Email"
                  sx={{ marginBottom: 4 }}
                />
                <TextField
                  autoFocus
                  name="phone"
                  fullWidth
                  id="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  label="Phone Number"
                  sx={{ marginBottom: 4 }}
                />
                <TextField
                  name="organisation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.organisation}
                  autoFocus
                  fullWidth
                  id="organisation"
                  label="Organisation Name"
                  sx={{ marginBottom: 4 }}
                />

                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ marginBottom: 7 }}
                >
                  Sumbit
                </Button>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  );
};
RegisterPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default RegisterPage;
