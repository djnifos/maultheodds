ServerEvents.recipes(event => {
    event.shaped(
        Item.of('doom:e1m1_block1'),
        ['ABA',
         'BCB',
         'ABA'],
        {
            A: 'minecraft:cut_copper',
            B: '#forge:storage_blocks/steel',
            C: 'doom:argent_energy'
        } 
    )
});