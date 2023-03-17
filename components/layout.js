import Container from '@mui/material/Container';
import ResponsiveAppBar from '../components/AppBar'




export default function Layout({children}){
    return (
        <>
            <ResponsiveAppBar/>
            <Container sx={{marginY: 5}}>
                <div>{children}</div>
            </Container>
        </>
    );
}