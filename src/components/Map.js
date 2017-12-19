import React, { PureComponent as Component } from 'react';
import ReactDOM from 'react-dom'
import GoogleApiComponent from './GoogleApiComponent'

export class Map extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      const center = new maps.LatLng( this.props.centerCoords);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }

  render() {
    return (
      <div ref='map' style={ {height: '50vh', width: '50vw'} }>
        Loading map...
      </div>
    )
  }

}

export class Container extends React.Component {

  constructor(props) {
     super(props)
     this.state = {
       suburb: "bondi",
       houseList: [
         "46 Thorn Street, Pennant Hills, NSW 2120",
         "7 Boyd Avenue, West Pennant Hills, NSW 2120",
         "47 Orana Avenue, Asquith, NSW 2077",
         "1 Market Street Sydney, NSW 2000"
       ],
       center: { lat: -33.3, lng: 151 }
     }

   }

 render() {
   const style = {
     width: '100vw',
     height: '100vh'
   }

   if (!this.props.loaded) {
     return <div>Loading...</div>
   }
   return (
     <div style={style}>
       <Map google={this.props.google} centerCoords={ this.state.center }/>

     </div>

   )
 }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(Container)
