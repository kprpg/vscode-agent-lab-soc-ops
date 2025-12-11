# Design Specification: Card Deck Shuffle Mode

## Overview
A new interactive mode where players tap a card to reveal a random icebreaker question. This provides a simpler, more focused alternative to the Bingo board for quick social interactions.

## User Flow
1. User lands on Start Screen
2. User selects "Card Deck Shuffle" mode
3. App displays a single card (face down/placeholder state)
4. User taps the card
5. Card animates and reveals a random question
6. User can tap again to get a new random question

## Visual Design
- **Card Style**: Match the cozy coffee shop aesthetic with warm tones
- **Card Dimensions**: Comfortable tap target, centered on screen
- **Animation**: Smooth flip or fade transition when revealing question
- **Typography**: Large, readable text for the question
- **Background**: Consistent with coffee shop theme (#F5E6D3)

## Technical Approach
- New `CardDeckScreen` component
- State for current question and reveal state
- Random selection from `questions.ts` data
- Smooth CSS transitions for card interactions
- Update App routing to support mode selection

## Iterations Planned
1. ✅ Design spec creation
2. Add mode selector to start screen
3. Build CardDeck component with basic reveal
4. Add smooth animations
5. Visual review and refinements
