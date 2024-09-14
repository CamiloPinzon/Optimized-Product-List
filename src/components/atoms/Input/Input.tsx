import { IInputProps } from "../../types/interfaces";
import "./input.scss";

const Input: React.FC<IInputProps> = ({ placeholder, onChange }) => (
	<input
		className="input"
		type="text"
		placeholder={placeholder}
		onChange={onChange}
	/>
);

export default Input;
