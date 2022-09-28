class Road{
    constructor(x,width,laneCount=3){
        this.x = x;
        this.width= width;
        this.laneCount = laneCount;

        this.left = x-width/2;
        this.right = x+width/2;

        const infinity = 1000000;
        this.top = -infinity;
        this.bottom = infinity;

        const topLeft={x:this.left,y:this.top};
        const topRight={x:this.right,y:this.top};
        const bottomLeft={x:this.left,y:this.bottom};
        const bottomRight={x:this.right,y:this.bottom};
        this.borders=[
            [topLeft,bottomLeft],
            [topRight,bottomRight]
        ];
    }
    //provides functionality to the center Car object
    getLaneCenter(laneIndex){
        let laneWidth = this.width/this.laneCount;
        return this.left+laneWidth/2+
            Math.min(laneIndex,this.laneCount-1)*laneWidth;
    }
    //draws the road and its lanes
    draw(ctx){
        ctx.lineWidth =5;
        ctx.strokeStyle="white";

        for (let i = 1;i<=this.laneCount-1;i++) {
            const x = lerp(
                this.left,
                this.right,
                i/this.laneCount
            );

            // //adds dashed lanes
             ctx.setLineDash([20,20]);

            //#region REPLACED BY CODE ABOVE TO SET
            // //BORDERS ON THE ROAD
            //
            //adds dashed lanes
            // if(i>0 && i<this.laneCount){
            //     ctx.setLineDash([20,20]);
            // } else{
            //     ctx.setLineDash([])
            // }
//#endregion

            //draws based on lerp(linear Interpolation)
            // function
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x,this.bottom);
            ctx.stroke();

        }
        //#region REPLACED BY ABOVE CODE WITH THE LERP FUNCTION
        // //draws left side of road
        // ctx.beginPath();
        // ctx.moveTo(this.left, this.top);
        // ctx.lineTo(this.left,this.bottom);
        // ctx.stroke();

        // //draws right side of road
        // ctx.beginPath();
        // ctx.moveTo(this.right, this.top);
        // ctx.lineTo(this.right,this.bottom);
        // ctx.stroke();
//#endregion

        //sets the borders
        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x,border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });

    }

}

