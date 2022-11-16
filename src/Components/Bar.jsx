import image1 from "../assets/Images/lock.png";
import image2 from "../assets/Images/Reset.png";
import image3 from "../assets/Images/copy.png";

const Allowed = {
  Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
  Lowers: "qwertyuiopasdfghjklzxcvbnm",
  Numbers: "1234567890",
  Symbols: "!$^&*-=+_?",
};

// password generator
function generatePassword(
  length,
  charset = Allowed.Uppers + Allowed.Numbers + Allowed.Lowers + Allowed.Symbols
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

  return (
    <div>
      <div className="bar display">
        <img src={image1} className="lock" alt="lock" />
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
      <div className="bar-active bar">
        <img src={image1} className="lock" alt="lock" />
        <div className="password ">{password}</div>
        <div className="element">
          <img src={image2} className="reset" alt="reset" />
          <img src={image3} className="copy" alt="copy" />
        </div>
      </div>
    </div>
  );
}

export default Bar;
