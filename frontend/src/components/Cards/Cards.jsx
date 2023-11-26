import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import "./Cards.css";

export default function Cards() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 g-4">
      <MDBCol className="card-margin">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Ce animal se află pe tricourile departamentului de IT?
            </MDBCardText>
            <div>
              <ul>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Un elefant</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> O testoasa</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Un lenes</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Un caine</span>
                </li>
              </ul>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine este actualul coordonator al departamentului de IT?
            </MDBCardText>
            <div>
              <ul>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Edi</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Mari</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Bogdan</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Codrut</span>
                </li>
              </ul>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>Cine este team lead la echipa de infra?</MDBCardText>
            <div>
              <ul>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Rober</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Vlad</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Andrei</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Povi</span>
                </li>
              </ul>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine a fost MD Bucharest Walk anul acesta?
            </MDBCardText>
            <div>
              <ul>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Rares</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Cip</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Alexa</span>
                </li>
                <li className="option">
                  <input type="radio" name="tricou" />
                  <span> Mihai (MeHigh)</span>
                </li>
              </ul>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
