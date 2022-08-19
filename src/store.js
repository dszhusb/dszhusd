// GLOBAL VARIABLE STORE

// IMPORTING STORE PROPERTIES
import { writable, derived } from 'svelte/store';

//IMPORT PAGES
import Work from "./pages/Work.svelte";
import About from "./pages/About.svelte";
import ProjectTemplate from "./pages/ProjectTemplate.svelte";
import GalleryTemplate from "./pages/GalleryTemplate.svelte";
import Construction from "./pages/Construction.svelte";

//PAGE VARIABLES
export const cPage = writable(0);
export const pPage = derived(cPage, $cPage => $cPage - 2);
export const pCat = derived(cPage, $cPage => projects[$cPage].cat);
export const filters = writable([true, true, true]);
export const fNotAll = derived(filters, $filters => $filters.includes(false));

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
    { name: "WORK", cat: 3, comp: Work, link: 0 },
    { name: "ABOUT", cat: 3, comp: About, link: 1 },
    { name: "TOBI", cat: 0, img: "tobiNail.png", comp: ProjectTemplate, link: 2 },
    { name: "SOMA", cat: 0, img: "somaNail.png", comp: Construction, link: 3 },
    { name: "FAVORITE FOODS BY THE MONTH", cat: 0, img: "favoriteFoodsNail.png", comp: ProjectTemplate, link: 4 },
    { name: "LEAGUE OF LEGENDS DATA VISUALIZATION", cat: 1, img: "lolNail.png", comp: ProjectTemplate, link: 5 },
    { name: "ORGANIC FORM FROM ARTIFICIAL RULES", cat: 1, img: "oAnail.png", comp: Construction, link: 6 },
    { name: "PORTFOLIO WEBSITE", cat: 0, img: "folioNail.png", comp: Construction, link: 7 },
    { name: "DASH", cat: 0, img: "dashNail.png", comp: ProjectTemplate, link: 8 },
    // { name: "LEAGUE OF LEGENDS DATA VISUALIZATION", cat: 1, img: "lolNail.png", comp: ProjectTemplate, link: 5 },
    { name: "DIGITAL ART", cat: 2, img: "artNail.png", comp: GalleryTemplate, link: 9 },
    { name: "BARILLA POP UP", cat: 0, img: "barillaNail.png", comp: ProjectTemplate, link: 10 },
    { name: "SKETCHBOOK", cat: 2, img: "sketchNail.png", comp: GalleryTemplate, link: 11 },
    { name: "COMPUTATIONAL ART", cat: 2, img: "computationNail.png", comp: GalleryTemplate, link: 12 },
    { name: "WATER VESSEL", cat: 1, img: "vesselNail.png", comp: GalleryTemplate, link: 13 }
];

