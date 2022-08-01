import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export interface ContactInfoProps {
  phoneNumber: string;
  email: string;
}

export const ContactInfo = ({ phoneNumber, email }: ContactInfoProps) => (
  <Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={6}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Email
            </Typography>
            <Typography>{email}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Phone
            </Typography>
            <Typography>{phoneNumber}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
);
