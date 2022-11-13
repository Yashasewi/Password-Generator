import "../assets/main.scss";
import Bar from "./Bar";
import Slider from "./Slider";

function App() {
    return (
        <div className="App">
            <div className="heading">
                <h1 className="main-heading"> RANDOM PASSWORD GENERATOR</h1>
                <h5 className="quote-heading">
                    Create strong and secure passwords to keep your account
                    safe.
                </h5>
            </div>
            <Bar />
            <div className="buttons">
                <button className="btn">More Secure</button>
                <button className="btn">Easy to remember</button>
            </div>
            <Slider />
            <div className="input-buttons">
                <button className="in-btn">Letters</button>
                <button className="in-btn">Numbers</button>
                <button className="in-btn">Special</button>
            </div>
        </div>
    );
}

export default App;
