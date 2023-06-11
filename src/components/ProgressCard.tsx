import { firingProgress } from '../lib/filters'
import type { KilnLoad } from '../types'

export function ProgressCard({ load }: { load: KilnLoad }) {
  const progress = firingProgress(load.pieces)
  return <section className="progress-card" aria-labelledby="progress-heading">
    <div className="progress-copy"><span className="eyebrow">Show progress</span><h2 id="progress-heading">{progress.done} of {progress.total} cues called</h2><p>{progress.percent}% ready to make room for the next story.</p></div>
    <div className="progress-ring" aria-hidden="true"><strong>{progress.percent}%</strong><span>called</span></div>
    <div className="progress-track" role="progressbar" aria-label="Show progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress.percent}><span style={{ width: progress.percent + '%' }} /></div>
  </section>
}

