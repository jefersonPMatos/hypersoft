import * as S from "./styles";

import { Box } from "../../components/Box";
import { Card } from "../../components/Card";

import Code from "../../images/code.png";

export default function Services() {
  return (
    <S.Container id="2">
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
}
