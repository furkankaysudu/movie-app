import React,{useEffect,useState} from "react";
import axios from "axios";
import requests from "../../Request";


const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const {data} = await axios.get(requests.requestPopular)
    setMovies(data.results)
  };
  console.log(movies)
  return <div className="w-full h-[500px] text-white">
      <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
  </div>;
};

export default Main;
