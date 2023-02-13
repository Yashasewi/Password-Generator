import { useState } from "react";
import lockIcon from "../assets/Images/lock.png";
import resetIcon from "../assets/Images/Reset.png";
import copyIcon from "../assets/Images/copy.png";

// Object containing allowed characters for password
const AllChars = {
    Uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowercase: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!$^&*-=+_?",
};

const moreSecure = {
    ...AllChars,
    Symbols: "!@#$%^&*()_+-=[]{}|;:',.<>/?",
};

const easyToRemember = {
    ...AllChars,
    Symbols: "",
    Numbers: "12684",
};

const easyToRememberMoreSecure = {
    ...AllChars,
    Symbols: "!@#$%",
};

// Function to generate a random password of specified length
function generatePassword(
    length,
    charSet = AllChars.Uppercase +
        AllChars.Numbers +
        AllChars.Lowercase +
        AllChars.Symbols
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
function Bar({ length, charSet, passwordTypes }) {
    const [reset, setReset] = useState(false);

    // // console.log(length);
    // console.log(charSet.letters, charSet.numbers, charSet.symbols);

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
                        className="reset"
                        alt="NewPassword"
                        onClick={() => setReset(!reset)}
                    />
                    <img
                        src={copyIcon}
                        className="copy"
                        alt="Copy"
                        onClick={() => navigator.clipboard.writeText(password)}
                    />
                    {/* <div className="copy">{<AiOutlineCopy/>}</div> */}
                </div>
            </div>
        </div>
    );
}

export default Bar;
