import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-[#F5E6D3]">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-[#FFF4E6] border-b-2 border-[#D4A574]">
        <button
          onClick={onReset}
          className="text-[#8B6F47] text-sm px-3 py-1.5 rounded active:bg-[#E8D5C4] font-medium"
        >
          ← Back
        </button>
        <h1 className="font-bold text-[#5C4A3A] text-lg">☕ Cozzy CoffeShop</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-[#8B6F47] text-sm py-2 px-4 italic">
        Tap a square when you find a fellow coffee lover who matches! ☕
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-[#C17E3B] text-white text-center py-2 font-bold text-sm">
          🎉☕ BINGO! You've earned a virtual latte! ☕🎉
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
