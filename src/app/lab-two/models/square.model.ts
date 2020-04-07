export class SquareModel {
    private readonly identifier: string;
    private readonly x: number;
    private readonly y: number;
    private readonly size: number;
    private readonly type: 'fill' | 'stroke';
    private readonly color: string;

    constructor(
        {
            identifier,
            x,
            y,
            size,
            type,
            color
        }: SquareModel) {
        this.identifier = identifier;
        this.x = x;
        this.y = y;
        this.size = size;
        this.type = type;
        this.color = color;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        if (this.type === 'fill') {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        } else {
            ctx.strokeStyle = this.color;
            ctx.strokeRect(this.x, this.y, this.size, this.size);
        }
    }
}
