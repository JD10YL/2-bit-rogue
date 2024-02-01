namespace SpriteKind {
    export const RandomWalker = SpriteKind.create()
    export const WallFollower = SpriteKind.create()
    export const B_B_B_Bomb = SpriteKind.create()
    export const EXPLOSION = SpriteKind.create()
    export const bomb_text = SpriteKind.create()
    export const arrow = SpriteKind.create()
    export const Following = SpriteKind.create()
    export const Item = SpriteKind.create()
    export const Spike = SpriteKind.create()
    export const EquipmentFrame = SpriteKind.create()
    export const Text = SpriteKind.create()
}
function resolveCombat () {
    for (let value of enemyKindsYouCanFIGHT) {
        for (let tempSprite of sprites.allOfKind(value)) {
            if (hero.overlapsWith(tempSprite)) {
                if (attacksRemaining > 0) {
                    attacksRemaining += -1
                    destroyEnemy(tempSprite)
                } else {
                    DEATH()
                }
            }
        }
    }
    for (let tempSprite of sprites.allOfKind(SpriteKind.arrow)) {
        if (hero.overlapsWith(tempSprite)) {
            sprites.destroy(tempSprite)
            DEATH()
        }
    }
}
sprites.onCreated(SpriteKind.RandomWalker, function (sprite) {
    sprites.setDataNumber(sprite, "direction", randint(0, 3))
    sprites.setDataNumber(sprite, "stepsRemaining", 3)
})
function openTreasureChest () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        tiles.setWallAt(value, false)
    }
    tempSprite = sprites.create(img`
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        1f1111111111111111111111111111111111111111111111111111111111111111111111111111f1
        1f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1
        1f11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11f1
        1f1111111111111111111111111111111111111111111111111111111111111111111111111111f1
        1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
        11111111111111111111111111111111111111111111111111111111111111111111111111111111
        `, SpriteKind.EquipmentFrame)
    tempSprite.z = 105
    tempSprite.y = 52
    tileUtil.replaceAllTiles(assets.tile`myTile16`, assets.tile`transparency8`)
    equipmentToGet = allEquipment._pickRandom()
    equipmentToGet.setFlag(SpriteFlag.Invisible, false)
    equipmentToGet.z = tempSprite.z + 1
    equipmentToGet.y = tempSprite.y
    attacksRemaining = sprites.readDataNumber(equipmentToGet, "durability")
}
function getTileInDirection (sprite: Sprite, direction: number) {
    if (direction == 0) {
        tempLocation = sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Top)
    } else if (direction == 1) {
        tempLocation = sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)
    } else if (direction == 2) {
        tempLocation = sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)
    } else {
        tempLocation = sprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
    }
    return tempLocation
}
function fillRect (x: number, y: number, width: number, height: number) {
    for (let indexX = 0; indexX <= width - 1; indexX++) {
        for (let indexY = 0; indexY <= height - 1; indexY++) {
            tiles.setTileAt(tiles.getTileLocation(x + indexX - Math.idiv(width, 2), y + indexY - Math.idiv(height, 2)), assets.tile`myTile1`)
        }
    }
}
spriteutils.createRenderable(100, function (screen2) {
    screen2.fillRect(0, scene.screenHeight() - 13, scene.screenWidth(), 13, 1)
    if (areWeDead) {
        spriteutils.drawTransparentImage(img`
            ....................................................................................................
            .ffff..ffff..ffff..fff...fff.......fff......fffff..fff......ffff..ffff..fff..ffff.fffff.............
            .f...f.f...f.f....f...f.f...f.....f...f.......f...f...f.....f...f.f....f...f.f......f...............
            .f...f.f...f.f....f.....f.........f...f.......f...f...f.....f...f.f....f.....f......f...............
            .f...f.f...f.f....f.....f.........f...f.......f...f...f.....f...f.f....f.....f......f...............
            .ffff..ffff..fff...fff...fff......fffff.......f...f...f.....ffff..fff...fff..fff....f...............
            .f.....ff....f........f.....f.....f...f.......f...f...f.....ff....f........f.f......f...............
            .f.....f.f...f....f...f.f...f.....f...f.......f...f...f.....f.f...f....f...f.f......f...............
            .f.....f..f..ffff..fff...fff......f...f.......f....fff......f..f..ffff..fff..ffff...f...f..f..f.....
            ....................................................................................................
            `, screen2, 5, scene.screenHeight() - 12)
    } else {
        cooldownBarWidth = 40
        screen2.fillRect(2, scene.screenHeight() - 11, cooldownBarWidth, 9, 15)
        if (cooldownBombCurrent <= 0) {
            screen2.fillRect(3, scene.screenHeight() - 10, cooldownBarWidth - 2, 7, 1)
            spriteutils.drawTransparentImage(img`
                ........................................
                ........................................
                ..fff...........f....ff..........f.f.f..
                ..f..f..........f....f.f.........f.f.f..
                ..fff......f.f..f....fff.ff.ff...f.fff..
                ..f..f.ff.fffff.ff...ff..f..ff..ff..f...
                ..ffff.ff.f.f.f.ff...f.f.ff.fff.ff..f...
                ........................................
                ........................................
                `, screen2, 2, scene.screenHeight() - 11)
        } else {
            screen2.fillRect(3, scene.screenHeight() - 10, cooldownBarWidth - 2 - Math.round((cooldownBarWidth - 2) * (cooldownBombCurrent / cooldownBombMax)), 7, 1)
        }
        for (let index = 0; index <= attacksRemaining - 1; index++) {
            spriteutils.drawTransparentImage(img`
                1 1 1 1 1 1 f f 
                1 1 1 1 1 f 1 f 
                1 1 1 1 f 1 f 1 
                1 f 1 f 1 f 1 1 
                1 f f 1 f 1 1 1 
                1 1 f f 1 1 1 1 
                1 f 1 f f 1 1 1 
                f 1 1 1 1 1 1 1 
                `, screen2, scene.screenWidth() - 10 - index * 9, scene.screenHeight() - 11)
        }
    }
})
function createBBBBomb (source: Sprite, left: boolean, fuseLength: number, explosionRadius: number) {
    if (cooldownBombCurrent > 0) {
        return
    }
    cooldownBombCurrent = cooldownBombMax
    tempSprite = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.B_B_B_Bomb)
    tiles.placeOnTile(tempSprite, source.tilemapLocation())
    sprites.setDataNumber(tempSprite, "fuse", fuseLength)
    sprites.setDataNumber(tempSprite, "radius", explosionRadius)
    tempSprite.z = 92
    tempSprite.setImage(bombFrames[sprites.readDataNumber(tempSprite, "fuse") - 1])
    tempSprite = sprites.create(img`
        fffff............fff......fff.......ffffff
        f111ff...........f1f.....ff11ff.....f1ff1f
        f1ff1f...........f1f.....f1ff1fffffff1ff1f
        f1ff1fffffffffffff1fff...f1fffff11ff111f1f
        f11111ff11fff1f1ff111ff..ff11ff1ff1ff1ff1f
        f1ff11f1ff1f1f1f1f1ff1f..ffff1f111fff1ff1f
        f1ff11f1ff1f1f1f1f1ff1f..f1ff1f1fffff1ffff
        f1111fff11ff1fff1f111ff..ff11fff111ff1ff1f
        ffffffffffffffffffffff....ffffffffffffffff
        `, SpriteKind.bomb_text)
    tiles.placeOnTile(tempSprite, source.tilemapLocation())
    tempSprite.y += -8
    tempSprite.z = 93
}
function scanForTraps (prey: Sprite) {
    tempLocation = prey.tilemapLocation()
    while (!(tiles.tileAtLocationIsWall(tempLocation))) {
        tempLocation = tempLocation.getNeighboringLocation(CollisionDirection.Left)
    }
    if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile8`)) {
        tiles.setTileAt(tempLocation, assets.tile`myTile12`)
        tempSprite = createWalkingSprite(assets.tile`myTile8`, SpriteKind.arrow)
        animation.runImageAnimation(
        tempSprite,
        [img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 5 5 5 5 5 5 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 4 4 4 4 4 4 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 2 2 2 2 2 2 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 4 4 4 4 4 4 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `],
        100,
        true
        )
        sprites.setDataNumber(tempSprite, "direction", 1)
        tiles.placeOnTile(tempSprite, tempLocation)
        tempSprite.x += 8
        destroyOverlaps(tempSprite)
    }
    tempLocation = prey.tilemapLocation()
    while (!(tiles.tileAtLocationIsWall(tempLocation))) {
        tempLocation = tempLocation.getNeighboringLocation(CollisionDirection.Top)
    }
    if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile9`)) {
        tiles.setTileAt(tempLocation, assets.tile`myTile13`)
        tempSprite = createWalkingSprite(assets.tile`myTile8`, SpriteKind.arrow)
        animation.runImageAnimation(
        tempSprite,
        [img`
            . . . . . . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . . . . . 
            `],
        100,
        true
        )
        sprites.setDataNumber(tempSprite, "direction", 2)
        tiles.placeOnTile(tempSprite, tempLocation)
        tempSprite.y += 8
        destroyOverlaps(tempSprite)
    }
    tempLocation = prey.tilemapLocation()
    while (!(tiles.tileAtLocationIsWall(tempLocation))) {
        tempLocation = tempLocation.getNeighboringLocation(CollisionDirection.Right)
    }
    if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile10`)) {
        tiles.setTileAt(tempLocation, assets.tile`myTile14`)
        tempSprite = createWalkingSprite(assets.tile`myTile8`, SpriteKind.arrow)
        sprites.setDataNumber(tempSprite, "direction", 3)
        animation.runImageAnimation(
        tempSprite,
        [img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 5 5 5 5 5 5 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 4 4 4 4 4 4 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 2 2 2 2 2 2 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . 4 4 4 4 4 4 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(tempSprite, tempLocation)
        tempSprite.x += -8
        destroyOverlaps(tempSprite)
    }
    tempLocation = prey.tilemapLocation()
    while (!(tiles.tileAtLocationIsWall(tempLocation))) {
        tempLocation = tempLocation.getNeighboringLocation(CollisionDirection.Bottom)
    }
    if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile11`)) {
        tiles.setTileAt(tempLocation, assets.tile`myTile15`)
        tempSprite = createWalkingSprite(assets.tile`myTile8`, SpriteKind.arrow)
        animation.runImageAnimation(
        tempSprite,
        [img`
            . . . . . . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . 5 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . 2 . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . 4 . . . 
            . . . . . . . . 
            `],
        100,
        true
        )
        sprites.setDataNumber(tempSprite, "direction", 0)
        tiles.placeOnTile(tempSprite, tempLocation)
        tempSprite.y += -8
        destroyOverlaps(tempSprite)
    }
}
function canEnemyMove (sprite: Sprite, direction: number) {
    tempLocation = getTileInDirection(sprite, direction)
    if (tiles.tileAtLocationIsWall(tempLocation)) {
        return false
    }
    return true
}
function generateMazeRoom () {
    myImage = custom.genMaze(5, 3)
    for (let indexX = 0; indexX <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 1; indexX++) {
        for (let indexY = 0; indexY <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 1; indexY++) {
            if (myImage.getPixel(Math.idiv(indexX - 1, 2), Math.idiv(indexY - 1, 2)) == 0) {
                tiles.setTileAt(tiles.getTileLocation(indexX, indexY), assets.tile`myTile0`)
            }
        }
    }
    for (let indexY = 0; indexY <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 1; indexY++) {
        tiles.setTileAt(tiles.getTileLocation(0, indexY), assets.tile`myTile0`)
        tiles.setTileAt(tiles.getTileLocation(19, indexY), assets.tile`myTile0`)
    }
    for (let indexX = 0; indexX <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 1; indexX++) {
        tiles.setTileAt(tiles.getTileLocation(indexX, 0), assets.tile`myTile0`)
        tiles.setTileAt(tiles.getTileLocation(indexX, 14), assets.tile`myTile0`)
    }
    roomCenters = []
    allRoomCenters = tiles.getTilesByType(assets.tile`transparency8`)
    tiles.setTileAt(allRoomCenters.removeAt(randint(0, allRoomCenters.length - 1)), assets.tile`myTile4`)
    tiles.setTileAt(allRoomCenters.removeAt(randint(0, allRoomCenters.length - 1)), assets.tile`myTile5`)
    numEnemys = randint(3, 6)
    for (let index = 0; index <= numEnemys - 1; index++) {
        tempLocation = allRoomCenters[Math.floor(allRoomCenters.length / numEnemys) * index]
        spawnEnemy(tempLocation.x, tempLocation.y, 1, true)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(value, true)
    }
}
function generateAnthillRoom () {
    columns = 3
    rows = 2
    left = 0
    top = 0
    roomCenters = []
    roomToSkip = randint(0, columns * rows - 1)
    allRoomCenters = []
    for (let indexX = 0; indexX <= columns - 1; indexX++) {
        roomCenters.push([])
        for (let indexY = 0; indexY <= rows - 1; indexY++) {
            roomCenter = tiles.getTileLocation(randint(-1, 1) + (indexX * Math.idiv(tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns), columns) + Math.idiv(Math.idiv(tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns), columns), 2)), randint(-1, 1) + (indexY * Math.idiv(tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 2, rows) + Math.idiv(Math.idiv(tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 2, rows), 2)))
            roomCenters[indexX].push(roomCenter)
            if (roomToSkip != indexX + indexY * columns) {
                allRoomCenters.push(roomCenter)
                fillRect(roomCenter.column, roomCenter.row, randint(4, 5), randint(4, 5))
            }
        }
    }
    for (let indexX = 0; indexX <= columns - 1; indexX++) {
        for (let indexY = 0; indexY <= rows - 1; indexY++) {
            currentRoom = roomCenters[indexX][indexY]
            if (indexX < columns - 1) {
                nextRoom = roomCenters[indexX + 1][indexY]
                drawLine(currentRoom.column, currentRoom.row, nextRoom.column, nextRoom.row)
            }
            if (indexY < rows - 1) {
                nextRoom = roomCenters[indexX][indexY + 1]
                drawLine(currentRoom.column, currentRoom.row, nextRoom.column, nextRoom.row)
            }
        }
    }
    tileUtil.replaceAllTiles(assets.tile`transparency8`, assets.tile`myTile0`)
    tileUtil.replaceAllTiles(assets.tile`myTile1`, assets.tile`transparency8`)
    for (let indexX = 0; indexX <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 1; indexX++) {
        tiles.setTileAt(tiles.getTileLocation(indexX, 0), assets.tile`myTile0`)
        tiles.setTileAt(tiles.getTileLocation(indexX, 14), assets.tile`myTile0`)
    }
    for (let indexY = 0; indexY <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 1; indexY++) {
        tiles.setTileAt(tiles.getTileLocation(0, indexY), assets.tile`myTile0`)
        tiles.setTileAt(tiles.getTileLocation(19, indexY), assets.tile`myTile0`)
    }
    tiles.setTileAt(allRoomCenters.removeAt(randint(0, allRoomCenters.length - 1)), assets.tile`myTile4`)
    tiles.setTileAt(allRoomCenters.removeAt(randint(0, allRoomCenters.length - 1)), assets.tile`myTile5`)
    for (let value of allRoomCenters) {
        if (Math.percentChance(30)) {
            spawnEnemy(value.x, value.y, 1, false)
        } else {
            if (Math.percentChance(50)) {
                spawnEnemy(value.x, value.y, 0, false)
            } else {
                spawnEnemy(value.x - 8, value.y, 0, false)
                spawnEnemy(value.x + 8, value.y, 0, false)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setWallAt(value, true)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(0)
})
function updateBBBBombs () {
    sprites.destroyAllSpritesOfKind(SpriteKind.EXPLOSION)
    for (let value of sprites.allOfKind(SpriteKind.B_B_B_Bomb)) {
        sprites.setDataNumber(value, "fuse", sprites.readDataNumber(value, "fuse") - 1)
        if (sprites.readDataNumber(value, "fuse") == 0) {
            sprites.destroy(value)
            tempSprite = sprites.create(image.create(sprites.readDataNumber(value, "radius") * 2, sprites.readDataNumber(value, "radius") * 2), SpriteKind.EXPLOSION)
            spriteutils.fillCircle(
            tempSprite.image,
            sprites.readDataNumber(value, "radius"),
            sprites.readDataNumber(value, "radius"),
            sprites.readDataNumber(value, "radius"),
            1
            )
            tempSprite.z = 91
            tiles.placeOnTile(tempSprite, value.tilemapLocation())
            tempLocation = tiles.getTileLocation(Math.idiv(tempSprite.left, tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth)), Math.idiv(tempSprite.top, tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth)))
            for (let indexX = 0; indexX <= Math.ceil(tempSprite.width / tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth)); indexX++) {
                for (let indexY = 0; indexY <= Math.ceil(tempSprite.height / tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth)); indexY++) {
                    tiles.placeOnTile(mathSprite, tempLocation)
                    mathSprite.x += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) * indexX
                    mathSprite.y += tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.TileWidth) * indexY
                    if (mathSprite.overlapsWith(tempSprite)) {
                        if (tiles.tileAtLocationEquals(mathSprite.tilemapLocation(), assets.tile`myTile0`)) {
                            tiles.setTileAt(mathSprite.tilemapLocation(), assets.tile`myTile6`)
                            tiles.setWallAt(mathSprite.tilemapLocation(), false)
                        }
                    }
                }
            }
            for (let tempKind of enemyKinds) {
                for (let value of sprites.allOfKind(tempKind)) {
                    if (value.overlapsWith(tempSprite)) {
                        destroyEnemy(value)
                    }
                }
            }
        } else {
            value.setImage(bombFrames[sprites.readDataNumber(value, "fuse") - 1])
        }
    }
}
function isNeighboringTileEmpty (sprite: Sprite, direction: number) {
    tempLocation = getTileInDirection(sprite, direction)
    if (tiles.tileAtLocationIsWall(tempLocation)) {
        return false
    }
    for (let value of custom.allSprites()) {
        if (tempLocation.column == value.tilemapLocation().column && tempLocation.row == value.tilemapLocation().row) {
            return false
        }
    }
    return true
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(1)
})
sprites.onCreated(SpriteKind.arrow, function (sprite) {
    sprite.setFlag(SpriteFlag.GhostThroughWalls, false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(2)
})
function createTitleSprite (text: string) {
    titleSprite = fancyText.create(text, 160, 15, fancyText.gothic_large)
    titleSprite.z = 999999
    fancyText.setTextFlag(titleSprite, fancyText.Flag.AlwaysOccupyMaxWidth, false)
    fancyText.setTextFlag(titleSprite, fancyText.Flag.ChangeWidthWhileAnimating, true)
    fancyText.setFrame(titleSprite, img`
        ffffffffffffffffff
        f1111111111111111f
        f1ffffffffffffff1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1f111111111111f1f
        f1ffffffffffffff1f
        f1111111111111111f
        ffffffffffffffffff
        `)
    titleSprite.setPosition(80, 60)
}
function makeEquipment (image2: Image, name: string, durability: number, rarity: number) {
    tempSprite = sprites.create(image2, SpriteKind.Item)
    sprites.setDataString(tempSprite, "name", name)
    sprites.setDataNumber(tempSprite, "durability", durability)
    tempSprite.setFlag(SpriteFlag.Invisible, true)
    return tempSprite
}
spriteutils.createRenderable(95, function (screen2) {
    if (showingTransitionAnimation) {
        for (let indexX = 0; indexX <= 19; indexX++) {
            for (let indexY = 0; indexY <= 14; indexY++) {
                if (transitionImage.getPixel(indexX, indexY) != 0) {
                    screen2.fillRect(indexX * 8, indexY * 8, 8, 8, 1)
                }
            }
        }
    }
})
function nextLevel () {
    spikeTimer = 0
    currentLevel += 1
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level8`))
    for (let value of enemyKinds) {
        sprites.destroyAllSpritesOfKind(value)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    if (currentLevel % 5 == 1) {
        raycastingOn = false
        generateTreasureRoom()
    } else {
        if (currentLevel > 3) {
            raycastingOn = Math.percentChance(20)
        }
        if (Math.percentChance(50)) {
            generateAnthillRoom()
        } else {
            generateMazeRoom()
        }
        placeTraps(5)
    }
    sprites.setDataBoolean(hero, "fresh", true)
    tiles.placeOnRandomTile(hero, assets.tile`myTile4`)
    updateFOV()
}
function doLevelTransition () {
    if (!(showingTransitionAnimation)) {
        transitionImage = image.create(20, 15)
        showingTransitionAnimation = true
        timer.background(function () {
            animX = 0
            animY = 0
            animDirection = 1
            while (!(transitionImage.equals(img`
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                `))) {
                transitionImage.setPixel(animX, animY, 3)
                if (animDirection == 0) {
                    animY += -1
                    if (animY < 0) {
                        animY = 0
                        animDirection = 1
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) != 0) {
                        animY += 1
                        animDirection = 1
                        continue;
                    }
                } else if (animDirection == 1) {
                    animX += 1
                    if (animX >= 20) {
                        animX = 19
                        animDirection = 2
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) != 0) {
                        animX += -1
                        animDirection = 2
                        continue;
                    }
                } else if (animDirection == 2) {
                    animY += 1
                    if (animY >= 15) {
                        animY = 14
                        animDirection = 3
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) != 0) {
                        animY += -1
                        animDirection = 3
                        continue;
                    }
                } else {
                    animX += -1
                    if (animX < 0) {
                        animX = 0
                        animDirection = 0
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) != 0) {
                        animX += 1
                        animDirection = 0
                        continue;
                    }
                }
                index += 1
                if (index % 2 == 0) {
                    pause(1)
                }
            }
            nextLevel()
            animX = 0
            animY = 0
            animDirection = 1
            while (!(transitionImage.equals(img`
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . 
                `))) {
                transitionImage.setPixel(animX, animY, 0)
                if (animDirection == 0) {
                    animY += -1
                    if (animY < 0) {
                        animY = 0
                        animDirection = 1
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) == 0) {
                        animY += 1
                        animDirection = 1
                        continue;
                    }
                } else if (animDirection == 1) {
                    animX += 1
                    if (animX >= 20) {
                        animX = 19
                        animDirection = 2
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) == 0) {
                        animX += -1
                        animDirection = 2
                        continue;
                    }
                } else if (animDirection == 2) {
                    animY += 1
                    if (animY >= 15) {
                        animY = 14
                        animDirection = 3
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) == 0) {
                        animY += -1
                        animDirection = 3
                        continue;
                    }
                } else {
                    animX += -1
                    if (animX < 0) {
                        animX = 0
                        animDirection = 0
                        continue;
                    } else if (transitionImage.getPixel(animX, animY) == 0) {
                        animX += 1
                        animDirection = 0
                        continue;
                    }
                }
                index += 1
                if (index % 2 == 0) {
                    pause(1)
                }
            }
            showingTransitionAnimation = false
        })
    }
}
function drawLine (x1: number, y1: number, x2: number, y2: number) {
    indexY = y1
    indexX = x1
    offset = randint(Math.min(y1, y2), Math.max(y1, y2) - 1)
    if (y1 == y2) {
        while (true) {
            tiles.setTileAt(tiles.getTileLocation(indexX, indexY), assets.tile`myTile1`)
            if (indexX == x2) {
                break;
            } else if (x1 < x2) {
                indexX += 1
            } else {
                indexX += -1
            }
        }
    } else {
        while (true) {
            tiles.setTileAt(tiles.getTileLocation(indexX, indexY), assets.tile`myTile1`)
            if (indexY == offset) {
                while (true) {
                    tiles.setTileAt(tiles.getTileLocation(indexX, indexY), assets.tile`myTile1`)
                    if (indexX == x2) {
                        break;
                    } else if (x1 < x2) {
                        indexX += 1
                    } else {
                        indexX += -1
                    }
                }
            }
            if (indexY == y2) {
                break;
            } else if (y1 < y2) {
                indexY += 1
            } else {
                indexY += -1
            }
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStarted) {
        if (areWeDead) {
            game.reset()
        } else {
            createBBBBomb(hero, facingLeft, 5, 16)
        }
    } else {
        gameStarted = true
        sprites.destroy(titleSprite)
    }
})
function updateTraps () {
    scanForTraps(hero)
    for (let tempNumber of enemyKinds) {
        for (let tempSprite of sprites.allOfKind(tempNumber)) {
            scanForTraps(tempSprite)
        }
    }
    spikeTimer += 1
    if (spikeTimer == spikeInterval - 1) {
        tileUtil.replaceAllTiles(assets.tile`myTile18`, assets.tile`myTile17`)
    } else if (spikeTimer == spikeInterval) {
        spikeTimer = 0
        for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
            tempSprite = sprites.create(assets.tile`myTile18`, SpriteKind.Spike)
            animation.runImageAnimation(
            tempSprite,
            [img`
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f 1 1 1 1 1 f f 
                1 f f 1 f f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f 1 1 1 1 1 f f 
                1 f f 1 f f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f f f 1 f f f f 
                f 1 1 1 1 1 f f 
                1 f 1 1 1 f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f 1 f f f f 
                f f f 1 f f f f 
                f 1 1 1 1 1 f f 
                1 f 1 1 1 f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f 1 f f f f 
                f f f 1 f f f f 
                f f 1 1 1 f f f 
                f 1 1 1 1 1 f f 
                1 1 1 1 1 1 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f 1 f f f f 
                f f f 1 f f f f 
                f f 1 1 1 f f f 
                f f 1 1 1 f f f 
                f 1 1 1 1 1 f f 
                1 1 1 1 1 1 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f 1 f f f f 
                f f f 1 f f f f 
                f f 1 1 1 f f f 
                f 1 1 1 1 1 f f 
                1 1 1 1 1 1 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f 1 f f f f 
                f f f 1 f f f f 
                f 1 1 1 1 1 f f 
                1 f 1 1 1 f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f f f 1 f f f f 
                f 1 1 1 1 1 f f 
                1 f 1 1 1 f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f 1 1 1 1 1 f f 
                1 f f 1 f f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `,img`
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f f f f f f f f 
                f 1 1 1 1 1 f f 
                1 f f f f f 1 f 
                1 f f f f f 1 f 
                f 1 1 1 1 1 f f 
                `],
            30,
            false
            )
            tempSprite.lifespan = 500
            tiles.placeOnTile(tempSprite, value)
            tiles.setTileAt(value, assets.tile`myTile18`)
            if (hero.tilemapLocation().column == value.column && hero.tilemapLocation().row == value.row) {
                DEATH()
            }
        }
    } else {
    	
    }
}
function destroyEnemy (sprite: Sprite) {
    sprites.destroy(sprite)
    tiles.setTileAt(sprite.tilemapLocation(), assets.tile`myTile7`)
}
function destroyOverlaps (sprite: Sprite) {
    for (let tempNumber of enemyKinds) {
        if (tempNumber == SpriteKind.arrow) {
            continue;
        }
        for (let tempSprite of sprites.allOfKind(tempNumber)) {
            if (tempSprite.overlapsWith(sprite)) {
                destroyEnemy(tempSprite)
                sprites.destroy(sprite)
            }
        }
    }
}
function makeStatic () {
    tempImage = image.create(8, 8)
    for (let indexX = 0; indexX <= 7; indexX++) {
        for (let indexY = 0; indexY <= 7; indexY++) {
            if (Math.percentChance(30)) {
                tempImage.setPixel(indexX, indexY, 12)
            } else {
                tempImage.setPixel(indexX, indexY, 15)
            }
        }
    }
    return tempImage
}
spriteutils.createRenderable(90, function (screen2) {
    if (raycastingOn) {
        for (let indexX = 0; indexX <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 1; indexX++) {
            for (let indexY = 0; indexY <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 2; indexY++) {
                if (fovImage.getPixel(indexX, indexY) == 0) {
                    spriteutils.drawTransparentImage(list[(indexX + indexY) % 3], screen2, indexX * 8, indexY * 8)
                }
            }
        }
    }
})
function DEATH () {
    createTitleSprite("You  Died")
    tiles.setTileAt(hero.tilemapLocation(), assets.tile`myTile7`)
    sprites.destroy(hero)
    areWeDead = true
    gotNewHighScore = false
    if (!(blockSettings.exists("high-score"))) {
        blockSettings.writeNumber("high-score", currentLevel)
        gotNewHighScore = true
    } else {
        if (blockSettings.readNumber("high-score") < currentLevel) {
            blockSettings.writeNumber("high-score", currentLevel)
            gotNewHighScore = true
        }
    }
    if (gotNewHighScore) {
        myTextSprite = fancyText.create("New High Score: " + currentLevel, 0, 15, fancyText.serif_small)
    } else {
        myTextSprite = fancyText.create("Score: " + currentLevel, 0, 15, fancyText.serif_small)
    }
    fancyText.setFrame(myTextSprite, img`
        f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f 1 1 1 1 1 1 1 1 1 f 1 f 
        f 1 f f f f f f f f f f f 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f f f f f f f 
        `)
    myTextSprite.top = 1
    myTextSprite.x = 80
    timer.background(function () {
        while (true) {
            pause(500)
            movePlayer(-1)
        }
    })
}
function placeTraps (numTraps: number) {
    for (let indexX = 0; indexX <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns) - 2; indexX++) {
        for (let indexY = 0; indexY <= tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 2; indexY++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(indexX, indexY), assets.tile`myTile0`)) {
                tempLocation = tiles.getTileLocation(indexX, indexY).getNeighboringLocation(CollisionDirection.Right)
                while (tiles.tileAtLocationEquals(tempLocation, assets.tile`transparency8`)) {
                    tempLocation = tempLocation.getNeighboringLocation(CollisionDirection.Right)
                }
                if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile0`)) {
                    if (tempLocation.column - indexX > 3) {
                        if (Math.percentChance(50)) {
                            tiles.setTileAt(tiles.getTileLocation(indexX, indexY), assets.tile`myTile8`)
                        } else {
                            tiles.setTileAt(tempLocation, assets.tile`myTile10`)
                        }
                    }
                }
                tempLocation = tiles.getTileLocation(indexX, indexY).getNeighboringLocation(CollisionDirection.Bottom)
                while (tiles.tileAtLocationEquals(tempLocation, assets.tile`transparency8`)) {
                    tempLocation = tempLocation.getNeighboringLocation(CollisionDirection.Bottom)
                }
                if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile0`)) {
                    if (tempLocation.row - indexY > 3) {
                        if (Math.percentChance(50)) {
                            tiles.setTileAt(tiles.getTileLocation(indexX, indexY), assets.tile`myTile9`)
                        } else {
                            tiles.setTileAt(tempLocation, assets.tile`myTile11`)
                        }
                    }
                }
            }
        }
    }
    allTrapLocations = []
    for (let value of [
    assets.tile`myTile9`,
    assets.tile`myTile11`,
    assets.tile`myTile10`,
    assets.tile`myTile8`
    ]) {
        for (let loc of tiles.getTilesByType(value)) {
            allTrapLocations.push(loc)
        }
    }
    while (allTrapLocations.length > numTraps) {
        tiles.setTileAt(allTrapLocations.removeAt(randint(0, allTrapLocations.length - 1)), assets.tile`myTile0`)
    }
    for (let loc of allTrapLocations) {
        if (tiles.tileAtLocationEquals(loc, assets.tile`myTile9`)) {
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile9`)
            }
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile9`)
            }
        }
        if (tiles.tileAtLocationEquals(loc, assets.tile`myTile8`)) {
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Right).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile8`)
            }
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile8`)
            }
        }
        if (tiles.tileAtLocationEquals(loc, assets.tile`myTile11`)) {
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile11`)
            }
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Top).getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile11`)
            }
        }
        if (tiles.tileAtLocationEquals(loc, assets.tile`myTile10`)) {
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Left).getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile10`)
            }
            if (tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile0`) && tiles.tileAtLocationEquals(loc.getNeighboringLocation(CollisionDirection.Bottom).getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency8`)) {
                tiles.setTileAt(loc.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile10`)
            }
        }
    }
}
function moveEnemies () {
    for (let value of sprites.allOfKind(SpriteKind.RandomWalker)) {
        if (sprites.readDataNumber(value, "stepsRemaining") == 0) {
            sprites.setDataNumber(value, "stepsRemaining", randint(1, 5))
            sprites.setDataNumber(value, "direction", randint(0, 3))
        } else {
            sprites.changeDataNumberBy(value, "stepsRemaining", -1)
        }
        tempNumber = sprites.readDataNumber(value, "direction")
        for (let index = 0; index <= 3; index++) {
            if (canEnemyMove(value, (index + tempNumber) % 4)) {
                tiles.placeOnTile(value, getTileInDirection(value, (index + tempNumber) % 4))
                sprites.setDataNumber(value, "direction", (index + tempNumber) % 4)
                break;
            } else {
                sprites.setDataNumber(value, "stepsRemaining", randint(1, 5))
            }
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.WallFollower)) {
        if (sprites.readDataBoolean(value, "onWall")) {
            for (let index = 0; index <= 3; index++) {
                tempNumber = sprites.readDataNumber(value, "direction")
                if (!(canEnemyMove(value, sprites.readDataNumber(value, "direction")))) {
                    sprites.setDataNumber(value, "direction", (sprites.readDataNumber(value, "wallDirection") + 2) % 4)
                    sprites.setDataNumber(value, "wallDirection", tempNumber)
                } else {
                    break;
                }
            }
            if (canEnemyMove(value, sprites.readDataNumber(value, "direction"))) {
                tiles.placeOnTile(value, getTileInDirection(value, sprites.readDataNumber(value, "direction")))
            } else {
                continue;
            }
            tempNumber = sprites.readDataNumber(value, "direction")
            if (canEnemyMove(value, sprites.readDataNumber(value, "wallDirection"))) {
                sprites.setDataNumber(value, "direction", sprites.readDataNumber(value, "wallDirection"))
                sprites.setDataNumber(value, "wallDirection", (tempNumber + 2) % 4)
            }
        } else {
            if (canEnemyMove(value, sprites.readDataNumber(value, "direction"))) {
                for (let index = 0; index <= 3; index++) {
                    if (!(canEnemyMove(value, index))) {
                        sprites.setDataBoolean(value, "onWall", true)
                        sprites.setDataNumber(value, "wallDirection", index)
                        sprites.setDataNumber(value, "direction", (sprites.readDataNumber(value, "wallDirection") + 1) % 4)
                        break;
                    }
                }
                tiles.placeOnTile(value, getTileInDirection(value, sprites.readDataNumber(value, "direction")))
                if (sprites.readDataBoolean(value, "onWall")) {
                    tempNumber = sprites.readDataNumber(value, "direction")
                    if (canEnemyMove(value, sprites.readDataNumber(value, "wallDirection"))) {
                        sprites.setDataNumber(value, "direction", sprites.readDataNumber(value, "wallDirection"))
                        sprites.setDataNumber(value, "wallDirection", (tempNumber + 2) % 4)
                    }
                }
            } else {
                sprites.setDataNumber(value, "wallDirection", sprites.readDataNumber(value, "direction"))
                sprites.setDataBoolean(value, "onWall", true)
                if (Math.percentChance(50)) {
                    sprites.setDataNumber(value, "direction", (sprites.readDataNumber(value, "wallDirection") + 1) % 4)
                } else {
                    sprites.setDataNumber(value, "direction", (sprites.readDataNumber(value, "wallDirection") + 3) % 4)
                }
            }
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.arrow)) {
        destroyOverlaps(value)
        if (sprites.readDataNumber(value, "direction") == 0) {
            tempLocation = value.tilemapLocation().getNeighboringLocation(CollisionDirection.Top)
        } else if (sprites.readDataNumber(value, "direction") == 1) {
            tempLocation = value.tilemapLocation().getNeighboringLocation(CollisionDirection.Right)
        } else if (sprites.readDataNumber(value, "direction") == 2) {
            tempLocation = value.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom)
        } else {
            tempLocation = value.tilemapLocation().getNeighboringLocation(CollisionDirection.Left)
        }
        tiles.placeOnTile(value, tempLocation)
        if (tiles.tileAtLocationIsWall(tempLocation)) {
            sprites.destroy(value)
        }
        destroyOverlaps(value)
    }
}
function updateFOV () {
    origin = hero.tilemapLocation()
    fovImage = image.create(tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Columns), tileUtil.tilemapProperty(tileUtil.currentTilemap(), tileUtil.TilemapProperty.Rows) - 1)
    slices = 500
    inch = 4
    for (let slice = 0; slice <= slices - 1; slice++) {
        rayAngle = spriteutils.degreesToRadians(360 / slices * slice)
        indexX = origin.x
        indexY = origin.y
        while (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(Math.idiv(indexX, 8), Math.idiv(indexY, 8))))) {
            indexX += Math.cos(rayAngle) * inch
            indexY += Math.sin(rayAngle) * inch
            fovImage.setPixel(Math.idiv(indexX, 8), Math.idiv(indexY, 8), 1)
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    movePlayer(3)
})
function movePlayer (direction: number) {
    if (showingTransitionAnimation || !(gameStarted)) {
        return
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.bomb_text)
    if (!(areWeDead)) {
        if (direction == 1) {
            facingLeft = false
            hero.setImage(img`
                f f f f f f f f 
                f f f 1 1 f f f 
                f f 1 1 1 1 f f 
                f f 1 f 1 f f f 
                f f 1 1 1 1 f f 
                f 1 1 1 1 1 1 f 
                f f 1 f f 1 f f 
                f f f f f f f f 
                `)
        } else if (direction == 3) {
            facingLeft = true
            hero.setImage(img`
                f f f f f f f f 
                f f f 1 1 f f f 
                f f 1 1 1 1 f f 
                f f f 1 f 1 f f 
                f f 1 1 1 1 f f 
                f 1 1 1 1 1 1 f 
                f f 1 f f 1 f f 
                f f f f f f f f 
                `)
        }
        tempLocation = getTileInDirection(hero, direction)
        if (tiles.tileAtLocationIsWall(tempLocation)) {
            if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile16`)) {
                openTreasureChest()
            }
            return
        }
        tiles.placeOnTile(hero, tempLocation)
        if (tiles.tileAtLocationEquals(tempLocation, assets.tile`myTile5`)) {
            doLevelTransition()
            return
        }
    } else {
        if (direction != -1) {
            return
        }
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.EquipmentFrame)
    for (let value of sprites.allOfKind(SpriteKind.Item)) {
        value.setFlag(SpriteFlag.Invisible, true)
    }
    resolveCombat()
    updateFOV()
    updateBBBBombs()
    moveEnemies()
    updateTraps()
    resolveCombat()
    cooldownBombCurrent = Math.max(cooldownBombCurrent - 1, -1)
}
function generateTreasureRoom () {
    tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level5`))
    tempSprite = sprites.create(img`
        f f 1 1 1 1 1 1 1 1 1 1 1 1 f f 
        f 1 f f f f f f f f f f f f 1 f 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
        1 f 1 1 1 f f f f f f 1 1 1 f 1 
        1 f f f f 1 1 1 1 1 1 f f f f 1 
        1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
        1 f f f f 1 f f f f 1 f f f f 1 
        1 1 1 1 1 1 f f f f 1 1 1 1 1 1 
        1 f f f f 1 1 1 1 1 1 f f f f 1 
        1 f f f f f f f f f f f f f f 1 
        1 f f f f f f f f f f f f f f 1 
        1 f f f f f f f f f f f f f f 1 
        1 f f f f f f f f f f f f f f 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    tempSprite.y += -36
}
function spawnEnemy (x: number, y: number, kind: number, random: boolean) {
    tempNumber = kind
    if (random) {
        tempNumber = randint(0, 1)
    }
    if (tempNumber == 0) {
        tempSprite = createWalkingSprite(img`
            f f f f f f f f 
            f f 1 f f f 1 f 
            f f 1 1 1 1 1 f 
            f f 1 f 1 1 f f 
            f f 1 1 1 1 1 f 
            f 1 1 1 f f 1 f 
            f f 1 1 1 1 1 f 
            f f f f f f f f 
            `, SpriteKind.RandomWalker)
    } else if (tempNumber == 1) {
        tempSprite = createWalkingSprite(img`
            f f 1 1 1 f f f 
            f 1 f 1 f 1 f f 
            f 1 1 1 1 1 f f 
            f f 1 f 1 f f f 
            f f f 1 f f f f 
            f f 1 1 1 f f f 
            f f f 1 f f f f 
            f f 1 f 1 f f f 
            `, SpriteKind.WallFollower)
    }
    tempSprite.setPosition(x, y)
}
sprites.onCreated(SpriteKind.WallFollower, function (sprite) {
    sprites.setDataNumber(sprite, "direction", randint(0, 3))
    sprites.setDataNumber(sprite, "wallDirection", randint(0, 3))
    sprites.setDataBoolean(sprite, "onWall", false)
})
function createWalkingSprite (image2: Image, kind: number) {
    new_sprite = sprites.create(image2, kind)
    fake_sprite = sprites.create(image2, SpriteKind.Following)
    new_sprite.setFlag(SpriteFlag.Invisible, true)
    fake_sprite.setFlag(SpriteFlag.Ghost, true)
    sprites.setDataSprite(fake_sprite, "parent", new_sprite)
    sprites.setDataBoolean(new_sprite, "fresh", true)
    return new_sprite
}
let fake_sprite: Sprite = null
let new_sprite: Sprite = null
let rayAngle = 0
let inch = 0
let slices = 0
let origin: tiles.Location = null
let tempNumber = 0
let allTrapLocations: tiles.Location[] = []
let myTextSprite: fancyText.TextSprite = null
let gotNewHighScore = false
let list: Image[] = []
let fovImage: Image = null
let tempImage: Image = null
let facingLeft = false
let gameStarted = false
let offset = 0
let indexX = 0
let indexY = 0
let index = 0
let animDirection = 0
let animY = 0
let animX = 0
let spikeTimer = 0
let transitionImage: Image = null
let showingTransitionAnimation = false
let titleSprite: fancyText.TextSprite = null
let nextRoom: tiles.Location = null
let currentRoom: tiles.Location = null
let roomCenter: tiles.Location = null
let roomToSkip = 0
let top = 0
let left = 0
let rows = 0
let columns = 0
let numEnemys = 0
let allRoomCenters: tiles.Location[] = []
let roomCenters: tiles.Location[][] = []
let myImage: Image = null
let cooldownBarWidth = 0
let areWeDead = false
let tempLocation: tiles.Location = null
let equipmentToGet: Sprite = null
let tempSprite: Sprite = null
let currentLevel = 0
let cooldownBombCurrent = 0
let cooldownBombMax = 0
let spikeInterval = 0
let hero: Sprite = null
let bombFrames: Image[] = []
let mathSprite: Sprite = null
let enemyKindsYouCanFIGHT: number[] = []
let enemyKinds: number[] = []
let raycastingOn = false
let attacksRemaining = 0
let allEquipment: Sprite[] = []
allEquipment = [
makeEquipment(img`
    ................................................................
    ................................................................
    .............11111111111........................................
    ...........11fffffffffff11......................................
    .........11fffffffffffffff11....................................
    ........1ffffffffffff11fffff1...................................
    .......1fffffff1ffffff1ffffff1..................................
    ......1fffffff1f1fffffffffffff1.................................
    .....1fffffffffffffffffffffffff1................................
    ....1ffff11ffffffffffff1ffffffff1...............................
    ....1ffff1ffffffff11ff1f1fff11ff1...............................
    ...1ffffffffffffff1ffffffffff1fff1..............................
    ...1fffffffff11ffffffffffffffffff1..............................
    ..1ffffffffff1fffffffff11fffffffff1.............................
    ..1ffff1ffffffffffffffff1fff1fffff1................111.111......
    ..1fff1ffffffffffffffffffffff1ffff1...............1fff1fff1.....
    ..1ffff1fffffffff11fffffffff1fffff1............111f111f111f1....
    ..1ffffffff11ffff1ffffff1fffffffff1.........111ffff111f111ff1...
    ..1ffffffff1fffffffffffff1ffffffff1........1fff111ffff1fff11f1..
    ..1fff1fffffffffffff1fff1fffff1fff1.......1f11f111f111.11f11f1..
    ..1ff1fffffffffffff11ffffffffff1ff1.....11f1111fff1.....1fffff1.
    ..1fff1ffffffffffffffff1ffffff1fff1....1fff11ff111.......1f11f1.
    ..1ffffffffff1f1ffffff11ffffffffff1...1f111ff11..........1f11f1.
    ..1fffffffffff1fffffffffffffffffff1..1f1f11f1............1f1f1..
    ...1fffff1ffffffffffffffffff1ffff1..1f111ff1............1fff1...
    ...1fffff11fffffff1f1ffffff11ffff1..1f111f1............1fffff1..
    ....1ffffffffffffff1ffffffffffff1...1ff1f1............1ffffff1..
    ....1fffffffffffffffffff1fffffff1..1f11f1............1ffffff1...
    .....1ffffff1f1ffffffff11ffffff1...1f11f1...........1ffffff1....
    ......1ffffff1ffffffffffffffff1...1ff11f1..........1ffffff1.....
    .......1fffffffff1f1fffffffff1...1f11ff1..........1ffffff1......
    ........1fffffffff1fffffffff1....1f11f1..........1ffffff1.......
    .........11fffffffffffffff11....1fff1f1.........1ffffff1........
    ...........11fffffffffff11....11f111f1.........1ffffff1.........
    .............111f11f1111.....1fff11f1.........1ffffff1..........
    ...............1f11f1.......1f111fff1........1ffffff1...........
    ................1ff1.......1ff111f11........1ffffff1............
    ...............1ff1f1.....1ff1fff1.........1ffffff1.............
    ...............1f11f11.111f11f111.........1ffffff1..............
    ...............1f11fff1ffff11f1..........1ffffff1...............
    ................1ff111f111f1f1..........1ffffff1................
    .................11f11f111ff1..........1ffffff1.................
    ..................1fff1fff11..........1ffffff1..................
    ...................111.111...........1ffffff1...................
    ....................................1f11fff1....................
    ...................................1f1111f1.....................
    ..................................1f1111f1......................
    .................................1ffff1f1.......................
    ................................1ffffff1........................
    ...............................1ffffff1.........................
    ................................1ffff1..........................
    .................................11f1...........................
    ...................................1............................
    ..........1111111111111111111111111111111111111111111...........
    .........1ff11fff11fff1f11f1f1f111fff1111ff11f111f1111..........
    ........1f11f1f11f11f11f11f1f1f111f11f11f11f1f111f11111.........
    ........1f1111f11f11f11f1f11f1f111f11f11f11f1f111f11111.........
    ........11ff11fff111f11ff1111f1111ffff11ffff1f111f11111.........
    ........1111f1f11111f11f1f111f1111f111f1f11f1f111f11111.........
    ........1f11f1f11111f11f11f11f1111f111f1f11f1f111f11111.........
    .........1ff11f1111fff1f11f11f1111ffff11f11f1fff1fff11..........
    ..........1111111111111111111111111111111111111111111...........
    ................................................................
    ................................................................
    `, "SPIKY BALL", 2, 1),
makeEquipment(img`
    ................................................................
    ........................1.......................................
    .......................1f1......................................
    ......................1fff1.....................................
    .....................1ff1ff1....................................
    ....................1ff1ff1.....................................
    ...................1fffff1......................................
    ..................1fffff1.......................................
    .................1fffff1........................................
    ................1fffff1.........................................
    ...............1fffff1..........................................
    ..............1fffff1...........................................
    .............1fffff1............................................
    ............1fffff1.............................................
    ...........1fffff1..............................................
    ..........1ff1ff1...............................................
    .........1ff1ff1................................................
    ........1f1fff1.................................................
    .......1f111f1..................................................
    .......1f111f1..................................................
    .......1f111f1..................................................
    ........1f1ff1..................................................
    .........1ffff1.................................................
    .........1ff1ff1........................111111..................
    ..........1ff1ff1.....................11ffffff1.................
    ...........1fffff1..................11ffff111ff1................
    ............1fffff1...............11fff1ff11fff1................
    .............1fffff1............11ffff1fffffffff1...............
    ..............1fffff1.........11ffffffff1111f1ff1...............
    ...............1ff1ff1......11ffffffff11...1ff1f1...............
    ................1ff1ff11..11ffffffff11......1ffff1..............
    .................1ffffff11ffffffff11........1ffff1..............
    ..................1fff11fff1ffff11...........1ffff1.............
    ...................1f111ff1fff11.............1ffff1.............
    ....................1ff1ffff11................1ffff1............
    .....................11f1111..................1ffff1............
    .......................1.......................1ffff1...........
    ...............................................1ffff1...........
    ................................................1f1ff1..........
    ................................................1ff1f11.........
    .................................................1ffff1.........
    .................................................1ffff1.........
    ..................................................1ff1..........
    ..................................................1f1...........
    ...................................................1............
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ........1111111111111111111111111111111111111111111111..........
    .......11ff111f1f11f1ff111f11fff11f11f11ff11f11f1f11f11.........
    ......111f1f11f1f11f1f1f11f1f111f1f11f1f11f1f1f11f11f111........
    ......111f1f11f1f11f1f1f11f1f11111f11f1f11f1ff111f11f111........
    ......111f11f1f1f11f1f11f1f1f11111ffff1ffff1f1f11f11f111........
    ......111f11f1f1f11f1f11f1f1f111f1f11f1f11f1f11f1f11f111........
    .......11f111ff11ff11f111ff11fff11f11f1f11f1f11f11ff111.........
    ........1111111111111111111111111111111111111111111111..........
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, "NUNCHAKU", 3, 1),
makeEquipment(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ............................................111111..............
    ...........................................1fffff1..............
    ..........................................1f1111f1..............
    .........................................1f111f1f1..............
    ........................................1f111f11f1..............
    .......................................1f111f111f1..............
    ......................................1f111f111f1...............
    .....................................1f111f111f1................
    ....................................1f111f111f1.................
    ...................................1f111f111f1..................
    ..................................1f111f111f1...................
    .................................1f111f111f1....................
    ................................1f111f111f1.....................
    ...............................1f111f111f1......................
    ..............................1f111f111f1.......................
    .............................1f111f111f1........................
    ............................1f111f111f1.........................
    ...........................1f111f111f1..........................
    ..........................1f111f111f1...........................
    .........................1f111f111f1............................
    ........................1f111f111f1.............................
    .......................1f111f111f1..............................
    ......................1f111f111f1...............................
    ...............11....1f111f111f1................................
    ..............1ff1..1f111f111f1.................................
    ..............1f1f11f111f111f1..................................
    ...............1f1ff111f111f1...................................
    ................1f1f11f111f1....................................
    .................1f1f1111f1.....................................
    .................1ff1f11f1......................................
    ................1ffff1ff1.......................................
    ...............1ff1fff1f1.......................................
    ..............1f1f1f11f1f1......................................
    .............1ff1ff1..1f1f1.....................................
    ............1f1fff1....1ff1.....................................
    ............1f1ff1......11......................................
    .............1ff1...............................................
    ..............11................................................
    ................................................................
    ................................................................
    ................................................................
    .......111111111111111111111111111111111111111111111111111......
    ......1fff11fff111ff111fff11fff111ff11f111f11ff11fff11fff11.....
    .....11f11f1f11f1f11f1f111f1f11f1f11f1f111f1f11f1f11f1f11f11....
    .....11f11f1f11f1f11f1f111f1f11f1f1111f111f1f11f1f11f1f11f11....
    .....11fff11fff11f11f1f111f1f11f11ff11f111f1f11f1fff11f11f11....
    .....11f11f1ff111f11f1fffff1f11f1111f1f1f1f1f11f1ff111f11f11....
    .....11f11f1f1f11f11f1f111f1f11f1f11f1f1f1f1f11f1f1f11f11f11....
    ......1fff11f11f11ff11f111f1fff111ff111f1f111ff11f11f1fff11.....
    .......111111111111111111111111111111111111111111111111111......
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, "BROADSWORD", 4, 1),
makeEquipment(img`
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................1111............
    .............................................111ffff1...........
    ...............................11...........11ffffff1...........
    ..............................111..........11ffff111............
    ..............................1f1........111fff11...............
    .............................11f1......111ffff11................
    .............................1ff1.....11fffff11.................
    .............................1ff1....11fffff11..................
    .............................1ff1...11fffff1....................
    ............................11ff1..11fffff11....................
    ............................1fff1.11fffff11.....................
    ............................1ff1.11ffff111......................
    ...........................11ff11ffffff1........................
    ...........................1fff11fff11ff1111....................
    ...........................1fff1ffff1ffffff111111111............
    ...........................1ff11ffffffffffffffffff11............
    ..........................1ff11fffff111ff1111111111.............
    ..........................1f1ffffff11.1111......................
    ..........................11ffffff11............................
    .........................11ffffff11.............................
    ........................11ffffff11..............................
    .......................11fffff11................................
    ......................11ffff111.................................
    ...................1111ffff11...................................
    ...................1fffffff1....................................
    ...................1f1fff11.....................................
    ..................11ffff11......................................
    .................11ffff11.......................................
    ................11fffff1........................................
    ...............11fffff1.........................................
    ..............11fffff11.........................................
    .............11ffff11...........................................
    ............11ffff11............................................
    ...........11ffff11.............................................
    ...........1fff111..............................................
    ...........11f11................................................
    ............111.................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    .....1111111111111111111111111111111111111111111111111111111....
    ....11f111f1ffff1ffff1fff11fff1ff11f11fff1fff1fff11fff1f11f11...
    ...111f111f1f11f1f11f1f11f1f111f1f1f11f1111f111f11f1111f1f1111..
    ...111f111f1f11f1f11f1f11f1fff1f1f1f11fff11f111f11f1111ff11111..
    ...111f1f1f1f11f1f11f1f11f1f111f1f1f1111f11f111f11f1111f1f1111..
    ...111ff1ff1f11f1f11f1f11f1f111f1f1f1111f11f111f11f1111f11f111..
    ....11f111f1ffff1ffff1fff11fff1f11ff11fff11f11fff11fff1f11f11...
    .....1111111111111111111111111111111111111111111111111111111....
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    ................................................................
    `, "STICK", 1, 1)
]
attacksRemaining = 0
raycastingOn = true
enemyKinds = [SpriteKind.RandomWalker, SpriteKind.WallFollower, SpriteKind.arrow]
enemyKindsYouCanFIGHT = [SpriteKind.RandomWalker, SpriteKind.WallFollower]
mathSprite = sprites.create(img`
    a a a a a a a a 
    a a a a a a a a 
    a a a a a a a a 
    a a a a a a a a 
    a a a a a a a a 
    a a a a a a a a 
    a a a a a a a a 
    a a a a a a a a 
    `, SpriteKind.Player)
