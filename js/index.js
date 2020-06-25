function initMap(){
        var id  =document.getElementById("contact-map"); 
        var location  = { lat : 40.289982, lng: 69.619926 };
        var param = {
          zoom:12,
          center:location
        }
        var map = new google.maps.Map(id,param);
      }

