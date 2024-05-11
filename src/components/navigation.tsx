// components/Navigation.js
import Link from 'next/link';
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const NAV_MENU_QUERY = `*[_type == "navigationList"] {navArray[]->}`;

const Navigation = async () => {
  const navMenu = await sanityFetch<SanityDocument[]>({query: NAV_MENU_QUERY});

  return (
    <nav className="bg-sky-600 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link className="text-white text-2xl font-bold" href="/">Chih-Ho.info</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
            {navMenu[0].navArray.map((item: any) => 
            <li>
                <Link className="text-white hover:text-gray-300" href={item.url}>{item.title}</Link>
            </li>
            )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
