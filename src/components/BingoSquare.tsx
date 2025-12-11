import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border-2 rounded-lg transition-all duration-150 select-none min-h-[60px] text-xs leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[#C17E3B] border-[#8B6F47] text-white font-bold shadow-md'
      : 'bg-marked border-marked-border text-[#8B6F47] font-medium'
    : 'bg-[#FFF4E6] text-[#5C4A3A] active:bg-[#E8D5C4] border-[#D4A574]';

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm bg-[#8B6F47] text-white border-[#5C4A3A]' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-[#8B6F47] text-lg">☕</span>
      )}
    </button>
  );
}