mathSprite.setFlag(SpriteFlag.Invisible, true)
bombFrames = [img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 f f f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 1 1 f 1 1 f 
    f 1 1 1 1 1 f f 
    `,img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 f f f 1 1 f 
    1 1 f 1 1 1 1 f 
    1 1 f f f 1 1 f 
    1 1 f 1 f 1 1 f 
    1 1 f f f 1 1 f 
    f 1 1 1 1 1 f f 
    `,img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 f f f 1 1 f 
    1 1 f 1 1 1 1 f 
    1 1 f f f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 f f f 1 1 f 
    f 1 1 1 1 1 f f 
    `,img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 f 1 f 1 1 f 
    1 1 f 1 f 1 1 f 
    1 1 f f f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 1 1 f 1 1 f 
    f 1 1 1 1 1 f f 
    `,img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 f f f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 1 f f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 f f f 1 1 f 
    f 1 1 1 1 1 f f 
    `,img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 f f f 1 1 f 
    1 1 1 1 f 1 1 f 
    1 1 f f f 1 1 f 
    1 1 f 1 1 1 1 f 
    1 1 f f f 1 1 f 
    f 1 1 1 1 1 f f 
    `,img`
    f f f 1 f f f f 
    f 1 1 1 1 1 f f 
    1 1 1 f 1 1 1 f 
    1 1 f f 1 1 1 f 
    1 1 1 f 1 1 1 f 
    1 1 1 f 1 1 1 f 
    1 1 f f f 1 1 f 
    f 1 1 1 1 1 f f 
    `]
