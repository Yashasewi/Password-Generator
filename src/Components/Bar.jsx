import image1 from "../assets/Images/lock.png";
import image2 from "../assets/Images/Reset.png";
import image3 from "../assets/Images/copy.png";

const Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!$^&*-=+_?",
};

// password generator.
function generatePassword(
    length,
    charset = Allowed.Uppers +
        Allowed.Numbers +
        Allowed.Lowers +
        Allowed.Symbols
) {
    const crypto = window.crypto || window.msCrypto;

    if (typeof crypto === "undefined") {
        throw new Error(
            "Crypto API is not supported. Please upgrade your web browser"
        );
    }

    // const charset =
    //     Allowed.Uppers + Allowed.Numbers + Allowed.Lowers + Allowed.Symbols;

    const indexes = crypto.getRandomValues(new Uint32Array(length));

    let secret = "";

    for (const index of indexes) {
        secret += charset[index % charset.length];
    }

    return secret;
}

function Bar({ length }) {
    const password = generatePassword(length);
    const dots = new Array(8).fill(0).map((dot, ind) => {
        return <div key={ind} className="dot"></div>;
    });

    return (
        <div>
            <div className="bar">
                <img src={image1} className="lock" alt="lock" />
                {length > 0 ? (
                    <div className="password ">{password}</div>
                ) : (
                    <div className="dots-input">{dots}</div>
                )}

                <div className="element">
                    <img src={image2} className="reset" alt="reset" />
                    <img src={image3} className="copy" alt="copy" />
                </div>
            </div>
        </div>
    );
}

export default Bar;
