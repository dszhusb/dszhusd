// GLOBAL VARIABLE STORE

// IMPORTING STORE PROPERTIES
import { writable, derived } from 'svelte/store';
import router from "page";

//IMPORT PAGES
import Work from "./pages/Work.svelte";
import About from "./pages/About.svelte";
import ProjectTemplate from "./pages/ProjectTemplate.svelte";
import GalleryTemplate from "./pages/GalleryTemplate.svelte";
import ShellMaker from "./components/shellGallery/ShellMaker.svelte";
import ShellDisplayer from "./components/shellGallery/ShellDisplayer.svelte";
// import Construction from "./pages/Construction.svelte";

//Code Sketches
import TakeShell from "./components/TakeShell.svelte";

//PAGE VARIABLES
export const cPage = writable("WRK");
export const pageObj = derived(cPage, function ($cPage) {
    for (let p of projects) {
        if (p.key === $cPage) {
            return p;
        }
    }
});

export const pCat = derived(pageObj, $pageObj => $pageObj.cat);
export const filters = writable([true, true, true]);
export const fNotAll = derived(filters, $filters => $filters.includes(false));

//ROUTING
// export const routePkg = derived(pageObj, function ($pageObj) {
//     let url = "/";
//     url += pageObj.name;
//     let comp = pageObj.comp;
//     return [url, comp];
// });

//COLOR VARIABLES
export const hIcon = writable(0);
export const f1Color = derived(hIcon, $hIcon => shells[$hIcon].f1);
export const f2Color = derived(hIcon, $hIcon => shells[$hIcon].f2);
export const f3Color = derived(hIcon, $hIcon => shells[$hIcon].f3);
export const hColor = derived(hIcon, $hIcon => shells[$hIcon].text);

//Shell Values
let shells = [
    { f1: "#53A8BA", f2: "#A6C6E1", f3: "#EDCDFE", text: "#248399" },
    { f1: "#8FAB82", f2: "#F3C2D2", f3: "#FFE0FF", text: "#3A7D1D" },
    { f1: "#9965B8", f2: "#BEBBF3", f3: "#E2F4FD", text: "#8345A8" },
    { f1: "#BEB15A", f2: "#DEC789", f3: "#FAE1FD", text: "#827000" },
    { f1: "#55AAC3", f2: "#A0D1EF", f3: "#E6DAFF", text: "#007193" },
    { f1: "#8D93AC", f2: "#BBC3D6", f3: "#DAE5FC", text: "#586AA7" },
    { f1: "#6DD1B4", f2: "#B5E4FD", f3: "#F3E3FF", text: "#0A8460" },
    { f1: "#B86F85", f2: "#CFBAC5", f3: "#E4FAFE", text: "#891739" },
    { f1: "#B17281", f2: "#F0C2DC", f3: "#F8E3FA", text: "#960023" },
    { f1: "#C55E7C", f2: "#E4B7CF", f3: "#E4FBFE", text: "#AC1B43" },
    { f1: "#AA9C5B", f2: "#C2DBB3", f3: "#C8F2ED", text: "#826E0F" },
    { f1: "#86C595", f2: "#C3D6E4", f3: "#FAE8FF", text: "#04781E" },
    { f1: "#7FC56F", f2: "#AFDFBE", f3: "#CCEFF3", text: "#3B8225" },
    { f1: "#7A5995", f2: "#9C8DB7", f3: "#DCE9FC", text: "#7F56A1" },
    { f1: "#4C83BB", f2: "#BDB2E7", f3: "#ECC5F9", text: "#336BA3" },
    { f1: "#D78387", f2: "#C4A0AD", f3: "#D0D6FF", text: "#A0585A" },
    { f1: "#7DC178", f2: "#C0C9BE", f3: "#F3D0F4", text: "#1A8114" },
    { f1: "#86B071", f2: "#BCDCCD", f3: "#D5F7FF", text: "#537C3E" },
    { f1: "#A0C098", f2: "#B5BDD9", f3: "#E5D9FF", text: "#4D7B41" },
    { f1: "#6E8F77", f2: "#ABB8B3", f3: "#F9EBFF", text: "#4C7E5A" },
    { f1: "#657386", f2: "#C0B9D4", f3: "#F2E1FF", text: "#536988" },
    { f1: "#77A36A", f2: "#ADC3A3", f3: "#E5C4E4", text: "#387127" },
    { f1: "#7C7B79", f2: "#ABB6BB", f3: "#D6ECF9", text: "#6B665C" },
    { f1: "#C1C56E", f2: "#EBD6C1", f3: "#F3E2FF", text: "#747736" }
];

//Projects
export let projects = [
    { name: "WORK", cat: 3, comp: Work, key: "WRK" },
    { name: "ABOUT", cat: 3, comp: About, key: "ABT" },
    { name: "SHELL MAKER", cat: 3, comp: ShellMaker, key: "SMK" },
    { name: "SHELL GALLERY", cat: 3, comp: ShellDisplayer, key: "SDP" },
    { name: "DAISY", cat: 0, img: "daisyNail.webp", comp: ProjectTemplate, key: "DSY" },
    { name: "PILOT SEMI-TRUCK SIMULATOR", cat: 0, img: "pilotNail.webp", comp: ProjectTemplate, key: "PLT"},
    { name: "LIPPINCOTT", cat: 0, img: "lipNail.webp", comp: ProjectTemplate, key: "LIP" },
    { name: "GENERATIVE ORGANIC FORMS", cat: 0, img: "genNail.webp", comp: ProjectTemplate, key: "GEN"},
    { name: "PORTFOLIO WEBSITE", cat: 0, img: "folioNail.webp", comp: ProjectTemplate, key: "PWS" },
    { name: "PICTOGEM", cat: 0, img: "pictoNail.webp", comp: ProjectTemplate, key: "PGM" },
    { name: "TOBI", cat: 0, img: "tobiNail.webp", comp: ProjectTemplate, key: "TBI" },
    { name: "FAVORITE FOODS BY THE MONTH", cat: 0, img: "favoriteFoodsNail.webp", comp: ProjectTemplate, key: "FFM" },
    // { name: "HUMANIZING COMMENT SECTIONS", cat: 0, img: "hfiTn.webp", comp: ProjectTemplate, key: "HFI" },
    { name: "KINETIC FABRICS", cat: 0, img: "kineticNail.webp", comp: ProjectTemplate, key: "CUR" },
    { name: "ORGANIC FORM FROM ARTIFICIAL RULES", cat: 1, img: "oAnail.webp", comp: ProjectTemplate, key: "OFR" },
    { name: "SKETCHBOOK", cat: 2, img: "sketchNail.webp", comp: GalleryTemplate, key: "SBK" },
    { name: "SOMA", cat: 0, img: "somaNail.webp", comp: ProjectTemplate, key: "SMA" },
    // { name: "DASH", cat: 0, img: "dashNail.webp", comp: ProjectTemplate, key: "DSH" },
    // { name: "LEAGUE OF LEGENDS DATA VISUALIZATION", cat: 1, img: "lolNail.webp", comp: ProjectTemplate, key: "LDV" },
    { name: "DIGITAL ART", cat: 2, img: "artNail.webp", comp: GalleryTemplate, key: "DRT" },
    // { name: "BARILLA POP UP", cat: 0, img: "barillaNail.webp", comp: ProjectTemplate, key: "BUP" },
    { name: "COMPUTATIONAL ART", cat: 2, img: "computationNail.webp", comp: GalleryTemplate, key: "CRT" },
    // { name: "WATER VESSEL", cat: 1, img: "vesselNail.webp", comp: GalleryTemplate, key: "VES" }
];

