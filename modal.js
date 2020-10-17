  var modal = document.getElementsByClassName('modal');
  // Get the button that opens the modal
  var btns = document.getElementsByClassName("button-menu");
  var spans=document.getElementsByClassName("close");
  var btn = document.getElementById("physical_submit");

  for(let i=0;i<btns.length;i++){
      btns[i].onclick = function() {
          modal[i].style.display = "block";
      }
  }
  for(let i=0;i<spans.length;i++){
      spans[i].onclick = function() {
          modal[i].style.display = "none";
      }
      window.onclick=function(){
        window.addEventListener('click', outsideClick);
        function outsideClick(e) {
            if (e.target == modal[i]) {
              modal[i].style.display = "none";
            }
        }
    }
  }
  
  
  