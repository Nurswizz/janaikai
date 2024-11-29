import './App.css'
import './App-Responsive.css'
import Navbar from '../../components/Navbar/Navbar'
import Content from '../../components/Content'
import Info from '../../components/Info'
import TeamHeader from '../../components/TeamHeader'
import Contact from '../../components/Contact'
import Help from '../../components/Help'
import Bottom from '../../components/Bottom'
function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Info />
      <TeamHeader />
      <Help />
      <Contact />
      <Bottom />
    </>
  )
}

export default App
