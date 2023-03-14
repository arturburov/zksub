import styled from "styled-components";
import { useState } from "react";
import { Question } from "phosphor-react";
import EligibilityProcessModal from "../EligibilityProcessModal";
import LinkGroup from "../LinkGroup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: ${props => props.theme.fonts.regular};
`;

const Title = styled.div`
  font-family: ${props => props.theme.fonts.charcuterie};
  font-size: 50px;
  line-height: 60px;
  width: 654px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 48px;
    width: 100%;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.blue10};
  width: 500px;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-bottom: 40px;
    width: 100%;
  }
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.colors.blue10};
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 220px;
  gap: 4px;
`;

const EligibilityDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1.54px;
  font-size: 8px;
  line-height: 9px;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.medium};
  cursor: pointer;
`;

type Props = {
  children: React.ReactNode;
};

export default function Landing({ children }: Props): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <EligibilityProcessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Container>
        <Title>The Merge Contributors mailing list</Title>

        <Subtitle>
          Contributors to The Merge can register their email addresses in a
          privacy-preserving manner—gaining access to exclusive tickets for web3
          events.
        </Subtitle>

        <LinkGroup />

        <Text>
          These conferences have accepted to reserve tickets
          <br />
          for contributors to The Merge.
        </Text>

        <CallToAction>
          <EligibilityDescription onClick={() => setIsModalOpen(true)}>
            ZK proof of eligibility process{" "}
            <Question size={8} weight={"regular"} />
          </EligibilityDescription>
          {children}
        </CallToAction>
      </Container>
    </>
  );
}
