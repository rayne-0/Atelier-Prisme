import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="relative h-10 w-48 flex items-center"> 
              <Logo className="w-full h-auto text-white" />
            </div>
            <p className="text-gray-400 max-w-md">
              A premium creative studio offering high-end product and fashion visuals — digitally produced for modern brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif tracking-widest text-sm mb-6 uppercase text-gray-500">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Studio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-serif tracking-widest text-sm mb-6 uppercase text-gray-500">Social</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Behance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Atelier Prisme. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
