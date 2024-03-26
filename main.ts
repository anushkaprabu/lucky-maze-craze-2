scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.siren), music.PlaybackMode.UntilDone)
    tiles.setTileAt(location, sprites.builtin.forestTiles10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeScoreBy(1)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    tiles.setTileAt(location, sprites.builtin.forestTiles10)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("Oh no! You've been caught by the dog! You lost.", DialogLayout.Bottom)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (info.score() <= 3) {
        game.showLongText("Congrats! You escaped the Maze and the traps! You win!", DialogLayout.Bottom)
        game.showLongText(game.askForString("Ive got a question, do you like St.Patricks day?"), DialogLayout.Bottom)
        game.showLongText("Well I like St.Patricks day.", DialogLayout.Bottom)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 5 . . . . . . . . 
            . . 5 . . . . . 5 . . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 5 5 5 5 5 5 5 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.setDialogTextColor(7)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 5 . . . . . . . . 
            . . 5 . . . . . 5 . . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 5 5 5 5 5 5 5 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . 5 . . . . . . . 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.gameOver(true)
    } else {
        game.showLongText("You didn't get enough coins to win! Try again and have at least three coins.", DialogLayout.Bottom)
    }
})
info.onLifeZero(function () {
    game.showLongText("Oh no! You awoke the human! You lost", DialogLayout.Bottom)
})
game.splash("Escape the maze while grabbing coins and avoiding traps. But Wait! The family dog got in and is trying to hunt you down! Hurry and find the key to escape!")
info.setScore(0)
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
music.play(music.stringPlayable("C D E D E F G F ", 188), music.PlaybackMode.UntilDone)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 7 7 f f f . . . . 
    . . . f f f 7 7 7 7 f f f . . . 
    . . f f f 5 5 5 5 5 5 f f f . . 
    . . f f 5 7 7 7 7 7 7 5 5 f . . 
    . . f 5 7 f f f f f f 7 5 f . . 
    . . f f f f 5 5 5 5 f f f f . . 
    . f f 5 f b f 4 4 f b f 5 f f . 
    . f 5 5 4 1 f d d f 1 4 5 5 f . 
    . . f 5 5 d d d d d d 5 5 f . . 
    . . . f 5 5 4 4 4 4 5 5 f . . . 
    . . 5 4 f 7 7 7 7 7 7 f 4 5 . . 
    . . 4 d f 7 7 7 7 7 7 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 15))
let mySprite2 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 15))
mySprite2.follow(mySprite, 25)
