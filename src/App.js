import uniqid from "uniqid";
import Gameboard from "./components/Gameboard";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Gameboard>
                <Card
                    src="src/images/botw.jpg"
                    alt="Breath of the Wild Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/oot.jpg"
                    alt="Ocarina of Time Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/mm.jpg"
                    alt="Majora's Mask Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/ss.jpg"
                    alt="Skyward Sword Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/tp.jpg"
                    alt="Twilight Princess Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/ww.jpg"
                    alt="Wind Waker Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/la.jpg"
                    alt="Link's Awakening Link"
                    uniqid={uniqid()}
                />
                <Card
                    src="src/images/og.jpg"
                    alt="The Original 8-Bit Link"
                    uniqid={uniqid()}
                />
            </Gameboard>
        </div>
    );
}

export default App;
