import Avatar from "../../../../assets/images/avatar.jpg"
import CV from "../../../../assets/cv.pdf"
import { Container, Grid, Typography, styled, Collapse, IconButton, Tooltip } from "@mui/material"
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YoutubeIcon from '@mui/icons-material/YouTube';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { useState } from "react";


const StyledHero = styled("section")(({ theme }) => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(6),
    background: "transparent",
}))

const AvatarWrapper = styled("div")(() => ({
    position: "relative",
    width: "clamp(220px, 40vw, 500px)",
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@keyframes spin": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
    },

    "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "50%",

        background: `conic-gradient(
      rgba(212,175,55,0) 0deg,
      rgba(212,175,55,0.3) 60deg,
      rgba(212,175,55,0.8) 120deg,
      rgba(212,175,55,1) 150deg,
      rgba(212,175,55,0) 210deg
    )`,

        animation: "spin 2.5s linear infinite",

        WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 15%), black 100%)",
        mask:
            "radial-gradient(farthest-side, transparent calc(100% - 15%), black 100%)",
    },
}));


const StyledImg = styled("img")(() => ({
    width: "99%",
    height: "99%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top",
    position: "relative",
    zIndex: 2,
}));



const Hero = () => {
    const [showContacts, setShowContacts] = useState(false);

    return (
        <>
            <StyledHero id="hero">
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid
                            size={{ xs: 12, md: 5 }}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <AvatarWrapper>
                                <StyledImg src={Avatar} className="initial-load-animation" />
                            </AvatarWrapper>

                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography
                                variant="h1"
                                color="primary.contrastText"
                                textAlign="center"
                                pb={2}
                                className="initial-load-animation"
                            >
                                Claudio Farias
                            </Typography>

                            <Typography
                                variant="h2"
                                color="primary.contrastText"
                                textAlign="center"
                                className="initial-load-animation"
                                sx={{
                                    animationDelay: "0.3s",
                                    opacity: 0,
                                }}
                            >
                                FullStack Developer
                            </Typography>
                            <Grid
                                container
                                display="flex"
                                justifyContent="center"
                                spacing={3}
                                pt={3}
                                className="initial-load-animation"
                                sx={{
                                    animationDelay: "0.6s",
                                    opacity: 0,
                                }}
                            >
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton
                                        component="a"
                                        href={CV}
                                        download="Curriculo Claudio Filipe.pdf"
                                    >
                                        <CloudDownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => setShowContacts(prev => !prev)}>
                                        <EmailIcon />
                                        <Typography>Contato</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>

                            <Collapse in={showContacts} timeout={400}>
                                <Grid container justifyContent="center" spacing={3} pt={4}>
                                    <Grid>
                                        <Tooltip title="LinkedIn">
                                            <IconButton
                                                component="a"
                                                href="https://www.linkedin.com/in/claudio-filipe-temoteo-de-farias-746056144/"
                                                target="_blank"
                                                sx={{ color: "primary.contrastText" }}
                                            >
                                                <LinkedInIcon fontSize="large" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid>
                                        <Tooltip title="GitHub">
                                            <IconButton
                                                component="a"
                                                href="https://github.com/ClaudioFilipe00"
                                                target="_blank"
                                                sx={{ color: "primary.contrastText" }}
                                            >
                                                <GitHubIcon fontSize="large" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid>
                                        <Tooltip title="Copiar Email">
                                            <IconButton
                                                onClick={() => navigator.clipboard.writeText("claudio_farias1@outlook.com")}
                                                sx={{ color: "primary.contrastText" }}
                                            >
                                                <EmailIcon fontSize="large" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid>
                                        <Tooltip title="Youtube">
                                            <IconButton
                                                component="a"
                                                href="https://youtube.com/@devsemfiltro-r7e?si=IsSmPZks8lB5tSnq"
                                                target="_blank"
                                                sx={{ color: "primary.contrastText" }}
                                            >
                                                <YoutubeIcon fontSize="large" />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Collapse>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero