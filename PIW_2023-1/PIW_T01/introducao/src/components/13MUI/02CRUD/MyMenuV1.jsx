import { AppBar, Box, Button, Container, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from "react";

const MyMenu = () => {

    const [achorElProfessor, setAnchorElProfessor] = useState(null)

    const handleOpenAnchorElProfessor = (event) => {
        setAnchorElProfessor(event.currentTarget)
    }

    const handleCloseAnchorElProfessor = () => {
        setAnchorElProfessor(null)
    }

    function dropProfMenu(){
        return(
            <Box>
                <Button
                    sx={{color:"white", my:2}}
                    onClick={handleOpenAnchorElProfessor}
                    OnClose={handleCloseAnchorElProfessor}
                >
                    Professores
                </Button>    
                <Menu
                    anchorEl={achorElProfessor}
                    open={Boolean(achorElProfessor)}
                >
                    <MenuItem
                        onClick={
                            ()=>{
                                handleCloseAnchorElProfessor()
                                alert("indo para a página de Cadastrar Professor!")
                            }
                        }
                    >
                        Cadastrar
                    </MenuItem>
                    <MenuItem>
                        Listar
                    </MenuItem>
                </Menu>  
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIcon sx={{display:{xs:"none", md:'flex'}, mr: 1}} />
                    <Typography 
                        variant="h5"
                        component="b"
                        href="/"
                        sx={{cursor: "pointer",
                            color:"white",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800
                        }}

                    >
                        CRUD_V1
                    </Typography>

                    <Box sx={{ml:3, width:"100%", display: "flex", justifyContent: "flex-end"}}>
                        {dropProfMenu()}
                        <Button
                            sx={{color:"white", my:2}}
                        >
                            Alunos
                        </Button>
                        <Button
                            sx={{color:"white", my:2}}
                        >
                            Sobre
                        </Button>
                    </Box>    

                </Toolbar>
            </Container>

        </AppBar>
    )
}

export default MyMenu