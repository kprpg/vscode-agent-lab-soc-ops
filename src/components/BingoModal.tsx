interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#FFF4E6] rounded-2xl p-8 max-w-xs w-full text-center shadow-2xl animate-[bounce_0.5s_ease-out] border-4 border-[#8B6F47]">
        <div className="text-6xl mb-4">☕🎉☕</div>
        <h2 className="text-4xl font-bold text-[#C17E3B] mb-2" style={{ fontFamily: 'Georgia, serif' }}>BINGO!</h2>
        <p className="text-[#8B6F47] mb-6 text-lg italic">You've earned your virtual latte!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-accent text-white font-bold py-3 px-6 rounded-xl active:bg-accent-light transition-all shadow-md"
        >
          ☕ Keep Brewing
        </button>
      </div>
    </div>
  );
}
