function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

function showTab(tabId, event) {
  // Esconde todas as abas
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active-tab');
  });

  // Mostra a aba selecionada
  document.getElementById(tabId).classList.add('active-tab');

  // Remove o destaque de todas as opções do menu
  document.querySelectorAll('.navbar li').forEach(li => {
    li.classList.remove('active');
  });

  // Destaca a opção ativa
  if (event && event.target) {
    event.target.classList.add('active');
  }

  // Fecha o menu hambúrguer após clicar (em telas pequenas)
  const menu = document.getElementById('nav-menu');
  if (window.innerWidth <= 768) {
    menu.classList.remove('show');
  }
}
