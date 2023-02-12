const CharacterTypeButtons = ({
    letters,
    setLetters,
    numbers,
    setNumbers,
    symbols,
    setSymbols,
}) => {
    return (
        <div className="input-buttons">
            <button
                className={`in-btn ${letters ? "active" : ""}`}
                onClick={() => setLetters(!letters)}
            >
                Letters
            </button>
            <button
                className={`in-btn ${numbers ? "active" : ""}`}
                onClick={() => setNumbers(!numbers)}
            >
                Numbers
            </button>
            <button
                className={`in-btn ${symbols ? "active" : ""}`}
                onClick={() => setSymbols(!symbols)}
            >
                Special
            </button>
        </div>
    );
};

export default CharacterTypeButtons;
