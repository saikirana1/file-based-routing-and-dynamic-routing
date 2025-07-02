import { createFileRoute, useParams } from "@tanstack/react-router"

export const Route = createFileRoute("/products/$id/details")({
  component: ProductDetailsPage,
})

const products = [
  { id: "1", name: "Laptop", price: 50000, description: "A powerful laptop" },
  { id: "2", name: "Mobile", price: 30000, description: "A fast mobile" },
  { id: "3", name: "Tablet", price: 20000, description: "A portable tablet" },
]

function ProductDetailsPage() {
  const { id } = useParams({ strict: false })
  const product = products.find((p) => p.id === id)

  if (!product) return <div>❌ Product not found</div>

  return (
    <div>
      <h2>{product.name} - Full Details</h2>
      <p>Price: ₹{product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  )
}
