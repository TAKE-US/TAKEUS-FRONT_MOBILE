import styled from '@emotion/styled';

const SFooter = styled.footer`
  width: 100%;
  height: 100%;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.color.lightgray1};
`;

const Footer = () => {
  return (
    <SFooter>
      Copyright ⓒ <strong>Takeus</strong> corp. All Rights Reservered.
    </SFooter>
  );
};

export default Footer;
