function abrirModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function fecharModal(id) {
    document.getElementById(id).style.display = "none";
  }

  window.onclick = function(event) {
    const modais = document.querySelectorAll('.modal');
    modais.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };


  document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_wd27nmj", "template_j3bdrce", this)
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        this.reset();
      }, (err) => {
        alert("Ocorreu um erro ao enviar: " + JSON.stringify(err));
      });
  });