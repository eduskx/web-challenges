import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductsPage() {
  const { data: products, isLoading } = useSWR("api/products", fetcher);
  if (isLoading) return <div>is laoding...</div>;

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>
              Price: {product.price}
              {product.currency}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
