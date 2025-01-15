import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="p-4 text-center text-gray-500">
      
      {/* Footer Content */}
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">

        {/* Left Side, Home, About, and Contact */}
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800"
          >
            Contact
          </Link>
        </nav>

        {/* Center FitSpo Logo */}
        <div>
          <Link href={"/"}>
          <Image
            src="/LogoMonochrome.svg"
            width={1440}
            height={531}
            alt="Monochrome FitSpo Logo"
            className="h-10 w-auto mx-auto mt-4"
          />
          </Link>
        </div>

        {/* Right Side, Copyright Info */}
        <div className="text-sm">
          <p>Copyright © 2025 FitSpo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
