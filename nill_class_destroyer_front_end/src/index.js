

const gameBoard = document.querySelector('.game-board')

function renderShooterTiles(){
    let shooterTileArray = []
    for(i=0; i<11; i++) {
        let randNum = Math.floor(Math.random() * 4) + 1  
            if (randNum === 1){
                let tile = charlieTile.create('nill_class_destroyer_front_end/bubble_images/charlie_bubble.png')
                 shooterTileArray.push(tile)
                 debugger
            }
            if (randNum === 2){
                let tile = neerajTile.create('nill_class_destroyer_front_end/bubble_images/neeraj_bubble.png')
                shooterTileArray.push(tile)
                debugger
            }
            if (randNum === 3){
                let tile = simonTile.create('nill_class_destroyer_front_end/bubble_images/simon_bubble.png')
                shooterTileArray.push(tile)
                debugger
            }
            if (randNum === 4){
                let tile = wilfTile.create('nill_class_destroyer_front_end/bubble_images/wilf_bubble.png')
                shooterTileArray.push(tile)
                debugger
            }
            debugger
        return shooterTileArray
    }//end of for
}//end of shooter function




document.addEventListener('DOMContentLoaded', function(event){
    
    renderShooterTiles()
    
    console.log('RENDERING SHOOTER TILES')
    //when the page loads load the shooter tile array and render on the page
    //then render the tiles randomly on the board in the shooting area
    //render the canon/have it start moving back and forth 


})


gameBoard.addEventListener('click', function(event){
    console.log(event)
    debugger

})//end of gameBoard event listener



/* <div class = "game-board">
<div class="box" data-x=1 data-y="A" id="blue"></div>
<div class="box" data-x=2 data-y="A"></div>
<div class="box" data-x=3 data-y="A"></div>
<div class="box" data-x=1 data-y="B"></div>
<div class="box" data-x=2 data-y="B"></div>
<div class="box" data-x=3 data-y="B"></div>
<div class="box" data-x=1 data-y="C"></div>
<div class="box" data-x=2 data-y="C"></div>
<div class="box" data-x=3 data-y="C"></div> 
</div> */