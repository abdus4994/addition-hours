
   function addMinute (m1,m2) {
      var m1 = document.getElementById("minute1").value;
      var m1 = parseInt(m1)
      var m2 = document.getElementById("minute2").value;
      var m2 = parseInt(m2)

     
      if ((m1 + m2)<60) {
        return m1+m2;
      }
      
      else {
         return (m1+m2)-60;
      };
    
   }
   
   function addHour(h1,h2, m2) {
   var h1 = document.getElementById("hours1").value;
   var h1 = parseInt(h1) 
   var h2 = document.getElementById("hours2").value;
   var h2 = parseInt(h2)
   var m1 = document.getElementById("minute1").value;
   var m1 = parseInt(m1)
   var m2 = document.getElementById("minute2").value;
   var m2 = parseInt(m2)

      
       
       if ((m1 + m2)<60) {
         return (h1 + h2);
       }

      else {
         return  (h1 + h2)+1;
      };
   }


   function calculate(x,y){
    
      if (addHour()<24){
         document.getElementById("result").innerHTML ="Result Is = "+ x +" hours" + " "+ y + " Minutes";
      } else {
         d= x-(x%24);
         d= d/24;
         document.getElementById("result").innerHTML ="Result Is = " + d +" Days "+ x%24+ " hours "+ y+ " minute";
      }

   }

   

   function reset(){
       document.getElementById("hours1").value = "";
      
       document.getElementById("hours2").value = "";
     
       document.getElementById("minute1").value = "";
      
       document.getElementById("minute2").value = "";
      document.getElementById("result").innerHTML = "Result";      
      
   }
   