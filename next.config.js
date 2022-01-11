const withImages = require('next-images')
module.exports = {
  reactStrictMode: true,
  swcMinify: false, // it should be false by default 
  withImages,
  env: {
    mapbox_key: 'pk.eyJ1Ijoibml0aW4tc2FnYXIiLCJhIjoiY2t3cWdheWtrMG1ocDJvcG02bHU1c2c1dyJ9.wPknlMtPrIrpRXE_voK2wA'
  }
}

