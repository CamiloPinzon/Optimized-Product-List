import { useState, useMemo, useCallback, useEffect } from "react";
import ProductsTemplate from "../components/templates/ProductsTemplate";
import { IProduct } from "../components/types/interfaces";

const ProductsPage = () => { 
    const [products, setProducts] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState<"name" | "price">("name");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("data/products.json");
            const data = await response.json();
            setProducts(data);
        }

        fetchProducts();

        return () => {};
    }, []);

    const handleSearch = useCallback((term: string) => setSearchTerm(term), []);

    const handleSort = useCallback((sortBy: "name" | "price") => setSortBy(sortBy), []);

    const filteredProducts = useMemo(() => {
        return products
            .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .sort((a, b) => {
                return sortBy === "name" ? a.name.localeCompare(b.name) : a.price - b.price;
            })
    }, [products, searchTerm, sortBy]);

    return (
        <ProductsTemplate
            product={filteredProducts}
            onSearch={handleSearch}
            onSort={handleSort}
        />
    );
};

export default ProductsPage;