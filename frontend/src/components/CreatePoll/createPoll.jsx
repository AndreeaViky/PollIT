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
                <div>
                  <form>
                    <input
                      value="Title"
                      type="text"
                      placeholder="Type your question here"
                      id="text"
                      name="title"
                    />
                    <input
                      value="Answer Options"
                      type="text"
                      placeholder="Option 1"
                      id="text"
                      name="option"
                    />
                    <input
                      value="Answer Options"
                      type="text"
                      placeholder="Option 2"
                      id="text"
                      name="option"
                    />
                    <input
                      value="Answer Options"
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
