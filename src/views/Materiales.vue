<template>
  <main>
    <!-- Banner -->
    <section class="hero-materiales text-white">
      <div class="container text-center">
        <h1 class="display-4 fw-bold">MATERIALES RECICLABLES</h1>
        <p class="lead">
          Conoce los materiales que recibimos en Recicladora El Chele.
        </p>
      </div>
    </section>

    <!-- Materiales -->
    <section class="py-5">
      <div class="container">
		  <div class="row g-4">
			<!-- Carrusel -->
          <div class="row">
            <div class="col-12">
              <div
                id="carouselCarton"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row g-3">
                      <div class="col-md-4">
                        <img
                          src="../assets/img/carton_01.jpg"
                          class="collage-img"
                          alt="Cartón"
                        />
                      </div>

                      <div class="col-md-4">
                        <img
                          src="../assets/img/carton_02.jpg"
                          class="collage-img"
                          alt="Cartón"
                        />
                      </div>

                      <div class="col-md-4">
                        <img
                          src="../assets/img/carton_03.jpg"
                          class="collage-img"
                          alt="Cartón"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row g-3">
                      <div class="col-md-4">
                        <img
                          src="../assets/img/carton_04.jpg"
                          class="collage-img"
                          alt="Cartón"
                        />
                      </div>

                      <div class="col-md-4">
                        <img
                          src="../assets/img/carton_05.jpg"
                          class="collage-img"
                          alt="Cartón"
                        />
                      </div>

                      <div class="col-md-4">
                        <img
                          src="../assets/img/carton_06.jpg"
                          class="collage-img"
                          alt="Cartón"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselCarton"
                  data-bs-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </button>

                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselCarton"
                  data-bs-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>

              <!-- Texto debajo del carrusel -->
              <div class="card shadow-sm mt-3">
                <div class="card-body text-center">
                  <h4 class="card-title">Cartón</h4>
                  <p class="card-text">
                    Cajas, empaques y materiales derivados del cartón.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm material-card">
              <img
                src="../assets/img/plastico_01.jpg"
                class="card-img-top"
                alt="plastico"
              />
              <div class="card-body text-center">
                <h4>Plástico</h4>
                <p>
                  Botellas, envases y otros productos plásticos reciclables.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm material-card">
              <img
                src="../assets/img/papel_01.jpg"
                class="card-img-top"
                alt="papel"
              />
              <div class="card-body text-center">
                <h4>Papel</h4>
                <p>Periódicos, revistas, hojas y papel reciclable.</p>
              </div>
            </div>
          </div>



          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm material-card">
              <img
                src="../assets/img/hierro_01.jpg"
                class="card-img-top"
                alt="hierro"
              />
              <div class="card-body text-center">
                <h4>Hierro</h4>
                <p>Piezas, estructuras y otros materiales de hierro que pueden ser recuperados y reutilizados.</p>
              </div>
            </div>
          </div>

		  
          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm material-card">
              <img
                src="../assets/img/tela_01.jpg"
                class="card-img-top"
                alt="tela"
              />
              <div class="card-body text-center">
                <h4>Tela</h4>
                <p>Retazos, prendas y diferentes tipos de tela que pueden ser reutilizados o reciclados.</p>
              </div>
            </div>
          </div>

		  
          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm material-card">
              <img
                src="../assets/img/hilo_01.jpg"
                class="card-img-top"
                alt="hilo"
              />
              <div class="card-body text-center">
                <h4>Hilo</h4>
                <p>Hilos y sobrantes textiles provenientes de diferentes tipos de trabajos y materiales.</p>
              </div>
            </div>
          </div>

		  
          <div class="col-md-4 col-sm-6">
            <div class="card h-100 shadow-sm material-card">
              <img
                src="../assets/img/tarimas_01.jpg"
                class="card-img-top"
                alt="tarimas"
              />
              <div class="card-body text-center">
                <h4>Tarimas de madera</h4>
                <p>Tarimas y pallets de madera que pueden ser reutilizados o aprovechados para nuevos proyectos.</p>
              </div>
            </div>
          </div>

        </div>
        <hr />

        <!-- Información adicional -->
        <div class="card shadow-sm mt-5 info-card">
          <div class="card-body text-center">
            <h2>Importancia del reciclaje</h2>
            <p class="mb-0">
              El reciclaje contribuye a reducir la contaminación, disminuir el
              desperdicio de recursos naturales y fomentar una cultura de
              sostenibilidad para las futuras generaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
