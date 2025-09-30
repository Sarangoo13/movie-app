import { Movie } from "./Movie";
export function GroupedMovies ({text, movies}){
  return (
    <div>
      <div>
        <p>{text}</p>
        <p></p>
      </div>
      <div>
        {movies.map((movies.name)=>{
          return(
            <Movie
              name={movies.name}
              rating={movies.rating}
              images={movies.images}
            ></Movie>
          );
        })}
      </div>
    </div>
  );
}