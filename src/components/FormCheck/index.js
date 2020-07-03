import React, { useState, useEffect } from "react";

const FormCheck = props => {
	const { data, name, label} = props;
	const [isChecked, setIsChecked] = useState(null);
	console.log("**** DATA", data);
	console.log("**** USESTATE");
	

	useEffect( () => {
		const value = data && data[name] ? data[name] : undefined;
		if(value !== undefined) setIsChecked(!!value);
	}, [name, data]);

	const handleChange = e => {
		if(isChecked === e.target.checked) return;
		setIsChecked(!!e.target.checked);
	};
	
	return (
		<div className="form-group form-check">
			<label className="form-check-label">
				<input type="checkbox" name={name} checked={!!isChecked} onChange={handleChange} />
				<span className="form-check-sign"></span>
				{label}
			</label>
		</div>
	);
};

export default FormCheck;