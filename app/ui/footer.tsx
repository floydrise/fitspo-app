import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 text-center text-gray-500">

      {/* Footer Content */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side, Home, About and COntact */}
        <nav className="flex space-x-6">
          <Link
            href="/"
            className="px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1 rounded-lg hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Center FitSpo Logo */}
        <div>
          <img
            src="./LogoMonochrome.svg"
            alt="Monochrome FitSpo Logo"
            className="h-10 w-auto mx-auto mt-4"
          />
        </div>

        {/* Right Side, Copyrifhgt Info */}
        <div className="text-sm">
          Copyright © 2025 FitSpo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
