ServerEvents.recipes(event => {
    event.remove([{mod: 'projectexpansion'},{mod: 'projecte'}]);
    event.shaped('projecte:transmutation_tablet', [
        'ABA', 
        'BCB', 
        'ABA'  
        ], {
        A: 'enigmaticlegacy:evil_essence', 
        B: 'armorplus:guardian_scale',
        C: 'simplyswords:runic_tablet' 
        }
    );   
    event.shaped('projectexpansion:transmutation_interface', [
        'ABA', 
        'BCB', 
        'ABA'  
        ], {
        A: 'graveyard:dark_iron_block', 
        B: 'cyclic:gem_obsidian',
        C: 'doom:megasphere' 
        }
    );  
});
