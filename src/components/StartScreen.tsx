interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-[#F5E6D3]">
      <div className="text-center max-w-sm">
        <div className="mb-4 text-6xl">☕</div>
        <h1 className="text-5xl font-bold text-[#5C4A3A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>Cozzy CoffeShop</h1>
        <p className="text-lg text-[#8B6F47] mb-8 italic">Coffee Break Bingo</p>

        <div className="bg-[#FFF4E6] rounded-2xl p-6 shadow-lg border-2 border-[#D4A574] mb-8">
          <h2 className="font-bold text-[#5C4A3A] mb-4 text-xl">☕ How to Play</h2>
          <ul className="text-left text-[#8B6F47] text-sm space-y-3">
            <li>🫘 Find coffee lovers who match the prompts</li>
            <li>☕ Tap a square when you find a match</li>
            <li>🏆 Get 5 in a row to win a virtual latte!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-bold py-4 px-8 rounded-xl text-lg active:bg-accent-light transition-all shadow-md hover:shadow-lg"
        >
          ☕ Brew Your Game
        </button>
      </div>
    </div>
  );
}
