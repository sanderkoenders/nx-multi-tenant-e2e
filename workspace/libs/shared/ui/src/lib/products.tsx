import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export interface ProductCard {
  heading: string;
  description: string;
  image: string;
}

export interface ProductsProps {
  heading: string;
  description: string;
  cards: ProductCard[];
}

export const Products = ({ heading, description, cards }: ProductsProps) => (
  <>
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
          {heading}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {description}
        </Typography>
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.heading} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component="img"
                sx={{
                  pt: '56.25%',
                }}
                image={card.image}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.heading}
                </Typography>
                <Typography>{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);
