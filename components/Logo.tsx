export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <img 
        src="/assets/ap-monogram-nobg.png" 
        alt="Atelier Prisme Monogram" 
        className="w-full h-full object-contain"
        style={{ filter: 'invert(1) brightness(1.5)' }}
      />
    </div>
  );
}
