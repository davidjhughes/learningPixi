let type = "WebGL",
Application = PIXI.Application,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite,
TextureCache = PIXI.utils.TextureCache,
Rectangle = PIXI.Rectangle

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
.add(["../images/monkeyface.jpg", "../images/09.png"])
.on("progress", loadProgressHandler)
.load(setup);

function setup(){
    // let monkey = new Sprite(resources["../images/monkeyface.jpg"].texture);
    // app.stage.addChild(monkey);
    // monkey.scale.set(0.5, 0.5);
    // monkey.anchor.set(0.5,0.5);
    // monkey.position.set(monkey.width, monkey.height);
    // monkey.rotation = 0.6;
    let tileset = TextureCache["../images/09.png"];
    let rect = new Rectangle(192, 128, 64, 64);
    tileset.frame = rect;
    let rocket = new Sprite(tileset);
    rocket.position.set(32,32);
    app.stage.addChild(rocket);
    // app.renderer.render(stage);
    console.log("All Files Loaded.");
}

function loadProgressHandler(loader, resource){
    console.log("loading: " + resource.url);

    console.log("progress: " + loader.progress + "%");

    console.log("loading: " + resource.name);
}
