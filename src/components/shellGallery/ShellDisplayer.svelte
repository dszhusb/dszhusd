<!-- Shell Displayer -->
<script>
    import P5 from "p5-svelte";
    import { cPage } from "../../store";
    import { createClient } from "@supabase/supabase-js";

    //It's Just gonna have to be public
    const supabase = createClient(
        "https://jabengmyxahdlnuqjsgu.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphYmVuZ215eGFoZGxudXFqc2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxODk3OTIsImV4cCI6MjAwODc2NTc5Mn0.RX-mVy7X1ySMlxBJRTOLr1RFxDc1bCafiZ5E7PJcH8E"
    );

    //Screen Width Variables
    let sWidth, sHeight;

    //Variables
    let cData = [];
    let prevData = [];

    loadData();

    async function loadData() {
        console.log("loading");
        const { data, error } = await supabase
            .from("Shells")
            .select()
            .then((data) => (cData = data.data));
    }

    function handleSwitch() {
        cPage.set("SMK");
    }

    const sketch = (p5) => {
        //Initializing Variables
        sHeight = p5.windowHeight;

        let shells = [];
        let positions = [];
        let paths = [];

        let wdx, wdy;
        let bg, sd;

        p5.setup = () => {
            //Setting up the Sketch
            p5.colorMode("RGB", 255);
            p5.createCanvas(sWidth, sHeight, "P2D");
            p5.frameRate(20);

            bg = p5.color("#17110D");
            sd = p5.color("#493121");

            wdx = 5;
            wdy = 7;
        };

        function loadShells() {
            console.log(cData);
            for (let i = 0; i < cData.length; i++) {
                let info = cData[i];
                let shell = new Shell(
                    info.a,
                    info.b,
                    info.c,
                    info.d,
                    info.l,
                    info.name,
                    info.growth,
                    info.bc,
                    info.fc
                );
                shells.push(shell);
                let p = p5.createVector(
                    p5.random(0, 1) * (sWidth - 200) + 100,
                    p5.random(0, 1) * (sHeight - 300) + 100,
                    p5.random(-5)
                );
                let pa = p5.createVector(p5.random(-1, 1), p5.random(0, 1));
                positions.push(p);
                paths.push(pa);
                console.log(shell);
            }
        }

        p5.draw = () => {
            if (cData != prevData) {
                loadShells();
                prevData = cData;
            }

            p5.background(bg);
            let sSize = 0;

            wdx = 5 + p5.sin(p5.millis() / 5000.0);
            wdy = 7 + p5.cos(p5.millis() / 7000.0);

            p5.push();

            let count = 0;
            let time = p5.sin(p5.millis() / 1000.0);
            for (const s of shells) {
                p5.push();
                if (positions[count].z < -2.5) {
                    time = p5.sin((p5.millis() - 200) / 1000.0);
                }

                let rx = time * paths[count].y * (wdx + time);
                let ry = time * paths[count].y * (wdy + time);

                p5.translate(
                    positions[count].x + rx,
                    positions[count].y + ry,
                    positions[count].z
                );

                p5.rotate(
                    p5.sin(((paths[count].x * p5.millis()) / 1000) * 0.5) * 0.5
                );
                renderShell(s, 0, 0, sSize, false);

                p5.pop();
                count++;
            }
            p5.pop();

            renderBorder();
        };

        function renderShell(s, sx, sy, sSize, isShadow) {
            let pts = s.retPoints();
            let mx = sx + sSize / 2;
            let my = sy + sSize / 2;
            let wm = s.d;

            p5.push();
            if (isShadow) {
                p5.translate(5, 5, -5);
            }
            p5.translate(mx, my);

            // let sumTheta = 0;
            // for (let i = 0; i < s.growth.length; i++) {
            //     sumTheta += s.growth[i].theta;
            // }
            // p5.rotate(-sumTheta);

            for (let i = s.l - 1; i >= 0; i--) {
                //Size + Position
                let theta = pts[i].theta;
                let p = pts[i].disp;
                let mc = pts[i].mc;
                let x = p5.cos(theta) * p;
                let y = p5.sin(theta) * p;

                //Visual
                let col = p5.lerpColor(s.bc, s.fc, mc);
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

                if (i == s.l - 18) {
                    p5.push();
                    p5.translate(
                        -p5.textWidth(s.name) / 2,
                        p * 2.25
                    );
                    p5.noStroke();
                    p5.fill(255);
                    p5.text(s.name, 0, 0);
                    p5.pop();
                }

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
            constructor(ia, ib, ic, id, mt, nm, gt, b, c) {
                //Generating Colors
                this.bc = p5.color(b[0], b[1], b[2]);
                this.fc = p5.color(c[0], c[1], c[2]);

                //Modifying Variables
                this.a = ia; //
                this.b = ib; //
                this.c = ic; //
                this.d = id; //
                this.l = mt; //Length
                this.name = nm;
                this.growth = gt;
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

            retL() {
                return this.l;
            }
            getShell() {
                return this;
            }
        }
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
            <button on:click={handleSwitch}>Make Your Own Shell</button>
        </label>
    </div>
</div>

<style>
    label {
        display: inline-block;
        padding-left: 20px;
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
</style>
