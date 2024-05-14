import React from "react";
import { dummy } from "../movieDummy";
import Movie from "../components/Movie";

export default function NowPlaying(){
    return (
        <div >
        <div className="app-container">
          {
            
            dummy.results.map((item) => {
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
    
    
    
    




