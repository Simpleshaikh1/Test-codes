class arrayJob{
    constructor(
        //defines parameters
        name,
        volume,
        color,
        pocketNum,
        strapLength,
        lidOpen
    )   {
        //define properties
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this. strapLength ={
            left : strapLengthL,
            right:strapLengthR
        }
        this.lidOpen = lidOpen;
    }
    newStrapLength(lengthLeft, lengthRight){
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    }
}

export default Backpack;




