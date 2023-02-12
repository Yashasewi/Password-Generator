import lockIcon from "../assets/Images/lock.png";
import resetIcon from "../assets/Images/Reset.png";
import copyIcon from "../assets/Images/copy.png";

import { AiOutlineCopy } from "react-icons/ai";

// Object containing allowed characters for password
const AllowedChars = {
    Uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowercase: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!$^&*-=+_?",
};

// Function to generate a random password of specified length
function generatePassword(
    length,
    charSet = AllowedChars.Uppercase +
        AllowedChars.Numbers +
        AllowedChars.Lowercase +
        AllowedChars.Symbols
) {
    // Check if the crypto API is supported in the browser
    const cryptoAPI = window.crypto || window.msCrypto;
    if (typeof cryptoAPI === "undefined") {
        throw new Error(
            "Crypto API is not supported. Please upgrade your web browser."
        );
    }

    // Generate an array of random indexes for the password
    const randomIndexes = cryptoAPI.getRandomValues(new Uint32Array(length));

    let generatedPassword = "";

    // Use the random indexes to generate the password
    for (const index of randomIndexes) {
        generatedPassword += charSet[index % charSet.length];
    }

    return generatedPassword;
}

// Component to display the password and related icons
function Bar({ length }) {
    // Generate the password of the specified length
    const password = length > 0 ? generatePassword(length) : "";

    // Array of dots to display if no password is generated
    const dots = Array(8)
        .fill(0)
        .map((_, index) => {
            return <div key={index} className="dot"></div>;
        });

    return (
        <div>
            <div className="bar">
                {/* Display lock icon */}
                <img src={lockIcon} className="lock-icon" alt="Lock" />
                {/* Display either password or dots */}
                {password !== "" ? (
                    <div className="password">{password}</div>
                ) : (
                    <div className="dots-input">{dots}</div>
                )}
                {/* Display reset and copy icons */}
                <div className="icon-group">
                        <img
                            src={resetIcon}
                            className="reset-icon"
                            alt="Reset"
                        />
                        <img src={copyIcon} className="copy" alt="Copy" />
                    {/* <div className="copy">{<AiOutlineCopy/>}</div> */}
                </div>
            </div>
        </div>
    );
}

export default Bar;
