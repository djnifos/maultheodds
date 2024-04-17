ServerEvents.recipes(event => {
    event.remove({output: 'the_forgotten_dimensions:metallic_snow_pickaxe'})
    event.shaped('the_forgotten_dimensions:metallic_snow_pickaxe', [
        'AAA', 
        ' B ', 
        ' B '  
        ], {
        A: 'the_forgotten_dimensions:metallic_snow_ingot', 
        B: '#forge:rods/wooden' 
        }
    );    
});