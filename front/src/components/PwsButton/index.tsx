import styled from "styled-components";
import Loader from "../Loader";
import { SismoZKProofLogo } from "../SismoReactIcon";

export const Container = styled.button<{
  disabled?: boolean;
}>`
  font-size: 18px;
  line-height: 29.35px;
  font-family: ${props => props.theme.fonts.sarala};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue10};
  border: 1px solid ${props => props.theme.colors.blue6};
  border-radius: 10px;

  cursor: ${props => (props.disabled ? "default" : "pointer")};

  height: 59px;
  outline: none;
  width: 220px;
`;

type Props = {
  disabled: boolean;
  onClick: () => void;
};

export default function PwsButton({ disabled, onClick }: Props): JSX.Element {
  return (
    <Container onClick={onClick} disabled={disabled}>
      {disabled ? (
        <>
          <Loader size={16} color={"#ffffff"} />
          <span>verifying...</span>
        </>
      ) : (
        <>
          <SismoZKProofLogo size={19} color={"#ffffff"} />
          <span>Prove with Sismo</span>
        </>
      )}
    </Container>
  );
}
