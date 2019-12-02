export function coordDist(lat1, lon1, lat2, lon2) {
  let R = 6371; // Radius of the earth in km
  let diffLat = deg2rad(lat2 - lat1);
  let diffLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(diffLat / 2) * Math.sin(diffLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(diffLon / 2) *
      Math.sin(diffLon / 2);
  let theta = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let dist = R * theta; // Distance in km
  dist = dist * 1000 * (1 / 0.3048); // Distance in feet
  return dist;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
