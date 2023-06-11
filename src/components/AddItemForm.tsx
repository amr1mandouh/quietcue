import { useState } from 'react'
import type { AddPieceInput } from '../hooks/useKilnWhisper'
import type { PieceCategory } from '../types'

type Props = { onAdd: (piece: AddPieceInput) => void }

export function AddItemForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState<PieceCategory>('light')
  const [priority, setPriority] = useState(false)
  const [notes, setNotes] = useState('')
  const submit = (event: React.FormEvent) => { event.preventDefault(); if (!name.trim()) return; onAdd({ name: name.trim(), category, priority, notes: notes.trim(), called: false }); setName(''); setNotes(''); setPriority(false) }
  return <form className="add-form" onSubmit={submit}><div><span className="eyebrow">Make room</span><h2>Add a piece</h2><p>Keep the next shelf decision close at hand.</p></div><label>Cue name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Morning tide cup" required /></label><label>Cue type<select value={category} onChange={(event) => setCategory(event.target.value as PieceCategory)}><option value="light">Mug</option><option value="sound">Bowl</option><option value="entrance">Tile</option><option value="projection">Vase</option><option value="props">Sculpture</option></select></label><label className="form-notes">Note<input value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="A small reminder for the firing day" /></label><label className="form-check"><input type="checkbox" checked={priority} onChange={(event) => setPriority(event.target.checked)} /> Priority piece</label><button type="submit">Add to  <span>↗</span></button></form>
}

