import type { KilnLoad } from '../types'

type Props = { loads: KilnLoad[]; activeId?: string; onChange: (id: string) => void }

export function ContainerSwitcher({ loads, activeId, onChange }: Props) {
  return <label className="load-picker">Show
    <select aria-label="Show" value={activeId ?? ''} onChange={(event) => onChange(event.target.value)}>
      {loads.map((load) => <option key={load.id} value={load.id}>{load.name} · {load.city}</option>)}
    </select>
  </label>
}

