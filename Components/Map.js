import { useState } from 'react'
import getCenter from 'geolib/es/getCenter'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

function Map({searchResults}) {
    
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
    width:"900px",
    height:"100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

    
    return (

      
        <ReactMapGL
            mapStyle="mapbox://styles/nitin-sagar/ckwqgdaav9zfb15p2g2t4q5ck"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
           
            onViewportChange={(viewport) => setViewport(viewport)}

        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}

                    >
                        <p className=" animate-bounce cursor-pointer text-2xl">

                        </p>
                    </Marker>
                </div>
            ))}
            
        </ReactMapGL>
    )
}

export default Map
