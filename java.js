function openNav() {
    document.getElementById("mySidenav").style.width = "16rem";
    document.getElementById("mySidenav").style.borderWidth = "2px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.borderWidth = "0px";
  }
  
  function toggleDarkMode() {
    var body = document.querySelector('body');
    var currentMode = body.classList.contains('dark-mode');
  
    if (currentMode) {
      // Switch back to light mode
      body.style.setProperty('--hf-col', '#dcd8d8');
      body.style.setProperty('--main-bgc', '#aca7a5');
      body.style.setProperty('--text-color', '#232323');
      body.classList.remove('dark-mode');
    } else {
      // Switch to dark mode
      body.style.setProperty('--hf-col', 'rgb(35, 39, 39)');
      body.style.setProperty('--main-bgc', 'rgb(83, 88, 90)');
      body.style.setProperty('--text-color', 'gainsboro');
      body.classList.add('dark-mode');
    }
  }