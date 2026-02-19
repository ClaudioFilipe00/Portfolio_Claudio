import { styled } from "@mui/material"
import type { ReactNode, ButtonHTMLAttributes, ElementType } from "react"

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    onClick?: () => void
    component?: ElementType 
    href?: string
    download?: string
    target?: string
}

// Movido para fora para evitar recriação no render
const ButtonBase = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    textDecoration: "none", 
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    }
}))

const StyledButton: React.FC<StyledButtonProps> = ({ children, component, ...props }) => {
    return (
        <ButtonBase as={component} {...props}>
            {children}
        </ButtonBase>
    )
}

export default StyledButton