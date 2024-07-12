function accionParaCuandoEllaDigaQueSi() {
  Swal.fire({
    title: '¿Estás seguro de querer casarte conmigo?',
    icon: 'question',
    imageUrl: 'img/pena.jpg',
    imageWidth: 150,
    imageHeight: 250,
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      // Redireccionar a la nueva página si responde "Sí"
      window.location.href = "opcionsi.html";
    } else {
      Swal.fire({
        title: '¡Espera!',
        text: 'No acepto NO por respuesta 😠',
        imageUrl: 'img/97388501-mano-de-mujer-de-dibujos-animados-con-manicura-roja-con-pistola.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Una imagen personalizada',
      });
    }
  });
}

function mueveElBoton() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const newWidth = Math.random() * width;
  const newHeight = Math.random() * height;

  const btnNo = document.getElementById("btnNo");
  btnNo.style.position = "absolute";
  btnNo.style.left = newWidth + "px";
  btnNo.style.top = newHeight + "px";
}
