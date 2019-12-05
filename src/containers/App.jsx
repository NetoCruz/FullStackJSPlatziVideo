import React, {useEffect,useState} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carrousel from '../components/Carrousel'
import CarrouselItem from '../components/CarrousleItem'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initialState'
const App = () => {
    // const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: []});

    // useEffect(()=>{
    //     fetch('http://localhost:3000/initialState')
    //     .then(response => response.json())
    //     .then(data => setVideos(data))
    // },[])
 const initialState = useInitialState(API)
 //console.log(initialState.trends)
    return(
    <div className="App">
      <Header/> 
      <Search/>
      {
         initialState.mylist.length > 0 &&
       <Categories title="Mi lista">
          <Carrousel>
              <CarrouselItem/>
              <CarrouselItem/>
              <CarrouselItem/>
              <CarrouselItem/>
              <CarrouselItem/>
          </Carrousel>
       </Categories>
      }
      

      <Categories  title="Tendencias">
          <Carrousel>
              {
                  initialState.trends.map(item =>
                    <CarrouselItem key={item.id} {...item}/>
                  )
              }
              
              
            
          </Carrousel>
      </Categories>

      <Categories  title="Originales de Platzi Video">
          <Carrousel>
          {
                  initialState.originals.map(item =>
                    <CarrouselItem key={item.id} {...item}/>
                  )
              }
            
          </Carrousel>
      </Categories>

      <Footer/>
       
    </div>
)}

export default App