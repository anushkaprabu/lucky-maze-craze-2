// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010104010101010101010101020102010101010101010101040101010204020402020302020201010101020202030201010401010102010101010201010101050202020201020203020202020102020201010202010101010101010101010105010204010102010202010202010202020201020201010102010101020101010101020102010201020203010201020101040103010101010101020102030201010102010202020102020101020202010202010201010201020101010101010201010101010102010201010101010102010202020102020102020402020202020101010101010101010101010101010104`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . 2 . 
. . . . . . . . . . . . 2 . 2 . 
2 2 . 2 2 2 . . . . 2 2 2 . 2 . 
. . . . . 2 . . . . 2 . . . . . 
2 2 2 2 . 2 2 . 2 2 2 2 . 2 2 2 
. . 2 2 . . . . . . . . . . . . 
. 2 . . . 2 . 2 2 . 2 2 . 2 2 2 
2 . 2 2 . . . 2 . . . 2 . . . . 
. 2 . 2 . 2 . 2 2 . . 2 . 2 . . 
. . . . . . . . . 2 . 2 . 2 . . 
. 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 
2 . 2 . . 2 . 2 . . . . . . 2 . 
. . . . . 2 . 2 . . . . . . 2 . 
2 2 2 . 2 2 . 2 2 . 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.brick,myTiles.tile1,myTiles.tile2,myTiles.tile4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202020202020202010102030303030303030303030303020101020302020202020202020202030201010203020101010101010101020302010102030201020202020202010203020101020302010203030303020102030201010203020102030202030201020302010102030201020302020302010203020101020302010203030303020102030201010203020102020202020201020302010102030201010101010101010203020101020302020202020202020202030201010203030303030303030303030302010102020202020202020202020202020101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
