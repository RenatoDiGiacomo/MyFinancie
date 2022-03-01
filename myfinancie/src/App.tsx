//*React Data
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//*Components
import DashboardComponent from './components/main/dashboard/DashboardComponent'
import ListComponents from './components/main/list/ListComponents'
import FooterComponent from './template/footer/FooterComponent'
import HeaderComponent from './template/header/HeaderComponent'
import NavComponent from './template/nav/NavComponent'

//*Style
import GlobalComponent from './style/GlobalStyle'
import MainStyle from './style/MainStyle'
import NotFoundPage from './components/notFound/NotFoundPage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalComponent />
        <HeaderComponent />
        <NavComponent />
        <MainStyle>
          <Routes>
            <Route path='/' element={<DashboardComponent />} />
            <Route path='lists' element={<ListComponents />} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </MainStyle>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App