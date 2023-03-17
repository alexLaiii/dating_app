
import { Typography, Button, Grid, Paper, Box, Rating, createTheme, ThemeProvider  } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import {SendIcon} from '@mui/icons-material/Send';
import {useState} from 'react';
import Link from 'next/Link';



const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11
            
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

export default function TourCard({tour}){

    const [value, setValue] = useState(0)
    console.log(value);
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={6} >
                <img src={tour.image} 
                    alt="gorgeous"
                    className={"img"}>
                </img>
                <Box paddingX={1}>
                    <Typography component={"h2"} variant={"subtitle1"}>
                        {tour.name}
                    </Typography>
                    <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                    >
                        <AccessTime sx={{width:12.5}}/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>{tour.duration} minutes</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: 3
                        }}
                    >
                        <Rating
                            name="half-rating"
                            defaultValue={2.5}
                            value={value}
                            onChange={(e, newValue)=>{
                                setValue(newValue);
                            }}
                            precision={0.5}
                            size={"small"}
                            />
                            <Typography variant="body2" component="p" marginLeft={1.5}>
                                {value} stars
                            </Typography>
                            <Typography variant="body2" component="p" marginLeft={0.5}>
                               ({tour.numberOfReviews} reviews)
                            </Typography>
                    </Box>
                    <Box>
                    <Typography variant="h6" component="h3" marginTop={0}>
                        From C ${tour.price}{' '}
                        <Link href={`../products/${tour.id}` } style={{ textDecoration: 'none' }} passHref>
                        <Button
                            variant="contained"
                            size={"small"}
                            sx={{ marginLeft: 3 }}
                           
                        >
                            Text Me
                        </Button>
                        </Link>
                    </Typography>
                    </Box>
                    <br/>
                 
                </Box>
                



            </Paper>
            </ThemeProvider>
            
            
        </Grid>
        );
}