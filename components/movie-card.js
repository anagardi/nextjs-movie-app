import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Link from "next/link";
import { convertToTitleCase } from "/public/lib";

export default function MovieCard(props) {
    return (
        <Link href={`/movie/${props.id}`}>
            <Card sx={{ maxWidth: 380, maxHeight: 400, minWidth: 380, minHeight: 400}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={props.poster_url}
                        alt={props.title + " film poster"}
                    />
                    <CardContent sx={{ p: "25px" }}>

                        <Typography variant="body2" color="text.secondary" align={'right'} >
                            {props.year}
                        </Typography>

                        <Typography gutterBottom variant="h6" color="text.secondary" component="div" fontWeight="900" sx={{ textTransform: "uppercase",
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 1,
 }}>
                            {props.title}
                        </Typography>

                        <Box sx={{ display: "flex", gap: "5px", pb: "15px"}}>
                            {props.genres.map((genre, i) => (
                                <Typography variant="subtitle2" color="text.secondary" key={i++}>
                                    {convertToTitleCase(genre, "-")}
                                </Typography>
                            ))}
                        </Box>


                        <Typography variant="body1" color="text.secondary" sx={{
                            display: '-webkit-box',
                            overflow: 'hidden',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,

                        }}>
                            {props.plot}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
}
