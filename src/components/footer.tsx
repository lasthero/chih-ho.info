import Link from "next/link";

const Footer = async () => {

  return (
    <footer className="bg-sky-600 py-4 h-16 flex">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-white hover:text-gray-300">
            Powered by <Link href="https://nextjs.org/" className="underline">Next.js</Link> + 
            <Link href="https://www.sanity.io/" className="underline">Sanity.io</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
