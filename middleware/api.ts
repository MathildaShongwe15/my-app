// Function to load Google Maps API
function loadMapsAPI(callback) {
    if (window.google && window.google.maps) {
        // Google Maps API is already loaded, call the callback function
        callback();
    } else {
        // Google Maps API is not loaded, dynamically load it
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key='AIzaSyBE7eraggD4Ut8Nybtq-1KaPCE8LG4P8eU'`;
        script.async = true;
        script.defer = true;
        script.onload = callback;
        // Append the script to the document
        document.head.appendChild(script);
    }
}
export default loadMapsAPI;