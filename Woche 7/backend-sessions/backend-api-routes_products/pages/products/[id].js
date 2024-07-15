import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const routerId = router.query.id;

  const { data: product, isLoading } = useSWR(
    `/api/products/${routerId}`,
    fetcher
  );
  if (isLoading) return <div>is loading...</div>;
  console.log(product);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>
        Price: {product.price}
        {product.currency}
      </p>
    </div>
  );
}
