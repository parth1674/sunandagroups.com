 
   function toggleDesktopContainer() {
  
    const footerSunada = document.getElementById('footersunada');
  if (window.innerWidth <= 400) {
    
    footerSunada.style.height = '10vw';
    footerSunada.style.width = '60vw';
     addressColumn.style.marginLeft = '0vw';
    ADD.style.marginLeft = '0vw';
   } else{
    
    footerSunada.style.height = '6vw';
    footerSunada.style.width = '16vw';
    addressColumn.style.marginLeft = '-4vw';
    dlex.style.marginLeft = '-4vw';
     ADD.style.textAlign = 'justify';
    ADD.style.marginLeft = '-3.5vw';
  
  }
  }

  window.addEventListener('DOMContentLoaded', toggleDesktopContainer);
  window.addEventListener('resize', toggleDesktopContainer);
 