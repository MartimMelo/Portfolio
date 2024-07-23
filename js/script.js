document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links na barra lateral
    var sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
  
    // Adiciona um manipulador de eventos de clique a cada link da barra lateral
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            var targetId = link.getAttribute('href').substring(1); // Obtém o ID do projeto
            var targetElement = document.getElementById(targetId); // Seleciona o elemento do projeto correspondente
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Faz scroll até o projeto correspondente
        });
    });
});
