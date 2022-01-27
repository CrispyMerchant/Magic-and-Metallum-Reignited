// priority: 99
events.listen('recipes', event => {
    event.remove({output: 'rats:assorted_vegetables'})
    event.shaped(item.of('rats:assorted_vegetables'), [
        'PCB',
        'PCB',
        'PCB'
    ], {
        P: '#forge:crops/potato',
        C: '#forge:crops/carrot',
        B: '#forge:crops/beetroot'
    })
})