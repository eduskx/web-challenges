import { introduction } from "@/lib/data";
import { volumes } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomVolume = getRandomElement(volumes);

  function handleClick() {
    router.push("/volumes/" + randomVolume.slug);
  }

  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>

      {/* <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul> */}

      <ul>
        {volumes.map((volume) => (
          <li key={uid()}>
            <Link href={"/volumes/" + volume.slug}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Random Volume</button>
    </>
  );
}
