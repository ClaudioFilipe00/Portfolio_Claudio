import { Container, Grid, Typography, styled, Card, CardContent } from "@mui/material"
import Python from "../../../../assets/images/python.png"
import Banco from "../../../../assets/images/banco.png"
import AWS from "../../../../assets/images/aws.png"
import IA from "../../../../assets/images/ia.png"
import JS from "../../../../assets/images/js.png"
import Node from "../../../../assets/images/node.png"


const Sobre = () => {

    const StyledSobre = styled("section")(({ theme }) => ({
        minHeight: "100vh",
        display: "flex",
        paddingTop: theme.spacing(12),

    }))

    return (
        <>
            <StyledSobre id = "sobre">
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="stretch">
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                color="primary.contrastText"
                                variant="h2"
                                textAlign="center"
                                pb={2}
                            >
                                HABILIDADES
                            </Typography>
                        </Grid>

                        {/* Card 1 */}
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Card elevation={3} sx={{ height: "100%" }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">
                                        Formação Acadêmica
                                    </Typography>

                                    <Typography color="primary.contrastText">Análise e Desenvolvimento de Sistemas – FATEC Arthur de Azevedo</Typography>
                                    <Typography color="primary.contrastText">Graduado em Análise e Desenvolvimento de Sistemas pela FATEC, com formação sólida em lógica de programação, engenharia de software, bancos de dados e desenvolvimento de aplicações web.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Card 2 */}
                        <Grid size={{ xs: 12, md: 6 }} display="flex">
                            <Card
                                elevation={3}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "--card-bg-image": `url(${Python})`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">Python</Typography>

                                    <Typography color="primary.contrastText">Experiência no desenvolvimento de aplicações Back-end e Front-end utilizando Python.</Typography>

                                    <Typography color="primary.contrastText">Conhecimento em:</Typography>

                                    <Typography color="primary.contrastText">- Manipulação e análise de dados</Typography>

                                    <Typography color="primary.contrastText">- Criação de sistemas desktop</Typography>

                                    <Typography color="primary.contrastText"> - Geração de executáveis</Typography>

                                    <Typography color="primary.contrastText">- Desenvolvimento de aplicações estruturadas e funcionais</Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Card 3 */}
                        <Grid size={{ xs: 12, md: 6 }} display="flex">
                            <Card
                                elevation={3}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "--card-bg-image": `url(${JS})`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">JavaScript & TypeScript</Typography>

                                    <Typography color="primary.contrastText">Desenvolvimento de aplicações web e mobile utilizando:</Typography>

                                    <Typography color="primary.contrastText">- React</Typography>

                                    <Typography color="primary.contrastText">- React Native</Typography>

                                    <Typography color="primary.contrastText"> - Vite</Typography>

                                    <Typography color="primary.contrastText">- Material UI</Typography>

                                    <Typography color="primary.contrastText">Experiência na criação de interfaces modernas, responsivas e componentizadas.</Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Card 4 */}
                        <Grid size={{ xs: 12, md: 6 }} display="flex">
                            <Card
                                elevation={3}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "--card-bg-image": `url(${Banco})`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">Banco de Dados</Typography>

                                    <Typography color="primary.contrastText">Experiência em modelagem, criação e manipulação de bancos de dados relacionais:</Typography>

                                    <Typography color="primary.contrastText">- MySQL</Typography>

                                    <Typography color="primary.contrastText">- PostgreSQL</Typography>

                                    <Typography color="primary.contrastText">Conhecimento em consultas SQL, estruturação de tabelas e integração com aplicações back-end.</Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Card 5 */}
                        <Grid size={{ xs: 12, md: 6 }} display="flex">
                            <Card
                                elevation={3}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "--card-bg-image": `url(${AWS})`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">Cloud & Data Engineering – AWS</Typography>

                                    <Typography color="primary.contrastText">Conhecimento prático em arquitetura e utilização de serviços AWS para criação de soluções escaláveis, armazenamento, processamento e análise de dados em ambiente cloud.</Typography>

                                    <Typography color="primary.contrastText">- Computação em nuvem (Amazon EC2, AWS Lambda)</Typography>

                                    <Typography color="primary.contrastText">- Armazenamento e bancos de dados (Amazon S3, Amazon RDS)</Typography>

                                    <Typography color="primary.contrastText">- Engenharia e processamento de dados (AWS Glue, Amazon Redshift).</Typography>

                                    <Typography color="primary.contrastText">- Business Intelligence e visualização de dados (Amazon QuickSight).</Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Card 6 */}
                        <Grid size={{ xs: 12, md: 6 }} display="flex">
                            <Card
                                elevation={3}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "--card-bg-image": `url(${Node})`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">Back-end com Node.js</Typography>

                                    <Typography color="primary.contrastText">Desenvolvimento de estruturas back-end utilizando Node.js, com organização de rotas, controllers e integração com banco de dados.</Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Card 7 */}
                        <Grid size={{ xs: 12, md: 6 }} display="flex">
                            <Card
                                elevation={3}
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    "--card-bg-image": `url(${IA})`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" gutterBottom color="primary.contrastText">Inteligência Artificial</Typography>

                                    <Typography color="primary.contrastText">Conhecimento introdutório em Inteligência Artificial, com desenvolvimento de um sistema simples de recomendação de filmes utilizando técnicas básicas de IA.</Typography>

                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Container>
            </StyledSobre >
        </>
    )
}

export default Sobre