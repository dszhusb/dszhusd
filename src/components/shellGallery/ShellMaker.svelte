<!-- Shell Maker -->
<script>
    import P5 from "p5-svelte";
    import { cPage } from "../../store";
    import { createClient } from "@supabase/supabase-js";
    //It's Just gonna have to be public
    const supabase = createClient("https://jabengmyxahdlnuqjsgu.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphYmVuZ215eGFoZGxudXFqc2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxODk3OTIsImV4cCI6MjAwODc2NTc5Mn0.RX-mVy7X1ySMlxBJRTOLr1RFxDc1bCafiZ5E7PJcH8E");

    //Screen Width Variables
    let sWidth, sHeight;
    let name = "";

    //Variable
    let b, d, l;

    //Change Color
    let sameColor = false;
    let prevSameColor = false;

    function handleColor() {
        // sketch.randomizeColor();
        sameColor = !prevSameColor;
    }

    //Submit
    let sub = false;
    let prevSub = false;
    function handleSubmit() {
        sub = !prevSub;
    }

    function handleSwitch() {
        cPage.set("SDP");
    }

    const sketch = (p5) => {
        //Initializing Variables
        let shell, position, a, c, bg, sd, bc, fc;
        sHeight = p5.windowHeight;
        randomizeColor();

        p5.setup = () => {
            //Setting up the Sketch
            p5.colorMode("HSB", 255);
            p5.createCanvas(sWidth, sHeight, "P2D");
            p5.frameRate(20);

            //Finding shells
            a = 1.5;
            b = p5.random(0.15, 0.2);
            c = 1.2;
            d = p5.random(0.4, 2);
            l = p5.int(p5.map(b, 0.15, 0.3, 90, 85));

            prevSameColor = sameColor;

            shell = new Shell(a, b, c, d, l);
            position = p5.createVector(0.5 * sWidth, 0.5 * sHeight, 0);

            bg = p5.color("#17110D");
            sd = p5.color("#493121");
        };

        p5.draw = () => {
            if (prevSameColor != sameColor) {
                randomizeColor();
            }
            prevSameColor = sameColor;

            if (prevSub != sub) {
                submitShell();
            }
            prevSub = sub;

            //Shifting Position
            position = p5.createVector(0.5 * sWidth, 0.5 * sHeight, 0);

            p5.background(bg);
            let sSize = 0;

            p5.push();
            p5.translate(position.x, position.y);

            p5.push();
            p5.rotate(l / 30);
            renderShell(shell, 0, 0, sSize, true);
            renderShell(shell, 0, 0, sSize, false);
            p5.pop();

            p5.push();
            p5.translate(-p5.textWidth(name) / 2, 10 + l * 1.2);
            p5.noStroke();
            p5.fill(255);
            p5.text(name, 0, 0);
            p5.pop();

            p5.pop();

            renderBorder();
        };

        function randomizeColor() {
            bc = p5.color(
                p5.int(p5.random(200, 255)),
                p5.int(p5.random(200, 255)),
                255
            );
            fc = p5.color(
                p5.int(p5.random(75, 200)),
                p5.int(p5.random(75, 200)),
                p5.int(p5.random(75, 200))
            );
        }

        async function submitShell() {
            let subShell = JSON.parse(JSON.stringify(shell));
            subShell.name = name;
            subShell.bc = bc.levels;
            subShell.fc = fc.levels;
            subShell.growth = subShell.growth.slice(0, l);
            subShell.l = l;
            const { error } = await supabase
                .from("Shells")
                .insert(subShell);
            console.log(error)
        }

        function renderShell(s, sx, sy, sSize, isShadow) {
            let pts = s.retPoints();
            let mx = sx + sSize / 2;
            let my = sy + sSize / 2;
            let wm = d;

            p5.push();
            if (isShadow) {
                p5.translate(5, 5, -5);
            }
            p5.translate(mx, my);
            for (let i = l - 1; i >= 0; i--) {
                //Size + Position
                let theta = pts[i].theta;
                let p = pts[i].disp;
                let mc = pts[i].mc;
                let x = p5.cos(theta) * p;
                let y = p5.sin(theta) * p;

                //Visual
                let col = p5.lerpColor(bc, fc, mc);
                p5.fill(col);
                if (isShadow) {
                    p5.fill(sd);
                }
                p5.noStroke();

                //Draw Section
                p5.push();
                p5.translate(x, y);
                p5.rotate(-p5.atan2(x, y));
                p5.ellipse(0, 0, p * wm, 2 * p);
                p5.pop();
            }
            p5.pop();
        }

        function renderBorder() {
            p5.stroke(0);
            p5.strokeWeight(2);
            p5.noFill();
            p5.rect(0, 0, sWidth, sHeight);
        }

        p5.windowResized = () => {
            p5.resizeCanvas(sWidth, sHeight);
        };

        class Shell {
            //Constructor
            constructor(ia, ib, ic, id, mt) {
                //Generating Colors
                this.bc = p5.color(
                    p5.int(p5.random(200, 255)),
                    p5.int(p5.random(200, 255)),
                    p5.int(p5.random(200, 255))
                );
                this.fc = p5.color(
                    p5.int(p5.random(40, 200)),
                    p5.int(p5.random(40, 200)),
                    p5.int(p5.random(40, 200))
                );

                //Modifying Variables
                this.a = ia; //
                this.b = ib; //
                this.c = ic; //
                this.d = id; //
                this.l = mt; //Length
                this.name = "";

                this.growth = new Array(this.l);
                for (let i = 0; i < this.l; i++) {
                    this.growth[i] = new Array();
                }

                this.initPoints();
            }

            getCoords(theta) {
                let x = a * p5.cos(theta) * p5.pow(2.718, b * theta);
                let y = a * p5.sin(theta) * p5.pow(2.718, b * theta);
                let disp = p5.dist(x, y, 0, 0);
                let mc = p5.random(0, 1); //p5.lerpColor(this.bc, this.fc, p5.random(0, 1));
                let result = { theta, disp, mc };
                return result;
            }

            retPoints() {
                return this.growth;
            }
            initPoints() {
                this.growth = this.genShell();
            }
            retL() {
                return this.l;
            }
            getShell() {
                return this;
            }

            genShell() {
                let counter = 0;
                let cTheta = 0;
                let pList = [];
                for (let i = 0; i < 150; i++) {
                    let pt = this.getCoords(cTheta);
                    pList[i] = pt;
                    let tMod = p5.map(counter, 0, l, 1, 0.8);
                    cTheta +=
                        tMod *
                        p5.random(p5.PI / 12 - 0.005, p5.PI / 12 + 0.005);
                    counter++;
                }
                return pList;
            }
        }

        return { randomizeColor };
    };
