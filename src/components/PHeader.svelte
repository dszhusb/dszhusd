<!-- PROJECT HEADER TEMPLATE -->

<div class="PHeader" class:has-links={$$slots.links}>
  <div class="header">
    <h1>
      <slot name="description" />
    </h1>
    {#if $$slots.links}
      <div class="hRow" style="max-width: 850px;">
        <div class="hCol">
          <slot name="links" />
        </div>
        <div class="hCol">
          <slot name="pData" />
        </div>
      </div>
    {:else}
      <div class="filler" />
    {/if}
  </div>
</div>

<style>
  .PHeader {
    border-bottom: 0.5px solid black;
    padding-top: 30px;
    background-color: white;
  }

  .header {
    padding: 0 40px 0 40px;
  }

  h1 {
    margin: 0;
    text-align: left;
    max-width: 1000px;

    font-family: "Space Grotesk";
    font-weight: 700;
    font-size: 32px;

    /* text-transform: uppercase; */
  }

  .hRow {
    margin-top: 30px;
    margin-bottom: 20px;
    display: flex;
    column-gap: 40px;
  }

  .hCol {
    font-family: "IBM Plex Mono";
    font-size: 16px;
    font-weight: normal;
    padding: 0 0 20px 0;
  }

  .filler {
    height: 30px;
  }
</style>
