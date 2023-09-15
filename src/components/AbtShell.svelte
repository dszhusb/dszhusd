<!-- P5 Sketch -->
<script>
    import P5 from "p5-svelte";
    import { f3Color } from "../store.js";

    let cWidth;
    let cHeight;

    const sketch = (p5) => {
        let shells = [];
        let positions = [];
        let paths = [];
        let nShells = 80;
        let a, b, c, d;
        let l;

        let wdx, wdy;
        let bg, sd;

        p5.setup = () => {
            p5.createCanvas(cWidth, cHeight, "WEBGL");

            positions = [];
            paths = [];

            shells = findShells(nShells);
            for (let i = 0; i < nShells; i++) {
                shells[i].initPoints();
                let p = p5.createVector(
                    p5.random(0, 1) * cWidth,
                    p5.random(0, 1) * cHeight,
                    p5.random(-5, 0)
                );
                let pa = p5.createVector(p5.random(-1, 1), p5.random(0, 1));
                positions.push(p);
                paths.push(pa);
            }

            wdx = 5;
            wdy = 7;

            bg = p5.color(255, 250, 250); //#FFFBF3;
            sd = p5.color(220, 220, 255); //#E7DDCB;
        };

        p5.draw = () => {
            p5.background(bg);
            let sSize = 0;

            wdx = 5 + p5.sin(p5.millis() / 5000.0);
            wdy = 7 + p5.tan(p5.millis() / 7000.0);
            if (p5.abs(wdy) > 100) {
                newCollection();
            }

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
                // renderShadow(s, 0, 0, sSize); 
                renderShell(s, 0, 0, sSize);
                p5.pop();
                count++;
            }
            p5.pop();
        };

        p5.mousePressed = () => {
            newCollection();
        };

        // p5.windownResized = () => {
        //     p5.resizeCanvas(cWidth - 320, cHeight);
        // };

        function renderShell(s, sx, sy, sSize) {
            let pts = s.retPoints();
            let mx = sx + sSize / 2;
            let my = sy + sSize / 2;
            let wm = s.d;

            p5.push();
            p5.translate(mx, my);
            for (let i = pts.length - 1; i >= 0; i--) {
                //Size + Position
                let theta = pts[i].theta;
                let d = pts[i].disp;
                let mc = pts[i].mc;
                let x = p5.cos(theta) * d;
                let y = p5.sin(theta) * d;

                //Visual
                p5.fill(mc);
                p5.noStroke();

                //Draw Section
                p5.push();
                p5.translate(x, y);
                p5.rotate(-p5.atan2(x, y));
                p5.ellipse(0, 0, d * wm, 2 * d);
                p5.pop();
            }
            p5.pop();
        }

        function renderShadow(s, sx, sy, sSize) {
            let pts = s.retPoints();
            let mx = sx + sSize / 2;
            let my = sy + sSize / 2;
            let wm = s.d;

            p5.push();
            p5.translate(mx, my, -5);
            for (let i = pts.length - 1; i >= 0; i--) {
                //Size + Position
                let theta = pts[i].theta;
                let d = pts[i].disp;
                let x = p5.cos(theta) * d;
                let y = p5.sin(theta) * d;

                //Visual
                p5.fill(sd);
                p5.noStroke();

                //Draw Section
                p5.push();
                p5.translate(x + 5, y + 2);
                p5.rotate(-p5.atan2(x, y));
                p5.ellipse(0, 0, d * wm, 2 * d);
                p5.pop();
            }
            p5.pop();
        }

        function newCollection() {
            shells = findShells(nShells);
            for (let i = 0; i < nShells; i++) {
                shells[i].initPoints();
            }
        }

        function findShells(n) {
            let tShells = [];
            for (let i = 0; i < n; i++) {
                a = 0.5;
                b = p5.random(0.2, 0.23);
                c = 1.2;
                d = p5.random(0.4, 2);
                l = p5.int(p5.map(b, 0.15, 0.3, 94, 50));
                let s = new Shell(a, b, c, d, l);
                tShells.push(s);
            }
            return tShells;
        }

        class Shell {
            constructor(ia, ib, ic, id, mt) {
                this.a = ia;
                this.b = ib;
                this.c = ic;
                this.d = id;
                this.l = mt;
                this.growth = new Array(this.l);
                for (let i = 0; i < this.l; i++) {
                    this.growth[i] = new Array();
                }
                this.bc = p5.color(
                    p5.int(p5.random(200, 255)),
                    p5.int(p5.random(200, 255)),
                    255
                );
                this.fc = p5.color(
                    p5.int(p5.random(75, 200)),
                    p5.int(p5.random(75, 200)),
                    p5.int(p5.random(75, 200))
                );
            }

            initPoints() {
                this.growth = this.genShell();
            }

            getCoords(theta) {
                let x = a * p5.cos(theta) * p5.pow(2.718, b * theta);
                let y = a * p5.sin(theta) * p5.pow(2.718, b * theta);
                let disp = p5.dist(x, y, 0, 0);
                let mc = p5.lerpColor(this.bc, this.fc, p5.random(0, 1));
                let result = { theta, disp, mc };
                return result;
            }

            retPoints() {
                return this.growth;
            }

            retL() {
                return this.l;
            }

            genShell() {
                let counter = 0;
                let cTheta = 0;
                let pList = []; // new float[l][2]();
                for (let i = 0; i < this.l; i++) {
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
    };
</script>

<svelte:window bind:outerHeight={cHeight}/>

<div class="AbtShell" style="width: 100%; height: 100%;" bind:clientWidth={cWidth}>
    <P5 {sketch} />
</div>
