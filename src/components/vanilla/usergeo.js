function geoFindMe() {
    const status = document.getElementById('status');  
    const mapLink = document.getElementById('map-link');
      function success(position) {    
        const latitude  = position.coords.latitude;    
        const longitude = position.coords.longitude;
        status.textContent = '';    
        mapLink.textContent = latitude + "-" + longitude        
        mapLink.dataset.lat = `${latitude}`    
        mapLink.dataset.lon = `${longitude}`        
        let lat = mapLink.dataset.lat    
        let lon = mapLink.dataset.lon   
        console.log(mapLink.dataset)   
        console.dir(lat)  
    }
      function error() {    
        status.textContent = 'Unable to retrieve your location';  }
      if(!navigator.geolocation) {    
        status.textContent = 'Geolocation is not supported by your browser';  
    } else { 
           status.textContent = 'Locating…';    
           navigator.geolocation.getCurrentPosition(success, error);  }
    }

    document.querySelector('#find-me').addEventListener('click', geoFindMe);