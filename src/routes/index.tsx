import { Link } from "@tanstack/react-router"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: ProductListPage,
})

const products = [
  { id: "1", name: "Laptop", price: 50000 },
  { id: "2", name: "Mobile", price: 30000 },
  { id: "3", name: "Tablet", price: 20000 },
]

function ProductListPage() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to="/products/$id" params={{ id: p.id }}>
              {p.name} - ₹{p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
