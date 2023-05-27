
function display() {
      var firstname = document.getElementById("firstname").value;
      var lastname = document.getElementById("lastname").value;
      var delaytime = document.getElementById("delaytime").value;

      setTimeout(function() {
        var fullName = firstname+ lastname;
        document.getElementById("result").textContent = fullName;
      }, delaytime * 100);
    }
  
  
