import './App.css'
import Jatekter from './components/Jatekter'
import { useTicTacToeContext } from '../contexts/TictactoeContext';
function App() {
  const { wins, lepes, newgame } = useTicTacToeContext()
  return (
    <>
      <div>
        {wins && <p>Wins: {wins}</p>}
        {!wins && lepes === 9 && <p>nowiner</p>}
      </div>
      <article>
        <Jatekter />
      </article>
      <section>
        <button onClick={newgame}>newgame</button>
      </section>
    </>
  )
}
export default App;