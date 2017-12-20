// import React, { PureComponent as Component } from 'react';
// import ReactDOM from 'react-dom'
// import GoogleApiComponent from './GoogleApiComponent'
//
// export class Marker extends React.component {
//   componentDidUpdate(prevProps) {
//     if ((this.props.map !== prevProps.map) ||
//       (this.props.position !== prevProps.position)) {
//         // The relevant props have changed
//     }
//   }
//   renderMarker() {
//     let {
//      map, google, position
//    } = this.props;
//
//    let pos = position
//    position = new google.maps.LatLng(pos.lat, pos.lng);
//  }
//
//   let marker = new google.maps.Marker({
//     position: somePosition,
//     map: map
//   })
//
//   render() {
//     return null;
//   }
// }
