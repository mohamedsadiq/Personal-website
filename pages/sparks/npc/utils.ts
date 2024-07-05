// utils.ts
export const W = 'w';
export const A = 'a';
export const S = 's';
export const D = 'd';
export const SHIFT = 'shift';
export const DIRECTIONS = [W, A, S, D];

export class KeyDisplay {
    parent: HTMLDivElement;
    map: Map<string, HTMLDivElement> = new Map();

    constructor() {
        this.parent = document.createElement("div");
        this.parent.className = 'key-display-parent'; // Parent container class
        document.body.append(this.parent);

        DIRECTIONS.forEach((key) => {
            const div = document.createElement("div");
            div.textContent = key;
            div.className = 'key-display'; // Default class
            this.map.set(key, div);
            this.parent.append(div); // Append to parent container
        });
        this.updatePosition();
    }

    public updatePosition() {
        const positions = {
            [W]: { top: `${window.innerHeight - 150}px`, left: `${300}px` },
            [A]: { top: `${window.innerHeight - 100}px`, left: `${200}px` },
            [S]: { top: `${window.innerHeight - 100}px`, left: `${300}px` },
            [D]: { top: `${window.innerHeight - 100}px`, left: `${400}px` },
            [SHIFT]: { top: `${window.innerHeight - 100}px`, left: `${50}px` }
        };

        DIRECTIONS.forEach((key) => {
            const div = this.map.get(key);
            if (div) {
                div.style.top = positions[key].top;
                div.style.left = positions[key].left;
            }
        });
    }

    public down(key: string) {
        const div = this.map.get(key.toLowerCase());
        if (div) {
            div.classList.add('key-down');
        }
    }

    public up(key: string) {
        const div = this.map.get(key.toLowerCase());
        if (div) {
            div.classList.remove('key-down');
        }
    }
}
