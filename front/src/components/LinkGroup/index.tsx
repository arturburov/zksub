import styled from "styled-components";
import { ArrowUpRight } from "phosphor-react";
import { DevconLogo, EdconLogo, EthccLogo, EthGlobalLogo } from "../SismoReactIcon";

const Container = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${props => props.theme.colors.blue10};
  margin-bottom: 5px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
    column-gap: 15px;
    margin-bottom: 20px;
    width: 200px;
  }
`;

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 7.5px 0px;

  @media (max-width: 800px) {
    margin-bottom: 0px;
    padding: 0px;
  }
`;

const LinkLabel = styled.div`
  font-size: 12px;
  line-height: 19px;
  font-family: ${props => props.theme.fonts.medium};

  margin-left: 5px;
  margin-right: 3px;
`;

const ArrowWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: flex-start;
`;

export default function LinkGroup(): JSX.Element {
  return (
    <Container>
      <LinkWrapper href="https://ethglobal.com/" target={"_blank"}>
        <EthGlobalLogo />
        <LinkLabel>ETHGlobal</LinkLabel>
        <ArrowWrapper>
          <ArrowUpRight size={12} weight={"regular"} />
        </ArrowWrapper>
      </LinkWrapper>

      <LinkWrapper href="https://devcon.org/" target={"_blank"}>
        <DevconLogo />
        <LinkLabel>Devcon</LinkLabel>
        <ArrowWrapper>
          <ArrowUpRight size={12} weight={"regular"} />
        </ArrowWrapper>
      </LinkWrapper>

      <LinkWrapper href="https://www.edcon.io/" target={"_blank"}>
        <EdconLogo />
        <ArrowWrapper style={{ marginLeft: 4 }}>
          <ArrowUpRight size={12} weight={"regular"} />
        </ArrowWrapper>
      </LinkWrapper>

      <LinkWrapper href="https://www.ethcc.io/" target={"_blank"}>
        <EthccLogo />
        <LinkLabel>ETHCC</LinkLabel>
        <ArrowWrapper>
          <ArrowUpRight size={12} weight={"regular"} />
        </ArrowWrapper>
      </LinkWrapper>
    </Container>
  );
}