//Project Contents
export const projectContent = [//hardcoding structures is OK in the short term, but you should replace with a load from json/request
    { //CUR
        key: "CUR",
        pDescription: "Creating a private alcove in a public space",
        pBlurbs: [
            "Concept Development, Prototyping",
            "Saloni Ghandi",
            "6 weeks"
        ],
        links: [

        ],
        mImage: "../assets/kinetic/kineticBanner.webp",
        cContent: [
            [6, "../assets/kinetic/smallKinetic.mp4", "../assets/kinetic/kineticCover.webp", "Kinetic Fabrics Video"],
            [3, "PROJECT OVERVIEW"],
            [0, "This project is a quick exploration into creating a space within a space. In crowded public spaces, we crave pockets of calm and isolation to grab a moment of peace. This project explores one way of carving out a space to rest through a screen that isolates sound and light with a timed curtain that moves at its own pace."],
        ]
    },
    { //DAISY
        key: "DSY",
        pDescription: "Daisy is a music alteration device for casual listeners",
        pBlurbs: [
            "Concept Development, Prototyping",
            "Joseph Kim",
            "12 weeks"
        ],
        links: [],
        mImage: "../assets/thumbnails/daisyNail.webp",
        cContent: [
            [2, "Daisy introduces a whole new mode of engaging with music. Bridging the gap between a listening device and a full electronic instrument, Daisy allows casual listeners to modify their listening experience."],
            [6, "../assets/daisy/daisyDemo.mp4", "../assets/daisy/daisyDemoSC.webp", "Daisy Prototype"],
            [3, "PROJECT OVERVIEW"],
            [0, "Through interactions that evoke analog nostalgia, listeners can add effects to augment their listening experience. Pulling out the flower-knob raises the volume, while adding a twist in the same motion applies an effect making music sound underwater with added rain and thunder, shifting its pitch octaves higher, or even simulating a vinyl record for a lofi feel."],
            [4, "Daisy Product Photos", ["../assets/daisy/gal1.webp", "../assets/daisy/gal2.webp", "../assets/daisy/gal3.webp"], ["../assets/daisy/gal4.webp", "../assets/daisy/gal5.webp", "../assets/daisy/gal6.webp"]],
            [0, "The audio gadget landscape is dominated by jargon-filled products for audiophiles and complex instruments for musicians. We wanted to ask, is there a space for the casual listener to augment their listening experience in a fun and playful way? As the final effect might suggest, a major inspiration for Daisy was the “lofi” mixes popular on youtube. These mixes frequently feature rehashes of old songs with accompanying animated gifs and edits. Listeners find a sense of community in the shared appreciation of this curated aesthetic."],
            [0, "With Daisy, we aimed to go a step beyond, encouraging listeners to craft their own aesthetic, tuning the mood of their music for the moment, rather than consuming a ready-made experience."],
            [1, "Daisy in Context", "../assets/daisy/interaction.webp"],
            [3, "PROCESS OVERVIEW"],
            [0, "From a project perspective, we wanted to create a fully functioning product that moved past grayscale models and breadboard prototypes. In the past, we created fleshed out concepts with beautiful renders that didn't work and functional prototypes that were never refined past a primitive form. Our goal was to achieve a refined form that had no if ands or buts about its functionality."],
            [0, "To achieve this level of refinement, we decided to stick to a simple concept and interaction to pursue an aggressive timeline, front-loading the brunt of the work. We knew that we would need to push ourselves out of our comfort zones into areas with a lot of questions and unknown variables. For example, creating frames for mounting electronic pieces with haptics in mind, programming with experimental software and microcontrollers and so much more. Fortunately, due to our planning, we were able to produce an minimum viable product in time to add a few bonus features as well."],
            [4, "Renders, Branding, and Transparent Views", ["../assets/daisy/construction.webp", "../assets/daisy/render.webp"], ["../assets/daisy/logo.webp", "../assets/daisy/pcb.webp"]],
            [0, "With the physical product complete, we hope to explore a digital marketplace supporting a community of makers and listeners in the future. In addition to traditional musical artists, this platform would afford a new type of “artist,” one that creates filters and effects. We hope this additional layer spawns new discussions, blurring the lines between what defines an artist and a consumer. This would position Daisy as more than just a one off device, allowing users to actively contribute to a kind of “performance” of the music specific to their experience effects and the music in that moment."],
            [6, "../assets/daisy/FijiBlue.mp4", "../assets/daisy/DaisyPoster.webp", "Daisy Promotional Video"],
            [6, "../assets/daisy/Assembly.mov", "../assets/daisy/AssemblyPoster.png", "Daisy Assembly"],
            [3, "REFLECTION"],
            [0, "Daisy! My favorite project at CMU. I loved exploring the dizzying field of electronic music and sound synthesis and puzzling at implementing theoretical effects in code. Thanks to the open prompt, we were able to dive into the technical guts of the project in the third week, allowing us to reach our first working prototype with weeks left to add extra features, refine any rough edges, and even design our own pcb! Functionality aside, my favorite aspect of this project by far was working with Joseph. From the chaotic stage of concept generation to seeing his beautiful renders in the final few weeks, each step of the process has been a joy to experience. The combination of our skill sets and personalities resulted in something I am so proud of and is hopefully just the beginning for a future of collaboration!"],
            [1, "Daisy's Custom PCB", "../assets/daisy/Hero2.webp"],
        ]
    },
    {
        key: "PLT",
        pDescription: "An Immersive Semi-Truck Simulator Experience",
        pBlurbs: [
            "Design, Hardware Development, Production", "Landing Gear", "1.5 Months"
        ],
        links: ["https://github.com/landing-gear-production"],
        mImage: "../assets/thumbnails/pilotNail.webp",
        cContent: [
            [2, "The Pilot Semi-Truck Simulator was an immersive experience built for the 2024 Berkshire Hathaway Shareholder Conference. By hacking into the controls of a real semi-truck we were able to convert the truck into an input game controller for a modified trucking simulator game. Participants we guided through a set course by an instructor, allowing them to experience to feeling of driving a real big rig truck complete with haptic feedback, an immersive spreen setup, and more."],
            [7, "4FG9xUcryY8", "Pilot Event Reel"],
            [3, "PROJECT OVERVIEW"],
            [0, "I worked as a creative technologist on this project with Nishanth Samala, a car enthusiast who had developed a similar system for his car. There were three major components. First, a microcontroller decoding the truck's communication through the diagnostic port through the J1939 protocol, a microcontroller reading dashboard information like engine speed and road speed to send back to the truck, and a separate GPS system implemented mostly by Bryce Li. You can find the code linked under \"process documentation\" above."],
            [0, "Although I will be talking mostly about the technology for this project, I quickly found my role expanding beyond just developing hardware to production, event planning, and more."],
            [3, "SIMULATOR PERIPHERALS"],
            [0, "Before we figured out how to communicate with the truck, I first needed to figure out how to bring the game into the trucks interior. Starting with exploration on alternatives like projection mapping, AR, and transparent LED screens, the client eventually settled on a more traditional LED screen solution. I measured the window dimensions and presented a number of sizing options to fabricators who would build the monitors to blend it seamlessly into the truck interior. I selected the largest sizes possible with QLED TVs across the windshield and custom square TVs covering the side windows. With this setup the driver would have a full view of the road around them, as if they were in the real truck."],
            [0, "To complement the visuals, we selected speakers and a subwoofer for a full sound and combined it with a \"Buttkicker\" haptic feedback system under the driver's seat to convey the rumble of the engine and the feel of the road. We also made plans to install a motor along the steering column to provide steering wheel feedback but unfortunately time and budget caused us to cut that conversation short."],
            [3, "DECODING TRUCK SIGNALS"],
            [0, "The core of this project revolved around decoding the following from the truck: steering wheel input, acceleration pedal position, brake pedal position, air horn, and gear shifter position. Our initial approach revolved around decoding all of this information from the diagnostic port which communicates via the CAN protocol, a standardized format for sending messages in vehicles."],
            [0, "Although the CAN protocol delineates a standard method of communication, the actual contents and ids for various messages actually vary from vehicle to vehicle. This meant we would need to stream and capture raw data as we modulated the brakes, steering, etc and watch for patterns of change to decode what data was being communicated under specific ids and specific bytes within the message content. Luckily I was able to find a more specific standard, the J1939 standard, which describes common ids and message contents for heavy transportation and industrial vehicles. Because these types of vehicles are more standardized for safety reasons, these more detailed specifications gave us a head start on decoding the messages we needed."],
            [0, "Nevertheless, matching up the properties described in the J1939 guide with what we actually wanted still took some work. For example, was the speed displayed on the dashboard \"land-based vehicle speed\" or \"speed (tachometer)\" or \"speed (GPS)\" or one of the half-dozen other speed and velocity properties reported by various ecus? To decode this problem we essentially reverted to our initial approach but with a much narrower set of ecu ids and properties to monitor. To check I learned how to use bitwise operators to extract the specific bytes the data was assigned to in their respective PIDs (data from each ecu is lumped under the same PID). We set up a ESP32 board with a CAN transciever. Monitoring this much narrower dataset sped up the process dramatically."],
            [0, "As we were decoding these issues, however, we were afflicted by inconsistent readings in our outputs. All our readings had occasional spikes that made the game difficult to play. As we were debugging this issue, I started working on a backup solution, tapping directly into inputs or setting up our own sensors to capture data."],
            [3, "CAN DECODING ALTERNATIVES"],
            [0, "Adding to the CAN transceiver, the transmission and the accelerator each had power, ground, and signal wires that we could tap into. By tapping into the signal and ground wires for reference we were able to take a clean, direct reading straight from the sensor without muddling from the ecu. One interesting quirk that we found was that because semi-trucks are so highly regulated, if our spliced wire was too long, it would prevent the truck from starting, due to the ecu detecting too much resistance. This was ok for us as we would be running the truck in ignition mode to collect data without the engine on. However, I needed to design these add-ons to be easily detached for when we moved the truck."],
            [0, "The brake sensor was a little more complex, instead of tapping in to the wires, I 3D printed a custom enclosure for a time of flight sensor that I attached with magnets to a bracket behind the brake. I then printed a custom fin to fit around the brake pedal, providing a consistent point of reference for sensor. Similarly, I detached the original air horn, which would be too loud for the venue, with a custom sensor mount. Originally, we had ordered a lamp ball and chain switch, however, this proved too flimsy and often snapped as user testers tried to pull on it. I replaced this with a rolling lever switch that I designed a 3D printed enclosure around to interface with a leather braided cord."],
            [0, "To add to the immersion we also bought our own ignition key switch, I wired up the switch to detect whether it was in the accessory, off, ignition, or start states and designed 3D printed key fobs for the key."],
            [0, "By this time we had figured out why our inital approach with the CAN system was giving us inconsistent data. The overall voltage of the truck need to be kept above around 13-14 V to keep the readings consistent. To this end I sourced and bought a battery tender that we could plug into wall power to keep the truck's system charged."],
            [0, "While we were able to continue using the CAN system for steering input, steering provided another issue. The steering wheel was physically attached to the steering column, which in turn was attached to the wheels. With the engine started the pneumatic system helps you turn the wheel, but in ignition mode the steering wheel's turning is limited by being linked to the front wheels. With the help of a mechanic, I identified a place we could remove a link from that chain. We used a impact driver to detached the pitman arm from the pneumatic steering system in a way that it could be put back on for later driving."],
            [3, "DASHBOARD SHENANIGANS"],
            [0, "Aside from truck input, we also wanted to ensure the truck's dashboard would match what was happening in game to complete immersion. To this end we designed a separate system to intercept messages to the dashboard ECU eventually settling on a \"man in the middle attack\". We started by extracting the necessary data from the game. I wrote a node.js script that interfaced with the game API to extract speed, engine speed, and oil level from the truck. This node.js script then sent data to a separate ESP32 and CAN transceiver attached to the dashboard ECU."],
            [0, "Our initial approach was to completely detach the ECU and replace it with our ESP32 but we quickly found that there were too many systems co-dependent on that ECU. We then tried flooding the ECU with the messages our own speed messages, but every second or so a the dials would twitch back to 0, following the original data. After some experimentation, we tried a new approach, whenever a packet with the information we wanted to modify passed through the ESP32, it would modify only the bytes we wanted with the game data."],
            [0, "During this process, we decided to address the numerous warning lights that had popped up on. Although it might have been possible to identify them and intercept them as we had done with the speed and engine speed, I decided to simply take the dashboard apart and tape black electrical tape over the relevant LEDs."],
            [3, "GPS"],
            [0, "An extra feature we added to the truck was a GPS, more for ambient mood than for use as we would have an instructor sitting alongside the driver. The code was primarily written by Bryce Li who was working remotely for this project. During integration, I rewrote chunks of the coordinate tracking code to align it with input from the game API. I also set up a reverse proxy with Nishanth to make the web app available to the iPad we were running the GPS from. This solved CORS errors we were getting trying to connect to the API directly. I then worked with Bryce to add further features like turn by turn navigation, visual refinements and more. While most visitors ultimately did not notice or use the GPS it added to the ambiance of the truck in a meaningful way."],
            [3, "FABRICATION"],
            [0, "To modify the truck interior, Landing Gear hired car fabricators to build a mounting system for the monitors and a veneer to hide the seams as well as detail the interior, replace carpet, add LED backlight, etc. During this process, I worked closely with the fabricators to determine where to route cables, how we would position the speakers, and so on."],
            [0, "We did not want to rely on wireless connections because of the unknown environment of the venue so I sourced extra long cables so we could connect everything to the PC which would be housed on a flatbed behind the truck cab. This process involved routing cables under carpet, drilling holes the back of the cab and more."],
            [3, "USER TESTING AND FINE TUNING"],
            [0, "Before the event we needed to conduct intensive user testing to fine tune our system for the best experience. I helped the team detail our UX journey, providing input for how long the experience should be to maximize the time for the most amount of visitors (5 minutes), as well as how the instructor who would be sitting alongside vistors would guide them."],
            [0, "Aside from this planning, we needed to grapple with an issue that simulators and VR experiences often deal with, motion sickness. Motion sickness typically occurs when our perceived motion from visuals doesn't match up with what we feel in our inner ears, which regulate our sense of orientation. To minimize motion sickness we worked to fine tune the sensitivity of the wheel, balancing a higher sensitivity, which feels more responsive, with a lower sensitivity, which prevents the scenery from moving too violently when spinning the wheel. I also helped the software team work through framerate maximization, field of view in the monitors and more."],
            [0, "While it would be difficult to say we completely neutralized motion sickness, we were able to get to a point where only the most sensitive visitors would even mention it."],
            [3, "THE BERKSHIRE HATHAWAY CONFERENCE"],
            [0, "During the event, in addition to monitoring the tech, I became involved in all aspects of production as well as actually being in the truck guiding visitors through the experience. Fortunately we had done enough user testing that our system had become robust. We had ordered back up parts for each of the critical pieces in our system and I designed, printed, and soldered together PCBs for each of our ESP32 boards to be mounted to."],
            [0, "Nishanth wrote a quick web app running on the game input microcontroller monitoring the inputs it sent out. I made this interface friendly for mobile with tailwind css and together we worked out a system for adjust parameters like what range the brake sensor should be mapped to and so on. This way if anything was disrupted, we would know from the outside and be able to make changes without disrupting the experience."],
            [0, "Instead of hiring brand ambassadors to guide visitors in the truck, we made the decision to take shifts being in the truck. We quickly developed tips and tricks around the guidance that helped visitors the most. While we each went through the experience dozens of times, I found each person brought something that made the experience unique and engaging."],
            [3, "REFLECTION"],
            [0, "On a technical experience, I learned so much from the project, especially in terms of creating hardware for live experiences. Nishanth taught me a lot regarding coding practices, especially with microcontrollers and backend web practices. I also had a chance to polish my skills with 3D printing, PCB design, etc."],
            [0, "More importantly I had my first experience working in the immersive experience space from start to end. I learned how to communicate with the agency and clients, how to make judgements between technical solutions, and what it's like to run the tech at the actual event. The soft skills I was able to work on boosted my confidence in my ability to thrive in the chaotic and sometimes stressful immersive experience space."]
        ]
    },
    { //GEN
        key: "GEN",
        pDescription: "Daisy is a music alteration device for casual listeners",
        pBlurbs: [
            "Concept Development, Prototyping",
            "",
            "1 week"
        ],
        links: ["https://github.com/dszhusb/generative-morphology", "https://generative-morphology.vercel.app/parametricMesh"],
        mImage: "../assets/thumbnails/genNail.webp",
        cContent: [
            [2, "Generative Organic Forms is a site inspired by the book Theoretical Morphology by David Raup. This site hosts a number models for various forms described in the book and serves as a playful tool for form generation and a learning experiment."],
            [3, "PROJECT OVERVIEW"],
            [0, "Visit the website linked above."],
        ]
    },
    { //LIPPINCOTT
        key: "LIP",
        pDescription: "Designing and Developing at Lippincott",
        pBlurbs: [
            "Creative Technologist Intern",
            "N/A",
            "7 months"
        ],
        links: [],
        mImage: "",
        cContent: [
            [2, "At Lippincott, I worked as a jack of all trades Creative Technologist: Unity VR Development, AI and Web development, as well as UI/UX and motion design. While the details of the projects are under NDA, a broad description follows below."],
            [3, "VR Brandbook Project"],
            [0, "I explored opportunites for brand and advertising through a VR brandbook and data visualization project. Based on Lippincott's work with a US major airline, we used a flight tracking API and airport datasets to tell a story about the airline's presence leading into a immersive brandbook showcasing Lippincott's work on the case."],
            [3, "AI Web Tool"],
            [0, "Emerging from a discussion with coworkers, I designed and developed a web-based tool leveraging AI to explore how generative AI can enhance Lippincott's core offerings. This tool was built with React.js, Flask, openAI APIs, and Stability API. The tool developed started out as a conversation starter or experiment but became polished enough to demo for clients and be deployed in Lippincott's internal network."],
            [3, "Lippincott 'PLAY' Website"],
            [0, "I was a developer for a soon to be released Lippincott website. I developed a set of custom motion components for the site's article pages with React.js and Framer.js. These components, based on scroll hijacking, break from a traditional article format, replacing it with a more interactive almost cinematic experience."],
            [3, "UI/UX and Motion Design"],
            [0, "Throughout my time at Lippincott I also played the role of a more traditional visual designer. Starting out, I designed mobile versions of web pages and double checked content for a client website before graduating to making design decisions on desktop web pages as well. I was late slotted into a web banner design project in the last two weeks of a project and picked up Google Web Designer on a short notice, polishing my motion design skills."],
            [2, "Contact me to learn more about these projects."]
        ]
    },
    { //Pictogem
        key: "PGM",
        pDescription: "A Digital Photo Album With a Twist",
        pBlurbs: [
            "Design, Development",
            "N/A",
            "4 weeks"
        ],
        links: ["https://github.com/dszhusb/photo-three-album", "https://photo-three-album.vercel.app/"],
        mImage: "../assets/pictogem/pic.webp",
        cContent: [
            [2, "Pictogem is a gacha style photo album experienve. Each day, presenting a new photo rewards you with time capsules from the past, previous pictures mapped onto the shapes of flickering cubes, jelly-like droplets, and more!"],
            [3, "PROJECT OVERVIEW"],
            [0, "Wrapping an image around a 3D form can distort the image in strange and unintended wways. But instead of viewing resulting bulges and seams as a mistake, the distortions can be a source of delight! Pictogem ignores a lesson in UV mapping, casting a common mistake as the central source of novelty. The challenge becomes manipulating shape and material in ways that refresh old memories with new life instead of reading as a mistake."],
            [0, "This project is built with React, three.js, React Three Fiber, and more. It is a first foray into developing 3D experiences for web, shaders, as well as an exercise in my graphic design and UI skills. I hope you enjoy the prototype!"],
        ]
    },
    { //TOBI
        key: "TBI",
        pDescription: "TOBI: an electronic organism that reveals electronic signals in its environment",
        pBlurbs: [
            "Concept Development, Prototyping",
            "N/A",
            "6 weeks"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Organic-Organism-TOBI-34da0f7d414643f98b11546d170e0695",
        ],
        mImage: "./assets/thumbnails/tobiNail.webp",
        cContent: [
            [2, "TOBI is an electronic organism that lives and breathes the electronic signals in the environment around it. The movement of TOBI's 3 “organs” each represent a type of electronic data: WiFi strength, bluetooth connections, and electromagnetic noise."],
            [1, "TOBI Intro", "../assets/tobi/intro.gif"],
            [3, "PROJECT OVERVIEW"],
            [0, "Built for shared spaces, TOBI was designed as a colony of organisms spread throughout a building's rooms and hallways. Individually, each member reveals the electronic signals in the immediate area around it. This gives users insight into specific metrics like the Wifi strength in a particular room or local electrical activity. As a colony, however, TOBI provides a picture of the state of a building as a whole, one that's experienced by observing the changes in data from room to room, highlighting the highly spacial nature of the data."],
            [0, "Why organic forms? Although we might think of the electronic world as being precise and exacting, it is also invisible and alien to our biological senses in many ways. For example, representing electromagnetic noise on a graph provides an precise depiction of the data. However, to someone without the proper context or data literacy skills that graph doesn't mean much. Some meaning is implied when the data is high or low, however, there is no emotional weight attached to number or real world connection."],
            [0, "When I chose to represent these electronics data with organic movement, I hoped to sacrifice the precision of a graph for our intuitive sense for how a living organ, or organism should move. Indeed, while TOBI might not be as immediately useful as a data analytics tool, I hope it will make data more tangible, evocative, and relatable. TOBI’s long term value as a tool increases over time as a user develops a closer relationship with the organs and what their movements represent. However, its immediate value comes from the striking contrast it poses between artificial input and organic representation, forcing users to ask questions about how we think about and interact the invisible electronic environment around us."],
            [4, "Form Exploration", ["../assets/tobi/ches.webp", "../assets/tobi/bioRef.webp"], ["../assets/tobi/process.webp", "../assets/tobi/journeyMap.webp"]],
            [3, "PROCESS OVERVIEW"],
            [0, "TOBI's organs were inspired by work in the soft robotics field. Each organ is a hollow silicone structure with multiple chambers that are pneumatically actuated by air pumps and valves controlled via Arduino. Designing the form and movement of each organ, I drew from various forms I saw in the real world, particularly in sea creatures and microbiology as well as normal human organs. I looked for a range of forms and actuation that could accommodate discrete and continuous data with a consistent aesthetic while also maintaining a certain degree of relatability."],
            [0, "With the forms mapped out, I moulded and casted each organ dozens of times to nail the process and create the visceral effects I wanted. I also needed assemble the electronics and physical housings complete TOBI's physical form."],
            [4, "TOBI Organs", ["../assets/tobi/demo.gif", "../assets/tobi/lungs.gif"], ["../assets/tobi/flagella.gif", "../assets/tobi/ampullae.gif"]],
            [3, "REFLECTION"],
            [0, "This project was an opportunity to push my knowledge and technical skills with technologies like Arduino and soft robotics manufacturing, but also softer skills like communicating an abstract concept in a intriguing way and designing a unique visceral experience. While I am happy with the result as a whole, there is still so much potential in further developing both TOBI’s organs and  everything surrounding them, making TOBI more communicative as a data visualization tool and a thought provoking as an installation."],
            [1, "", "../assets/tobi/sket.webp"],
        ]
    },
    { //HFI
        key: "HFI",
        pDescription: "Humanizing Comment Sections on the Internet",
        pBlurbs: [
            "Research, UI/UX Design, Prototyping",
            "N/A",
            "6 weeks"
        ],
        links: [
            "",
        ],
        mImage: "./assets/thumbnails/hfiTn.webp",
        cContent: [
            [2, "A proposal for more human comment sections through motion tracking and avatars"],
            [1, "", "./assets/historyFutureInt/figures.webp"],
            [3, "PROJECT OVERVIEW"],
            [3, "This project is still under construction, send an email to learn more!"],
            [0, "While today's comment sections are undeniable effective to some degree in affording conversations between strangers, a number of issues have emerged from the format."],
            [0, "Instead of promoting constructive discussions about the content they are built around, comment sections often become hotbed for toxicity and serve to generate conflict and a polarized audience, especially in political situations."],
            [0, "Additionally, most people feel disengaged from the both comment sections themselves, with most indicating they did not feel a connection to commenters with an even smaller minority of users actually participating in conversations within comment sections."],
            [0, "The goal of this project is to find ways to add some of the nuance of face to face conversations back into comment sections. Specifically, I am looking at gestures, tone, and emotion. This prototype takes the form of an web extension that adds a layer of metadata on top of existing comment sections. Combining gesture and emotion into an avatar that gestures along with a sentence as well as an optional audio component."],
            [0, "Users would be able to start from a variety of input devices. For example, users with a webcam and microphone would be able to generate gestures and audio captured from those input devices. Gestures could be translated into avatar movement and audio could be transcribed to also have a corresponding text format. Conversely, a user with only a keyboard might indicate an emotion or tone in a sentence for the avatar to generate gestures and movements based off the text and indicated tone."],
        ]
    },
    { //SOMA
        key: "SMA",
        pDescription: "A virtual recipe resource that visualizes the most popular dishes by month",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "Alison Hu, Richard Zhou",
            "6 weeks"
        ],
        links: [
            "https://puddle-griffin-721.notion.site/PROJECT-02-Environments-Studio-IV-366560df767742cbbdadbdb9188bebc8",
        ],
        mImage: "./assets/thumbnails/somaNail.webp",
        cContent: [
            [2, "SOMA is a inflatable puppet that motions and gestures based on speech. As you talk to SOMA, it manifests the cadence and emotion of your speech in real time. SOMA is an exploration into how gestures and body language communicate."],
            [4, "SOMA Behavioral Diagrams", ["../assets/soma/gestures.webp"], ["../assets/soma/chart.webp"]],
            [3, "PROJECT OVERVIEW"],
            [0, "Nonverbal communication factors like body language, gestures, and facial expressions have been shown to carry as much, if not more meaning than the semantic meaning of the words we speak. However, they often go unnoticed as they’re processed by our subconscious minds. While we typically use nonverbal forms of communication to contextualize our words, we wanted to ask: can we reconstruct gestures and body language from speech alone?"],
            [0, "As for the vessel of these gestures, we settled on an inflatable puppet that could stretch and bend and bounce across a full range of expression. To pilot this inflatable, we created a system of pulleys and strings controlled by an Arduino which is fed data from an audio processing js site."],
            [1, "SOMA Puppet Process", "../assets/soma/proto.webp"],
            [3, "PROCESS OVERVIEW"],
            [0, "Along with concept development, my primary role in this project was to develop the Arduino controllers and half of the backend JS that derived cadence, emotion, and intensity from the raw data."],
            [0, "Aside from the technical experienced I gained with Arduino, assembling physical prototypes, and backend development, I learned most about abstracting human gestures and poses. To recreate the range of gestures SOMA would need to express, I studied gestures and body language both in research and in the people around me. With these references in mind, we created a range of behaviors adapted for SOMA that could work across the continuous spectrum of inputs."],
            [1, "Journey Map", "../assets/soma/journeyMap.webp"],
            [3, "REFLECTION"],
            [0, "SOMA was intended to be a thought provoking experiment. However, I believe what we learned about producing body language and gesture from speech, even in the limited way SOMA achieved it, can be applicable in a broad variety of situations. The same techniques could be applied to creating more expressive digital avatars for online communication and so much more!"],
            [1, "", "../assets/soma/ender.webp"],
        ]
    },
    { //FAVORITE FOODS
        key: "FFM",
        pDescription: "A virtual recipe resource that visualizes the most popular dishes by month",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "Maggie Ma, Adam Grant",
            "6 weeks"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Favorite-Foods-By-The-Month-8fe21323bd3e422eb1f7cedf1439a521",
            "https://dszhusb.github.io/CDT-Sandbox/"
        ],
        mImage: "./assets/favoriteFoods/asparagusCap.webp",
        cContent: [
            [2, "Favorite Foods by the Months is a recipe resource and data exploration website. Drawing from Google Trends and NYT APIs, it displays the 'trendiest' foods in each month."],
            [1, "Favorite Foods by the Months Landing Page", "../assets/favoriteFoods/ffbtmOverview.webp"],
            [3, "PROJECT OVERVIEW"],
            [0, "Scrolling down from the introduction page, visitors are presented a timeline of the months of the year with the trendiest foods of each month listed in descending order. Selecting a food expands the column to list specific recipes for that food. Along with a thumbnail and brief description, visitors are linked to the full recipe on NYT Cooking."],
            [0, "Our final result seeks to modify the relationship between the visitor and the act of looking for a recipe. For most of human history, people were limited to the ingredients grown in their location and at that time of year with the recipes passed down to them. Today, globalization has given us access to nearly any food in any season with millions of recipes on the internet. We now group food with categories like cuisine, healthiness, spiciness, and so on. To some degree, factors like seasonality and local availability have become more of a preference than a restriction. Favorite Foods by the Month seeks to highlight the seasonal, monthly, or even holiday based nature of food by centering the connection between food and time once more."],
            [4, "Recipe Screencaps", ["../assets/favoriteFoods/ffbtmSC1.webp", "../assets/favoriteFoods/ffbtmSC3.webp"], ["../assets/favoriteFoods/ffbtmSC2.webp", "../assets/favoriteFoods/ffbtmSC4.webp"]],
            [3, "PROCESS OVERVIEW"],
            [0, "I was primarily involved in the concept building and development of Favorite Foods by the Month. Starting with the topic of food, we started by brainstorming the different ways we could visualize an interesting narrative. After a series of iterations, we eventually settled on a theme of time and seasonality. With that in mind, we began a cycle of iteration and feedback, eventually settling on a format of displaying a timeline of the most popular aggregated foods in each month."],
            [0, "From that point on, my primary role was in front end and backend development. On the backend side, we made use of node.js and express.js to access data from NYT API and Google Trends API for recipe data and popularity respectively. On the backend side, our primary challenge actually came from sourcing a list of foods to search with. We quickly realized it was extremely difficult to find a list of foods with the right level of specificity. Most lists we found were either extremely specific and limited, such as lists of a corporations products or nutritional in focus and too broad. To circumvent this issue, we used word processing on every NYT recipe to strip away descriptors and modifiers to create our own dataset. "],
            [4, "Process Screencaps", ["../assets/favoriteFoods/ffbtmData.webp", "../assets/favoriteFoods/ffbtmCircles.webp"], ["../assets/favoriteFoods/visualSystem.webp", "../assets/favoriteFoods/process.webp"]],
            [3, "REFLECTION"],
            [0, "On the front end, we coded everything in the website with native HTML and CSS. Originally, we had planned to create embedded graphs and visualizations with p5.js canvases, however, feedback sessions with users showed that they produced more visual clutter than useful insight. Looking back on the process with my current knowledge, using a framework like react or svelte would have sped up the development and increased our options for interaction."],
            [0, "Working on Favorite Foods by The Months provided an interesting challenge from both the design and development perspectives. Iterating on the website's UI/UX, we sought to make the website as informative as possible at each stage without being overwhelming. On the development side, we learned to process data through API and to serve and display that data through the front and backend portions of a website."],
            [1, "", "../assets/favoriteFoods/ffbtmBottom.webp"]
        ]
    },
    { //LOL
        key: "LDV",
        pDescription: "A data visualization exploration of aesthetic representations of in game player data.",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "N/A",
            "1 week"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/League-of-Legends-Data-Visualization-5722e5c0fa1e429cb5f8f2ab6667efd7",
            "https://dszhusb.github.io/giftFromTheFuture/",
        ],
        mImage: "./assets/thumbnails/lolNail.png",
        cContent: [
            [2, "A data visualization sketch that seeks to capture the emotional context of data in an aesthetic way."],
            [1, "Split Character Visualization", "./assets/leagueViz/splitCap.png"],
            [3, "PROJECT OVERVIEW"],
            [0, "Statistics tracking in video games is limited to the contexts of achievement and performance. In single player games, achievement based systems emerged from players seeking an extra reward for extraordinary feats or completion. In multiplayer games in-game leaderboards and external stat trackers primarily exist as tools aimed at improving in the game."],
            [0, "However, players' relationships to the games have evolved over the years beyond just the contexts of competition and achievement. To afford player's desire to express their identities in-game, it's become common place for developers to create and sell aesthetic upgrades to a player's characters, profiles, etc to allow for more personalization. While a player's personal relationship has been explored in-game, this opportunity has not yet been explored in the realm of game stats and meta-data."],
            [1, "Combined Visualization", "./assets/leagueViz/single.png"],
            [3, "REFLECTION"],
            [0, "My goal for this quick visualization was to create a representation of game stats that reflects a player's personal connection to that game, visualizing personal game data for the purpose of preserving memories, a sense of identity, and a personal experience. I'd like the end product to have the social impact of data visualizations of other types of digital experiences, ex. Spotify Wrapped."],
        ]
    },
    { //ORGANIC
        key: "OFR",
        pDescription: "An ongoing exploration of producing organic form through computational means.",
        pBlurbs: [
            "Coding, Making, and Prototyping",
            "N/A",
            "6 weeks -> ∞"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Favorite-Foods-By-The-Month-8fe21323bd3e422eb1f7cedf1439a521",
        ],
        mImage: "./assets/organicArtificial/organicArtificial.webp",
        cContent: [
            [2, "Organic Form, Artificial Rules is an ongoing exploration of generative design and making."],
            [4, "Early Shell Generation Exploration", ["../assets/organicArtificial/3D Shell-3.webp"], ["../assets/organicArtificial/spiralConstruction.webp"]],
            [5, "Click for a new shell. Press 's' to save your own shell!", { comp: TakeShell }],
            [3, "PROJECT OVERVIEW"],
            [0, "Starting as an inquiry into the mathematics behind the growth of sea shells, trees, and leaves, the theme of organic form emerging from the artificial rules has emerged again and again throughout my making process."],
            [0, "I've chosen to explore this theme through a six stage process: Identifying a pattern of growth in nature, exploring the mathematical principles behind it, investigating the pattern through a series of sketches, exploring its construction through code, generating a 3D model, and finally 3D printing, laser cutting, and or casting a physical model. Originally starting as a semester long process, this project has become an ongoing journey since."],
            [4, "Sketch Explorations", ["../assets/organicArtificial/sketch1.webp", "../assets/organicArtificial/sketch2.webp"], ["../assets/organicArtificial/sketch3.webp", "../assets/organicArtificial/notes.webp"]],
            [3, "PROCESS OVERVIEW"],
            [0, "Early on, there were two forms that interested me, the sea shell and voronoi pattern. Starting with raw form, I begin with a series of sketches and observations of the form itself. With this in mind, I looked into the formula behind the spiral of the shell and created a 2D shell generator in Processing that also sought to include some of the randomness involved in the growth of shells in the real world."],
            [4, "Voronoi Exploration", ["../assets/organicArtificial/2dVoronoi.webp"], ["../assets/organicArtificial/3dVoronoi.webp"]],
            [0, "From this 2D form, I picked a single shell and created a 3D model in Blender to 3D print, bringing it into the physical realm. With this 3D print, I created a series of negatives with silicone to produce moulds for material exploration. To complement the form and origin of the shell, I settled on using concrete and a mixture of silicone to recreate the shell. "],
            [4, "Early Shell Generation Exploration", ["../assets/organicArtificial/ShellsEarly1.gif"], ["../assets/organicArtificial/ShellsEarly2.gif"]],
            [3, "REFLECTION"],
            [0, "This project is important to me personally as both an exploration of a fascinating theme but also as a vehicle to explore novel ways of making and thinking. Most projects are constrained by prompts, the needs of users, and a problem to address, which is important for their effectiveness. However, the value of this exploration comes from the thinking and techniques it produces that may not be useful in the moment, but applicable in the future."],
            [1, "", "../assets/organicArtificial/buffer.webp"]
        ]
    },
    { //PORTFOLIO
        key: "PWS",
        pDescription: "Portfolio Website",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "N/A",
            "Ongoing"
        ],
        links: [
            "https://github.com/dszhusb/dszhusd"
        ],
        mImage: "./assets/site/portfolioBanner.webp",
        cContent: [
            [2, "Welcome to my portfolio website! In these pages, I have assembled a collection of my work, but also a vision of how personality and interactivity on the internet could be."],
            [4, "Project Thumbnails", ["../assets/thumbnails/daisyNail.webp", "../assets/thumbnails/sketchNail.webp"], ["../assets/thumbnails/favoriteFoodsNail.webp", "../assets/thumbnails/computationNail.webp"]],
            [3, "PROJECT OVERVIEW"],
            [0, "So, what's with this page? In many ways, this site has become a project in itself. As a designer, coder, and all around curious person, I took it upon myself years ago to slap together my own website and it's been growing and evolving since then."],
            [0, "Starting with early figma prototypes and sketches, I iterated over a number of designs before implementing it in code. This site was built with Svelte.js on the frontend and deployed with Vercel. Interactive animations and assets were largely produced with Processing or p5.js and combine prerendered content with a live code."],
            [0, "Along with being a showcase of my work, this site serves another agenda. One of my deeply held beliefs is that the web (where silly things like physics don't apply) should be filled with fun and character. With Processing, p5.js, and Svelte, I'm continuously exploring how this site can embody that sense of play :)"],
            [4, "Major Site Iterations", ["../assets/site/v1.webp", "../assets/site/v3.webp"], ["../assets/site/v2.webp", "../assets/site/v4.webp"]],
            [3, "PROCESS OVERVIEW"],
            [0, "Over the course of the last few years, this site has gone through several major aesthetic overhauls. Early on I explored a skeumorphic desk-like interface, one that was near and dear to my heart. However, my techical skills at the time led me to abandon that concept at the time for a more standard and quickly implementable approach."],
            [0, "As I was worked to build my aesthetic and technical capabilities, I gradually cycled through a few stock designs as I learned how to code with more advanced frameworks and developed an look and feel that I felt fit my personality. Fresh off the more abstract desk design, I decided to start with standard formats for readability and ease of understanding."],
            [0, "Eventually as I gained more experience, I settled on the current visual style. Starting with a basic grid and templated system, I've gradually added more movement, color, and other bells and whistles. While each pages has become more dense and colorful, I've tried to keep the core legibility in mind, challenging my understanding of hierarchy and other design principles with dynamic colors, animations, and other content."],
            [1, "Shell Assets", "../assets/site/shellOrg.webp"],
            [3, "WHAT'S UP WITH THE SHELLS?"],
            [0, "Emerging out of my exploration from the project Organic Forms, Artificial Rules, I discovered a way of generating a content for consistent and interesting aesthetic that I felt would be perfect for branding my site."],
            [0, "The shell motif first started when I picked up the book \"Theoretical Morphology\" by George R. McGhee Jr abandoned in a hallway at CMU. It presents a fascinating look into a mathematical perspective behind how the body plans of organisms can be modeled and predicted, both the plans that exist now but also ones that could theoretically exist had evolution nudged them in a slightly different way."],
            [0, "Among the various discussions in the book, I was particularly struck by a chart of how shell shapes morph as you change the parameters behind the model behind their construction. Building off of the formula provided as well as making my own tweaks from my own experimentation and research, the first shell generator was born in Processing. I was fascinated with how a little randomness here and there in the parameters could produce such disperate shapes and sizes. Making a few changes for aesthetic purposes, I started adapting the generator for use in my website."],
            [0, "Included above are twenty shells generated in processing which I played with to identify four colors: a primary, secondary, tertiary, and text highlight color. These twenty prerendered shells became visual building blocks for the site you see now with the colors and images associated with each shell providing the color palettes of the site."],
            [1, "Planning 'About'", "../assets/site/about.webp"],
            [3, "PLANNING INTERACTIVITY"],
            [0, "One of the unique challenges of working with interactive code has been conceptualizing, planning, and prototyping interactions that would only fully emerge in code. Above I've included a peek into the planning for one of these elements - the about page."],
            [0, "I used a number of tricks to aid in the prototyping process. For example, before adapting the Processing code to p5.js I took screenshots of a processing prototype with different densities, background colors, and other placements to import into Figma to help me decide on the visual direction even without having a live version of the code. Because there aren't design prototyping tools with creative code, this type of website takes a lot of experimentation to develop a workflow and style that works for you."],
            [4, "Development Process", ["../assets/site/dev.webp", "../assets/site/figma.webp"], ["../assets/site/svelte.webp", "../assets/site/processing.webp"]],
            [3, "REFLECTION"],
            [0, "Working on this portfolio websites has been one of my longest running exercises, improving my visual design and coding skills. I've had so much fun working on implementing fun ideas without any restriction and learning technical skills that have become applicable to other projects I'm working on. I am currently working to refine the site and rebuild the site with sveltekit to provide opportunities for more ideas that require more involved backend integrations."]
        ],
    },
    { //DASH
        key: "DSH",
        pDescription: "A VUI assistant that helps children learn how to read. This prototype makes use of p5.js along with the riTa and speech libraries.",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "Malika Khurana, Caroline Song",
            "6 weeks"
        ],
        links: [
            "https://www.notion.so/Dash-The-voice-user-interface-that-helps-children-learn-to-read-3fc977d0d7af45b5b0fa0b55bf60fc63",
            "https://merlerker.github.io/cdt/cdt-vui/ui_flow/",
        ],
        mImage: "./assets/dash/dashNail.png",
        cContent: [
            [2, "According to UNESCO, in 2020 the number of children experiencing reading difficulties rose from 460 million to 584 million. The rise of more than 20%, wiped out two decades of education gains. To address this growing problem, we decided to create an intelligent assistant to support children and their parents/teachers as they learn to read books aloud."],
            [1, "DASH Gestures", "../assets/dash/dash.png"],
            [3, "PROJECT OVERVIEW"],
            [0, "Right now, there are plenty other apps that children can use to read. But with the addition of VUI, guidance can be customized to respond immediately to a child's specific needs. The goal for this project was to prototype a responsive VUI that responds to a child's input, be it asking a question, pausing on a sentence, or mispronouncing a word."],
            [0, "Our VUI has two primary components, Dash (the VUI itself) and a word pronunciation aid. Users choose a book from the library to read aloud. As they progress, Dash will be on standby to answer questions and help along the way. When a spelling or pronunciation question is asked, Dash will be replaced with our pronunciation aid."],
            [1, "DASH Interface", "../assets/dash/Reading.png"],
            [3, "PROCESS OVERVIEW"],
            [0, "Dash was written primarily with p5.js, p5 speech, and riTa. We embedded a p5.js canvas into an html page to create the final prototype."]
        ]
    },
    { //DIGITAL
        key: "DRT",
        pDescription: "Digital Art",
        cImages: [
            "../assets/apArt/cloudBrain.webp",
            "../assets/apArt/fallBridge.webp",
            "../assets/apArt/flyingChairs.webp",
            "../assets/apArt/moonBeam.webp",
            "../assets/apArt/morningRoutine.webp",
            "../assets/apArt/pinkCroc.webp",
            "../assets/apArt/seaPillars.webp",
            "../assets/apArt/smallWorld.webp",
            "../assets/apArt/stirFry.webp",
            "../assets/apArt/waterLily.webp",
            "../assets/apArt/yardSlide.webp"
        ]
    },
    { //BARILLA
        key: "BUP",
        pDescription: "Speculative pop-up shop designed for Barilla. Visitors design a custom pasta shape and recipe for a loved one through exploring characteristics of their relationship.",
        pBlurbs: [
            "Environments Design",
            "Se A Kim",
            "6 weeks"
        ],
        links: [
            "https://nasal-pomelo-984.notion.site/Experiential-Design-40b1b7d859aa4fe6aa923658364a0344",
        ],
        mImage: "./assets/thumbnails/barillaNail.png",
        cContent: [
            [1, "", "../assets/barilla/barilla.png"],
            [1, "", "../assets/barilla/square.png"],
            [1, "", "../assets/barilla/pastaBox.png"]
        ]
    },
    { //SKETCHES
        key: "SBK",
        pDescription: "Sketchbook",
        cImages: [
            "../assets/sketchBook/sb_02.webp",
            "../assets/sketchBook/sb_01.webp",
            "../assets/sketchBook/sb_03.webp",
            "../assets/sketchBook/sb_04.webp",
            "../assets/sketchBook/sb_05.webp",
            "../assets/sketchBook/sb_06.webp",
            "../assets/sketchBook/sb_07.webp",
            "../assets/sketchBook/sb_08.webp",
            "../assets/sketchBook/sb_09.webp",
            "../assets/sketchBook/sb_10.webp",
            "../assets/sketchBook/sb_11.webp",
            "../assets/sketchBook/sb_12.webp",
            "../assets/sketchBook/sb_13.webp",
            "../assets/sketchBook/sb_14.webp",
            "../assets/sketchBook/sb_15.webp",
            "../assets/sketchBook/sb_16.webp",
            "../assets/sketchBook/sb_17.webp",
            "../assets/sketchBook/sb_18.webp",
            "../assets/sketchBook/sb_19.webp",
            "../assets/sketchBook/sb_20.webp",
            "../assets/sketchBook/sb_21.webp"
        ]
    },
    { //COMPUTATIONAL
        key: "CRT",
        pDescription: "Computational Art (Processing + P5js)",
        cImages: [
            "../assets/creativeCoding/yeram.gif",
            "../assets/creativeCoding/noiseField.gif",
            "../assets/creativeCoding/oceanTile.gif",
            "../assets/creativeCoding/starryNight.gif",
            "../assets/creativeCoding/strangeRocks.gif",
            "../assets/creativeCoding/gradientGrid.gif",
            "../assets/creativeCoding/hardViz.gif",
            "../assets/creativeCoding/clock.gif",
        ]
    },
    { //WATER VESSEL
        key: "VES",
        pDescription: "WATER VESSEL FORM EXPLORATION",
        cImages: [
            "../assets/waterVessel/wv_f1.jpeg",
            "../assets/waterVessel/wv_f2.jpeg",
            "../assets/waterVessel/wv_f3.jpeg",
            "../assets/waterVessel/wv_f4.jpeg",
            "../assets/waterVessel/wv_p1.jpeg",
            "../assets/waterVessel/wv_p2.jpeg",
            "../assets/waterVessel/wv_p3.jpeg",
            "../assets/waterVessel/wv_p4.jpeg",
            "../assets/waterVessel/wv_p5.jpeg",
            "../assets/waterVessel/wv_p6.jpeg",
            "../assets/waterVessel/wv_p7.jpeg",
            "../assets/waterVessel/wv_p8.jpeg",
            "../assets/waterVessel/wv_p9.jpeg",
            "../assets/waterVessel/wv_p10.jpeg",
            "../assets/waterVessel/wv_p11.jpeg",
            "../assets/waterVessel/wv_p12.jpeg",
            "../assets/waterVessel/wv_p13.jpeg",
            "../assets/waterVessel/wv_s1.jpg",
            "../assets/waterVessel/wv_s2.jpeg",
            "../assets/waterVessel/wv_s3.jpg",
        ]
    }
]