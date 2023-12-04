import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import "./createPoll.css";
import { useState } from "react";

export const CreatePoll = () => {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  function open() {
    console.log("open");
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={open}>Create poll</button>
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
              <MDBModalTitle>Create a Poll</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={close}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="authForm">
                <form className="createPollForm">
                  <input
                    type="text"
                    placeholder="Type your question here"
                    id="text"
                    name="title"
                  />
                  <input
                    type="text"
                    placeholder="Option 1"
                    id="text"
                    name="option"
                  />
                  <input
                    type="text"
                    placeholder="Option 2"
                    id="text"
                    name="option"
                  />
                  <input
                    type="text"
                    placeholder="Option 3"
                    id="text"
                    name="option"
                  />
                  <button type="submit">Create Poll</button>
                </form>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default CreatePoll;
