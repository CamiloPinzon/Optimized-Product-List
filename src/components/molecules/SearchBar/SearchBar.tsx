import { useState, useEffect } from "react";
import { ISearchBarProps } from "../../types/interfaces";
import Input from "../../atoms/Input/Input";

import "./searchBar.scss";

const SearchBar: React.FC<ISearchBarProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	useEffect(() => {
		onSearch(searchTerm);
	}, [onSearch, searchTerm]);

	return (
		<div className="search-bar">
			<Input placeholder="Search products..." onChange={handleSearch} />
		</div>
	);
};

export default SearchBar;
