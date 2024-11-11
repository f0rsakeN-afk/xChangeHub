import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Layout from './pages/Layout'
import Home from './pages/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to='home' />} />
          <Route path='home' element={<Home />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App