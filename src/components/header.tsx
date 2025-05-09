import { type dados } from "../types/variables"

export const Header = ({name}:dados) => {
  return (
    <header>
        <h1>Olá {name}!</h1>
        <h1>Bem vindo (a) a Mozambique Beach</h1>
    </header>
  )
}



