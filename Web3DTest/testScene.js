var createScene = function() {
	var scene = new BABYLON.Scene(engine);
	scene.clearColor = new BABYLON.Color3(0.6,0.6,0.6);

	function renderLoop(){
	 box.rotation.x += 0.01;
	 box.rotation.y += 0.01;
	 box.rotation.z += 0.01;
	 scene.render();
	}
	engine.runRenderLoop(renderLoop);

	var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0,0,-10),scene);

	var light = new BABYLON.PointLight("light", new BABYLON.Vector3(10,10, -10),scene);
	// var light2 = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);

	var box = new BABYLON.Mesh.CreateBox("box",2,scene);
	// box.rotation.x = -0.2;
	// box.rotation.y = -0.4;
	// box.material = new BABYLON.StandardMaterial("material",scene);
	// box.material.emmisiveColor = new BABYLON.Color3(0, 0.58, 0.86); 

	return scene;
}
