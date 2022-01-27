// priority: 0

console.info('Hiding item from JEI...')

events.listen('jei.hide.items', function (event) {
    console.log("Hiding duplicate ores/blocks/items!")
        event.hide('immersiveengineering:ore_copper')
        event.hide('immersiveengineering:ore_lead')
        event.hide('immersiveengineering:ore_silver')
        event.hide('immersiveengineering:ore_nickel')
        event.hide('immersiveengineering:ore_uranium')
	console.log("All repeated JEI items hidden!")
        event.hide(item.of('cyclic:uncrafter')) //
})