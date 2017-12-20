import React, {Component} from 'react'




// var uluru = {lat: -25.363, lng: 131.044};
// map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 4,
//   center: uluru
// });

export default class Maps extends React.Component {
  constructor(props){
    super(props);




  }



  render(){
    return (
    <div>
    <iframe
      width="500"
      height="300"
     src="https://www.google.com/maps/embed/v1/place?q=123%20victoria%20st%20potts&key=AIzaSyDkVkL8JnHgpriQQsczmEUstmwA8Kyjo6s">
     </iframe>
    </div>
    )
  }
}
