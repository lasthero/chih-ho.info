import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import PDFViewer from '../components/pdfViewer';

const EVENTS_QUERY = `*[_type == "myBio"]{content}`;

export default async function IndexPage() {
  const bios = await sanityFetch<SanityDocument[]>({query: EVENTS_QUERY});

  return (

      <article className="p-4">
        {bios[0].content.map((c: any) => (
          c.children.map((child: any) => <p>{child.text}</p>)
        ))}
        <div>
        <h1>
          Check out my resume:
        </h1>
        <PDFViewer src="Resume_Chih-Ho_Chou.pdf" />
        </div>
      </article>
  );
}