import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomeItem from "../components/HomeItem"
import FetchItems from "../components/FetchItems"
import Loader from "../components/Loader"
import { useSelector } from "react-redux"



function App() {

  const fetchStatus = useSelector((store) => store.fetchstatus);

  return (
    <>
      <Header/>
      <FetchItems/>   
      {fetchStatus.currentlyFetching ? <Loader/> : <Outlet/> }
    <Footer/>
    </>
  )
}

export default App
