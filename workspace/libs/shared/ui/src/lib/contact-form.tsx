import SendIcon from '@mui/icons-material/Send';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
} from '@mui/material';

export const ContactForm = () => (
  <Container sx={{ py: 8 }} maxWidth="md">
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box component="form" autoComplete="off">
          <TextField fullWidth label="Your email address" margin="normal" />
          <TextField fullWidth label="Your name" margin="normal" />
          <TextField
            fullWidth
            label="Your message"
            rows={4}
            multiline
            margin="normal"
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Box>
      </CardContent>
    </Card>
  </Container>
);
