import "./ContactForm.css";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const dogId = queryParams.get("dogId");
  const dogName = queryParams.get("dogName");

  return (
    <div className="form-container">
      <form>
        <div>
          <h2>Dog Info</h2>
          <label>Dog ID:</label>
          <input name="dogId" value={dogId ? dogId : null} />
        </div>

        <div>
          <label>Breed:</label>
          <input name="breed" value={dogName ? dogName : null} />
        </div>

        <div>
          <h2>User Info</h2>
          <label>Full Name:</label>
          <input name="Full Name" />
        </div>

        <div>
          <label>Age:</label>
          <input name="Age" />
        </div>

        <div>
          <label>Email:</label>
          <input name="email" />
        </div>
        <div className="form-button">
          <button type="button">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
