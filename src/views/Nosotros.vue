<template>
    <main>
    <!-- Banner -->
        <section class="hero-about text-white">
            <div class="container text-center">
                <h1 class="display-4 fw-bold">Nosotros</h1>
                <p class="lead">
                Trabajamos por un futuro más limpio mediante el reciclaje y el
                aprovechamiento responsable de los recursos.
                </p>
            </div>
            <div class="icon-circle mb-3">
                <i class="bi bi-recycle"></i>
            </div>
        </section>
        <section class="py-5">
            <div class="container">
                <!-- Quiénes somos -->
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6">
                        <img
                        src="/src/assets/img/logo.jpg"
                        class="img-fluid rounded shadow"
                        alt="Reciclaje"
                        >
                    </div>
                    <div class="col-lg-6">
                        <h2>¿Quiénes somos?</h2>
                        <p>
                        Recicladora El Chele es una empresa comprometida con la recepción,
                        clasificación y comercialización de materiales reciclables,
                        promoviendo el cuidado del medio ambiente y contribuyendo al
                        desarrollo sostenible de nuestra comunidad.
                        </p>
                        <p>
                        Nuestro trabajo busca reducir el impacto ambiental mediante la
                        recuperación y reutilización de materiales que pueden volver a ser
                        aprovechados.
                        </p>
                    </div>
                </div>
                <!-- Misión y Visión -->
                <div class="row g-4 mb-5">
                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm info-card">
                        <div class="card-body text-center">
                        <div class="icon-circle mb-3">🌱</div>
                        <h3>Misión</h3>
                        <p>
                        Brindar servicios de reciclaje responsables, fomentando la
                        correcta gestión de materiales y contribuyendo al cuidado del
                        medio ambiente.
                        </p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 shadow-sm info-card">
                            <div class="card-body text-center">
                                <div class="icon-circle mb-3">♻️</div>
                                <h3>Visión</h3>
                                <p>Ser una empresa líder en reciclaje reconocida por su
                                compromiso ambiental, innovación y servicio a la comunidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Valores -->
                <div class="text-center mb-4">
                    <h2>Nuestros valores</h2>
                    <p class="text-muted">
                    Principios que guían nuestro trabajo diario.
                    </p>
                </div>
                <div class="row g-4">
                    <div class="col-md-3">
                        <div class="card h-100 shadow-sm value-card">
                            <div class="card-body text-center">
                                <h4>Responsabilidad</h4>
                                <p>Cumplimos nuestros compromisos con clientes y comunidad.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card h-100 shadow-sm value-card">
                            <div class="card-body text-center">
                            <h4>Honestidad</h4>
                                <p>Actuamos con transparencia en cada proceso.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card h-100 shadow-sm value-card">
                        <div class="card-body text-center">
                            <h4>Compromiso</h4>
                            <p>Trabajamos para generar un impacto positivo en el entorno.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card h-100 shadow-sm value-card">
                            <div class="card-body text-center">
                                <h4>Servicio</h4>
                                <p>Ofrecemos atención cercana y de calidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.hero-about {
    background: #20a33e;
    padding: 100px 0;
}

h2,
h3,
h4 {
    color: #20A33E;
}

.info-card,
.value-card {
    border-top: 4px solid #20A33E;
    transition: transform 0.3s ease;
}

.info-card:hover,
.value-card:hover {
    transform: translateY(-5px);
}

.icon-circle {
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50%;
    background-color: #20A33E;
    color: white;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>