import React from "react";
import Movie from "../components/Movie";
import {topRated} from "../Toprated";


export default function TopRated (){
    return (
        <div >
        <div className="app-container">
          {
            topRated.results.map((item) => {
              return(
                <Movie 
                 title={item.title}
                 poster_path = {item.poster_path}
                 vote_average = {item.vote_average}
                 overview = {item.overview}
                 release_date = {item.release_date}
  
                />
              );
            })
          }
        </div>
  
      </div>        


    )
}