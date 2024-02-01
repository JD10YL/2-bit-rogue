
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    //% blockId=dark_magic_dont_copy_or_richard_will_be_angry_or_really_just_disappointed_but_isnt_that_worse_in_a_way
    //% block="all sprites"
    export function allSprites(): Sprite[] {
        return (game.currentScene().physicsEngine as any).sprites as Sprite[];
    }

    let nextTree = 0;
    class Node {
        tree: number;
        constructor(public x: number, public y: number) {
            this.tree = nextTree++;
        }
    }

    class Edge {
        constructor(public weight: number, public from: Node, public to: Node) { }
    }

    //% blockId=kruskal
    //% block="generate maze with width $width height $height"
    export function genMaze(width: number, height: number) {
        const nodes: Node[] = [];
        const edges: Edge[] = [];

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                nodes.push(new Node(x, y));
            }
        }

        for (const node of nodes) {
            let next = nodes.find(n => n.x === node.x + 1 && n.y === node.y)
            if (next) {
                edges.push(new Edge(randint(0, 99999), node, next))
            }

            next = nodes.find(n => n.x === node.x && n.y === node.y + 1)
            if (next) {
                edges.push(new Edge(randint(0, 99999), node, next))
            }
        }

        const heap = new Heap<Edge>((a, b) => a.weight - b.weight);

        for (const edge of edges) {
            heap.push(edge)
        }

        const graph: Edge[] = [];

        while (heap.length) {
            const e = heap.pop();

            if (e.to.tree === e.from.tree) {
                continue;
            }
            else {
                const from = e.from.tree;
                const to = e.to.tree;
                for (const other of graph) {
                    if (other.from.tree === from || other.to.tree === from) {
                        other.from.tree = to;
                        other.to.tree = to;
                    }
                }
                e.from.tree = to;
                graph.push(e);
            }
        }

        const out = image.create(width * 2 - 1, height * 2 - 1);
        for (const edge of graph) {
            out.drawLine(edge.from.x * 2, edge.from.y * 2, edge.to.x * 2, edge.to.y * 2, 1);
        }

        return out;
    }
}
