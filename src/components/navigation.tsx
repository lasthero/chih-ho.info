'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type navArrayItem = {
    title: string,
    url: string,
}

const Navigation = ({ navArray }: { navArray: navArrayItem[] }) => {
  const pathname = usePathname();

  return (
    <nav className="h-16 bg-sky-600 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link className="text-white text-2xl font-bold" href="/">Chih-Ho.info</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
            {navArray.map((item: any) => 
                <NavItem href={item.url} pathname={pathname}>{item.title}</NavItem> 
            )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
const NavItem = ({ href, pathname, children }: any) => {
    const isActive = pathname === href;
    const activeClassName = isActive ? 'font-bold' : '';
  
    return (
      <li>
        <Link className={`text-white hover:text-gray-300 ${activeClassName}`} href={href}>{children}</Link>
      </li>
    );
  };
  
export default Navigation;
