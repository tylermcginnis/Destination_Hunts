$(document).ready(function(){
      $('#state_container').goMap({
      address: "Utah", 
      zoom: 7,
      maptype: 'TERRAIN',
      navigationControl: false,
      markers : [
        {
          address: "795 North 700 East Provo Utah 84606",
          title: "Corner Pocket",
          html : {
            content : '<p> This is a beautiful location. To visit click the link below </p><a href="http://www.google.com"> NAME OF PLACE  </a>'
          }
        }
      ]
       }); //End State_Container 
}); //End Document.Ready


