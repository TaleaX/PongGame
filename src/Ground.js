import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { Constants } from './Constants';

export default class Ground {
    
    constructor(color) {
        this.width = Constants.gameField.x;
        this.height = Constants.gameField.z;
        this.color = color;
        this.material = new THREE.MeshStandardMaterial({color: this.color, side: THREE.DoubleSide, wireframe: false, metalness: 1, roughness: 0.4});
        this.physicMaterial = new CANNON.Material();
        this.geometry = new THREE.PlaneGeometry(this.width, this.height);
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.physicBody = new CANNON.Body({
                                            shape: new CANNON.Box(new CANNON.Vec3(this.width, this.height, 0.01)),
                                            type: CANNON.Body.STATIC,
                                            material: this.physicMaterial
                                        });
        this.initGround()
        this.speed = 0;
    }

    initGround() {
        const gridHelper = new THREE.GridHelper(30);
        this.mesh.rotation.x = -0.5 * Math.PI;
        this.mesh.receiveShadow = true;

        this.physicBody.quaternion.setFromEuler(-0.5 * Math.PI, 0, 0);
        /* Constants.scene.add(gridHelper); */
        Constants.scene.add(this.mesh);
    }
}