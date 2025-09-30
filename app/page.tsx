'use client'
import React, { useState } from 'react'

type WorkType = 'Any'|'On-site'|'Remote'|'Hybrid'
type Experience = 'Any'|'Internship'|'Entry'|'Associate'|'Mid-Senior'|'Director'|'Executive'

export default function Page(){
  const [keywords,setKeywords] = useState('')
  const [location,setLocation] = useState('')
  const [hours,setHours] = useState<number>(6)
  const [workType,setWorkType] = useState<WorkType>('Any')
  const [exp,setExp] = useState<Experience>('Any')
  const [link,setLink] = useState<string>('https://www.linkedin.com/jobs/search/')
  const [showButtons, setShowButtons] = useState(false)

  const generate = ()=>{
    const p = new URLSearchParams()
    if (keywords.trim()) p.set('keywords', keywords.trim())
    if (location.trim()) {
  p.set('location', location.trim())
} else {
  p.set('location', 'Worldwide') 
}
    if (hours>0) p.set('f_TPR', 'r'+(hours*3600))
    if (workType!=='Any') p.set('f_WT', workType.toLowerCase())
    if (exp!=='Any') p.set('f_E', exp.toLowerCase())
    setLink(`https://www.linkedin.com/jobs/search/?${p.toString()}`)
    setShowButtons(true)
  }

  const copy = async()=>{
    try { await navigator.clipboard.writeText(link) } catch {}
  }

  return (
    <div className="flex flex-col min-h-screen text-white">
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">⚡ Search Fresh Linkedin Jobs</h1>
	<p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">Recruiters are bombarded with thousands of applications per job posting.</p>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">This tool finds Linkedin jobs posted in the last few hours so YOU can be seen first!</p>
      </header>

      <main className="container flex-1 pb-16 flex flex-col items-center">
        <section className="card p-6 md:p-8 w-full text-slate-900">
          <h2 className="text-xl font-semibold mb-5 text-center">Build Your Search</h2>

          <div className="grid gap-4">
            <div>
              <label className="label">Job Title / Keywords</label>
              <input className="input mt-1" placeholder="e.g., Data Analyst" value={keywords} onChange={e=>setKeywords(e.target.value)} />
            </div>
            <div>
              <label className="label">Location</label>
              <input className="input mt-1" placeholder="e.g., Chicago, IL or Remote" value={location} onChange={e=>setLocation(e.target.value)} />
            </div>
            <div>
              <label className="label">Last X Hours</label>
              <input type="number" className="input mt-1" min={1} max={72} value={hours} onChange={e=>setHours(Number(e.target.value)||1)} />
              <p className="help mt-1">Tip: 1–12 hours shows the freshest roles.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">Work Type</label>
                <select className="select mt-1" value={workType} onChange={e=>setWorkType(e.target.value as WorkType)}>
                  <option>Any</option>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </div>
              <div>
                <label className="label">Experience Level</label>
                <select className="select mt-1" value={exp} onChange={e=>setExp(e.target.value as Experience)}>
                  <option>Any</option>
                  <option>Internship</option>
                  <option>Entry</option>
                  <option>Associate</option>
                  <option>Mid-Senior</option>
                  <option>Director</option>
                  <option>Executive</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button onClick={generate} className="btn btn-primary">Search Fresh Jobs!</button>
            </div>

            {showButtons && (
              <div className="text-center mt-8 space-y-5">
                <div className="flex justify-center gap-3">
                  <a target="_blank" href={link} className="btn btn-primary">Open Jobs in New Tab</a>
                  <button className="btn btn-secondary" onClick={copy}>Copy URL</button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Search Fresh Jobs
      </footer>
    </div>
  )
}
