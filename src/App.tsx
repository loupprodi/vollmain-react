import './App.css';
import { Container } from '@mui/material';
import { Cabecalho } from "./components/Cabecalho"
import { Titulo } from './components/Titulo';
import { Rodape } from './components/Rodape';

export const App = () => {
  return (
    <>
      <Cabecalho />
      <Container > <Titulo> Área administrativa </Titulo> </Container>
      <Rodape />
    </>
  )
}