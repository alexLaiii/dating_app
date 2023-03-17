import {useRouter} from 'next/router';
import {Container, Typography, Box, Paper, BottomNavigation} from "@mui/material";
import onlyFans from "../../data/data.json";
import ImageCollage from '../../components/ImageCollage';
import CustomizedAccordions from '../../components/Accordian';
import BasicModal from '../../components/Modal';


export default function ProductDetail(){
    const router = useRouter();
    const {id} = router.query;

    const data = onlyFans; // Replace this with the variable containing your JSON data

    const foundData = data.flatMap(country => country.specs).find(spec => spec.id == id);
    
    return(
        <Container sx={{width: 900}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Girl Service Details
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img src={foundData?.image} alt="" height={325}></img>
                <ImageCollage foundData={foundData}></ImageCollage>
            </Box>
            <Box>
                <Typography variant="h4" component="h4" marginTop={3}>
                    About this Girl
                </Typography>
                <Typography variant="h6" component="p" marginTop={3}>
                    {foundData?.bio}
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h4" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordions foundData={foundData}/>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                >
                    <BasicModal></BasicModal>
                </BottomNavigation>
            </Paper>
        </Container>
    )
}