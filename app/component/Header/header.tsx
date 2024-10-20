import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md rounded-lg m-1">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold text-gray-800">
          <Link href="/">
            MyWeb
          </Link>
        </div>
        <nav className="space-x-6 text-gray-600 hover:text-gray-900">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
