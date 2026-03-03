<template>
  <div class="grid-pattern"></div>
</template>

<style scoped>
/* The grid pattern at the top of most pages. Taken from existing site, added dark theme 🔥🔥🔥 */
.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to right, var(--grid-colour) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--grid-colour) 1px, transparent 1px);
  background-size: 4rem 4rem;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%);
}
</style>
