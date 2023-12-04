import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "./Register.css";
import { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
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
    setError(""); // Resetare erori la fiecare încercare
    if (pass !== confirmPass) {
      setError("Parolele nu se potrivesc.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        console.log("Înregistrare reușită:", data);
        window.location.href = "/";
      } else {
        setError(data.error || "Eroare la înregistrare.");
      }
    } catch (error) {
      setError("Eroare de rețea.");
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <button onClick={open}>Register</button>
      {isOpen && <div className="backgroundModal"></div>}
      <MDBModal
        open={isOpen}
        setOpen={setIsOpen}
        tabIndex="-1"
        backdrop={false}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Register</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="authForm">
                <form className="registerForm" onSubmit={handleSubmit}>
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
                  <input
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type="password"
                    placeholder="Confirmă parola"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                  <button type="submit">Înregistrează-te</button>
                </form>
              </div>
            </MDBModalBody>
            {error && <p className="error">{error}</p>}
            {isSuccess && <p className="success">Înregistrare reușită!</p>}
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default Register;
