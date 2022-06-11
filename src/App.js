import "./style.css";
import Gameboard from "./components/Gameboard";
import Card from "./components/Card";
import botw from "./images/botw.jpg";
import oot from "./images/oot.jpg";
import mm from "./images/mm.jpg";
import ss from "./images/ss.jpg";
import tp from "./images/tp.jpg";
import ww from "./images/ww.jpg";
import la from "./images/la.jpg";
import og from "./images/og.jpg";

function App() {
    return (
        <div className="App">
            <h1>Memory Game</h1>
            <Gameboard>
                <Card src={botw} alt="Breath of the Wild Link" />
                <Card src={oot} alt="Ocarina of Time Link" />
                <Card src={mm} alt="Majora's Mask Link" />
                <Card src={ss} alt="Skyward Sword Link" />
                <Card src={tp} alt="Twilight Princess Link" />
                <Card src={ww} alt="Wind Waker Link" />
                <Card src={la} alt="Link's Awakening Link" />
                <Card src={og} alt="The Original 8-Bit Link" />
            </Gameboard>
        </div>
    );
}

export default App;
