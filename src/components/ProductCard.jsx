import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductCard = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <Card className="product-card">
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary" href={buttonLink} fullWidth>{buttonText}</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
