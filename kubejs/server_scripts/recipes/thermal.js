// priority: 99
events.listen("recipes", (event) => {
  event.recipes.thermal.pulverizer(
    item.of("immersiveengineering:dust_aluminum", 2),
    "#forge:ores/aluminum"
  );
  event.recipes.thermal.pulverizer(
    item.of("immersiveengineering:dust_aluminum"),
    "#forge:ingots/aluminum"
  );
  event.recipes.thermal.pulverizer(
    item.of("immersiveengineering:dust_steel"),
    "#forge:ingots/steel"
  );
  event.recipes.thermal.pulverizer(
    item.of("immersiveengineering:dust_hop_graphite"),
    "#forge:ingots/hop_graphite"
  );

  event.recipes.thermal.pulverizer(
    item.of("mekanism:dust_refined_obsidian"),
    "#forge:ingots/refined_obsidian"
  );
  event.recipes.thermal.pulverizer(
    item.of("mekanism:dust_uranium"),
    "#forge:ingots/uranium"
  );
  event.recipes.thermal.pulverizer(
    item.of("mekanism:dust_osmium"),
    "#forge:ingots/osmium"
  );
  event.recipes.thermal.pulverizer(
    item.of("mekanism:fluorite_gem", 6),
    "#forge:ores/fluorite"
  );
  event.recipes.thermal.pulverizer(
    item.of("mekanism:dust_obsidian", 4),
    "#forge:obsidian"
  );

  event.recipes.thermal.pulverizer(
    item.of("mana-and-artifice:vinteum_dust", 2),
    "mana-and-artifice:vinteum_ore"
  );
  event.recipes.thermal.pulverizer(
    item.of("mana-and-artifice:vinteum_dust"),
    "mana-and-artifice:vinteum_ingot"
  );

  event.recipes.thermal.pulverizer(
    item.of("appliedenergistics2:certus_quartz_dust", 2),
    "#forge:ores/certus_quartz"
  );
  event.recipes.thermal.pulverizer(
    item.of("appliedenergistics2:certus_quartz_dust"),
    "#forge:gems/certus_quartz"
  );
  event.recipes.thermal.pulverizer(
    item.of("appliedenergistics2:fluix_dust"),
    "appliedenergistics2:fluix_crystal"
  );

  event.recipes.thermal.pulverizer(
    item.of("minecraft:glowstone_dust"),
    "#forge:ingots/refined_glowstone"
  );

  event.recipes.thermal.smelter(
    [
      item.of("immersiveengineering:dust_aluminum"),
      item.of("thermal:rich_slag").chance(0.3),
    ],
    "#forge:ores/aluminum"
  );

  event.remove({
    id: "thermal:machine/create/smelter_create_crushed_iron_ore",
  });
  event.remove({
    id: "thermal:machine/create/smelter_create_crushed_gold_ore",
  });

  event.remove({
    id: "thermal:machine/create/smelter_create_crushed_copper_ore",
  });
  event.remove({
    id: "thermal:machine/create/smelter_create_crushed_copper_ore",
  });
  event.remove({
    id: "thermal:machine/create/smelter_create_crushed_copper_ore",
  });

  event.remove({
    id: "immersiveengineering:crafting/nugget_silver_to_ingot_silver",
  });
  event.remove({ id: "thermal:storage/silver_ingot_from_nuggets" });

  event.recipes.thermal.press(
    "immersiveengineering:plate_aluminum",
    "#forge:ingots/aluminum"
  );
  event.recipes.thermal.press(
    "immersiveengineering:plate_steel",
    "#forge:ingots/steel"
  );

  event.shaped(item.of("thermal:silver_ingot"), ["NNN", "NNN", "NNN"], {
    N: "#forge:nuggets/silver",
  });

  event.remove({
    id: "immersiveengineering:crafting/nugget_constantan_to_ingot_constantan",
  });
  event.remove({ id: "thermal:storage/constantan_ingot_from_nuggets" });

  event.shaped(item.of("thermal:constantan_ingot"), ["NNN", "NNN", "NNN"], {
    N: "#forge:nuggets/constantan",
  });

  event.remove({
    id: "immersiveengineering:crafting/nugget_nickel_to_ingot_nickel",
  });
  event.remove({ id: "thermal:storage/nickel_ingot_from_nuggets" });

  event.shaped(item.of("thermal:nickel_ingot"), ["NNN", "NNN", "NNN"], {
    N: "#forge:nuggets/nickel",
  });

  event.remove({
    id: "immersiveengineering:crafting/nugget_electrum_to_ingot_electrum",
  });
  event.remove({ id: "thermal:storage/electrum_ingot_from_electrum" });

  event.shaped(item.of("thermal:electrum_ingot"), ["NNN", "NNN", "NNN"], {
    N: "#forge:nuggets/electrum",
  });

  event.recipes.thermal
    .compression_fuel(Fluid.of("immersiveengineering:creosote"))
    .energy(20000);

  event.recipes.thermal
     .smelter("immersiveengineering:ingot_steel", ["4x #forge:dusts/coal", "#forge:ingots/iron"]);
});
