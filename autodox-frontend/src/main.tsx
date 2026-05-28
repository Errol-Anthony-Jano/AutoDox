import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Overview from './pages/Dashboard/Overview/Overview.tsx'
import MemberSubmittedProposals from './pages/Dashboard/SubmittedProposals/MemberSubmittedProposals.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Members from './pages/Dashboard/Members/Members.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="/submitted-proposals" element={<MemberSubmittedProposals />} />
          <Route path="/members" element={<Members />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
