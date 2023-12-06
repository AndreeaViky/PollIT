import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "./Login.css";
import { AuthContext } from "./AuthContext.jsx";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { onLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }
  async function handleLoginSuccess(data) {
    onLogin(data);
    close();
    navigate("/");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login success:", data);
        handleLoginSuccess(data);
      } else {
        setError(data.error || "Eroare la autentificare.");
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Eroare de rețea. Încercați din nou.");
    }
  };

  return (
    <>
      <button onClick={open}>Login</button>
      {isOpen && (
        <div className="background-dark">
          <MDBModal
            open={isOpen}
            setOpen={setIsOpen}
            tabIndex="-1"
            backdrop={false}
          >
            <MDBModalDialog>
              <MDBModalContent>
                <MDBModalHeader className="headerModal">
                  <MDBModalTitle className="titleModal">Login</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={close}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody className="bodyModal">
                  <div className="authForm">
                    <form className="loginForm" onSubmit={handleSubmit}>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                      />
                      <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="Parola"
                        id="password"
                        name="password"
                      />
                      <button type="submit">Login</button>
                    </form>
                  </div>
                </MDBModalBody>
                {isSuccess && (
                  <p className="success">Autentificare realizata cu succes!</p>
                )}
                {error && <p>Autentificare esuata: {error}</p>}
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      )}
    </>
  );
};
export default Login;