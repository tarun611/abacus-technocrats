export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Abacus Technocrats Pvt. Ltd.
          </h3>
          <p className="text-gray-400 text-sm">
            Engineering, Construction, and Project Management Experts delivering
            high-quality infrastructure solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-400 text-sm">
            Ahmedabad, Gujarat<br />
            Email: info@abacustech.com<br />
            Phone: +91 XXXXX XXXXX
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Abacus Technocrats Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}