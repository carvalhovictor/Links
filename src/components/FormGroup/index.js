import React, { useState, useEffect } from "react";

const FormGroup = props => {
	const { data, name, label, type } = props;
	const [value, setValue] = useState("");

	useEffect( () => {
		const value = data && data[name] ? data[name] : undefined;
		if(value !== undefined) setValue(value);
	}, [name, data]);

	const handleChange = e => {
		if(value === e.target.value) return;
		setValue(e.target.value);
	};
	
	return (
		<div className="form-group">
			<label>{label}</label>
			<input type={type} className="form-control" name={name} value={value} onChange={handleChange} />
		</div>
	);
};

export default FormGroup;