<!-- TOP NAV BAR -->

<script>
    import { cPage, hColor } from "../store.js";

    function switchPage(n) {
        cPage.set(n);
    }
</script>

<div class="navbar">
    <ul>
        <li>
            <div on:click={() => switchPage(1)} style="--hColor: {$hColor}">ABOUT</div>
        </li>
        <li>
            <div on:click={() => switchPage(0)} style="--hColor: {$hColor}">WORK</div>
        </li>
        <li id="name">
            <div on:click={() => switchPage(0)} style="--hColor: {$hColor}">DANIEL ZHU</div>
        </li>
    </ul>
</div>

<style>
    .navbar {
        max-width: 1000px;
        width: 100%;
        height: auto;

        margin: auto;
        padding-top: 30px;
        padding-bottom: 50px;

        border-bottom: solid 0.5px;

        font-family: 'Space Mono', monospace;
    }

    .navbar ul {
        list-style-type: none;

        margin: 0 20px 0 20px;
        padding: 0;
    }

    .navbar li {
        padding: 0 20px 0 20px;
        float: right;
    }

    /* mouse over link */
    li div:hover {
        color: var(--hColor);
        text-decoration: underline;
    }

    #name {
        float: left;
    }
</style>
