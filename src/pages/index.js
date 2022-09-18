// ** Next Import
import Link from "next/link";

// ** MUI Components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrations from "src/views/pages/misc/FooterIllustrations";

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

const Img = styled("img")(({ theme }) => ({
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("lg")]: {
    height: 450,
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.down("md")]: {
    height: 400,
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: theme.spacing(13),
  },
}));

const TreeIllustration = styled("img")(({ theme }) => ({
  left: 0,
  bottom: "5rem",
  position: "absolute",
  [theme.breakpoints.down("lg")]: {
    bottom: 0,
  },
}));

const Error404 = () => {
  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <BoxWrapper>
          <Typography variant="h2">Welcome to Event Management</Typography>
          <Link passHref href="/register">
            <Button
              component="a"
              variant="contained"
              sx={{ marginTop: "50px" }}
            >
              Register
            </Button>
          </Link>
        </BoxWrapper>
        <Img
          height="487"
          alt="error-illustration"
          src="/images/pages/404.png"
        />
      </Box>
      <FooterIllustrations
        image={<TreeIllustration alt="tree" src="/images/pages/tree.png" />}
      />
    </Box>
  );
};
Error404.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default Error404;
