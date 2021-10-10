import React from "react";
import Link from "next/link";

import {
  Wrapper,
  Container,
  Navbar,
  Alink,
  ContainerInfo,
  Paragraph,
  List,
  Text,
  TextButton,
  BaseList
} from "./styles";
import { NavItem } from "./items";
import Legal from "../../../public/images/legal.png";
// import { LogoMarca } from "../../../public/images/logo";
import { SimpleButtom } from "../Button";
import { MdAcUnit } from "@react-icons/all-files/md/MdAcUnit";
import { HiSparkles } from "@react-icons/all-files/hi/HiSparkles";
import { GiDoctorFace } from "@react-icons/all-files/gi/GiDoctorFace";

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        {/* <img
          src={LogoMarca}
          style={{ width: 100, height: 40, overflow: "hidden" }}
        /> */}
        <BaseList
          style={{
            marginRight: "2rem",
            listStyle: "none",
            width: "70vw",
            display: "grid",
            textAlign: "center",
            justifyContent: "center",
            marginRight: "2rem",
            gridTemplateColumns: "repeat(5, auto)",
            gridGap: "10px"
          }}
        >
          {NavItem.map((item, index) => {
            return (
              <List>
                <Alink className={item.cName} href={item.url} key={index}>
                  {item.title}
                </Alink>
              </List>
            );
          })}
        </BaseList>
        <SimpleButtom to="/">
          <TextButton style={{ flexdirection: "row" }}>
            ENTRE EM CONTATO{" "}
          </TextButton>
        </SimpleButtom>
      </Container>

      <div>
        <img
          src="https://www.geriativo.com.br/fotos_eventos/31198f9c81b0aa6c1dfc00e0ac0527d8.png"
          style={{
            width: 300,
            height: 250,
            position: "relative",
            top: 80,
            left: 118
          }}
        />
      </div>
      <Text
        style={{
          position: "relative",
          textAlign: "center",
          fontSize: 50,
          bottom: 140,
          color: "#f5f5f5"
        }}
      >
        Conheça o Lar de Idoso,<br /> Nação Idosa!
      </Text>
      <ContainerInfo>
        <div style={{ background: " #d6a747", width: "50%", height: "100%" }}>
          <MdAcUnit
            size={80}
            color="white"
            style={{ left: 40, position: "relative", top: 15 }}
          />
          <Paragraph
            style={{
              alignItems: "center",
              position: "relative",
              left: 40,
              top: 10,
              fontSize: 18
            }}
          >
            <Paragraph> Mais Comodidade</Paragraph> Prezamos muito por bem-star,<br />{" "}
            Nosso ambiente é tranquilo e com <br />
            otima acomodação.
          </Paragraph>
        </div>
        <div style={{ background: " #f2b94a", width: "50%", height: "100%" }}>
          <HiSparkles
            size={80}
            color="white"
            style={{ left: 40, position: "relative", top: 15 }}
          />
          <Paragraph
            style={{
              alignItems: "center",
              position: "relative",
              left: 40,
              top: 10,
              fontSize: 20
            }}
          >
            Lazer Garantido <br />
            Na Nação Idosa, não há preocupação,<br /> Nosso espaço conta com:
            Natação, hidroginástica,Alongamento,pilates.
            <br />
          </Paragraph>
        </div>

        <div style={{ background: " #d6a747", width: "50%", height: "100%" }}>
          <GiDoctorFace
            size={80}
            color="white"
            style={{ left: 40, position: "relative", top: 15 }}
          />
          <Paragraph
            style={{
              alignItems: "center",
              position: "relative",
              left: 40,
              top: 10,
              fontSize: 20
            }}
          >
            Otimos Especialistas <br />
            Temos Otimos Profissionais,<br />
            Venha nos fazer uma visita.
          </Paragraph>
        </div>
      </ContainerInfo>
    </Wrapper>
  );
};
