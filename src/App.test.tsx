import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'
import './test/setup'

describe('QuietCue app', () => {
  it('renders the sample load and progressbar', () => { render(<App />); expect(screen.getByRole('heading', { name: 'The Glass Menagerie' })).toBeInTheDocument(); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40'); expect(screen.getByText('2 of 5 cues called')).toBeInTheDocument() })
  it('keeps selection when a status filter hides it', async () => { const user = userEvent.setup(); render(<App />); await user.click(screen.getByRole('checkbox', { name: 'Select Sea-glass breakfast light' })); await user.click(screen.getByRole('radio', { name: 'Queued' })); expect(screen.getByText('1 selected (3 visible)')).toBeInTheDocument(); await user.click(screen.getByRole('radio', { name: 'All' })); expect(screen.getByRole('checkbox', { name: 'Select Sea-glass breakfast light' })).toBeChecked() })
  it('marks selected cues called', async () => { const user = userEvent.setup(); render(<App />); await user.click(screen.getByRole('checkbox', { name: 'Select Tide line sound' })); await user.click(screen.getByRole('button', { name: 'Mark called' })); expect(screen.getByRole('checkbox', { name: 'Select Tide line sound' })).not.toBeChecked(); expect(screen.getByText('3 of 5 cues called')).toBeInTheDocument() })
  it('adds a new piece row', async () => { const user = userEvent.setup(); render(<App />); await user.type(screen.getByLabelText('Cue name'), 'Dawn cup'); await user.click(screen.getByRole('button', { name: /Add to / })); expect(screen.getByText('Dawn cup')).toBeInTheDocument() })
  it('hides non-priority rows with priority-only', async () => { const user = userEvent.setup(); render(<App />); const table = screen.getByRole('table'); expect(within(table).getByText('Tide line sound')).toBeInTheDocument(); await user.click(screen.getByRole('checkbox', { name: 'Priority only' })); expect(within(table).queryByText('Tide line sound')).not.toBeInTheDocument(); expect(within(table).getByText('Blue hour entrances')).toBeInTheDocument() })
})
