import { createContext, useContext, useState, type ReactNode } from "react";
import { ADATLISTA, type CELLATIPUS } from "../adat";
interface FeladatokContextValue {
    lista: CELLATIPUS[];
    lepes: number;
    wins: string | null;
    kivalasztKezelo: (index: number) => void;
    newgame: () => void;
}
export const Tictactoecontext = createContext<FeladatokContextValue | undefined>(undefined);
function wincheck(lista: CELLATIPUS[]): string | null {
  const wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];
  for (const [a, b, c] of wins) {
    if (lista[a].sym !== " " && lista[a].sym === lista[b].sym && lista[a].sym === lista[c].sym) {
      return lista[a].sym;}}
  return null;
}
interface TicTacToeProviderProps {
    children: ReactNode;
}
export function TictactoeProvider({ children }: TicTacToeProviderProps) {
    const [lista, setLista] = useState<CELLATIPUS[]>(ADATLISTA);
    const [lepes, setLepes] = useState(0);
    const wins = wincheck(lista);
    function kivalasztKezelo(index: number) {
        if (wins || lepes >= 9 || lista[index].sym !== " ") return;
        const listaMasolat = [...lista];
        listaMasolat[index] = { ...listaMasolat[index], sym: lepes % 2 ? "O" : "X" };
        setLista(listaMasolat);
        setLepes(lepes + 1);
    }
    function newgame() {
        setLista(ADATLISTA.map(item => ({ ...item, sym: " "})));
        setLepes(0);
    }
    return (
        <Tictactoecontext.Provider value={{ lista, lepes, wins, kivalasztKezelo, newgame }}>
            {children}
        </Tictactoecontext.Provider>
    );
}
export function useTicTacToeContext(): FeladatokContextValue {
    const context = useContext(Tictactoecontext);
    if (!context) {
        throw new Error("Context hiba");
    }
    return context;
}