//Project Contents
export const projectContent = writable([
    { //TOBI
        pDescription: "TOBI: an electronic organism that reveals electronic signals in its environment",
        pBlurbs: [
            "Concept Development, Prototyping",
            "N/A",
            "6 weeks"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Organic-Organism-TOBI-34da0f7d414643f98b11546d170e0695",
        ],
        mImage: "./assets/thumbnails/tobiNail.png",
        cContent: [
            [2, "TOBI is an electronic organism that lives and breathes the electronic signals in the environment around it. TOBI's organs are pneumatically actuated, with the motion of each organ representing a type of electronic data being collected by Mites specifically, WiFi strength, bluetooth connections, and electromagnetic noise."],
            [0, "Built for shared spaces, TOBI was designed as a colony of organisms spread throughout a building's rooms and hallways. The behavior of each member changes depending on the local state of its immediate surroundings, allowing occupants to compare the characteristics of each of the spaces they inhabit as they pass from room to room."],
            [1, "../assets/tobi/bioRef.png"],
            [0, "For example, users are able to see how WiFi signal fades as each room gets farther from the router, or how an office space with myriad devices is much louder electronically than a quiet library."],
            [1, "../assets/tobi/sket.jpg"],
            [0, "Aside from the practical applications the data, I hope users will also develop an emotional bond both TOBI and the electronic world it reveals. The electronic world often slips our mind invisible and intangible except when it manifests through the functionality of our devices."],
            [1, "../assets/tobi/lungs.gif"],
            [0, "By representing data as organic movements, I hope to not only make that data more tangible but also more evocative and relatable, trading exact numbers and measures for our instinctual sense for how things should move and breathe. I hope the comparison between the artificial input and the organic response creates a compelling contrast, representing artificial and exacting electronic data in a subjective, emotional way."]
        ]
    },
    { //SOMA
        pDescription: "A virtual recipe resource that visualizes the most popular dishes by month",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "Alison Hu, Richard Zhou",
            "6 weeks"
        ],
        links: [
            "https://puddle-griffin-721.notion.site/PROJECT-02-Environments-Studio-IV-366560df767742cbbdadbdb9188bebc8",
            "https://dszhusb.github.io/CDT-Sandbox/",
        ],
        mImage: "./assets/thumbnails/somaNail.png",
        cContent: [
            [1, "../assets/soma/gestures.png"],
            [1, "../assets/soma/chart.png"],
            [1, "../assets/soma/proto.png"],
        ]
    },
    { //FAVORITE FOODS
        pDescription: "A virtual recipe resource that visualizes the most popular dishes by month",
        pBlurbs: [
            "UI/UX Design, Front/Backend Development",
            "Maggie Ma, Adam Grant",
            "6 weeks"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Favorite-Foods-By-The-Month-8fe21323bd3e422eb1f7cedf1439a521",
            "https://dszhusb.github.io/CDT-Sandbox/",
        ],
        mImage: "./assets/favoriteFoods/asparagusCap.png",
        cContent: [
            [2, "Favorite Foods by The Months, is a data visualization project that seeks to combine the playfulness of data exploration with a traditional recipe resource."],
            [0, "Scrolling down from the introduction page, visitors are presented a timeline of the months of the year with the trendiest foods of each month listed in descending order. Selecting a food expands the column to list specific recipes for that food. Along with a thumbnail and brief description, visitors are linked to the full recipe on NYT Cooking."],
            [1, "../assets/favoriteFoods/ffbtmOverview.png"],
            [1, "../assets/favoriteFoods/ffbtmDetail.png"],
            [0, "Working on Favorite Foods by The Months provided an interesting challenge from both the design and development perspectives. Iterating on the website's UI/UX, we sought to make the website as informative as possible at each stage without being overwhelming. On the development side, we learned to process data through API and to serve and display that data through the front and backend portions of a website."],
            [0, "Our final result seeks to modify the relationship between the visitor and the act of looking for a recipe. Recipes have traditionally been passed down in a regional or familial manner. Globalization, the internet, and widespread publications changed that dynamic. Favorite Foods by The Months seeks to take this concept one step further, using data to aggregate a nationwide picture of popular foods."]
        ]
    },
    { //LOL
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
            [2, "Currently stat tracking in video games is limited to the contexts of achievement and performance. In single player games, achievement based systems emerged from players seeking an extra reward for extraordinary feats or completion. In multiplayer games in-game leaderboards and external stat trackers primarily exist as tools aimed at improving in the game."],
            [0, "However, players' relationships to the games have evolved over the years beyond just the contexts of competition and achievement. To afford player's desire to express their identities in-game, it's become common place for developers to create and sell aesthetic upgrades to a player's characters, profiles, etc to allow for more personalization. While a player's personal relationship has been explored in-game, this opportunity has not yet been explored in the realm of game stats and meta-data."],
            [1, "./assets/leagueViz/single.png"],
            [0, "My goal for this project is to create a representation of game stats that reflects a player's personal connection to that game, visualizing personal game data for the purpose of preserving memories, a sense of identity, and a personal experience. I'd like the end product to have the social impact of data visualizations of other types of digital experiences, ex. Spotify Wrapped."],
            [1, "./assets/leagueViz/splitCap.png"],
        ]
    },
    { //ORGANIC
        pDescription: "An ongoing exploration of producing organic form from artificial rules. This project explores the process of generating 2D and 3D forms then bringing those models into the physical world",
        pBlurbs: [
            "Coding, Making, and Prototyping",
            "N/A",
            "6 weeks"
        ],
        links: [
            "https://dandy-catcher-a71.notion.site/Favorite-Foods-By-The-Month-8fe21323bd3e422eb1f7cedf1439a521",
        ],
        mImage: "./assets/organicArtificial/organicArtificial.png",
        cContent: [
            [1, "../assets/organicArtificial/sketch2.jpeg"],
            [1, "../assets/organicArtificial/3D Shell.JPG"]
        ]
    },
    { //PORTFOLIO
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
            [0, "Right now, there are plenty other apps that children can use to read. But with the addition of VUI, guidance can be customized to respond immediately to a child's specific needs. The goal for this project was to prototype a responsive VUI that responds to a child's input, be it asking a question, pausing on a sentence, or mispronouncing a word."],
            [1, "../assets/dash/dash.png"],
            [0, "Our VUI has two primary components, Dash (the VUI itself) and a word pronunciation aid. Users choose a book from the library to read aloud. As they progress, Dash will be on standby to answer questions and help along the way. When a spelling or pronunciation question is asked, Dash will be replaced with our pronunciation aid."],
            [1, "../assets/dash/Reading.png"],
            [0, "Dash was written primarily with p5.js, p5 speech, and riTa. We embedded a p5.js canvas into an html page to create the final prototype."]
        ]
    },
    { //DIGITAL
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
            [1, "../assets/barilla/barilla.png"],
            [1, "../assets/barilla/square.png"],
            [1, "../assets/barilla/pastaBox.png"]
        ]
    },
    { //SKETCHES
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
])