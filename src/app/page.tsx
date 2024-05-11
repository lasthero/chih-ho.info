import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const EVENTS_QUERY = `*[_type == "myBio"]{content}`;

export default async function IndexPage() {
  const bios = await sanityFetch<SanityDocument[]>({query: EVENTS_QUERY});

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <article>
        {bios[0].content.map((c: any) => (
          c.children.map((child: any) => <p>{child.text}</p>)
        ))}
      </article>
    </main>
  );
}