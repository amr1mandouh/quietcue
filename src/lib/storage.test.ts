import { describe, expect, it } from 'vitest'
import { loadKilnLoads, sampleKilnLoads, saveKilnLoads } from './storage'

describe('kiln storage', () => {
  it('seeds sample loads when empty', () => expect(loadKilnLoads()).toHaveLength(2))
  it('round trips saved loads', () => { const loads = sampleKilnLoads(); saveKilnLoads(loads); expect(loadKilnLoads()).toEqual(loads) })
  it('falls back on invalid JSON', () => { localStorage.setItem('quietcue.loads', '{nope'); expect(loadKilnLoads()).toHaveLength(2) })
  it('falls back when the stored value is not an array', () => { localStorage.setItem('quietcue.loads', JSON.stringify({ nope: true })); expect(loadKilnLoads()[0].id).toBe('load-amber') })
})

