<template>
  <main>
    <!-- Inicio -->
    <section class="hero text-white py-5" id="inicio">
      <div class="container text-center py-5">
        <h1 class="display-4 fw-bold">RECICLADORA EL CHELE</h1>
        <p class="lead mt-3">
          Comprometidos con el reciclaje y el cuidado del medio ambiente.
        </p>
        <a href="#catalogo" class="btn btn-light btn-lg mt-3"> Ver más </a>
      </div>
    </section>

    <!-- Catálogo -->
    <section id="catalogo" class="py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Materiales que reciclamos</h2>
          <p class="text-muted">
            Conoce los materiales que recibimos en Recicladora El Chele.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm">
              <img
                src="../assets/img/carton_01.jpg"
                class="card-img-top"
                alt="carton"
              />
              <div class="card-body text-center">
                <h4 class="card-title">Cartón</h4>
                <p class="card-text">
                  Cajas, empaques y materiales derivados del cartón.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm">
              <img
                src="../assets/img/plastico_01.jpg"
                class="card-img-top"
                alt="plastico"
              />
              <div class="card-body text-center">
                <h4 class="card-title">Plástico</h4>
                <p class="card-text">
                  Botellas, envases y otros materiales plásticos reciclables.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm">
              <img
                src="../assets/img/hierro_01.jpg"
                class="card-img-top"
                alt="hierro"
              />
              <div class="card-body text-center">
                <h4 class="card-title">Metales</h4>
                <p class="card-text">
                  Aluminio, hierro y otros materiales metálicos reciclables.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-5">
          <RouterLink to="/materiales" class="btn btn-success btn-lg">
            Ver todos los materiales
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="py-5 bg-light">
      <div class="container">
        <div class="text-center mb-5">
          <h2>Nuestros servicios</h2>
          <p class="text-muted">Conoce los servicios que ofrecemos.</p>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <h3 class="card-title">Reciclaje</h3>
                <p class="card-text">
                  Recepción y clasificación de materiales reciclables.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <h3 class="card-title">Compra de materiales</h3>
                <p class="card-text">
                  Compra de diferentes materiales reciclables.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body text-center">
                <h3 class="card-title">Atención personalizada</h3>
                <p class="card-text">Atención para clientes y proveedores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
