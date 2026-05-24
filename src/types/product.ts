export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  stockStatus: "In Stock" | "Out of Stock" | "Low Stock" | "Upcoming";
  category: string;
  description?: string;
  specifications?: Record<string, string> | any[];
  rating?: number;
  reviewCount?: number;
  badge?: string;
  badgeColor?: "sale" | "hot" | "new";
}
