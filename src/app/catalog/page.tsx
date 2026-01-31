import { getCampers } from "@/lib/api/campers";

export default async function CatalogPage() {
  const data = await getCampers({ page: 1, limit: 4 });

  return (
    <main style={{ padding: 24 }}>
      <h1>Catalog</h1>
      <p>Total: {data.total}</p>

      <ul style={{ display: "grid", gap: 12, padding: 0, listStyle: "none" }}>
        {data.items.map((c) => (
          <li key={c.id} style={{ border: "1px solid #ddd", padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{c.name}</div>
            <div>{c.location}</div>
            <div>€ {c.price.toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}