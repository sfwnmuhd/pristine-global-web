import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5c37caed7063a838654dd75d93f7e77c7bb8d299?width=288"
            alt="Pristine Global Logo"
            className="w-28 h-28 rounded-lg"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            About
          </Link>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsLocationsOpen(true)}
            onMouseLeave={() => setIsLocationsOpen(false)}
          >
            <button className="text-gray-700 hover:text-pristine-blue transition-colors font-medium flex items-center">
              Locations
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isLocationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                <Link
                  to="/locations/united-kingdom"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pristine-blue transition-colors"
                >
                  United Kingdom
                </Link>
                <Link
                  to="/locations/qatar"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pristine-blue transition-colors"
                >
                  Qatar
                </Link>
                <Link
                  to="/locations/india"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-pristine-blue transition-colors"
                >
                  India
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/services"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-pristine-blue transition-colors font-medium"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
