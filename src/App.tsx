import './App.css';
import { Container } from '@mui/material';
import { Cabecalho } from "./components/Cabecalho"
import { Titulo } from './components/Titulo';

export const App = () =>{
  return(
    <>
   <Cabecalho />
   <Container > <Titulo> Área administrativa </Titulo> </Container>
    </>
  )
}