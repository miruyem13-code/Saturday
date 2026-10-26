import { useState } from 'react'
export default function OfferEditor({ job, save, cancel }) {
 const [error, setError] = useState('')
 return <form onSubmit={e => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.currentTarget))
  const minutes = time => Number(time.split(':')[0]) * 60 + Number(time.split(':')[1])
  const start = minutes(data.start), end = minutes(data.end)
  if (end <= start) return setError('The finish time must be later than the start time on Saturday.')
  if ((data.shift === 'Morning' && start >= 720) || (data.shift === 'Afternoon' && start < 720)) return setError('Choose a morning start before 12:00 or an afternoon start from 12:00.')
  if (Math.abs((end - start) / 60 - Number(data.hours)) > 0.01) return setError('Working hours must match the time between the start and finish.')
  if (['title', 'company', 'description', 'requirement', 'duties'].some(k => !data[k].trim())) return setError('Please complete every field with meaningful text.')
  save({ ...job, ...data, hours: Number(data.hours), pay: Number(data.pay), duties: data.duties.split('\n').map(x => x.trim()).filter(Boolean) })
 }}>
 <p>Write your group’s Saturday job offer. All six required details will appear in the offer and presentation.</p>
 <div className="form-row"><label>Job title<input name="title" required maxLength={60} defaultValue={job.title} /></label><label>Company / organisation<input name="company" required maxLength={70} defaultValue={job.company} /></label></div>
 <label>Short description<textarea name="description" rows={2} maxLength={180} required defaultValue={job.description} /></label>
 <div className="form-row"><label>Saturday shift<select name="shift" defaultValue={job.shift}><option>Morning</option><option>Afternoon</option></select></label><label>Working hours<input name="hours" type="number" min="0.5" max="8" step="0.5" required defaultValue={job.hours} /></label></div>
 <div className="form-row"><label>Exact start time<input name="start" type="time" required defaultValue={job.start} /></label><label>Exact finish time<input name="end" type="time" required defaultValue={job.end} /></label></div>
 <label>Employee responsibilities (one per line)<textarea name="duties" rows={4} maxLength={1500} required defaultValue={job.duties.join('\n')} /></label>
 <div className="form-row"><label>Experience level<select name="experience" defaultValue={job.experience}><option>No experience needed</option><option>Some experience</option></select></label><label>Pay per hour (£)<input name="pay" type="number" min="1" max="100" step="0.5" required defaultValue={job.pay} /></label></div>
 <label>Experience and qualities required<textarea name="requirement" rows={3} maxLength={1000} required defaultValue={job.requirement} /></label>
 {error && <p className="form-error" role="alert">{error}</p>}
 <div className="modal-actions"><button type="button" onClick={cancel}>Cancel</button><button className="primary">Save job offer</button></div>
 </form>
}
