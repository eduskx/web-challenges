import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);

  const data = volumes.find((element) => element.slug === slug);
  const currentIndex = volumes.findIndex((element) => element.slug === slug);

  //   console.log("currentIndex: ", currentIndex);
  //   console.log("router 2: ", router);
  //   console.log("data: ", data);

  if (!data) {
    return null;
  }
  return (
    <div>
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
      <Link
        hidden={currentIndex <= 0 ? true : false}
        href={
          currentIndex <= 0
            ? router.asPath
            : "/volumes/" + volumes[currentIndex - 1].slug
        }
      >
        Previous
      </Link>
      <br></br>
      <Link
        style={currentIndex >= volumes.length - 1 ? { display: "none" } : {}}
        href={
          currentIndex >= volumes.length - 1
            ? router.asPath
            : "/volumes/" + volumes[currentIndex + 1].slug
        }
      >
        Next
      </Link>
    </div>
  );
}
