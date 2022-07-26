<!-- SHIFTING ICON ANIMATION -->
<script>
    import { onMount } from "svelte";

    //Container Dimensions
    let fWidth;
    let fHeight;

    //Body Variables
    const s = 0.1;
    const bCount = 20;
    let bChoices = [
        "./assets/navIcon/botBW.png",
        "./assets/navIcon/shellClear.png",
        "./assets/navIcon/topBW.png",
        "./assets/navIcon/midC.png",
        "./assets/navIcon/midBW.png"
    ];
    let bodies = [];

    function loadBodies() {
        for (let i = 0; i < bCount; i++) {
            let pWidth = Math.round(Math.random() * 250) + 50;
            let bod = {
                link: bChoices[Math.floor(Math.random() * bChoices.length)],
                w: pWidth,
                x: Math.random() * (100 - pWidth/fWidth*100),
                y: Math.random() * (100 - pWidth/fHeight*100),
                dx: s*(Math.random()*2-1),
                dy: s*(Math.random()*2-1),
            };
            bodies.push(bod);
        }
    }

    onMount(() => {
        loadBodies();
        let frame;
        function loop() {
            frame = requestAnimationFrame(loop);

            bodies = bodies.map((bod) => {
                bod.x += bod.dx;
                bod.y += bod.dy;

                if (bod.x < 0) {
                    bod.dx *= -1
                }
                if (bod.y < 0) {
                    bod.dy *= -1
                }
                if (bod.x > 100 - bod.w/fWidth*100) {
                    bod.dx *= -1
                }
                if (bod.y > 100 - bod.w/fHeight*100) {
                    bod.dy *= -1
                }
                return bod;
            });
        }

        loop();
        return () => cancelAnimationFrame(frame);
    });
</script>

<div bind:clientWidth={fWidth} bind:clientHeight={fHeight}>
    {#each bodies as b}
        <img
            src={b.link}
            alt=""
            style="left: {b.x}%; top: {b.y}%; width: {b.w}px"
        />
    {/each}
</div>

<style>
    div {
        display: block;
        position: relative;
        height: 100%;
        width: 100%;
        /* opacity: 0.9; */
    }

    img {
        position: absolute;
    }
</style>
