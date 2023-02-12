import { useState } from "react";
import "../assets/main.scss";
import Bar from "./Bar";
import LengthSlider from "./LengthSlider";
import CharacterTypeButtons from "./CharacterTypeButtons";

function App() {
    const [length, setLength] = useState(0);
    const [moreSecure, setMoreSecure] = useState(false);
    const [easyToRemember, setEasyToRemember] = useState(false);
    const [letters, setLetters] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const charSet = {
        letters,
        numbers,
        symbols,
    };

    return (
        <div className="App">
            <div className="heading">
                <h1 className="main-heading">RANDOM PASSWORD GENERATOR</h1>
                <h5 className="quote-heading">
                    Create strong and secure passwords to keep your account
                    safe.
                </h5>
            </div>
            <Bar length={length} charSet={charSet} />
            <div className="buttons">
                <button
                    className={`btn ${moreSecure ? "active" : ""}`}
                    onClick={() => setMoreSecure(!moreSecure)}
                >
                    More Secure
                </button>
                <button
                    className={`btn ${easyToRemember ? "active" : ""}`}
                    onClick={() => setEasyToRemember(!easyToRemember)}
                >
                    Easy To Remember
                </button>
            </div>
            <LengthSlider length={length} setLength={setLength} />
            <CharacterTypeButtons
                letters={letters}
                setLetters={setLetters}
                numbers={numbers}
                setNumbers={setNumbers}
                symbols={symbols}
                setSymbols={setSymbols}
            />
        </div>
    );
}

export default App;
