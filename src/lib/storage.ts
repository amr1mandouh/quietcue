import type { KilnLoad } from '../types'

const STORAGE_KEY = 'quietcue.loads'

export function sampleKilnLoads(): KilnLoad[] {
  return [
    {
      id: 'load-amber', name: 'The Glass Menagerie', studio: 'Small Room Theatre', city: 'Alexandria', firingDate: '2026-08-21', coolDate: '2026-08-23',
      pieces: [
        { id: 'amber-01', name: 'Sea-glass breakfast light', category: 'light', number: 1, called: true, priority: true, notes: 'Celadon rim; handle needs a gentle shelf.' },
        { id: 'amber-02', name: 'Tide line sound', category: 'sound', number: 2, called: false, priority: false, notes: 'Oxide wash on the outside.' },
        { id: 'amber-03', name: 'Blue hour entrances', category: 'entrance', number: 3, called: false, priority: true, notes: 'Commission set, keep together.' },
        { id: 'amber-04', name: 'Quiet reed projection', category: 'projection', number: 4, called: false, priority: false, notes: 'Leave space around the neck.' },
        { id: 'amber-05', name: 'Little sun props', category: 'props', number: 5, called: true, priority: false, notes: 'Photograph before packing.' }
      ]
    },
    {
      id: 'load-cinder', name: 'Night Rehearsal', studio: 'Backstage Annex', city: 'Cairo', firingDate: '2026-08-28', coolDate: '2026-08-30',
      pieces: [
        { id: 'cinder-01', name: 'Ash handle tumbler', category: 'light', number: 1, called: false, priority: true, notes: 'Test glaze A7.' },
        { id: 'cinder-02', name: 'Salt pocket sound', category: 'sound', number: 2, called: false, priority: false, notes: 'Place on a cookie.' },
        { id: 'cinder-03', name: 'Night market projection', category: 'projection', number: 3, called: false, priority: false, notes: 'Tall shelf only.' }
      ]
    }
  ]
}

export function loadKilnLoads(): KilnLoad[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return sampleKilnLoads()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) throw new Error('Invalid kiln data')
    return parsed as KilnLoad[]
  } catch {
    return sampleKilnLoads()
  }
}

export function saveKilnLoads(loads: KilnLoad[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(loads))
}

