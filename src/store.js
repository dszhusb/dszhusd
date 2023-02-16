// GLOBAL VARIABLE STORE

// IMPORTING STORE PROPERTIES
import { writable, derived } from 'svelte/store';
import router from "page";

//IMPORT PAGES
import Work from "./pages/Work.svelte";
import About from "./pages/About.svelte";
import ProjectTemplate from "./pages/ProjectTemplate.svelte";
import GalleryTemplate from "./pages/GalleryTemplate.svelte";
import Construction from "./pages/Construction.svelte";

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
    { name: "TOBI", cat: 0, img: "tobiNail.jpg", comp: ProjectTemplate, key: "TBI" },
    { name: "HUMANIZING COMMENT SECTIONS", cat: 0, img: "hfiTn.png", comp: ProjectTemplate, key: "HFI" },
    { name: "SOMA", cat: 0, img: "somaNail.png", comp: ProjectTemplate, key: "SMA" },
    { name: "FAVORITE FOODS BY THE MONTH", cat: 0, img: "favoriteFoodsNail.png", comp: ProjectTemplate, key: "FFM" },
    { name: "SKETCHBOOK", cat: 2, img: "sketchNail.png", comp: GalleryTemplate, key: "SBK" },
    { name: "ORGANIC FORM FROM ARTIFICIAL RULES", cat: 1, img: "oAnail.png", comp: ProjectTemplate, key: "OFR" },
    { name: "PORTFOLIO WEBSITE", cat: 0, img: "folioNail.png", comp: Construction, key: "PWS" },
    { name: "DASH", cat: 0, img: "dashNail.png", comp: ProjectTemplate, key: "DSH" },
    { name: "LEAGUE OF LEGENDS DATA VISUALIZATION", cat: 1, img: "lolNail.png", comp: ProjectTemplate, key: "LDV" },
    { name: "DIGITAL ART", cat: 2, img: "artNail.png", comp: GalleryTemplate, key: "DRT" },
    { name: "BARILLA POP UP", cat: 0, img: "barillaNail.png", comp: ProjectTemplate, key: "BUP" },
    { name: "COMPUTATIONAL ART", cat: 2, img: "computationNail.png", comp: GalleryTemplate, key: "CRT" },
    { name: "WATER VESSEL", cat: 1, img: "vesselNail.png", comp: GalleryTemplate, key: "VES" }
];

