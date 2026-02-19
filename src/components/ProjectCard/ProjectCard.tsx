import { Card, Box, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ProjectCardProps {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  video: string;
  openCard: number | null;
  toggleCard: (id: number) => void;
}

const ProjectCard = ({
  id,
  title,
  shortDescription,
  description,
  image,
  video,
  openCard,
  toggleCard,
}: ProjectCardProps) => {
  const isOpen = openCard === id;

  return (
    <Card
      sx={{
        p: 4,
        background: "rgba(20,20,20,0.6)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(212,175,55,0.15)",
        borderRadius: 4,
        transition: "all 0.4s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 0 40px rgba(212,175,55,0.25)",
        },
      }}
    >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
            color="primary.contrastText"
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.75)",
              mt: 1,
              fontSize: "1rem",
              fontWeight: 400,
              letterSpacing: "0.3px",
            }}
          >
            {shortDescription}
          </Typography>

        </Box>

        <IconButton
          onClick={() => toggleCard(id)}
          sx={{
            color: "#d4af37",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>

      {/* EXPANSÃO */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box mt={4}>

          {/* IMAGEM + DESCRIÇÃO lado a lado */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* IMAGEM FIXA */}
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: { xs: "100%", md: "40%" },
                height: "auto",
                maxHeight: 300,
                objectFit: "contain",
                borderRadius: 3,
                backgroundColor: "#111", // opcional: fundo escuro elegante
              }}
            />


            {/* DESCRIÇÃO */}
            <Typography
              variant="body1"
              sx={{
                width: { xs: "100%", md: "60%" },
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                fontWeight: 300,
                letterSpacing: "0.4px",
              }}
            >
              {description}
            </Typography>

          </Box>

          {/* VIDEO GRANDE ABAIXO */}
          <Box
            sx={{
              mt: 4,
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Box
              component="iframe"
              src={video}
              allowFullScreen
              sx={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
