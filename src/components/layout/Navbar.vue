<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
		<div class="container">
			<RouterLink class="navbar-brand fw-bold" to="/">
            <img
                src="../../assets/img/logo.jpg"
                alt="Logo Recicladora El Chele"
                class="logo"
            >
			<!-- RECICLADORA EL CHELE -->
			</RouterLink>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"    aria-controls="navbarContent" aria-expanded="false" aria-label="Mostrar navegación" ><span    class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarContent">
				<ul class="navbar-nav ms-auto">
					<li class="nav-item">
						<RouterLink class="nav-link" to="/">Inicio</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/nosotros">Nosotros</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/materiales">Materiales</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/contactos">Contacto</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
