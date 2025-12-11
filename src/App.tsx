import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { CardDeckScreen } from './components/CardDeckScreen';
import { useState } from 'react';

type AppMode = 'start' | 'bingo' | 'cardDeck';

function App() {
  const [mode, setMode] = useState<AppMode>('start');
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const handleStartBingo = () => {
    setMode('bingo');
    startGame();
  };

  const handleStartCardDeck = () => {
    setMode('cardDeck');
  };

  const handleBackToStart = () => {
    setMode('start');
    if (gameState !== 'start') {
      resetGame();
    }
  };

  if (mode === 'start') {
    return <StartScreen onStart={handleStartBingo} onStartCardDeck={handleStartCardDeck} />;
  }

  if (mode === 'cardDeck') {
    return <CardDeckScreen onBack={handleBackToStart} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={resetGame}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
