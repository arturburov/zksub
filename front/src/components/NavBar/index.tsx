import styled from "styled-components";
import { ZKMailingLogo } from "../SismoReactIcon/components/ZKMailingLogo";
import axios from "axios";
import env from "../../environment";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40.56px 60px;
  cursor: pointer;
  width: 100%;

  @media (max-width: 800px) {
    padding: 4px 16px;
    margin-bottom: 18px;
  }
`;

const ResetBtn = styled.div`
  font-size: 14px;
  line-height: 16px;
  width: 107px;
  font-family: ${props => props.theme.fonts.regular};
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  transition: transform 0.1s ease-in-out;
`;

export default function NavBar(): JSX.Element {
  // async function onReset() {
  //   await axios.post(`${env.zkMailingApiUrl}/reset`).then(res => {
  //     window.location = window.location.pathname as unknown as Location;
  //   });
  // }

  return (
    <Container>
      <div
        onClick={() => {
          window.location = window.location.pathname as unknown as Location;
        }}
      >
        <ZKMailingLogo />
      </div>

      {/* <ResetBtn onClick={onReset}>Reset demo</ResetBtn> */}
    </Container>
  );
}
