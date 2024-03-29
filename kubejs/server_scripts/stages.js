// priority: 0

// Visit the wiki for more info - https://kubejs.com/

PlayerEvents.advancement(event=>{
     
     let thePlayer = event.getEntity().getName().getString();
     let theCommand ='';
     switch(event.getAdvancement()){
        case "minecraft:story/mine_diamond":
            theCommand = `gamestage add ${thePlayer} diamonds`;
            Utils.server.runCommand(theCommand);
            break;
        case "minecraft:nether/obtain_ancient_debris":
            theCommand = `gamestage add ${thePlayer} nether`;
            Utils.server.runCommand(theCommand);
            break;
        case "minecraft:end/kill_dragon":
            theCommand = `gamestage add ${thePlayer} end`;
            Utils.server.runCommand(theCommand);
            break;
        default:
            console.log(event.getAdvancement());
            break;
     }
}) 