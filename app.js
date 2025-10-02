// // Replace 'YOUR_ACCESS_TOKEN' with your actual Mappls token
// const accessToken = 'f09fa763-3f1f-458b-960d-f03130e32bf1';

// // This function will be called by the Mappls SDK after it has loaded
// function loadMap() {
//     // Set the access token first, as it's required for all Mappls API calls
//     Mappls.setAccessToken(accessToken);

//     // Dynamically load the plugin script after the main SDK is ready
//     const pluginScript = document.createElement('script');
//     pluginScript.src = "https://apis.mappls.com/advancedmaps/api/" + accessToken + "/map_sdk_plugins?v=3.0&libraries=search";
    
//     // Use the onload event to ensure the plugin is fully loaded before proceeding
//     pluginScript.onload = function() {
//         // Initialize the map and search functionality only after the plugins are loaded
//         const map = new Mappls.Map('map', {
//             center: [28.61, 77.23], // Center of India
//             zoom: 12
//         });
    
//         map.on('load', function() {
//             const searchInput = document.getElementById('search-input');
            
//             const callback = (data) => {
//                 if (data) {
//                     map.removeMarkers();
//                     if (data.length > 0) {
//                         const firstResult = data;
//                         const lat = firstResult.latitude;
//                         const lng = firstResult.longitude;

//                         new Mappls.Marker({
//                             position: [lat, lng],
//                             map: map,
//                             fitbounds: true
//                         });
//                         console.log('Search result:', firstResult);
//                     }
//                 }
//             };
            
//             new mappls.search(searchInput, {
//                 location: [28.61, 77.23],
//                 pod: 'City'
//             }, callback);
//         });
//     };
    
//     // Append the plugin script to the document head to start loading
//     document.head.appendChild(pluginScript);
// }
