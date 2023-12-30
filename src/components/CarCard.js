// MUI Card
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// MUI Card 






const CarCard = ({ cars, onEdit, onDelete }) => {
    
    console.log('Recieved Cars:', cars);

    const [expanded, setExpanded] = React.useState(false);


    // MUI Card Instead of Data Grid 
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    // Mui Card 
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    /* MUI CARD - Render a Car */
    return (
        <div>
            {cars.map((car, index) => (
                <Card key={index} sx={{ maxWidth: 345, margin: '16px' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={`${car.year} ${car.make} ${car.model}`}
                        subheader={`Color: ${car.color}`}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={`/images/${car.pic}`}
                        alt={`${car.make} ${car.model}`}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Engine Type: {car.engineType}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Transmission Type: {car.transmissionType}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Fuel Type: {car.fuelType}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Seller Contact: {car.sellerContact}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Button onClick={() => onEdit(car)} variant="contained" color="primary">
                            Edit Car
                        </Button>
                        <Button onClick={() => onDelete(car)} variant="contained" color="secondary">
                            Delete
                        </Button>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>
                                For Sale
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            ))}
        </div>
    );

}
export default CarCard;