
global.miningDimOres = [
    {path: 'tin_ore',             id:'mining_dimension:tin_ore',             min:-64,max:250,size:8,count:4, stoneReplaces:"energizedpower:tin_ore",         deepslateReplaces:"energizedpower:deepslate_tin_ore"},
    
]
   
ServerEvents.lowPriorityData(event => {
    let addMiningDimOre = (path, id, min, max, size, count, stoneReplaces, deepslateReplaces) => {
        let jsonPlaced = JsonIO.toObject({
            "feature": id,
            "placement": [
              {
                "count": count,
                "type": "minecraft:count"
              },
              {
                "type": "minecraft:in_square"
              },
              {
                "height": {
                  "min_inclusive": {
                    "absolute": min
                  },
                  "max_inclusive": {
                    "absolute": max
                  },
                  "type": "minecraft:trapezoid"
                },
                "type": "minecraft:height_range"
              },
              {
                "type": "minecraft:biome"
              }
            ]
          })
        let jsonConfigured = JsonIO.toObject({
            "type": "minecraft:ore",
            "config": {
              "size": size,
              "discard_chance_on_air_exposure": 0.0,
              "targets": [
                {
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "minecraft:stone_ore_replaceables"
                  },
                  "state": {
                    "Name": stoneReplaces
                  }
                },
                {
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "minecraft:deepslate_ore_replaceables"
                  },
                  "state": {
                    "Name": deepslateReplaces
                  }
                }
              ]
            }
          })
        let jsonForge = JsonIO.toObject({
            type: "forge:add_features",
            biomes: "#mining_dimension:mining",
            "features": [id],
            "step": "underground_ores"
        })
        event.addJson(`mining_dimension:worldgen/placed_feature/${path}.json`, jsonPlaced)
        event.addJson(`mining_dimension:worldgen/configured_feature/${path}.json`, jsonConfigured)
        event.addJson(`mining_dimension:forge/biome_modifier/mining_dimension/dim_ores/${path}.json`, jsonForge)
    }
    global.miningDimOres.forEach(ore=>{
        addMiningDimOre(ore.path,ore.id, ore.min, ore.max, ore.size, ore.count, ore.stoneReplaces, ore.deepslateReplaces);
    })
})