function Slider({ length, setLength }) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        if (newValue > 32) {
            setLength(32);
            return;
        }
        if (newValue < 4) {
            setLength(4);
            return;
        }
        setLength(newValue);
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

export default Slider;
