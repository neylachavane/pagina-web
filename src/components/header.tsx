import { type dados } from "../types/variables"

export const Header = ({name}:dados) => {
  return (
    <header className="bg-gradient-to-br from-cyan-500 via bg-cyan-300 to to-blue-500 text-3xl p-4">
        <h1>Olá {name}!</h1>
        <h1>Bem vindo (a) a Mozambique Beach</h1>
    </header>
  )
}



