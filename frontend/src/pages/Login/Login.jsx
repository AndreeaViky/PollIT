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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  function close() {
    setIsOpen(false);
  }

  function open() {
    console.log("open");
    setIsOpen(true);
  }

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
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                </form>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn>Login</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
