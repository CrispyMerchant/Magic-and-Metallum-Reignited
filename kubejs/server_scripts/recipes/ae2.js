// priority: 99
events.listen('recipes', event => {
    const grindstone = (input, primary, optional, turns) => {
        event.custom({
            "type": 'appliedenergistics2:grinder',
            "input": {
                "tag": input
            },
            "result": {
                "primary": {
                    "item": primary
                },
                "optional": [
                    {
                        "item": optional
                    }
                ]
            },
            "turns": turns
        })
    }

    grindstone('forge:ores/uranium', 'mekanism:dust_uranium', 'mekanism:dust_uranium', 8)
    grindstone('forge:ores/osmium', 'mekanism:dust_osmium', 'mekanism:dust_osmium', 8)
    grindstone('forge:ores/nickel', 'thermal:nickel_dust', 'thermal:nickel_dust', 8)
    grindstone('forge:ores/cinnabar', 'thermal:cinnabar', 'thermal:cinnabar', 8)
    grindstone('forge:ores/silver', 'thermal:silver_dust', 'thermal:silver_dust', 8)
    grindstone('forge:ores/tin', 'thermal:tin_dust', 'thermal:tin_dust', 8)
    grindstone('forge:ores/copper', 'thermal:copper_dust', 'thermal:copper_dust', 8)
    grindstone('forge:ores/lead', 'thermal:lead_dust', 'thermal:lead_dust', 8)
})