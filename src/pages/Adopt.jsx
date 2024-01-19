import { useState, useEffect } from "react";
import DogCard from "../components/DogCard";
import "./Adopt.css";

const Adopt = () => {
  const apiKey =
    "live_293sthQZVm9xw2IiGzk9uNMtNS3N1rAdcC2XZbQClAwcFCiFOFlfELnsKwFyEtuZ";
  const perPage = 20;

  const [dogs, setDogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const apiUrl = `https://api.thedogapi.com/v1/breeds?limit=${perPage}&page=${currentPage}&api_key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setDogs(data);
        console.log(dogs);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchDogs();
  }, [apiKey, currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="adopt-container">
      <div className="adopt-card-container">
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
      <div className="adopt-container-buttons">
        <button onClick={previousPage}>Anterior</button>
        <button onClick={nextPage}>Próxima</button>
      </div>
    </div>
  );
};

export default Adopt;
