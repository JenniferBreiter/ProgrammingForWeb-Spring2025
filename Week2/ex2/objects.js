
const myGames = [
    { 
        name: 'The Last of Us', genre: 'action/advednture, survival', numberOfPlayers: 1, rating: 'M-Mature', description: 'Played from a third-person perspective, players use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus.' 
    },
    {
        name: 'Super Mario Bros. Wonder', genre: 'arcade platformer', numberOfPlayers: 4, rating: 'E-Everyone', description: 'Players navigate through a vibrant, flower-themed world, collecting "Wonder Seeds" by traversing levels that dynamically change with the touch of "Wonder Flowers," which can alter the environment with effects like moving platforms, enemy transformations, and even temporary power-ups like turning into an elephant.'
    },
    { 
        name: 'Little Nightmares', genre: 'puzzle-platform, survival horror', numberOfPlayers: 1, rating:'T-Teen', description: 'Players navigate a dark, surreal world as a small girl named Six, primarily relying on stealth and environmental puzzle-solving to evade monstrous enemies, utilizing platforming mechanics to progress through the twisted, interconnected levels while hiding from pursuers in a "hide-and-seek" style gameplay, with minimal combat options available, making the focus on avoiding detection and utilizing the environment to your advantage' 
    },
];

let userInput = prompt("There are 3 games in my collection. Pick a number between 1 and 3 and I'll tell you a little about that game.");

userInput = Number(userInput);

window.alert("You've selected " + myGames[userInput-1].name + ". This is a " + myGames[userInput-1].numberOfPlayers + " person player " + myGames[userInput-1].genre + " game. Here is a short description about it: " + myGames[userInput-1].description);