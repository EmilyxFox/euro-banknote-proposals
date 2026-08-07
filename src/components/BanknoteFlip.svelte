<script lang="ts">
    import "@/src/styles/global.css";
    export let axis: "x" | "y" = "y";

    let isFlipped = false;
    function toggleFlip() {
        isFlipped = !isFlipped;
    }
</script>

<div
  class="relative w-full grid perspective-[2000px] cursor-pointer group justify-items-center"
  role="button"
  tabindex="0"
  on:click={toggleFlip}
  on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFlip(); }}
>
  <div
    class="relative w-full grid transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-3d justify-items-center"
    style="transform: {isFlipped ? `rotate${axis.toUpperCase()}(180deg)` : 'rotateX(0deg) rotateY(0deg)'};"
  >

    <!-- FRONT SLOT -->
    <div class="col-start-1 row-start-1 w-full h-96 sm:h-116 overflow-hidden flex justify-center items-center backface-hidden transition-opacity duration-300 {isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'} [&_img]:max-h-full [&_img]:max-w-full [&_img]:w-auto [&_img]:h-auto [&_img]:object-contain [&_img]:shadow-xl">
      <slot name="front" />
    </div>

    <!-- BACK SLOT -->
    <div
      class="col-start-1 row-start-1 w-full h-96 sm:h-116 overflow-hidden flex justify-center items-center backface-hidden transition-opacity duration-300 {isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'} [&_img]:max-h-full [&_img]:max-w-full [&_img]:w-auto [&_img]:h-auto [&_img]:object-contain [&_img]:shadow-xl"
      style="transform: rotate{axis.toUpperCase()}(180deg);"
    >
      <slot name="back" />
    </div>

  </div>
  <div class="hidden"><slot /></div>
</div>
