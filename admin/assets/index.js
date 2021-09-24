const submitButton = document.querySelectorAll('.btnSubmit');

console.log( submitButton )

submitButton.forEach(element => {
    element.addEventListener( "click", (e) => {
        e.preventDefault();

        const { target: { name } } = e

        Swal.fire({
            title: `Esta seguro de enviar los cambios a ${ name }?`,
            text: "Una ves enviado estos cambios estos se veran reflejado en la Web!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, enviar cambios!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Enviado!',
                'La información fue enviada.',
                'success'
              )
            }
          })
    } )
});