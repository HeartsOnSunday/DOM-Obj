var hotel =  {
  name: 'Biltmore',
  rooms: 500,
  booked: 150,
  roomService: true,
  pool: false,
  
  roomsAvail: function() {
     return this.rooms - this.booked
  }
}

function moreInfo() {
        document.getElementById("name").innerHTML=hotel.name;
        document.getElementById("rooms").innerHTML=hotel.rooms;
        document.getElementById("available").innerHTML=hotel.rooms - hotel.booked;
        
    }
    
function lessInfo() {
        document.getElementById("name").innerHTML="";
        document.getElementById("rooms").innerHTML="";
        document.getElementById("available").innerHTML="";
        
    }



 