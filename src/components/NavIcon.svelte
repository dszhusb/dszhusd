<!-- SHIFTING ICON ANIMATION -->
<script>
    import { onMount } from "svelte";

    const s1 = 0.2;//0.1;
    const s2 = 0.1;//0.5;
    const s3 = 0.2;//1;

    let bodies = [
        {
            link: "./assets/navIcon/newbotFam.png",
            x: 15,
            y: 5,
            dx: 0,//Math.random(-s1, s1),
            dy: 0,//Math.random(-s1, s1),
            w: 175,
        },
        {
            link: "./assets/navIcon/shellClear.png",
            x: 10,
            y: 10,
            dx: Math.random(-s2, s2),
            dy: Math.random(-s2, s2),
            w: 150//125,
        },
        {
            link: "./assets/navIcon/topBW.png",
            x: 50,
            y: 50,
            dx: Math.random(-s3, s3),
            dy: Math.random(-s3, s3),
            w: 90,
        },
    ];

    onMount(() => {
        let frame;
        function loop() {
            frame = requestAnimationFrame(loop);

            bodies = bodies.map((bod) => {
                bod.x += bod.dx/5;
                bod.y += bod.dy/5;

                if (bod.x < 5 || bod.x > 95 - (bod.w / 250) * 100) {
                    bod.dx = -1 * bod.dx;
                }
                if (bod.y < 0 || bod.y > 95 - (bod.w / 260) * 100) {
                    bod.dy = -1 * bod.dy;
                }
                return bod;
            });

            var e = performance.now() + 10;
            while (performance.now() < e) {
                // Artificially long execution time.
            }
        }

        loop();
        return () => cancelAnimationFrame(frame);
    });
</script>

<div>
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
        position: relative;
        height: 260px;
        width: 100%;
    }

    img {
        position: absolute;
    }
</style>
