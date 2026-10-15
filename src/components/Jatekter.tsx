import Cella from "./Cella";
import { useTicTacToeContext } from '../context/TicTacToeContext';
function Jatekter() {
    const { lista } = useTicTacToeContext();
    return (<div className="jatekter">{lista.map((e, i) => { return <Cella adat={e} key={i} index={i} /> })}</div>);
}
export default Jatekter;