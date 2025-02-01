import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";

interface ProductPageProps {
  params: { slug: string }; // Correctly define params as an object with slug
}

// Function to fetch the product by slug
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      _type,
      image,
      price
    }`,
    { slug }
  )
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params; // Extract slug directly
  const product = await getProduct(slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-lg shadow-md object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-medium">Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}
