import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [details,setDetails] = useState({});
    console.log(details)

    const { id } = useParams();

    useEffect(function () {
        async function fetchApi() {
          let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
          let json = await response.json();
          console.log(json)
          setDetails(json);
        }
        fetchApi();
      }, [id]);

      if(!details){
        return <div>Loading...</div>
      }
    
        
  return (
    <div>
      <h1>Characters details</h1>
        <div className="container">
              <div key={details.id} className="card">
                <h3>{details.gender}</h3>
                <img src={details.image} width={"30%"} />
                <p>
                  <b>Status: {details.status} </b>
                </p>
                <p>URL: {details.url}</p>
              
              </div>
        
        </div>
    </div>
  )
}

export default Details
