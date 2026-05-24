import { Product } from "@/types/product";
import { featuredProducts, latestMouse, latestKeyboard, dailyDealsProducts } from "@/data/sampleProducts";

/**
 * Get products by category slug
 */
export async function getCategoryProducts(categorySlug: string): Promise<Product[]> {
  const allProducts: Product[] = [
    ...featuredProducts, 
    ...latestMouse, 
    ...latestKeyboard,
    ...dailyDealsProducts
  ];

  if (!categorySlug) return [];
  
  // Normalize the slug for comparison
  const normalizedSlug = categorySlug.toLowerCase().trim();

  // Special case for "all"
  if (normalizedSlug === "all" || normalizedSlug === "products") return allProducts;

  return allProducts.filter((product) => {
    const category = (product.category || "").toLowerCase();
    const slug = (product.slug || "").toLowerCase();
    
    // Check for exact match or plural/singular variations
    const isCategoryMatch = 
      category === normalizedSlug || 
      category === `${normalizedSlug}s` || 
      `${category}s` === normalizedSlug ||
      category.includes(normalizedSlug) ||
      normalizedSlug.includes(category);

    // Also match by slug parts
    const productSlugParts = slug.split("-");
    const isSlugMatch = productSlugParts.includes(normalizedSlug) || slug.includes(normalizedSlug);

    return isCategoryMatch || isSlugMatch;
  });
}

/**
 * Get a single product by ID
 */
export async function getProductById(productId: string): Promise<Product | null> {
  const allProducts: Product[] = [
    ...featuredProducts, 
    ...latestMouse, 
    ...latestKeyboard,
    ...dailyDealsProducts
  ];
  return allProducts.find((product) => product.id === productId) || null;
}
