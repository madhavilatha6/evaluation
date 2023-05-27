
function display() {
      var firstname = document.getElementById("firstName").value;
      var lastname = document.getElementById("lastName").value;
      var delaytime = document.getElementById("delayTime").value;

      setTimeout(function() {
        var fullName = firstname+ lastname;
        document.getElementById("result").textContent = fullName;
      }, delaytime * 100);
    }
  
  
