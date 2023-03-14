import styled from "styled-components";
import Modal from "../Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-width: 941px;
  position: relative;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.charcuterie};
  font-size: 50px;
  line-height: 70px;
  color: white;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 20px;
    width: 185px;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  object-fit: contain;

  margin-bottom: 30px;

  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const Content = styled.div`
  font-family: ${props => props.theme.fonts.regular};
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.div`
  font-family: ${props => props.theme.fonts.medium};
  font-size: 20px;
  line-height: 18px;
  color: white;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.blue11};
`;

const Bold = styled.span`
  font-family: ${props => props.theme.fonts.bold};
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EligibilityProcessModal({
  isOpen,
  onClose,
}: Props): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} animated>
      <Container>
        <Title>Prove with sismo</Title>
        <ImageWrapper>
          <img src="/assets/process.svg" alt="process" width={"100%"} />
        </ImageWrapper>
        <Content>
          <Subtitle>ZK Proof of eligibility</Subtitle>
          <Text>
            Prove with Sismo lets you prove your eligibility for the Mergooor
            Pass and mint it on any wallet. The{" "}
            <Bold>
              source account used to prove your eligibility will not be revealed
            </Bold>{" "}
            in the process.
          </Text>
        </Content>
      </Container>
    </Modal>
  );
}
