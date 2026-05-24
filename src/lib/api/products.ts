import { Product } from "@/types/product";
import { featuredProducts, latestMouse, latestKeyboard } from "@/data/sampleProducts";

// Combine all products
const allProducts: Product[] = [...featuredProducts, ...latestMouse, ...latestKeyboard];

/**
 * Get products by category slug
 */
export async function getCategoryProducts(categorySlug: string): Promise<Product[]> {
  // Normalize the slug for comparison
  const normalizedSlug = categorySlug.toLowerCase();

  return allProducts.filter((product) => {
    const productCategorySlug = product.slug
      ? product.slug.split("-").slice(0, -1).join("-").toLowerCase()
      : product.category.toLowerCase();

    // Also match by category name
    return (
      product.category.toLowerCase() === normalizedSlug ||
      productCategorySlug.includes(normalizedSlug)
    );
  });
}

/**
 * Get a single product by ID
 */
export async function getProductById(productId: string): Promise<Product | null> {
  return allProducts.find((product) => product.id === productId) || null;
}
