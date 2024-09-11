import { useState,useEffect } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx'
import {sortPlacesByDistance} from '../loc.js'
import {fetchAvailablePlaces} from '../http.js'



export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching]= useState(false);
  const [availablePlaces,setAvailablePlaces]= useState([]);
  const [error,setError]= useState();

  useEffect(()=>{
    async function fetchPlaces() {
      setIsFetching(true);
      try{
        const places= await fetchAvailablePlaces();
        
        navigator.geolocation.getCurrentPosition((position)=>{
          const sortedPlaces= sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });

      }catch(error){
        setError({message: error.message || 'Could Not Fetch, Please Try agian Later!'});
      }
      setIsFetching(false);
    }
    fetchPlaces();
  },[])

  if(error){
    return <ErrorPage title="An Error Occurred!" message={error.message} />
  }
  

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Place Data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
