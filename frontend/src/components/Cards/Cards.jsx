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
    <div className="cards">
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
              <button type="submit">Vote</button>
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
                  <input type="radio" name="coordonator" />
                  <span> Edi</span>
                </li>
                <li className="option">
                  <input type="radio" name="coordonator" />
                  <span> Mari</span>
                </li>
                <li className="option">
                  <input type="radio" name="coordonator" />
                  <span> Bogdan</span>
                </li>
                <li className="option">
                  <input type="radio" name="coordonator" />
                  <span> Codrut</span>
                </li>
              </ul>
              <button type="submit">Vote</button>
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
                  <input type="radio" name="infra" />
                  <span> Rober</span>
                </li>
                <li className="option">
                  <input type="radio" name="infra" />
                  <span> Vlad</span>
                </li>
                <li className="option">
                  <input type="radio" name="infra" />
                  <span> Andrei</span>
                </li>
                <li className="option">
                  <input type="radio" name="infra" />
                  <span> Povi</span>
                </li>
              </ul>
              <button type="submit">Vote</button>
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
                  <input type="radio" name="BW" />
                  <span> Rares</span>
                </li>
                <li className="option">
                  <input type="radio" name="BW" />
                  <span> Cip</span>
                </li>
                <li className="option">
                  <input type="radio" name="BW" />
                  <span> Alexa</span>
                </li>
                <li className="option">
                  <input type="radio" name="BW" />
                  <span> Mihai (MeHigh)</span>
                </li>
              </ul>
              <button type="submit">Vote</button>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}
