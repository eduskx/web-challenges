import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data: charcater, isLoading } = useSWR(
    "/api/random-character",
    fetcher
  );
  if (isLoading) return <div>is loading...</div>;

  return (
    <div>
      <p>{charcater.name}</p>
      <p>Age: {charcater.age}</p>
      <p>Job: {charcater.profession}</p>
    </div>
  );
}
