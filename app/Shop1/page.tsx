"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const Shop1 = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const fetchedProducts: Product[] = await client.fetch(allProducts);
                setProducts(fetchedProducts);
                setFilteredProducts(fetchedProducts);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }
        fetchProducts();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleaddtoCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        Swal.fire({
            position: "top-right",
            icon: "success",
            title: `${product.name} added to cart`,
            showConfirmButton: false,
            timer: 1000,
        });
        addToCart(product);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Our Latest Products</h1>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for products..."
                className="border p-2 rounded-lg mb-6 w-full md:w-1/2"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {filteredProducts.map((product) => (
                    <Link
                        href={product.slug?.current ? `/product/${product.slug.current}` : "#"}
                        key={product._id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col items-center hover:scale-105"
                    >
                        <h2 className="text-lg font-semibold mb-2 text-center">
                            {product.name}
                        </h2>
                        {product.image && (
                            <Image
                                src={urlFor(product.image.asset._ref).url()}
                                alt={product.name || "Product image"}
                                width={200}
                                height={200}
                                className="rounded-md object-cover h-[200px] w-[200px]"
                            />
                        )}
                        <p className="text-gray-700 mt-2 font-medium">Price: ${product.price}</p>
                        <p className="text-gray-500 mt-1 text-sm text-center">
                            {product.description}
                        </p>
                        <button
                            className="bg-gradient-to-r from-yellow-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                            onClick={(e) => handleaddtoCart(e, product)}
                        >
                            Add to Cart
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Shop1;

