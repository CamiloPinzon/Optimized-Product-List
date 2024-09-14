import { ISortButtonsProps } from "../../types/interfaces";
import Button from "../../atoms/Button/Button";

import "./sortButtons.scss";

const SortButtons: React.FC<ISortButtonsProps> = ({ onSort }) => (
	<div className="sort-buttons">
		<Button label="Sort by name" onClick={() => onSort("name")} />
		<Button label="Sort by price" onClick={() => onSort("price")} />
	</div>
);

export default SortButtons;
