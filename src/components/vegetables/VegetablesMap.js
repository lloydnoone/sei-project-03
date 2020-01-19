import React from 'react'
import MapGL, { Popup, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchForm from '../common/SearchForm'

class VegetablesMap extends React.Component {
  constructor() {
    super()

    this.state = { 
      vegetables: null,
      postcodes: null,
      searchTerm: '',

      viewport: {
        latitude: 51.5176,
        longitude: -0.1145,
        zoom: 11
      },
      showPopup: true
    }
    this.mapRef = React.createRef()
    this.onChange = this.onChange.bind(this)
  }
  
  componentDidMount() {
    this.getData()
    
  }

  getData() {
    axios.get('/api/vegetables')
      .then(res => {
        this.setState({ vegetables: res.data })
        this.getPostcodes()
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))

  }
   
  getPostcodes() {
    const vegetables = this.filterVegetables()
    const postcodes = vegetables.map(veg => veg.vegLocation.replace(' ', ''))
    axios.post('https://cors-anywhere.herokuapp.com/api.postcodes.io/postcodes/', { postcodes } )
      .then(res => this.setState({ postcodes: res.data.result, vegetables: vegetables }))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  onChange({ target: { name, value, dataset, innerHTML } }) {
    console.log('onchange was called. ')
    console.log(this.state)
    value ? this.setState({ [name]: value }) : this.setState({ [dataset.name]: (value || innerHTML) })
  }

  filterVegetables() {
    const { searchTerm, typeSearch } = this.state
    const re = new RegExp(searchTerm, 'i')
    const type = new RegExp(typeSearch, 'i')
    const filteredArr = this.state.vegetables.filter(veg => {
      //return re.test(veg.title) && (veg.typeOfVeg === typeSearch || typeSearch === 'All')
      return (!veg.pickUpAppointment || (veg.pickUpAppointment &&
         veg.pickUpAppointment.appointmentStatus !== 'completed')) &&
        (re.test(veg.title) && (type.test(veg.typeOfVeg) || (typeSearch === 'All')))
    })
    return filteredArr
  }

  render() {
    if (!this.state.vegetables) return null
    if (!this.state.postcodes) return null
    const { showPopup } = this.state
    return (
      <main className='map'>
        <SearchForm
          name='searchTerm'
          onChange={this.onChange}
          onSubmit={this.submitSearch}
          current={this.state.typeSearch}
        />
        <div className='mapArea'>
          <MapGL
            mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
            height={'100vh'}
            width={'100vw'}
            mapStyle="mapbox://styles/mapbox/streets-v10"
            scrollZoom={true}
            minZoom={0}
            maxZoom={20}
            touchZoom={true}


            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}>


            {this.state.postcodes.map((postcode, i) => (

              <div key={i}>
                {showPopup && <Popup

                  latitude={postcode.result.latitude}
                  longitude={postcode.result.longitude}
                  closeButton={false}
                  closeOnClick={true}
                  tipSize={12}
                  sortByDepth={true}
                  anchor="bottom" >


                  {this.filterVegetables().map(veg =>
                    <div key={veg._id}>
                      {veg.vegLocation.replace(' ', '') === postcode.query ? <Link to={`/vegetables/${veg._id}`}>
                        {veg.title} 🥕 {veg.vegLocation} </Link> : null}

                    </div>)}

                </Popup>}

              </div>
            ))}

            <div style={{ position: 'absolute', right: 0 }}>
              <NavigationControl />
            </div>
          </MapGL>
        </div>
        
      </main>
    )
  }
}

export default VegetablesMap

// {this.state.vegetables.map(veg =>
//   <div key={veg._id}>
//     {veg.vegLocation.replace(' ', '') === postcode.query ? <Link to={`/vegetables/${veg._id}`}>
//       {veg.title} 🥕 {veg.vegLocation} </Link> : null}

//   </div>)}