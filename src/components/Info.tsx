import { MovieInfoType } from "@/lib/movieType";

export async function Info({ infoData }: { infoData: MovieInfoType }) {
  return (
    <div>
      <p>Director</p>
      <p>Writers</p>
      <p>Stars</p>
    </div>
  );
}
