import * as S from "../styles/services";

import { Box } from "../components/Box";
import { Card } from "../components/Card";

import Code from "../images/code.png";

export const Services = () => {
  return (
    <S.Container>
      <Box h="100px" />
      <h1>My Service</h1>
      <hr />
      <Box h="50px" />
      <S.CardWrapper>
        <Card
          title="Full Stack Development"
          icon={Code}
          link="#"
          linkText="Discuss now"
        />
        <Card
          title="Front End Development"
          icon={Code}
          link="#"
          linkText="Discuss now"
        />
        <Card
          title="Back End Development"
          icon={Code}
          link="#"
          linkText="Discuss now"
        />
      </S.CardWrapper>
      <Box h="100px" />
    </S.Container>
  );
};
