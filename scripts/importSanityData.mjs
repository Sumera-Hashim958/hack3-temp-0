import { createClient } from '@sanity/client';
import fetch from 'node-fetch';

// Initialize Sanity client
const client = createClient({
  projectId: "dhrgd9p6",
  dataset: "production",
  useCdn: false, // Set to true for faster reads in production
  apiVersion: "2025-01-25",
  token: "skOLYdIyRPNiUQQKAnyNovsS4ego51Db5DJtr1tQydBQ1QNgUzdD3zYh8XQARocR4Dij1eSK8JClqHIehWlaZ5vn6Jlme1yPVVstMBeE6xPrndop79sDArqiyESwhMBgcjNgPZZNOljeD3589WCwUdeJPTpUIAUShlD7KG1mnusrsQntzhk3",
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}. Error: ${error.message}`);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: "product",
        name: product.name, // Updated to match your schema
        image: {
          _type: "image",
          asset: {
            _ref: imageId,
          },
        },
        price: parseFloat(product.price) || 0, // Ensure valid price
        description: product.description || "No description provided", // Default fallback
        discountPercentage: product.discountPercentage || 0, // Default to 0 if missing
        isFeaturedProduct: !!product.isFeaturedProduct, // Convert to boolean
        stockLevel: product.stockLevel || 0, // Default stock level
        category: product.category || "Uncategorized", // Default category
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.error(`Product "${product.name}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error(`Error uploading product "${product.name}":`, error.message);
  }
}

// Function to fetch products from the API and upload them to Sanity
async function migrateProducts() {
  try {
    console.log("Fetching products from API...");
    const response = await fetch("https://template-0-beta.vercel.app/api/product");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    console.log(`Fetched ${products.length} products. Starting migration...`);

    for (const product of products) {
      await uploadProduct(product);
    }

    console.log("Product migration completed successfully!");
  } catch (error) {
    console.error("Error fetching or migrating products:", error.message);
  }
}

// Start the migration
migrateProducts();
