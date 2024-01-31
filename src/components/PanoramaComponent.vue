<template>
  <Teleport to="body">
    <div class="panorama"></div>
  </Teleport>
</template>

<style scoped></style>

<style>
.panorama {
	width: 100%;
	height: 100%;
	background-color: cadetblue;
	grid-row: 2;

	@media (max-width: 768px) {
		grid-row: 1 / 3;
	}
}

#app {
	grid-row: 3 !important;
}
</style>
