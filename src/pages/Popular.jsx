import React from "react";
import {popular} from "../Popular";
import Movie from "../components/Movie";

export default function Popular(){
    return (
        <div >
        <div className="app-container">
          {
            
            popular.results.map((item) => {
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
         





    );
}