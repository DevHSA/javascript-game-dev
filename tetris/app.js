document.addEventListener('DOMContentLoaded', () => {


    const grid = document.querySelector('.grid')
    let squares = Array.from(grid.querySelectorAll('div'))
    const displaySquares = document.querySelectorAll('.previous-grid div')
    const width = 10
    const height = 20
    let currentPosition = 4


    //Assign Functions
    function control(e) {

        if (e.keyCode === 39) {
            moveRight()
        }
        else if (e.keyCode === 37) {
            moveLeft()
        }
        else if (e.keyCode === 38) {
            rotate()
        }
        else if (e.keyCode === 40) {
            moveDown()
        }


    }

    document.addEventListener('keyup', control)

    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


    let random = Math.floor(Math.random() * theTetrominoes.length)
    let currentRotation = 0
    let current = theTetrominoes[random][currentRotation]

    //draw shapes
    function draw() {

        current.forEach(index => squares[currentPosition + index].classList.add('block'))

    }

    function undraw() {

        current.forEach(index => squares[currentPosition + index].classList.remove('block'))
    }


    function moveDown() {

        undraw()
        currentPosition += width
        draw()
        //freeze()

    }


    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
        if (!isAtRightEdge) {
            currentPosition += 1
        }
        if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            currentPosition -= 1
        }
        draw()

    }

    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        if (!isAtLeftEdge) {
            currentPosition -= 1
        }
        if (current.some(index => squares[currentPosition + index].classList.contains('block2'))) {
            currentPosition += 1
        }
        draw()

    }

    function rotate() {

        undraw()
        currentRotation++
        if (currentRotation === current.length) {
            currentRotation = 0
        }

        current = theTetrominoes[random][currentRotation]
        draw()

    }

    const displayWidth = 4
    const displayIndex = 0
    let nextRandom = 0

    const smallTetrominoes = [

        [1, displayWidth+1, displayWidth*2+1, displayWidth*2+2], //L Tet
        [displayWidth+1, displayWidth+2, displayWidth*2+2,  displayWidth*2+3], //Z Tet
        [1,2,3,displayWidth+2], // T Tet 
        [1,2,displayWidth+1, displayWidth+2], // O Tet
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] // I Tet

    ]


    function displayShape(){

        displaySquares.forEach( index => index.classList.remove('block'))
        smallTetrominoes[nextRandom].forEach( index => displaySquares[displayIndex + index].classList.add('block'))
    
    }
 

    function freeze(){

        if( current.some( index => squares[currentPosition + index + width].classList.contains('block3') || 
            squares[currentPosition + index + width].classList.contains('block2')) ) {

                

            }


    }








    // let f1

    // function moveBlock(e){
    //     f1=0
    //     if(e.keyCode === 39) {

    //         for(let i=0;i<4;i++ ){
    //             if(((currentPosition + current[i]) % width ) > (width -1)){
    //                 f1 = 1        
    //             }
    //         }

    //         if(!flag){
    //             undraw()
    //             currentPosition +=1
    //         }
    //     }
    // }

    // let flag
    // //MyOwnMoveDown
    // function moveDown(){
    //     flag=0
    //     undraw()
    //     currentPosition += width

    //     for(let i=0;i<4;i++){
    //         if(currentPosition + current[i] > width*height-1){
    //             console.log("Hai!")
    //             clearInterval(interval)
    //             flag=1
    //         }

    //     }
    //     if(!flag) draw()

    // }

    // interval = setInterval(moveDown, 100)

    // document.addEventListener('keyup', moveBlock)

})  