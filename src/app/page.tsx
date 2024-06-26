import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import PDFViewer from '../components/pdfViewer';

const EVENTS_QUERY = `*[_type == "myBio"]{content}`;

export default async function IndexPage() {
  const bios = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });

  return (

    <article className="p-4">
      {bios[0].content.map((c: any) => (
        c.children.map((child: any, ind: number) => <p key={`bio_${ind}`}>{child.text}</p>)
      ))}
      <div>
        <br />
        <PDFViewer src="Resume_Chih-Ho_Chou.pdf" />
      </div>
    </article>
  );
}