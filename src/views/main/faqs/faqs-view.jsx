import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import MainHeader from "@/components/MainHeader";
import { faqs } from "@/_mock/data";

export const FAQsView = () => {
  return (
    <>
      <MainHeader
        imgUrl="/assets/faq-pic.jpg"
        title="FAQ"
        subtitle="Have a question?"
      />

      <Container component="section" maxWidth="md">
        <Typography variant="h3" sx={{ my: { xs: 5, md: 10 } }}>
          Frequently asked questions
        </Typography>

        <Box>
          {faqs.map((item, i) => (
            <Accordion
              key={i}
              sx={{
                bgcolor: "transparent",
                "&.Mui-expanded": {
                  boxShadow: "var(--customShadows-z8)",
                  bgcolor: "var(--palette-background-paper)",
                  borderRadius: 1,
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  );
};
