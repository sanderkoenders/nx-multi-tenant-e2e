import { Box, Container, Typography } from '@mui/material';

export const ContactHeader = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Contact Information
      </Typography>
    </Container>
  </Box>
);
