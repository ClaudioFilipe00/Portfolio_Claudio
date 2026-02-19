import { Container, Grid, styled, Typography } from "@mui/material";
import { useState } from "react";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import Mediquese from "../../../../assets/images/mediquese.png";
import MovieBuddy from "../../../../assets/images/moviebuddy.png";

const Projetos = () => {
    const [openCard, setOpenCard] = useState<number | null>(null);

    const toggleCard = (id: number) => {
        setOpenCard(openCard === id ? null : id);
    };

    const StyledProjetos = styled("section")(({ theme }) => ({
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: theme.spacing(10)
    }));

    return (
        <StyledProjetos id = "projetos">
            <Container maxWidth="lg">
                <Grid container spacing={4}>

                    <Grid size={{ xs: 12 }}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                color="primary.contrastText"
                                variant="h2"
                                textAlign="center"
                                pb={2}
                            >
                                PROJETOS
                            </Typography>
                        </Grid>

                        <ProjectCard
                            id={1}
                            title="Medique-SE"
                            shortDescription="Aplicativo mobile para organização e controle de medicamentos voltado a idosos e pacientes com deficiência intelectual."
                            description="Aplicação desenvolvida para auxiliar pacientes idosos e pessoas com deficiência intelectual que necessitam administrar múltiplos medicamentos ao longo do dia, promovendo organização, autonomia e segurança no tratamento.

                            O Front-end foi desenvolvido em TypeScript utilizando React Native, proporcionando uma interface intuitiva e responsiva. O Back-end foi implementado com JavaScript e Node.js, responsável pela construção da API e gerenciamento das regras de negócio.

                            O sistema utiliza PostgreSQL como banco de dados relacional, com Sequelize como ORM para o mapeamento entre objetos da aplicação e tabelas do banco de dados."
                            image={Mediquese}
                            video="https://www.youtube.com/embed/G_tq12WisX8"
                            openCard={openCard}
                            toggleCard={toggleCard}
                        />


                    </Grid>

                    <Grid size={{ xs: 12 }}>
                        <ProjectCard
                            id={2}
                            title="MovieBuddy"
                            shortDescription="Chatbot web híbrido para recomendação inteligente de filmes com integração à API da TMDb."
                            description="Sistema desenvolvido para recomendar filmes de forma interativa por meio de um chatbot híbrido, combinando regras (rule-based) com uma camada leve de Processamento de Linguagem Natural (NLP).

                            A arquitetura foi estruturada em três camadas principais: interface web, servidor do chatbot e integração com a API externa da TMDb. O front-end foi desenvolvido em HTML, CSS e JavaScript, responsável pela interação com o usuário via requisições HTTP/REST.

                            O back-end foi implementado em Python utilizando FastAPI, com execução via Uvicorn (ASGI). A aplicação gerencia sessões, processa mensagens e integra o motor de NLP desenvolvido com spaCy e padrões de extração (regex), permitindo identificar entidades como gênero e idioma a partir de linguagem natural.

                            A camada de recomendação utiliza regras e heurísticas para filtrar filmes por gênero e idioma, ordenando por nota e popularidade. Para otimização de desempenho, o sistema mantém controle de chamadas à API da The Movie Database (TMDb), respeitando os limites da versão gratuita.

                            O projeto também utiliza python-dotenv para gerenciamento seguro de variáveis de ambiente, Requests para consumo de APIs externas e CORS Middleware para permitir comunicação entre diferentes origens."
                            image={MovieBuddy}
                            video="https://www.youtube.com/embed/G_tq12WisX8"
                            openCard={openCard}
                            toggleCard={toggleCard}
                        />
                    </Grid>


                </Grid>
            </Container>
        </StyledProjetos>
    );
};

export default Projetos;