bombFrames.reverse()
hero = createWalkingSprite(img`
    f f f f f f f f 
    f f f 1 1 f f f 
    f f 1 1 1 1 f f 
    f f 1 f 1 f f f 
    f f 1 1 1 1 f f 
    f 1 1 1 1 1 1 f 
    f f 1 f f 1 f f 
    f f f f f f f f 
    `, SpriteKind.Player)
hero.z = 10
spikeInterval = 6
cooldownBombMax = 20
cooldownBombCurrent = -1
currentLevel = 0
createTitleSprite("Two  Bit Roguelike")
nextLevel()
game.onUpdateInterval(100, function () {
    for (let value of sprites.allOfKind(SpriteKind.bomb_text)) {
        if (Math.idiv(game.runtime(), 300) % 2 == 0) {
            value.image.replace(1, 2)
        } else {
            value.image.replace(2, 1)
        }
    }
})
game.onUpdateInterval(50, function () {
    if (raycastingOn) {
        list = [
        makeStatic(),
        makeStatic(),
        makeStatic(),
        makeStatic()
        ]
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Following)) {
        if (sprites.readDataBoolean(sprites.readDataSprite(value, "parent"), "fresh")) {
            sprites.setDataBoolean(sprites.readDataSprite(value, "parent"), "fresh", false)
            value.setPosition(sprites.readDataSprite(value, "parent").x, sprites.readDataSprite(value, "parent").y)
        }
        value.setImage(sprites.readDataSprite(value, "parent").image)
        value.z = sprites.readDataSprite(value, "parent").z
        if (spriteutils.isDestroyed(sprites.readDataSprite(value, "parent"))) {
            sprites.destroy(value)
        }
        if (sprites.readDataSprite(value, "parent").x < value.x) {
            value.x += -2
        } else if (sprites.readDataSprite(value, "parent").x > value.x) {
            value.x += 2
        } else if (sprites.readDataSprite(value, "parent").y < value.y) {
            value.y += -2
        } else if (sprites.readDataSprite(value, "parent").y > value.y) {
            value.y += 2
        }
    }
})
