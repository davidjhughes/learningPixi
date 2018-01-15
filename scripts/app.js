let type = "WebGL",
Application = PIXI.Application,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite
if(!PIXI.utils.isWebGLSupported()){
    type="canvas"
}

let app = new Application({
    width: 256, 
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1
});

app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// PIXI.utils.sayHello(type)
document.body.appendChild(app.view);

loader
.add("monkeyface", "../images/monkeyface.jpg")
.on("progress", loadProgressHandler)
.load(setup);

function setup(){
    let monkey = new Sprite(resources.monkeyface.texture);
    app.stage.addChild(monkey);
    console.log("setup");
}

function loadProgressHandler(){
    console.log("loading");
}
