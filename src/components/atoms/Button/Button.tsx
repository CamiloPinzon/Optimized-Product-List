import { IButtonProps } from "../../types/interfaces";

import "./button.scss";

const Button: React.FC<IButtonProps> = ({ label, onClick }) => (
	<button className="button" onClick={onClick}>
		{label}
	</button>
);

export default Button;
