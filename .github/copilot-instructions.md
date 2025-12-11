<!-- .github/copilot-instructions.md: concise guidance for AI coding agents -->
# Copilot instructions — soc-ops

## Development Checklist (MANDATORY before committing)
- [ ] `npm run lint` passes
- [ ] `npm run test` passes (all 21 tests)
- [ ] `npm run build` succeeds

## Big Picture
React + Vite + TypeScript Bingo game. UI in `src/components/`, logic in `src/utils/bingoLogic.ts`, data in `src/data/questions.ts`.

## Key Files
- `src/hooks/useBingoGame.ts` — state, toggles, win handling
- `src/utils/bingoLogic.ts` + `.test.ts` — pure functions: `generateBoard`, `toggleSquare`, `checkBingo`, `getWinningSquareIds`
- `src/data/questions.ts` — question bank

## Architecture
`StartScreen` → `useBingoGame` → `generateBoard()` → `BingoBoard` → user clicks → `toggleSquare()` (new array) → `checkBingo()`. Keep UI thin; logic in `src/utils`.

## Critical Rules
- 25 squares (5×5), center (index 12) = free space, always marked
- All functions pure (no mutations)
- Tailwind v4 in use
- Changing board size/IDs requires updating tests

## Commands
- `npm run dev` — Vite dev server (port 5173+)
- `npm run test` — Vitest unit tests
- `npm run build` — TypeScript + Vite build
