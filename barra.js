// barra.js
(() => {
  if (document.getElementById("barra-maisrog")) return;

  const container = document.createElement("div");
  container.id = "barra-maisrog";
  container.innerHTML = `
    <a href="https://www.maisrogmacedo.wordpress.com" class="mr-link">+Rogmacedo</a>
  `;

  const style = document.createElement("style");
  style.textContent = `
    #barra-maisrog {
      background: #dbdbdb;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
    }
    #barra-maisrog .mr-link {
      font-family: 'Arimo', sans-serif;
      font-size: 20px;
      font-weight: normal;
      text-decoration: none;
      color: #000;
    }
    @media (max-width: 600px) {
      #barra-maisrog {
        height: 45px;
      }
      #barra-maisrog .mr-link {
        font-size: 18px;
      }
    }
  `;

  const font = document.createElement("link");
  font.rel = "stylesheet";
  font.href = "https://fonts.googleapis.com/css2?family=Arimo&display=swap";

  document.head.appendChild(style);
  document.head.appendChild(font);
  document.body.prepend(container); // insere no topo do body
})();
