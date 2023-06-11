# QuietCue architecture

QuietCue is a small, client-only React application. `useKilnWhisper` owns the active load, filters, and selection set. Components receive state and callbacks, while `lib/filters.ts` keeps filtering deterministic and easy to test.

The selected IDs intentionally live outside the filtered collection. That means a piece can leave the visible table while remaining selected, which lets a studio prepare a batch across multiple views. Changes are persisted to `localStorage` through `lib/storage.ts`.

