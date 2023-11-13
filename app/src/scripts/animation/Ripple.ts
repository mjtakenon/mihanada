import {Point} from "./Point.ts";


export class Ripple {

    private position: Point;
    private circleSize: number;
    private opacity: number;
    private context: CanvasRenderingContext2D;
    private strokeColor: string;
    private opacityStep: number;
    private status;

    private MAX_SIZE = 500;
    private ANIMATION_SPEED = 2;
    private STROKE_COLOR = [0x99, 0x99, 0x99];

    private getRGBAString(): string {
        return `rgba(
            ${Math.floor(this.STROKE_COLOR[0])},
            ${Math.floor(this.STROKE_COLOR[1])},
            ${Math.floor(this.STROKE_COLOR[2])},
            ${this.opacity}
        )`;
    }

    constructor(x: number, y: number, circleSize: number, context: CanvasRenderingContext2D) {
        this.position = new Point(x, y);
        this.circleSize = circleSize;
        this.opacity = 1;
        this.context = context;
        this.strokeColor = this.getRGBAString();

        this.opacityStep = (this.ANIMATION_SPEED / (this.MAX_SIZE - circleSize)) / 2;
    }

    public update() {
        this.circleSize = this.circleSize + this.ANIMATION_SPEED;
        this.opacity = this.opacity - this.opacityStep;
        this.strokeColor = this.getRGBAString();
    }

    public draw() {
        this.context.beginPath();
        this.context.strokeStyle = this.strokeColor;
        this.context.arc(this.position.x, this.position.y, this.circleSize, 0, 2 * Math.PI);
        this.context.stroke();
    }
}