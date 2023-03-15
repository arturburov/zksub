import styled from "styled-components";
import { DiscordLogo, GithubRoundedLogo, TwitterLogo } from "../Logo";
import { ArrowSquareOut } from "phosphor-react";

const Container = styled.header`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 35px 60px;
  color: ${props => props.theme.colors.white};

  @media (max-width: 800px) {
    padding: 10px 0px;
    width: calc(100% - 32px);
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SocialGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const ProveWithSismoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 1px 0;
  color: inherit;
`;

const PWSLogo = styled.div`
  font-family: ${props => props.theme.fonts.logoBold};
  font-size: 13.2772px;
  line-height: 15px;
  transform: translateY(1px);
`;

const PWSSmallLogo = styled.span`
  font-family: ${props => props.theme.fonts.logoRegular};
  font-size: 9.13px;
  line-height: 15px;
`;

const ArrowLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
`;

const RightGroup = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  padding: 5px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

export default function Footer() {
  return (
    <Container>
      <LeftGroup>
        <SocialGroup>
          <IconWrapper href="https://twitter.com/zkdrop_io" target="_blank">
            <TwitterLogo size={18} color={"white"} />
          </IconWrapper>
          <IconWrapper href="https://discord.com/invite/sismo" target="_blank">
            <DiscordLogo size={18} color={"white"} />
          </IconWrapper>
          <IconWrapper
            href="https://github.com/sismo-core/sismo-protocol/blob/main/contracts/zkdrop/ZKBadgeboundERC721.sol"
            target="_blank"
          >
            <GithubRoundedLogo size={18} color={"white"} />
          </IconWrapper>
        </SocialGroup>

        <ProveWithSismoLink
          href="https://docs.sismo.io/sismo-docs/what-is-sismo/prove-with-sismo"
          target="_blank"
        >
          <PWSLogo>
            PROVE<PWSSmallLogo> WITH </PWSSmallLogo>SISMO
          </PWSLogo>

          <ArrowLogoWrapper>
            <ArrowSquareOut size={"100%"} weight="bold" />
          </ArrowLogoWrapper>
        </ProveWithSismoLink>
      </LeftGroup>

      <RightGroup>
        Built by <Bold>Sismo</Bold>
      </RightGroup>
    </Container>
  );
}
