import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const lColor = 0xFFFFFF;
const boxColor = 0x00ff00;

const geometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);
const material = new THREE.MeshBasicMaterial({ color: lColor });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;
camera.position.y = -7;


//create a blue LineBasicMaterial
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-5, 0, 0));
points.push(new THREE.Vector3(-5, -14, 0));
points.push(new THREE.Vector3(5, -14, 0));
points.push(new THREE.Vector3(5, 0, 0));
const geometryLine = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometryLine, lineMaterial);
scene.add(line);


function animate() {
    requestAnimationFrame(animate);
    cube.position.y -= 0.05;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();