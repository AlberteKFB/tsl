//https://qbkoftawrbmgqxsdzzqo.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFia29mdGF3cmJtZ3F4c2R6enFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjcwMjUsImV4cCI6MjA0MTQ0MzAyNX0.WYYhWAAR - vH0tJEXbooEn5Wef00scdf - Qq8g8kiYFXs;

fetch("https://qbkoftawrbmgqxsdzzqo.supabase.co/rest/v1/TSL", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFia29mdGF3cmJtZ3F4c2R6enFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4NjcwMjUsImV4cCI6MjA0MTQ0MzAyNX0.WYYhWAAR - vH0tJEXbooEn5Wef00scdf - Qq8g8kiYFXs",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach();
}
