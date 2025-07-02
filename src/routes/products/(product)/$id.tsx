import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/products/(product)/$id")({
  component: ProductDetailsPage,
});

const products = [
  { id: "1", name: "Laptop", price: 50000, description: "A powerful laptop" },
  { id: "2", name: "Mobile", price: 30000, description: "A fast mobile" },
  { id: "3", name: "Tableth", price: 20000, description: "A portable tablet" },
];

function ProductDetailsPage() {
  const { id } = Route.useParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>❌ Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
