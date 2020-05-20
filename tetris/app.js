document.addEventListener( 'DOMContentLoaded' , () => { 


    const grid = document.querySelector('.grid')
    let squares = Array.from(grid.querySelectorAll('div'))
    const width = 10
    const height = 20
    let currentPosition = 4
    let interval

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]
    
    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


    let random = Math.floor(Math.random() * theTetrominoes.length)
    let currentRotation = 0
    let current = theTetrominoes[random][currentRotation]

    //draw shapes
    function draw(){

        current.forEach( index =>  squares[currentPosition + index].classList.add('block') )

    }
    
    function undraw(){

        current.forEach( index => squares[currentPosition + index].classList.remove('block'))
    }

    let f1

    function moveBlock(e){
        f1=0
        if(e.keyCode === 39) {

            for(let i=0;i<4;i++ ){
                if(((currentPosition + current[i]) % width ) > (width -1)){
                    f1 = 1        
                }
            }

            if(!flag){
                undraw()
                currentPosition +=1
            }
        }
    }

    let flag
    //MyOwnMoveDown
    function moveDown(){
        flag=0
        undraw()
        currentPosition += width
        
        for(let i=0;i<4;i++){
            if(currentPosition + current[i] > width*height-1){
                console.log("Hai!")
                clearInterval(interval)
                flag=1
            }

        }
        if(!flag) draw()

    }

    interval = setInterval(moveDown, 100)

    document.addEventListener('keyup', moveBlock)

    // draw()
   // undraw()
    interval = max++
})  