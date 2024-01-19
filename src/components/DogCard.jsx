/* eslint-disable react/prop-types */
import "./DogCard.css";
import { useNavigate } from "react-router-dom";

const DogCard = ({ dog }) => {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    // Envia informações do cachorro para a página de contato
    navigate(
      `/contact?dogId=${dog.id}&dogName=${encodeURIComponent(dog.name)}`
    );
  };

  return (
    <div className="dog-card">
      <h3 className="dog-title">
        #{dog.id} - {dog.name}
      </h3>
      <img src={dog.image.url} width={250} height={250} />
      <h3 className="dog-temperament">{dog.temperament}</h3>
      <button className="dogcard-button" onClick={handleAdoptClick}>
        Adopt
      </button>
    </div>
  );
};

export default DogCard;
