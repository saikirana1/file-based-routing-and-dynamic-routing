import { Outlet, Link } from "@tanstack/react-router"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("__root")({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div>
      <h1>My App</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}
