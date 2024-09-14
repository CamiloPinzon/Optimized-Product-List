import { IProductTemplateProps } from "../types/interfaces";
import SearchBar from "../molecules/SearchBar/SearchBar";
import SortButtons from "../molecules/SortButtons/SortButtons";
import ProductList from "../organisms/ProductList/ProductList";

import "./productsTemplate.scss";

const ProductsTemplate: React.FC<IProductTemplateProps> = ({
	product,
	onSearch,
	onSort,
}) => (
	<div className="products-template">
		<SearchBar onSearch={onSearch} />
		<SortButtons onSort={onSort} />
		<ProductList products={product} />
	</div>
);

export default ProductsTemplate;