//Project Contents
export const projectContent = [//hardcoding structures is OK in the short term, but you should replace with a load from json/request
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
        mImage: "./assets/thumbnails/tobiNail.jpg",
        cContent: [
            [2, "TOBI is an electronic organism that lives and breathes the electronic signals in the environment around it. The movement of TOBI’s 3 “organs” each represent a type of electronic data: WiFi strength, bluetooth connections, and electromagnetic noise."],
            [1, "TOBI Intro", "../assets/tobi/intro.gif"],
            [3, "PROJECT OVERVIEW"],
            [0, "Built for shared spaces, TOBI was designed as a colony of organisms spread throughout a building's rooms and hallways. Individually, each member reveals the electronic signals in the immediate area around it. This gives users insight into specific metrics like the Wifi strength in a particular room or local electrical activity. As a colony, however, TOBI provides a picture of the state of a building as a whole, one that's experienced by observing the changes in data from room to room, highlighting the highly spacial nature of the data."],
            [0, "Why organic forms? Although we might think of the electronic world as being precise and exacting, it is also invisible and alien to our biological senses in many ways. For example, representing electromagnetic noise on a graph provides an precise depiction of the data. However, to someone without the proper context or data literacy skills that graph doesn't mean much. Some meaning is implied when the data is high or low, however, there is no emotional weight attached to number or real world connection."],
            [0, "When I chose to represent these electronics data with organic movement, I hoped to sacrifice the precision of a graph for our intuitive sense for how a living organ, or organism should move. Indeed, while TOBI might not be as immediately useful as a data analytics tool, I hope it will make data more tangible, evocative, and relatable. TOBI’s long term value as a tool increases over time as a user develops a closer relationship with the organs and what their movements represent. However, its immediate value comes from the striking contrast it poses between artificial input and organic representation, forcing users to ask questions about how we think about and interact the invisible electronic environment around us."],
            [4, "Form Exploration", ["../assets/tobi/ches.png", "../assets/tobi/bioRef.png"], ["../assets/tobi/process.png", "../assets/tobi/journeyMap.png"]],
            [3, "PROCESS OVERVIEW"],
            [0, "TOBI's organs were inspired by work in the soft robotics field. Each organ is a hollow silicone structure with multiple chambers that are pneumatically actuated by air pumps and valves controlled via Arduino. Designing the form and movement of each organ, I drew from various forms I saw in the real world, particularly in sea creatures and microbiology as well as normal human organs. I looked for a range of forms and actuation that could accommodate discrete and continuous data with a consistent aesthetic while also maintaining a certain degree of relatability."],
            [0, "With the forms mapped out, I moulded and casted each organ dozens of times to nail the process and create the visceral effects I wanted. I also needed assemble the electronics and physical housings complete TOBI's physical form."],
            [4, "TOBI Organs", ["../assets/tobi/demo.gif", "../assets/tobi/lungs.gif"], ["../assets/tobi/flagella.gif", "../assets/tobi/ampullae.gif"]],
            [3, "REFLECTION"],
            [0, "This project was an opportunity to push my knowledge and technical skills with technologies like Arduino and soft robotics manufacturing, but also softer skills like communicating an abstract concept in a intriguing way and designing a unique visceral experience. While I am happy with the result as a whole, there is still so much potential in further developing both TOBI’s organs and  everything surrounding them, making TOBI more communicative as a data visualization tool and a thought provoking as an installation."],
            [1, "", "../assets/tobi/sket.jpg"],
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
        mImage: "./assets/thumbnails/hfiTn.png",
        cContent: [
            [2, "A proposal for more human comment sections through motion tracking and avatars"],
            [1, "", "./assets/historyFutureInt/figures.png"],
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
        mImage: "./assets/thumbnails/somaNail.png",
        cContent: [
            [2, "SOMA is a inflatable puppet that motions and gestures based on speech. As you talk to SOMA, it manifests the cadence and emotion of your speech in real time. SOMA is an exploration into how gestures and body language communicate."],
            [4, "SOMA Behavioral Diagrams", ["../assets/soma/gestures.png"], ["../assets/soma/chart.png"]],
            [3, "PROJECT OVERVIEW"],
            [0, "Nonverbal communication factors like body language, gestures, and facial expressions have been shown to carry as much, if not more meaning than the semantic meaning of the words we speak. However, they often go unnoticed as they’re processed by our subconscious minds. While we typically use nonverbal forms of communication to contextualize our words, we wanted to ask: can we reconstruct gestures and body language from speech alone?"],
            [0, "As for the vessel of these gestures, we settled on an inflatable puppet that could stretch and bend and bounce across a full range of expression. To pilot this inflatable, we created a system of pulleys and strings controlled by an Arduino which is fed data from an audio processing js site."],
            [1, "SOMA Puppet Process", "../assets/soma/proto.png"],
            [3, "PROCESS OVERVIEW"],
            [0, "Along with concept development, my primary role in this project was to develop the Arduino controllers and half of the backend JS that derived cadence, emotion, and intensity from the raw data."],
            [0, "Aside from the technical experienced I gained with Arduino, assembling physical prototypes, and backend development, I learned most about abstracting human gestures and poses. To recreate the range of gestures SOMA would need to express, I studied gestures and body language both in research and in the people around me. With these references in mind, we created a range of behaviors adapted for SOMA that could work across the continuous spectrum of inputs."],
            [1, "Journey Map", "../assets/soma/journeyMap.png"],
            [3, "REFLECTION"],
            [0, "SOMA was intended to be a thought provoking experiment. However, I believe what we learned about producing body language and gesture from speech, even in the limited way SOMA achieved it, can be applicable in a broad variety of situations. The same techniques could be applied to creating more expressive digital avatars for online communication and so much more!"],
            [1, "", "../assets/soma/ender.png"],
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
        mImage: "./assets/favoriteFoods/asparagusCap.png",
        cContent: [
            [2, "Favorite Foods by the Months is a recipe resource and data exploration website. Drawing from Google Trends and NYT APIs, it displays the 'trendiest' foods in each month."],
            [1, "Favorite Foods by the Months Landing Page", "../assets/favoriteFoods/ffbtmOverview.png"],
            [3, "PROJECT OVERVIEW"],
            [0, "Scrolling down from the introduction page, visitors are presented a timeline of the months of the year with the trendiest foods of each month listed in descending order. Selecting a food expands the column to list specific recipes for that food. Along with a thumbnail and brief description, visitors are linked to the full recipe on NYT Cooking."],
            [0, "Our final result seeks to modify the relationship between the visitor and the act of looking for a recipe. For most of human history, people were limited to the ingredients grown in their location and at that time of year with the recipes passed down to them. Today, globalization has given us access to nearly any food in any season with millions of recipes on the internet. We now group food with categories like cuisine, healthiness, spiciness, and so on. To some degree, factors like seasonality and local availability have become more of a preference than a restriction. Favorite Foods by the Month seeks to highlight the seasonal, monthly, or even holiday based nature of food by centering the connection between food and time once more."],
            [4, "Recipe Screencaps", ["../assets/favoriteFoods/ffbtmSC1.png","../assets/favoriteFoods/ffbtmSC3.png"], ["../assets/favoriteFoods/ffbtmSC2.png","../assets/favoriteFoods/ffbtmSC4.png"]],
            [3, "PROCESS OVERVIEW"],
            [0, "I was primarily involved in the concept building and development of Favorite Foods by the Month. Starting with the topic of food, we started by brainstorming the different ways we could visualize an interesting narrative. After a series of iterations, we eventually settled on a theme of time and seasonality. With that in mind, we began a cycle of iteration and feedback, eventually settling on a format of displaying a timeline of the most popular aggregated foods in each month."],
            [0, "From that point on, my primary role was in front end and backend development. On the backend side, we made use of node.js and express.js to access data from NYT API and Google Trends API for recipe data and popularity respectively. On the backend side, our primary challenge actually came from sourcing a list of foods to search with. We quickly realized it was extremely difficult to find a list of foods with the right level of specificity. Most lists we found were either extremely specific and limited, such as lists of a corporations products or nutritional in focus and too broad. To circumvent this issue, we used word processing on every NYT recipe to strip away descriptors and modifiers to create our own dataset. "],
            [4, "Process Screencaps", ["../assets/favoriteFoods/ffbtmData.png","../assets/favoriteFoods/ffbtmCircles.png"], ["../assets/favoriteFoods/visualSystem.png","../assets/favoriteFoods/process.png"]],
            [3, "REFLECTION"],
            [0, "On the front end, we coded everything in the website with native HTML and CSS. Originally, we had planned to create embedded graphs and visualizations with p5.js canvases, however, feedback sessions with users showed that they produced more visual clutter than useful insight. Looking back on the process with my current knowledge, using a framework like react or svelte would have sped up the development and increased our options for interaction."],
            [0, "Working on Favorite Foods by The Months provided an interesting challenge from both the design and development perspectives. Iterating on the website's UI/UX, we sought to make the website as informative as possible at each stage without being overwhelming. On the development side, we learned to process data through API and to serve and display that data through the front and backend portions of a website."],
            [1, "", "../assets/favoriteFoods/ffbtmBottom.png"]
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
        mImage: "./assets/organicArtificial/organicArtificial.png",
        cContent: [
            [2, "Organic Form, Artificial Rules is an ongoing exploration of generative design and making."],
            [4, "Early Shell Generation Exploration", ["../assets/organicArtificial/3D Shell-3.jpg"], ["../assets/organicArtificial/spiralConstruction.png"]],
            [5, "Click for a new shell. Press 's' to save your own shell!", {comp: TakeShell}],
            [3, "PROJECT OVERVIEW"],
            [0, "Starting as an inquiry into the mathematics behind the growth of sea shells, trees, and leaves, the theme of organic form emerging from the artificial rules has emerged again and again throughout my making process."],
            [0, "I've chosen to explore this theme through a six stage process: Identifying a pattern of growth in nature, exploring the mathematical principles behind it, investigating the pattern through a series of sketches, exploring its construction through code, generating a 3D model, and finally 3D printing, laser cutting, and or casting a physical model. Originally starting as a semester long process, this project has become an ongoing journey since."],
            [4, "Sketch Explorations", ["../assets/organicArtificial/sketch1.jpeg", "../assets/organicArtificial/sketch2.jpeg"],["../assets/organicArtificial/sketch3.jpeg","../assets/organicArtificial/notes.jpeg"]],
            [3, "PROCESS OVERVIEW"],
            [0, "Early on, there were two forms that interested me, the sea shell and voronoi pattern. Starting with raw form, I begin with a series of sketches and observations of the form itself. With this in mind, I looked into the formula behind the spiral of the shell and created a 2D shell generator in Processing that also sought to include some of the randomness involved in the growth of shells in the real world."],
            [4, "Voronoi Exploration", ["../assets/organicArtificial/2dVoronoi.png"],["../assets/organicArtificial/3dVoronoi.JPG"]],
            [0, "From this 2D form, I picked a single shell and created a 3D model in Blender to 3D print, bringing it into the physical realm. With this 3D print, I created a series of negatives with silicone to produce moulds for material exploration. To complement the form and origin of the shell, I settled on using concrete and a mixture of silicone to recreate the shell. "],
            [4, "Early Shell Generation Exploration", ["../assets/organicArtificial/ShellsEarly1.gif"], ["../assets/organicArtificial/ShellsEarly2.gif"]],
            [3, "REFLECTION"],
            [0, "This project is important to me personally as both an exploration of a fascinating theme but also as a vehicle to explore novel ways of making and thinking. Most projects are constrained by prompts, the needs of users, and a problem to address, which is important for their effectiveness. However, the value of this exploration comes from the thinking and techniques it produces that may not be useful in the moment, but applicable in the future."],
            [1, "", "../assets/organicArtificial/buffer.png"]
        ]
    },
    { //PORTFOLIO
        key: "PWS",
        pDescription: "Portfolio Website",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "N/A",
            "3 weeks"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Favorite-Foods-By-The-Month-8fe21323bd3e422eb1f7cedf1439a521",
            "https://dszhusb.github.io/CDT-Sandbox/",
        ],
        mImage: "./assets/thumbnails/folioNail.png",
        cContent: []
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
            "../assets/apArt/cloudBrain.jpg",
            "../assets/apArt/fallBridge.jpg",
            "../assets/apArt/flyingChairs.jpg",
            "../assets/apArt/moonBeam.jpg",
            "../assets/apArt/morningRoutine.jpg",
            "../assets/apArt/pinkCroc.jpg",
            "../assets/apArt/seaPillars.jpg",
            "../assets/apArt/smallWorld.jpg",
            "../assets/apArt/stirFry.jpg",
            "../assets/apArt/waterLily.jpg",
            "../assets/apArt/yardSlide.jpg"
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
            "../assets/sketchBook/sb_02.png",
            "../assets/sketchBook/sb_01.jpeg",
            "../assets/sketchBook/sb_03.png",
            "../assets/sketchBook/sb_04.png",
            "../assets/sketchBook/sb_05.jpeg",
            "../assets/sketchBook/sb_06.jpg",
            "../assets/sketchBook/sb_07.jpeg",
            "../assets/sketchBook/sb_08.png",
            "../assets/sketchBook/sb_09.png",
            "../assets/sketchBook/sb_10.png",
            "../assets/sketchBook/sb_11.png",
            "../assets/sketchBook/sb_12.png",
            "../assets/sketchBook/sb_13.png",
            "../assets/sketchBook/sb_14.jpeg",
            "../assets/sketchBook/sb_15.jpeg",
            "../assets/sketchBook/sb_16.jpeg",
            "../assets/sketchBook/sb_17.jpeg",
            "../assets/sketchBook/sb_18.jpeg",
            "../assets/sketchBook/sb_19.jpeg",
            "../assets/sketchBook/sb_20.jpeg",
            "../assets/sketchBook/sb_21.jpeg"
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