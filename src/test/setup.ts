import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

const store = new Map<string, string>()
const localStorageMock: Storage = { getItem: (key) => store.get(key) ?? null, setItem: (key, value) => store.set(key, value), removeItem: (key) => store.delete(key), clear: () => store.clear(), key: (index) => [...store.keys()][index] ?? null, get length() { return store.size } }
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
beforeEach(() => { store.clear(); vi.restoreAllMocks() })
afterEach(() => { cleanup(); store.clear() })
// Keep each show test independent, even when a previous test saved a load.
