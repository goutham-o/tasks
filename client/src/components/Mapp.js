import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import Loader from '../components/Loader'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ291dGFtbmFyYXluYSIsImEiOiJja3BwMTh4a2EwMDU2MnZxeGR5Y3Q5a2c5In0.2dXTWN0jmURrVJd_a2r76w'

class Mapp extends React.Component {
  // Set up states for updating map
  constructor(props) {
    super(props)
    this.state = {
      lng: 77.034,
      lat: 11.053,
      zoom: 5,
    }
  }

  // Create map and lay over markers
  async componentDidMount() {
    const { data } = await axios.get('/api/task4')

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/goutamnarayna/ckpp2zw6c0jiw17oaou1xrulc',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })

    data.forEach((location) => {
      // console.log(location)
      if (
        location.hasOwnProperty('latitude') &&
        location.hasOwnProperty('longitude')
      ) {
        if (location.latitude !== 'NULL' && location.longitude !== 'NULL') {
          new mapboxgl.Marker()
            .setLngLat([location.latitude, location.longitude])
            .setPopup(new mapboxgl.Popup({ offset: 30 }))
            // .setHTML('<h4>' + location.MemberRole + '</h4>')
            .addTo(map)
        }
      }
    })
  }

  render() {
    return (
      <div>
        {<Loader /> && (
          <div
            ref={(el) => (this.mapContainer = el)}
            style={{ width: '100%', height: '100vh' }}
          />
        )}
      </div>
    )
  }
}

export default Mapp
