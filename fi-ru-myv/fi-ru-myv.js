if (/Mobi|Android/i.test(navigator.userAgent)) {
            window.location.href = "fi-ru-myv-mobile.html";
        }

        document.querySelectorAll("td").forEach(td => {
        td.innerHTML = td.innerText;
    });

    function showCustomAlert(message) {
    const popup = document.createElement('div');
    popup.classList.add('custom-alert');
    
    const content = document.createElement('div');
    content.classList.add('custom-alert-content');
    content.textContent = message;
    
    const closeButton = document.createElement('button');
    closeButton.classList.add('custom-alert-close');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => {
        popup.remove();
    };
    
    popup.appendChild(content);
    popup.appendChild(closeButton);
    
    document.body.appendChild(popup);
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-letter a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (
        linkPath === currentPath ||
        linkPath.endsWith(currentPath.split("/").pop())
      ) {
        link.classList.add('active');
      }
    });
  });