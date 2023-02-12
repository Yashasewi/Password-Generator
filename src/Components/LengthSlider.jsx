function LengthSlider({ length, setLength }) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        setLength(newValue > 32 ? 32 : newValue < 4 ? 4 : newValue);
    };
    return (
        <div className="slider">
            <input
                className="data"
                type="range"
                min={4}
                max={32}
                step={1}
                value={length}
                onChange={handleChange}
            />
            <div className="value">{length}</div>
        </div>
    );
}

export default LengthSlider;
