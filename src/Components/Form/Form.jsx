import { Button } from "@mui/material";
import {  useState } from "react";
import "./Form.css";
import axios from "axios";
// import {Button} from '@mui/material'

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage(true);
      return;
    } else {
      setErrorMessage(false);
    }

    //backend would listen to this and send to mailing list and twillio
    try {
      const res = await axios.post("https://myportfoliobackend2002.herokuapp.com/send", {
        name: name,
        message: message,
        email: email,
      });
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
      setSuccessful(true);
    } catch (err) {
      console.log(err);
      console.log(`try with different email or try again later`)
      setSuccessful(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__50section">
        <label>
          Your name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errorMessage ? <span className="error">Name is required*</span> : ""}
        </label>
        <label>
          Your Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errorMessage ? (
            <span className="error">Email is required*</span>
          ) : (
            ""
          )}
        </label>
      </div>
      <label>
        Your message
        <textarea
          className="form__message"
          type="text"
          name="message"
          placeholder="Hi I think we need a web designer and developer hope you can help."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </label>
      <Button variant="outlined" onClick={handleSubmit}>
        Send message
      </Button>
      {successful ? <span>Message send</span> : null}
    </form>
  );
}

export default Form;
