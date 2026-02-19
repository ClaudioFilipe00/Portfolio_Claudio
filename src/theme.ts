import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#c9c9e9" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html {
        scroll-behavior: smooth;
      }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes pulseGlow {
      0%, 100% {
        opacity: 0.6;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.08);
      }
    }

    body {
      margin: 0;
      padding: 0;
      min-height: 100vh;
      background: radial-gradient(circle at center, #111 0%, #000 70%);
      overflow-x: hidden;
      position: relative;
    }

    /* Glow central dourado */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(255, 215, 0, 0.25),
        rgba(212, 175, 55, 0.15),
        transparent 60%
      );
      animation: pulseGlow 6s ease-in-out infinite;
      filter: blur(80px);
      z-index: -2;
    }

    /* Faixa dourada animada horizontal */
    body::after {
      content: "";
      position: fixed;
      inset: 0;
      background: linear-gradient(
        120deg,
        transparent 20%,
        rgba(255, 215, 0, 0.15) 40%,
        rgba(255, 223, 0, 0.25) 50%,
        rgba(212, 175, 55, 0.15) 60%,
        transparent 80%
      );
      background-size: 200% 200%;
      animation: shimmer 12s linear infinite;
      filter: blur(100px);
      z-index: -1;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .initial-load-animation {
      animation: fadeInUp 0.8s ease-out forwards;
    }
  `,
    },


    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: "relative",
          overflow: "hidden",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          borderRadius: 16,
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          transition: "0.3s ease",

          "&::after": {
            content: '""',
            position: "absolute",
            right: 16,
            bottom: 16,

            maxWidth: 160,
            maxHeight: 130,

            width: "100%",
            height: "100%",

            backgroundImage: "var(--card-bg-image)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",

            opacity: 0.3,
            pointerEvents: "none",
          },


          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: theme.shadows[15],
            border: "1px solid rgba(255, 255, 255, 0.2)",
          },
        }),
      },
    },

  },
});

theme = responsiveFontSizes(theme);

export default theme;


declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    project: true;
  }
}


declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    project: true;
  }
}