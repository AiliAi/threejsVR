const controls = new OrbitControls( camera, renderer.domElement );

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

controls = new OrbitControls( camera, renderer.domElement );

var light = new THREE.DirectionalLight(0xdddddd, 0.8);
//light.target.position = 160;
light.position.set(6, 6, 6);
scene.add( light );

var lightAmb = new THREE.AmbientLight(0x404040, 0.5);
scene.add( lightAmb );

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	}
	
	window.addEventListener( 'resize', onWindowResize, false );
	

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();