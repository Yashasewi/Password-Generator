import React, { useState } from "react";

function Slider({ length, setLength }) {
	const handleChange = (event) => {
		setLength(event.target.value);
	};
	return (
		<div className="slider">
			<input
				className="data"
				type="range"
				min={4}
				max={32}
				step={1}
				defaultValue={length}
				onChange={handleChange}
			/>
			<div className="value">{length}</div>
		</div>
	);
}

export default Slider;
