import { useRef, useState } from "react";
import "../assets/main.scss";
import Bar from "./Bar";
import Slider from "./Slider";
import Input_buttons from "./Input_buttons";

function App() {
    const [length, setLength] = useState(0);

    return (
        <div className="App">
            <div className="heading">
                <h1 className="main-heading">RANDOM PASSWORD GENERATOR</h1>
                <h5 className="quote-heading">
                    Create strong and secure passwords to keep your account
                    safe.
                </h5>
            </div>
            <Bar length={length} />
            <div className="buttons">
                <button className="btn">More Secure</button>
                <button className="btn">Easy to remember</button>
            </div>
            <Slider length={length} setLength={setLength} />
            <Input_buttons />
        </div>
    );
}

export default App;
