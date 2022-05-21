import React, { useEffect, useState } from "react";

function Admin() {
  const [movieName, setMovieName] = useState("");
  const [genre, setGenre] = useState("");
  const [movie, setMovie] = useState("");

  function convert() {
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setMovie(reader.result);
        console.log(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = await fetch("http://localhost:4040/movie/newMovie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: 'no-cors',
      body: JSON.stringify({
        movieName: movieName,
        genre: genre,
        movieString: movie,
      }),
    });
    const data = await api.json();
    console.log(data);
  };
  return (
    <div className=" form h-screen w-full flex flex-col items-center">
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="m-auto w-1/3 flex flex-col shadow-2xl p-4 items-center">
        <div className="inNav ml-2 mb-3 logo w-full flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit}>
            <div className="labels">
              <label>Movie name</label>
              <input
                type="text"
                onChange={(e) => {
                  setMovieName(e.target.value);
                }}
              />
            </div>
            <div className="labels">
              <label>Movie genre</label>
              <input
                type="text"
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
              />
            </div>
            <div className="labels">
              <label>Movie</label>
              <input type="file" onChange={convert} />
            </div>
            <input type="submit"  value={"Submit"}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
