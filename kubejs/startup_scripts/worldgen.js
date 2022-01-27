// priority: 100
onEvent("worldgen.remove", (event) => {

    event.removeFeatureById("underground_ores", "thermal:ore_copper");
    event.removeFeatureById("underground_ores", "minecraft:create_copper_ore");
    event.removeFeatureById("underground_ores", "tconstruct:copper_ore");


    event.removeOres((ores) => {
        ores.blocks = [
            "create:copper_ore",
            "tconstruct:copper_ore"
        ];
    });
});

onEvent("worldgen.add", (event) => {
    event.addOre(ore => {
        ore.block = "thermal:copper_ore"
        ore.spawnsIn.blacklist = false
        ore.spawnsIn.values = [
          "#minecraft:base_stone_overworld"
        ]
        
        ore.biomes.blacklist = true
        ore.biomes.values = [
          "#nether",
          "#the_end"
        ]
        
        ore.clusterMinSize = 4
        ore.clusterMaxSize = 12 
        ore.clusterCount = 40 //Per chunk
        ore.minHeight = 38 //FTB : AE has it at 38
        ore.maxHeight = 80 //Thermal has it at 80
        ore.squared = true
      })
});
