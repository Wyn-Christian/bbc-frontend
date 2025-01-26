import { Typography } from "@mui/material";

import MainHeader from "@/components/MainHeader";
import Testimonials from "./testimonials";
import WhoWeAre from "./who-we-are";
import CoreValues from "./core-values";

export const AboutUsView = () => {
  return (
    <>
      <MainHeader
        imgUrl={`/bbc-frontend/assets/about-us.jpg`}
        title="About us"
        subtitle="Who we are?"
      >
        <Typography variant="h4" color="white">
          Get to know about us!
        </Typography>
      </MainHeader>

      <WhoWeAre />

      <CoreValues />

      <Testimonials />
    </>
  );
};
