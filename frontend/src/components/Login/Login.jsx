import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "./Login.css";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function close() {
    setIsOpen(false);
  }

  function open() {
    console.log("open");
    setIsOpen(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

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
        setIsSuccess(true);
        console.log("Login success:", data);
        window.location.href = "/"; // Redirecționare către pagina principală
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
      <MDBModal
        open={isOpen}
        setOpen={setIsOpen}
        tabIndex="-1"
        backdrop={false}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Login</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
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
    </>
  );
};
export default Login;
