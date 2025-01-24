import { Link, Mail, Menu } from "lucide-react";

const NavbarHead = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Mail className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">EmailApp</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              <NavLink href="/inbox">Inbox</NavLink>
              <NavLink href="/sent">Sent</NavLink>
              <NavLink href="/drafts">Drafts</NavLink>
              <NavLink href="/trash">Trash</NavLink>
              <NavLink href="/settings">Settings</NavLink>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink href="/inbox">Inbox</MobileNavLink>
          <MobileNavLink href="/sent">Sent</MobileNavLink>
          <MobileNavLink href="/drafts">Drafts</MobileNavLink>
          <MobileNavLink href="/trash">Trash</MobileNavLink>
          <MobileNavLink href="/settings">Settings</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
    {children}
  </Link>
);

export default NavbarHead;
