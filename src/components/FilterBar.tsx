import type { Filters, PieceCategory } from '../types'

const categories: Array<PieceCategory | 'all'> = ['all', 'light', 'sound', 'entrance', 'projection', 'props']

type Props = { filters: Filters; onChange: (next: Partial<Filters>) => void; categoryCounts: Record<string, number> }

export function FilterBar({ filters, onChange, categoryCounts }: Props) {
  return <section className="filter-panel" aria-label="Filter pieces">
    <div className="search-wrap"><label htmlFor="search">Search the load</label><input id="search" value={filters.query} onChange={(event) => onChange({ query: event.target.value })} placeholder="Try a name, note, or number" /></div>
    <div className="select-wrap"><label htmlFor="category">Cue type</label><select id="category" value={filters.category} onChange={(event) => onChange({ category: event.target.value as Filters['category'] })}>{categories.map((category) => <option key={category} value={category}>{category === 'all' ? 'All cues' : category[0].toUpperCase() + category.slice(1) + ' (' + (categoryCounts[category] ?? 0) + ')'}</option>)}</select></div>
    <fieldset className="status-options"><legend>Status</legend><label><input type="radio" name="status" checked={filters.status === 'all'} onChange={() => onChange({ status: 'all' })} /> All</label><label><input type="radio" name="status" checked={filters.status === 'called'} onChange={() => onChange({ status: 'called' })} /> Fired</label><label><input type="radio" name="status" checked={filters.status === 'waiting'} onChange={() => onChange({ status: 'waiting' })} /> Queued</label></fieldset>
    <label className="priority-toggle"><input type="checkbox" checked={filters.priorityOnly} onChange={(event) => onChange({ priorityOnly: event.target.checked })} /><span>Priority only</span></label>
  </section>
}

