let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type="canvas"
}

let app = new PIXI.Application({
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