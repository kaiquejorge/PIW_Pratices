import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenuV1  from "./MyMenuV1"
import { Container } from "@mui/material"

//professor pages
import CadastrarProfessor from ".professor/Cadastrar"
import ListarProfessor from ".professor/Listar"
import EditarProfessor from ".professor/Editar"


const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenuV1 />
            <Container>
                <Routes>
                    <Route path="CadastrarProfessor" element={<CadastrarProfessor />}/>
                    <Route path="ListarProfessor" element={<ListarProfessor />}/>
                    <Route path="EditarProfessor" element={<EditarProfessor />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage