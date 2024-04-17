import {Card, CardActions, Button, CardContent, CardMedia, Typography,Grid} from '@mui/material'

import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";


function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      let response = await fetch("https://rickandmortyapi.com/api/character");
      let json = await response.json();
      json = json.results;
      setCharacters(json);
    }
    fetchApi();
  }, []);

  return (
    <>
      <h1>Rick and Morty characters</h1>
      <Grid container spacing={1}  >
            {characters.map((caracter) => {
              return (
                  <Grid item xs={12} sm={6} md={3} key={caracter.id}>
                    <Card sx={{ maxWidth: 345, marginBottom: '20px' }} key={caracter.id}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={caracter.image}
                        title={caracter.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {caracter.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {caracter.species}
                        </Typography>
                      </CardContent>
                      <CardActions
                      sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to={`/details/${caracter.id}`} size="small"><Button sx={{marginBottom:2}} variant="contained"  size="small">Más Info</Button></Link>
                      </CardActions>
                    </Card>
                  </Grid>
              );
            })}
        </Grid>
    </>
  
)}

export default Characters;

