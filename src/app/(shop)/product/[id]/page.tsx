import Product from "@/features/products/components/ProductDetails";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    return (
        <div>
           <Product productId={id} />
        </div>
    );
}