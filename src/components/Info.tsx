import { MovieInfoType } from "@/lib/movieType";

export async function Info({ infoData }: { infoData: MovieInfoType }) {
  const getDirectors = () => {
    console.log("crew", infoData);
    const director = infoData.crew.filter(
      (member: { name: string; job: string }) => {
        if (member.job === "Director") {
          return true;
        }
      }
    );
    return director;
  };
  const directors = await getDirectors();

  const getWriters = () => {
    const writingDirector = infoData.crew.filter(
      (member: { name: string; department: string }) => {
        if (member.department === "Writing") {
          return true;
        }
      }
    );
    return writingDirector;
  };
  const writers = await getWriters();

  const getStars = async () => {
    const stars = infoData.cast;
    return stars;
  };
  const star = await getStars();

  return (
    <div>
      <div className="flex gap-2">
        <p>Director</p>
        {directors.map((directors: { name: string }) => {
          return <div key={Math.random()}>{directors.name}</div>;
        })}
      </div>
      <div className="flex gap-2">
        <p>Writers</p>
        {writers.map((writers: { name: string }) => {
          return <div key={Math.random()}>{writers.name}</div>;
        })}
      </div>
      <div className="flex gap-2">
        <p>Stars</p>
        {star.splice(0, 4).map((star: { name: string }) => {
          return <div key={Math.random()}>{star.name}</div>;
        })}
      </div>
    </div>
  );
}
// {movies.splice(0, 10).map((movie, i) => {
//           return <MovieCard isLaoding={true} key={i} movie={movie} />;
//         })}
