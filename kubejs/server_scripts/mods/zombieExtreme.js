ServerEvents.tags('item', event => {
    event.add('forge:ingots/tin', 'zombie_extreme:ignot_tin')
    event.add('forge:ingots/aluminum', 'zombie_extreme:ignot_aluminum')
    event.add('forge:ingots/bronze', 'zombie_extreme:ignot_bronze')
    event.add('forge:ingots/steel', 'zombie_extreme:ignotsteel')
    event.add('forge:ingots/lead', 'zombie_extreme:ignotlead')
})

 ServerEvents.entityLootTables( event => {
  event.addEntity('zombie_extreme:assasin_black_ops', table => {
    table.addPool(pool => {
      pool.addItem('zombie_extreme:black_ops_magnetic_card').randomChance(0.05)
	  pool.addItem('zombie_extreme:black_ops_glasses_helmet').randomChance(0.05)
	  pool.addItem('zombie_extreme:m_9_knife').randomChance(0.05)
    })
  })
  event.addEntity('zombie_extreme:infected_military', table => {
    table.addPool(pool => {
      pool.addItem('zombie_extreme:magnetic_card').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_machete').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_helmet').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_chestplate').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_leggings').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_boots').randomChance(0.05)
    })
  })
  event.addEntity('zombie_extreme:military', table => {
    table.addPool(pool => {
      pool.addItem('zombie_extreme:magnetic_card').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_machete').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_helmet').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_chestplate').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_leggings').randomChance(0.05)
	  pool.addItem('zombie_extreme:military_suit_boots').randomChance(0.05)
    })
  })
  event.addEntity('zombie_extreme:infected_juggernaut', table => {
    table.addPool(pool => {
	  pool.addItem('zombie_extreme:juggernaut_suit_helmet').randomChance(0.05)
	  pool.addItem('zombie_extreme:juggernaut_suit_chestplate').randomChance(0.05)
	  pool.addItem('zombie_extreme:juggernaut_suit_leggings').randomChance(0.05)
	  pool.addItem('zombie_extreme:juggernaut_suit_boots').randomChance(0.05)
    })
  })
  event.addEntity('zombie_extreme:infected_hazmat', table => {
    table.addPool(pool => {
	  pool.addItem('zombie_extreme:hazmat_suit_helmet').randomChance(0.05)
	  pool.addItem('zombie_extreme:hazmat_suit_chestplate').randomChance(0.05)
	  pool.addItem('zombie_extreme:hazmat_suit_leggings').randomChance(0.05)
	  pool.addItem('zombie_extreme:hazmat_suit_boots').randomChance(0.05)
    })
  })
  event.addEntity('zombie_extreme:infected_police', table => {
    table.addPool(pool => {
	  pool.addItem('zombie_extreme:police_suit_helmet').randomChance(0.05)
	  pool.addItem('zombie_extreme:police_suit_chestplate').randomChance(0.05)
	  pool.addItem('zombie_extreme:police_baton').randomChance(0.05)
    })
  })
}) 
