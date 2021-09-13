<template>
  <div>
    <button @click="html5Locate">html5Locate</button>
    <div id="map"></div>
  </div>
</template>
<script>
import { Loader } from "@googlemaps/js-api-loader";
import MarkerClusterer from "@googlemaps/markerclustererplus"; //cluster markers
export default {
  data() {
    return {
      mapInstance: null,
    };
  },
  created() {
    const options = {
      // There are two required options for every map: center and zoom.
      center: { lat: -25.344, lng: 131.036 },
      zoom: 10,
    };
    this.entry(options);
  },
  methods: {
    async entry(options) {
      const loader = new Loader({
        apiKey: "YOUR-GOOGLE-MAP-API-KEY",
        // version: "weekly"
      });
      await loader.load();
      this.mapInstance = new google.maps.Map(document.getElementById("map"), {
        ...options,
      });
      this.marker(this.mapInstance, { lat: -25.344, lng: 131.036 }); //add a single marker demo
      this.markers(this.mapInstance); //add cluster markers demo
      console.log(region, "--line35");
    },
    marker(mapInstance, position) {
      //add a single marker
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        position: position,
        map: mapInstance,
      });
    },
    markers(mapInstance) {
      // add markers demo
      const locations = [
        { lat: -31.56391, lng: 147.154312 },
        { lat: -33.718234, lng: 150.363181 },
        { lat: -33.727111, lng: 150.371124 },
        { lat: -33.848588, lng: 151.209834 },
        { lat: -33.851702, lng: 151.216968 },
        { lat: -34.671264, lng: 150.863657 },
        { lat: -35.304724, lng: 148.662905 },
        { lat: -36.817685, lng: 175.699196 },
        { lat: -36.828611, lng: 175.790222 },
        { lat: -37.75, lng: 145.116667 },
        { lat: -37.759859, lng: 145.128708 },
        { lat: -37.765015, lng: 145.133858 },
        { lat: -37.770104, lng: 145.143299 },
        { lat: -37.7737, lng: 145.145187 },
        { lat: -37.774785, lng: 145.137978 },
        { lat: -37.819616, lng: 144.968119 },
        { lat: -38.330766, lng: 144.695692 },
        { lat: -39.927193, lng: 175.053218 },
        { lat: -41.330162, lng: 174.865694 },
        { lat: -42.734358, lng: 147.439506 },
        { lat: -42.734358, lng: 147.501315 },
        { lat: -42.735258, lng: 147.438 },
        { lat: -43.999792, lng: 170.463352 },
      ];
      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      // Add some markers to the map.
      // Note: The code uses the JavaScript Array.prototype.map() method to
      // create an array of markers based on a given "locations" array.
      // The map() method here has nothing to do with the Google Maps API.
      const markers = locations.map((location, i) => {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length],
        });
      });
      // Add a marker clusterer to manage the markers.
      new MarkerClusterer(mapInstance, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });
    },
    html5Locate() {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            this.mapInstance.setCenter(pos);
            this.marker(this.mapInstance, pos);
          },
          () => {
            handleLocationError();
          },
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError();
      }
      function handleLocationError() {
        alert("locate failed");
      }
    },
  },
};
</script>
<style>
#map {
  height: calc(100vh - 44px);
}
</style>
