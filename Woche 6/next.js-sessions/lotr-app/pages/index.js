import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>
        <Link href="/volumes">Here</Link> are all the volumes
      </h1>
    </div>
  );
}
