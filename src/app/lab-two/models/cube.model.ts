export class CubeModel {
    private readonly identifier: string;
    private readonly x: number;
    private readonly y: number;
    private readonly height: number;
    private readonly width: number;
    private readonly shift: number;
    private readonly type: 'fill' | 'stroke';
    private readonly color: string;

    private readonly cubeOnePoints: number[][];
    private readonly cubeTwoPoints: number[][];

    constructor(
        {identifier, x, y, type, color, height, width, shift}: CubeModel
    ) {
        this.identifier = identifier;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.shift = shift;
        this.type = type;
        this.color = color;
        this.cubeOnePoints = this.getCubeOnePoints();
        this.cubeTwoPoints = this.getCubeTwoPoints();
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        if (this.type === 'stroke') {
            ctx.strokeStyle = this.color;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.strokeRect(this.x + this.shift, this.y + this.shift, this.width, this.height);
            // draw connecting lines
            ctx.lineJoin = 'round';

            ctx.beginPath();
            for (let i = 0; i < 4; i++) {
                ctx.moveTo(this.cubeOnePoints[i][0], this.cubeOnePoints[i][1]);
                ctx.lineTo(this.cubeTwoPoints[i][0], this.cubeTwoPoints[i][1]);
            }

            ctx.closePath();
            ctx.stroke();
        }

    }

    private getCubeOnePoints(): number[][] {
        const points = [];
        points[0] = [this.x, this.y];
        points[1] = [this.x + this.width, this.y];
        points[2] = [this.x + this.width, this.y + this.height];
        points[3] = [this.x, this.y + this.height];
        return points;
    }

    private getCubeTwoPoints(): number[][] {
        const newX = this.x + this.shift;
        const newY = this.y + this.shift;
        const points = [];
        points[0] = [newX, newY];
        points[1] = [newX + this.width, newY];
        points[2] = [newX + this.width, newY + this.height];
        points[3] = [newX, newY + this.height];
        return points;
    }
}
