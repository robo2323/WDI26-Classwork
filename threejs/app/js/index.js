import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
let renderer, scene, camera, cube, sphere;

function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor('#222');
  renderer.shadowMap.enabled = true;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45, //fov
    window.innerWidth / window.innerHeight, //ratio
    0.1, //near
    1000
  ); //far

  camera.position.x = 100;
  camera.position.y = 30;
  camera.position.z = 10;
  camera.lookAt(scene.position);
  scene.add(camera);

  let light2 = new THREE.DirectionalLight('#ffffff');
  light2.position.set(-40, 25, 0);
  scene.add(light2);
  light2.castShadow = true;
  light2.shadow.mapSize.height = 2048;
  light2.shadow.mapSize.width = 2048;

  let floorMat = new THREE.MeshLambertMaterial({
    color: '#aaa'
  });
  let floorGeometry = new THREE.BoxGeometry(60, 0.1, 40);
  let floor = new THREE.Mesh(floorGeometry, floorMat);
  floor.castShadow = true;
  floor.receiveShadow = true;

  scene.add(floor);

  let geometry = new THREE.BoxGeometry(10, 10, 10);
  let material = new THREE.MeshLambertMaterial({ color: 'tomato' });
  cube = new THREE.Mesh(geometry, material);
  cube.position.y = 10;
  cube.castShadow = true;
  cube.receiveShadow = true;

  //   scene.add(cube);

  let sphereGeometry = new THREE.SphereGeometry(5, 20, 20);
  let sphereMaterial = new THREE.MeshLambertMaterial({ color: 'dodgerblue' });
  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.y = 5;
  sphere.position.x = -20;
  sphere.position.z = -5;
  sphere.castShadow = true;
  sphere.receiveShadow = true;

  scene.add(sphere);
  let step = 0;
  let fade = 0;
  document.querySelector('#three').appendChild(renderer.domElement);

  //   var angle = 0;
  //   var radius = 10;
  function animate() {
    step = step + 0.06;
    requestAnimationFrame(animate);

    // camera.position.x = radius * Math.cos(angle);
    // camera.position.z = radius * Math.sin(angle);
    // camera.lookAt(sphere.position);
    // camera.updateProjectionMatrix();

    // angle += 0.01;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z -= 0.02;
    cube.position.y += 0.05;

    sphere.rotation.z -= 0.05;
    20 - fade > 0 ? (sphere.position.y = (20 - fade) * Math.abs(Math.sin(step)) + 4) : (sphere.position.y = 4);
    fade += 0.07;
    sphere.position.x += 0.1;

    renderer.render(scene, camera);
  }
  window.addEventListener('keydown', (e) => {});
  animate();
}

function addOrbitControls() {
  const controls = new OrbitControls(camera, renderer.domElement);
}

init();
addOrbitControls();
