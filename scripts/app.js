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
.add("../images/sprites/sprites.json")
.on("progress", loadProgressHandler)
.load(setup);

let dungeon, explorer, treasure, blob, id;

function setup(){
    // let monkey = new Sprite(resources["../images/monkeyface.jpg"].texture);
    // app.stage.addChild(monkey);
    // monkey.scale.set(0.5, 0.5);
    // monkey.anchor.set(0.5,0.5);
    // monkey.position.set(monkey.width, monkey.height);
    // monkey.rotation = 0.6;
    // let tileset = TextureCache["../images/09.png"];
    // let rect = new Rectangle(192, 128, 64, 64);
    // tileset.frame = rect;
    // let rocket = new Sprite(tileset);
    // rocket.position.set(32,32);
    // app.stage.addChild(rocket);
    // app.renderer.render(stage);

    id = resources["../images/sprites/sprites.json"].textures;
    dungeon = new Sprite(id["dungeon.png"]);
    app.stage.addChild(dungeon);
    explorer = new Sprite(id["explorer.png"]);
    app.stage.addChild(explorer);
    treasure = new Sprite(id["treasure.png"]);
    app.stage.addChild(treasure);

    
    
    treasure.position.set(
        app.stage.width  - treasure.width - 48,
        app.stage.height / 2 - treasure.height / 2
    )
    
    explorer.position.set(
        68,
        app.stage.height / 2 - explorer.height / 2
    )


    //Make the blobs
  let numberOfBlobs = 6,
  spacing = 48,
  xOffset = 150;

    //Make as many blobs as there are `numberOfBlobs`
    for (let i = 0; i < numberOfBlobs; i++) {

        //Make a blob
        let blob = new Sprite(id["blob.png"]);

        //Space each blob horizontally according to the `spacing` value.
        //`xOffset` determines the point from the left of the screen
        //at which the first blob should be added.
        let x = spacing * i + xOffset;

        //Give the blob a random y position
        //(`randomInt` is a custom function - see below)
        let y = randomInt(0, app.stage.height - blob.height);

        //Set the blob's position
        blob.x = x;
        blob.y = y;

        //Add the blob sprite to the stage
        app.stage.addChild(blob);
    }
}

//The `randomInt` helper function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

function loadProgressHandler(loader, resource){
    console.log("loading: " + resource.url);

    console.log("progress: " + loader.progress + "%");

    console.log("loading: " + resource.name);
}
