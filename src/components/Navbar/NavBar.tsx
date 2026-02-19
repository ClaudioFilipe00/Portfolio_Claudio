import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <AppBar position="fixed">
            <StyledToolbar>
                <MenuItem onClick={() => scrollToSection("hero")}>
                    SOBRE
                </MenuItem>

                <MenuItem onClick={() => scrollToSection("sobre")}>
                    HABILIDADES
                </MenuItem>

                <MenuItem onClick={() => scrollToSection("projetos")}>
                    PROJETOS
                </MenuItem>

            </StyledToolbar>
        </AppBar>
    )
}

export default NavBar