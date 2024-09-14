export interface IButtonProps {
	label: string;
	onClick: () => void;
}

export interface IInputProps {
	placeholder: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBarProps {
	onSearch: (searchTerm: string) => void;
}

export interface ISortButtonsProps {
	onSort: (sortBy: "name" | "price") => void;
}

export interface IProduct {
	id: number;
	name: string;
	price: number;
}

export interface IProductListProps {
	products: IProduct[];
}

export interface IProductTemplateProps {
	product: IProduct[];
	onSearch: (searchTerm: string) => void;
	onSort: (sortBy: "name" | "price") => void;
}
