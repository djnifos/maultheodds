
global.pulverizerStuff = [
    {material:"lead", output:"usefulfoundation:lead_dust"},
    {material:"nickel", output:"usefulfoundation:nickel_dust"},
    {material:"silver", output:"usefulfoundation:silver_dust"},
    {material:"uranium", output:"usefulfoundation:uranium_dust"},
    {material:"platinum", output:"usefulfoundation:platinum_dust"},
    {material:"aluminum", output:"usefulfoundation:aluminum_dust"}
    
]
   
ServerEvents.lowPriorityData(event => {
    let addPulverizerRecipe = (material, output) => {
        let jsonRaw = JsonIO.toObject({
          "type": "energizedpower:pulverizer",
          "ingredient": {
            "tag": `forge:raw_materials/${material}`
          },
          "output": {
            "output": {
              "item": output
            },
            "percentages": [ 1.0, 0.25 ],
            "percentagesAdvanced": [ 1.0, 0.5 ]
          }
        })
        let jsonBlock = JsonIO.toObject({
          "type": "energizedpower:pulverizer",
          "ingredient": {
            "item": `minecraft:raw_${material}_block`
          },
          "output": {
            "output": {
              "item": output
            },
            "percentages": [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.25 ],
            "percentagesAdvanced": [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.75, 0.5, 0.25, 0.25 ]
          }
        })
        let jsonOres = JsonIO.toObject({
          "type": "energizedpower:pulverizer",
          "ingredient": {
            "tag": `forge:ores/${material}`
          },
          "output": {
            "output": {
              "item": output
            },
            "percentages": [ 1.0, 1.0, 1.0, 1.0, 0.5, 0.5 ],
            "percentagesAdvanced": [ 1.0, 1.0, 1.0, 1.0, 0.75, 0.5, 0.25 ]
          },
          "secondaryOutput": {
            "output": {
              "item": "energizedpower:gold_dust"
            },
            "percentages": [ 0.1 ],
            "percentagesAdvanced": [ 0.2 ]
          }
        })
        let jsonIngots = JsonIO.toObject({
          "type": "energizedpower:pulverizer",
          "ingredient": {
            "tag": `forge:ingots/${material}`
          },
          "output": {
            "output": {
              "item": output
            },
            "percentages": [ 1.0 ]
          }
        })
        event.addJson(`energizedpower:recipes/pulverizer/${material}_dust_from_pulverizing_raw_${material}.json`, jsonRaw)
        event.addJson(`energizedpower:recipes/pulverizer/${material}_dust_from_pulverizing_${material}_block.json`, jsonBlock)
        event.addJson(`energizedpower:recipes/pulverizer/${material}_dust_from_pulverizing_${material}_ores.json`, jsonOres)
        event.addJson(`energizedpower:recipes/pulverizer/${material}_dust_from_pulverizing_${material}_ingots.json`, jsonIngots)
    }
    global.pulverizerStuff.forEach(ore=>{
        addPulverizerRecipe(ore.material,ore.output);
    })
})