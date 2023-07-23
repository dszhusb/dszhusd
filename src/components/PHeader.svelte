<!-- PROJECT HEADER TEMPLATE -->

<div class="PHeader" class:has-links={$$slots.links}>
  <div class="header">
    <h1>
      <slot name="description" />
    </h1>
  </div>
  {#if $$slots.links}
    <div class="desc">
      <div class="hRow">
        <div
          class="hCol"
          style="border-right: solid black 1px; background-color: #EEEEEE;"
        >
          <slot name="links" />
        </div>
        <div class="hCol" style="padding-top: 20px; height: 80px">
          <slot name="pData" />
        </div>
      </div>
    </div>
  {:else}
    <!-- <div class="filler" /> -->
  {/if}
</div>

<style>
  .PHeader {
    border-bottom: 1px solid black;
    background-color: white;
  }

  h1 {
    margin: 0;
    text-align: left;
    max-width: 800px;

    font-family: "Space Grotesk";
    font-weight: 700;
    font-size: 32px;
    padding: 40px 40px 40px 40px;

    text-transform: uppercase;
  }

  .desc {
    width: 100%;
    border-top: solid black 1px;
  }

  .hRow {
    display: flex;
    max-width: 850px;
    column-gap: 36px;
  }

  .hCol {
    font-family: "IBM Plex Mono";
    font-size: 16px;
    font-weight: normal;
  }

  @media (max-width: 1000px) {
        .hRow {
          display: block;
        }
    }
</style>
