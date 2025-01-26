import {
  Box,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";

import MainHeader from "@/components/MainHeader";
import ContactUsForm from "./contact-us-form";

export const ContactUsView = () => {
  return (
    <>
      <MainHeader
        imgUrl="/bbc-frontend/assets/about-us.jpg"
        title="Contact us"
        subtitle="Where to find us?"
      >
        <Grid container mt={5} width="100%" spacing={3} color="white">
          {[1, 2, 3, 4].map((item) => (
            <Grid key={item} size={{ xs: 6, md: 3 }}>
              <Typography variant="h6" mb={1}>
                Location {item}
              </Typography>
              <Typography variant="body2">
                Address {item}, State {item}, Country
              </Typography>
            </Grid>
          ))}
        </Grid>
      </MainHeader>

      <Container sx={{ py: 10 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={10}
          justifyContent="space-between"
        >
          <ContactUsForm />
          <Box
            sx={{
              height: { xs: 320, md: 560 },
              width: { xs: "100%" },
              maxWidth: { xs: "100%", md: 450 },
              position: "relative",
              borderRadius: 1.5,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              title="TUP Location"
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Philippine+Space+Agency&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              style={{
                filter: "grayscale(0.3) opacity(0.8)",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};
