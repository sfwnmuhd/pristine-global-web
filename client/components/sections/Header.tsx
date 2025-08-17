export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/5c37caed7063a838654dd75d93f7e77c7bb8d299?width=288" 
          alt="Pristine Global Logo" 
          className="w-20 h-20 rounded-lg"
        />
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-pristine-blue transition-colors font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-pristine-blue transition-colors font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-pristine-blue transition-colors font-medium">Locations</a>
          <a href="#" className="text-gray-700 hover:text-pristine-blue transition-colors font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-pristine-blue transition-colors font-medium">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
