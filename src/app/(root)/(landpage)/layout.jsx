import { Box } from "@mui/material";

import CustomGlobalStyle from "@/components/CustomGlobalStyle";
import { Navbar } from "@/components/nav/Navbar";

const LandingLayout = ({ children }) => {
  return (
    <>
      <CustomGlobalStyle />
      <Navbar />

      {children}
      <Box height="100vh" />
    </>
  );
};

export default LandingLayout;
