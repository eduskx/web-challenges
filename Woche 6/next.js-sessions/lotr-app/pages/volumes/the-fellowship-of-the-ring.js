import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";

const data = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");
const navigationObject = volumes.map((volume) => volume.slug);
console.log("data: ", data);
console.log("navigationObject: ", navigationObject);

export default function Volume1() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        {data.books.map((book) => (
          <li key={uid()}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={data.cover} alt="book cover" width="140" height="230"></Image>
      <br></br>
      {/* <Link href={data.slug === navigationObject[0] ? "" : }>Previous Volume</Link> */}
    </>
  );
}
