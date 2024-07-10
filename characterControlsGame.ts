import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class CharacterControls {

    model: THREE.Group
    mixer: THREE.AnimationMixer
    animationsMap: Map<string, THREE.AnimationAction> = new Map() // Walk, Run, Idle
    orbitControl: OrbitControls
    camera: THREE.Camera

    // state
    currentAction: string = 'Idle'
    
    // constants
    fadeDuration: number = 0.2

    constructor(model: THREE.Group,
        mixer: THREE.AnimationMixer, animationsMap: Map<string, THREE.AnimationAction>,
        orbitControl: OrbitControls, camera: THREE.Camera) {
        this.model = model
        this.mixer = mixer
        this.animationsMap = animationsMap
        this.orbitControl = orbitControl
        this.camera = camera

        // Start with idle animation
        const idleAction = this.animationsMap.get('Idle')
        if (idleAction) {
            idleAction.play()
        }
    }

    public update(delta: number) {
        // Ensure only idle animation is played
        const idleAction = this.animationsMap.get('Idle')
        if (idleAction && this.currentAction !== 'Idle') {
            const current = this.animationsMap.get(this.currentAction)
            if (current) {
                current.fadeOut(this.fadeDuration)
            }
            idleAction.reset().fadeIn(this.fadeDuration).play()
            this.currentAction = 'Idle'
        }

        // Update mixer
        this.mixer.update(delta)

        // No movement logic for idle mode
    }
}
