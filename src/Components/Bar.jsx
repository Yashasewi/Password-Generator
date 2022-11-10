import image1 from "../assets/lock.png";
import image2 from "../assets/Reset.png";
import image3 from "../assets/copy.png";
import { useState } from "react";

function Bar() {
    const [length, setLength] = useState(7);

    return (
        <div className="bar">
            <img src={image1} className="lock" alt="lock"/>
            {/* <img src={image2} className="dots" alt="dots" srcset="" /> */}
            {/* <div className="test">..........</div> */}
            <div className="dots-input">
                {new Array(length).fill(0).map((dot, ind) => {
                    return <div key={ind} className="dot"></div>;
                })}
            </div>

            <div className="element">
                <img src={image2} className="reset" alt="reset" />
                <img src={image3} className="copy" alt="copy" />
            </div>
        </div>
    );
}

export default Bar;
