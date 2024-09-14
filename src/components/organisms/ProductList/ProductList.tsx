import { IProductListProps, IProduct } from "../../types/interfaces";

import "./productList.scss";

const ProductList: React.FC<IProductListProps> = ({ products }) => {
	return (
		<div className="product-list">
			{products.map(({ id, name, price }: IProduct) => (
				<div className="product-list__item" key={id}>
					<h3 className="product-list__name">{name}</h3>
					<p className="product-list__price">${price.toFixed(2)}</p>
				</div>
			))}
		</div>
	);
};

export default ProductList;
