import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Cards() {
  return (
    <MDBRow className="row-cols-1 row-cols-md-2 g-4">
      <MDBCol className="card-margin">
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Ce animal se află pe tricourile departamentului de IT?
              <div>
                <ul>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Un elefant</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> O testoasa</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Un lenes</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Un caine</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine este actualul coordonator al departamentului de IT?
              <div>
                <ul>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Edi</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Mari</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Bogdan</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Codrut</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine este team lead la echipa de infra?
              <div>
                <ul>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Rober</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Vlad</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Andrei</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Povi</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol>
        <MDBCard>
          <MDBCardBody>
            <MDBCardText>
              Cine a fost MD Bucharest Walk anul acesta?
              <div>
                <ul>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Rares</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Cip</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Alexa</span>
                  </li>
                  <li class="option">
                    <input type="radio" name="tricou" />
                    <span> Mihai (MeHigh)</span>
                  </li>
                </ul>
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
