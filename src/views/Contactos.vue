<template>
	<section class="contact-section py-5">
		<div class="container">
			<div class="text-center mb-5">
			<h1>Contáctanos</h1>
			<p class="text-muted"> Estamos listos para atenderte y resolver tus consultas. </p>
		</div>

		<div class="row g-4">
			<!-- Teléfono -->
			<div class="col-md-4">
			<div class="card h-100 shadow-sm">
				<div class="card-body text-center">
					<h3>Teléfono / WhatsApp</h3>
					<p class="mb-0">7485-1594</p>
				</div>
			</div>
			</div>

			<!-- Horario -->
			<div class="col-md-4">
				<div class="card h-100 shadow-sm">
					<div class="card-body text-center">
                <h3>Horario</h3>
                <p class="mb-0">Lunes a Domingo</p>
                <p>6:00 AM - 6:00 PM</p>
					</div>
				</div>
			</div>

			<!-- Información -->
			<div class="col-md-4">
				<div class="card h-100 shadow-sm">
					<div class="card-body text-center">
						<h3>Recicladora El Chele</h3>
						<p class="mb-0"> Comprometidos con el reciclaje y el cuidado del medio ambiente. </p>
					</div>
				</div>
			</div>
		</div>

		<!-- Mapa -->
		<div class="card shadow-sm mt-5">
		<div class="card-body">
		<h3 class="text-center mb-4">Nuestra ubicación</h3>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.057353709087!2d-89.4846748!3d13.861013100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62dd8b80b97729%3A0xdd040976a817691c!2sReciclajes%20El%20Chele!5e1!3m2!1ses-419!2ssv!4v1788987580908!5m2!1ses-419!2ssv" 
			width="100%" height="450" style="border:0;" oading="lazy">
		<!-- <iframe -->
			<!-- src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.057353709087!2d-89.4846748!3d13.861013100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f62dd8b80b97729%3A0xdd040976a817691c!2sReciclajes%20El%20Chele!5e1!3m2!1ses-419!2ssv!4v1788987580908!5m2!1ses-419!2ssv"  -->
			<!-- width="100%" height="450" style="border:0;" allowfullscreen="" oading="lazy"> -->
		</iframe>
		</div>
		</div>
		</div>
	</section>
</template>

<style scoped>
.contact-section h1 {
	color: #20A33E;
}

.card {
	border-top: 4px solid #20A33E;
}

iframe {
	border-radius: 8px;
}
</style>