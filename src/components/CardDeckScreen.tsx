import { useState } from 'react';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
    onBack: () => void;
}

export function CardDeckScreen({ onBack }: CardDeckScreenProps) {
    const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const drawCard = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
        setIsFlipped(true);

        // Reset flip after animation
        setTimeout(() => setIsFlipped(false), 100);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#F5E6D3]">
            <div className="w-full max-w-md">
                <button
                    onClick={onBack}
                    className="mb-8 text-[#8B6F47] hover:text-[#5C4A3A] transition-colors"
                >
                    ← Back to Start
                </button>

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[#5C4A3A] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                        Card Deck Shuffle
                    </h1>
                    <p className="text-[#8B6F47] italic">Tap the card to reveal a question</p>
                </div>

                <div className="flex flex-col items-center">
                    <button
                        onClick={drawCard}
                        className={`
              w-80 h-96 bg-[#FFF4E6] rounded-3xl shadow-2xl border-4 border-[#D4A574]
              flex items-center justify-center p-8
              transition-all duration-300 ease-out
              hover:shadow-3xl hover:scale-105
              active:scale-95
              ${isFlipped ? 'animate-[flip_0.3s_ease-in-out]' : ''}
            `}
                    >
                        {currentQuestion ? (
                            <p className="text-2xl text-[#5C4A3A] font-medium leading-relaxed text-center">
                                {currentQuestion}
                            </p>
                        ) : (
                            <div className="text-center">
                                <div className="text-7xl mb-4">🃏</div>
                                <p className="text-xl text-[#8B6F47] font-bold">Tap to Draw</p>
                            </div>
                        )}
                    </button>

                    {currentQuestion && (
                        <button
                            onClick={drawCard}
                            className="mt-8 bg-accent text-white font-bold py-3 px-8 rounded-xl text-lg active:bg-accent-light transition-all shadow-md hover:shadow-lg"
                        >
                            Draw Another Card
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