</script>

<div
    class="TakeShell"
    style="width: 100%; height: 100%"
    bind:clientWidth={sWidth}
>
    <P5 {sketch} />

    <div
        class="handleBar"
        style="border:0.5px black solid; background-color: white"
    >
        <label>
            <button on:click={handleSwitch}>See Gallery</button>
        </label>
        <label>
            Name: <input type="text" bind:value={name} />
        </label>
        <label class="sliderContainerContainer">
            Length: <input
                class="sliderContainer"
                type="range"
                bind:value={l}
                min="70"
                max="92"
                step="1"
            />
        </label>
        <label class="sliderContainerContainer">
            Roundness: <input
                class="sliderContainer"
                type="range"
                bind:value={d}
                min="0.4"
                max="2"
                step="0.01"
            />
        </label>
        <label>
            <button on:click={handleColor}>Color</button>
        </label>
        <label>
            <button on:click={handleSubmit}>Submit</button>
        </label>
    </div>
</div>

<style>
    label {
        display: inline-block;
        padding-left: 20px;
    }
    input {
        margin: 0;
    }
    .handleBar {
        width: 100%;
        min-height: 100px;
        position: fixed;
        bottom: 0;

        display: flex;
        align-items: center;
        flex-direction: row;
    }
    .sliderContainerContainer {
        display: flex;
        flex-direction: row;
    }
    .sliderContainer {
        display: flex;
        height: auto;
        align-items: center;
        justify-content: center;
    }
</style>
