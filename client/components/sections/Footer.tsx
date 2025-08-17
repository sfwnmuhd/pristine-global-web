export default function Footer() {
  return (
    <footer className="bg-pristine-bg-light py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/5b4fde4484574caf3846a18ef5c7b08382e97d32?width=338" 
              alt="Pristine Global Logo" 
              className="w-42 h-42 rounded-lg mb-6"
            />
            <p className="text-sm text-black leading-relaxed mb-6">
              Delivering innovative solutions across healthcare, technology, and trading, connecting communities and creating lasting impact worldwide.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pristine-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pristine-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551l3.132-1.551v3.102zm-.794-4.589L4.523 10.85c.302-1.47 1.308-2.676 2.684-3.222l1.448 4.771zm1.794-5.618C10.325 6.462 11.126 6.1 12.017 6.1s1.692.362 2.568.681l-1.448 4.771-2.688-.771zm5.618 1.794l1.448-4.771c1.376.546 2.382 1.752 2.684 3.222l-3.132 1.549v-.001zm-.771 2.688l3.132 1.551c-.684.94-1.835 1.551-3.132 1.551v-3.102z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pristine-blue hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium text-black mb-6">Quick links</h3>
            <ul className="space-y-3 text-sm text-pristine-text-black">
              <li>Home</li>
              <li>About us</li>
              <li>Locations</li>
              <li>Services</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-medium text-black mb-6">Legal</h3>
            <ul className="space-y-3 text-sm text-pristine-text-black">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
