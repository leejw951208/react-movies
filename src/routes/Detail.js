import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    setMovie(json);
    setLoading(false);
  }
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
        </div>
      )}
    </div>
  );
}

export default Detail;