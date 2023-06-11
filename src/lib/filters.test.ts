import { describe, expect, it } from 'vitest'
import { filterPieces, firingProgress } from './filters'
import type { Filters, Piece } from '../types'

const pieces: Piece[] = [
  { id: 'a', name: 'Blue Mug', category: 'light', number: 1, called: true, priority: true, notes: 'gloss' },
  { id: 'b', name: 'Quiet Bowl', category: 'sound', number: 2, called: false, priority: false, notes: 'matte' }
]
const base: Filters = { query: '', category: 'all', status: 'all', priorityOnly: false }

describe('filterPieces', () => {
  it('returns all pieces by default', () => { expect(filterPieces(pieces, base)).toHaveLength(2); expect(firingProgress(pieces).percent).toBe(50) })
  it('matches name and notes', () => expect(filterPieces(pieces, { ...base, query: 'MATTE' })[0].id).toBe('b'))
  it('filters by category', () => expect(filterPieces(pieces, { ...base, category: 'light' })[0].id).toBe('a'))
  it('filters called status', () => expect(filterPieces(pieces, { ...base, status: 'called' })[0].id).toBe('a'))
  it('filters waiting status', () => expect(filterPieces(pieces, { ...base, status: 'waiting' })[0].id).toBe('b'))
  it('filters priority only', () => expect(filterPieces(pieces, { ...base, priorityOnly: true })[0].id).toBe('a'))
})
