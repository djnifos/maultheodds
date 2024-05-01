

ServerEvents.recipes(event => {
    event.remove({output: '#inventorypets:all_pets'});    
    event.shaped(
        Item.of('inventorypets:pet_cloud'),
        ['ABA',
         'BCB',
         'ABA'],
        {
            A: 'cyclic:cloud_membrane',
            B: 'inventorypets:pet_meta',
            C: 'miniutilities:angel_ring'
        } 
    )
});
