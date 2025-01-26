import { Box, Button, TextField, Typography } from "@mui/material";

const ContactUsForm = () => {
  return (
    <Box minWidth={450}>
      <Typography variant="h3">
        Don’t hesitate to reach out.
        <br />
        We’d love to hear from you!
      </Typography>
      <Box sx={{ my: 5, gap: 3, display: "flex", flexDirection: "column" }}>
        <TextField label="Name" />
        <TextField type="email" label="Email" />
        <TextField label="Subject" />
        <TextField label="Enter your message here." minRows={4} multiline />
      </Box>
      <Button size="large" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default ContactUsForm;
