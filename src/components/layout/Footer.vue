<template>
  <footer class="footer text-white">
    <div class="container py-4">

      <div class="row">

        <div class="col-md-6 mb-3 mb-md-0">
          <h5>RECICLADORA EL CHELE</h5>
          <p class="mb-0">
            Comprometidos con el reciclaje y el cuidado del medio ambiente.
          </p>
        </div>

        <div class="col-md-6">
          <h5>Información de contacto</h5>

          <p class="mb-1">
            <strong>Ubicación:</strong>
            <a
              href="https://maps.app.goo.gl/8xBmPPVHMzfXTt3DA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ubicación en Google Maps
            </a>
          </p>

          <p class="mb-1">
            <strong>Horarios:</strong> 6:00 AM - 6:00 PM
          </p>

          <p class="mb-0">
            <strong>Teléfono / WhatsApp:</strong>
            <a href="tel:74851594">74851594</a>
          </p>
        </div>

      </div>

      <hr>

      <div class="text-center">
        <small>
          © {{ new Date().getFullYear() }} Recicladora El Chele. Todos los derechos reservados.
        </small>
      </div>

    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #20A33E;
}

.footer a {
  color: white;
}
</style>