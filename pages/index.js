import styles from "../styles/Home.module.css";
import Head from 'next/head';
import TourCard from "../components/TourCard";
import Grid from '@mui/material/Grid'
import onlyFans from "../data/data.json"
import { Typography } from "@mui/material";


export default function Home() {
  return (
    <>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        {onlyFans.map((country) => (
          <>
          <Typography 
            variant="h4" 
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            People from {country.countryName}
            {console.log(country)}
          </Typography>
          <Grid container spacing ={5}>
            {country?.specs?.map((people, index)=>(
              <TourCard tour={people} key={index}/>
            ))}
          </Grid>
          </>
        ))}

      </div>
    </>
  )


}
