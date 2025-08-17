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
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.8333 18.6667H21.6667V2.33333H5.33333V18.6667H13.5V12.8333H11.1667V10.5H13.5V8.5701C13.5 7.00998 13.6624 6.44422 13.9675 5.87385C14.2726 5.30348 14.7201 4.85585 15.2905 4.55082C15.737 4.31205 16.2909 4.16794 17.2586 4.10613C17.6428 4.08159 18.1399 4.11288 18.75 4.2V6.41667H18.1667C17.0965 6.41667 16.6549 6.46721 16.3909 6.60838C16.2272 6.69595 16.1126 6.81051 16.025 6.97425C15.8838 7.23821 15.8333 7.49995 15.8333 8.5701V10.5H18.75L18.1667 12.8333H15.8333V18.6667Z" />
              </svg>
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 10C10.3426 10 9 11.3431 9 13C9 14.6573 10.3431 16 12 16C13.6573 16 15 14.6569 15 13C15 11.3427 13.6569 10 12 10ZM12 8C14.7604 8 17 10.2371 17 13C17 15.7605 14.7629 18 12 18C9.23953 18 7 15.7629 7 13C7 10.2395 9.2371 8 12 8Z" />
              </svg>
              <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3Z" />
              </svg>
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
