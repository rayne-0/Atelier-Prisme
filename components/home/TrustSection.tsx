export default function TrustSection() {
  return (
    <section className="py-24 border-b border-white/10 bg-[#0A0A0A]">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="font-serif italic text-2xl md:text-4xl text-gray-400 mb-16">
          "For brands that care how they’re seen."
        </h2>
        
        {/* Placeholder Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="text-xl font-serif tracking-widest uppercase">Aura</div>
          <div className="text-xl font-sans font-bold tracking-tighter">VÉLURE</div>
          <div className="text-lg font-serif italic pb-1 border-b border-white">L'Essence</div>
          <div className="text-2xl font-sans font-light tracking-widest">NOIR</div>
        </div>
      </div>
    </section>
  );
}
