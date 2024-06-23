
import { db } from "@/db/db";

async function main() {
      const vg1 =await db.videogame.create({
        data: {
            name: 'The Legend of Zelda: Breath of the Wild',
            description: 'an action-adventure game where players control Link as he explores an open world, battles enemies, and solves puzzles to defeat Calamity Ganon and save the kingdom of Hyrule.',
            poster: '/zelda.jpg',
            grades: 9.8,
            launchYear: 2017,
            developer: 'Nintendo',
            totalAchievements: 120,
        }
      });
      const vg2 =await db.videogame.create({
        data: {
            name: 'The Witcher 3: Wild Hunt',
            description: 'an action role-playing game where players control Geralt of Rivia, a monster hunter, as he searches for his adopted daughter, Ciri, while battling various creatures and navigating complex political intrigues in a vast, open world.',
            poster: '/witcher.jpg',
            grades: 9.5,
            launchYear: 2015,
            developer: 'CD Projekt',
            totalAchievements: 78,
      } 
    });
    const vg3 =await db.videogame.create({
        data: {
            name: 'Cyberpunk 2077',
            description: 'an open-world action RPG where players control V, a mercenary in the dystopian Night City, as they navigate a web of crime, cybernetic enhancements, and corporate conspiracies in pursuit of immortality.',
            poster: '/cyberpunk.jpg',
            grades: 8.2,
            launchYear: 2020,
            developer: 'CD Projekt',
            totalAchievements: 50,
        }
      });
      const vg4 =await db.videogame.create({
        data: {
            name: 'God of War',
            description: 'an action-adventure game where players control Kratos, a former Greek god, as he embarks on a journey with his son Atreus through the realms of Norse mythology, battling gods and monsters while seeking to fulfill his wifes final wish.',
            poster: '/godofwar.jpg',
            grades: 9.6,
            launchYear: 2018,
            developer: 'Santa Monica Studio',
            totalAchievements: 37,
        }
      });
      const vg5 =await db.videogame.create({
        data: {
            name: 'Red Dead Redemption 2',
            description: 'an action-adventure game where players control Arthur Morgan, an outlaw in the late 1800s, as he navigates the challenges of life on the run with the Van der Linde gang, exploring a vast, open-world version of the American frontier.',
            poster: '/rdr2.jpg',
            grades: 9.7,
            launchYear: 2018,
            developer: 'Rockstar Games',
            totalAchievements: 51,
        }
    });
    const vg6 =await db.videogame.create({
        data: {
            name: 'Horizon Zero Dawn',
            description: 'an action role-playing game where players control Aloy, a hunter in a post-apocalyptic world overrun by robotic creatures, as she unravels the mysteries of her past and fights to protect humanity from emerging threats.',
            poster: '/horizon.jpg',
            grades: 8.9,
            launchYear: 2017,
            developer: 'Guerrilla Games',
            totalAchievements: 56,
        }
    });
      const vg7 =await db.videogame.create({
        data: {
            name: 'Final Fantasy VII Remake',
            description: 'an action RPG where players control Cloud Strife, a mercenary fighting against the corrupt Shinra Corporation, as he joins forces with the eco-terrorist group Avalanche in a quest to save the planet from destruction.',
            poster: '/ffvii.jpg',
            grades: 8.8,
            launchYear: 2020,
            developer: 'Square Enix',
            totalAchievements: 44,
        }
    });
      const vg8 =await db.videogame.create({
        data: {
            name: 'Ghost of Tsushima',
            description: 'an action-adventure game where players control Jin Sakai, a samurai fighting to defend Tsushima Island from the Mongol invasion, blending stealth, combat, and exploration in a richly detailed open world set in feudal Japan.',
            poster: '/ghostoftsushima.jpg',
            grades: 9.2,
            launchYear: 2020,
            developer: 'Sucker Punch Productions',
            totalAchievements: 52,
        }
    });
      const vg9 =await db.videogame.create({
        data: {
            name: 'Spider-Man',
            description: 'an action-adventure game where players control Peter Parker as Spider-Man. Set in an open-world New York City, the game follows Spider-Man battling crime and supervillains while managing his personal life. The story is original, focusing on Spider-Mans efforts to stop a new threat to the city.',
            poster: '/spiderman.jpg',
            grades: 9.0,
            launchYear: 2018,
            developer: 'Insomniac Games',
            totalAchievements: 47,
        }
    });
      const vg10 =await db.videogame.create({
        data: {
            name: 'Assassin\'s Creed Valhalla',
            description: 'an action role-playing game set in the Viking Age. Players control Eivor, a Viking raider, as they lead their clan from Norway to England to establish a new settlement. The game follows Eivors journey through alliances, battles, and the mystery of the Assassin Brotherhood, blending historical events with Norse mythology.',
            poster: '/acvalhalla.jpg',
            grades: 8.4,
            launchYear: 2020,
            developer: 'Ubisoft',
            totalAchievements: 61,
        }
    });
      const vg11 =await db.videogame.create({
        data: {
            name: 'Doom Eternal',
            description: ' a first-person shooter where players control the Doom Slayer, battling demonic forces from Hell. Set on Earth and other locations, the game follows the Doom Slayers mission to stop the Hell invasion and destroy the source of the demonic power. It features fast-paced combat, a variety of weapons, and intense action.',
            poster: '/doom.jpg',
            grades: 8.7,
            launchYear: 2020,
            developer: 'id Software',
            totalAchievements: 33,
        }  
    });
      const vg12 =await db.videogame.create({
        data: {
            name: 'Resident Evil Village',
            description: 'a survival horror game where players control Ethan Winters as he searches for his kidnapped daughter in a mysterious village. The game follows Ethans encounters with terrifying creatures and sinister characters, blending intense combat, exploration, and puzzle-solving. It continues the story from "Resident Evil 7: Biohazard," delivering a chilling and immersive experience.',
            poster: '/revillage.jpg',
            grades: 9.1,
            launchYear: 2021,
            developer: 'Capcom',
            totalAchievements: 40,
        }  
    });
    
    const Info1 = await db.infoPlayer.create({
        data: {
            videogameId: 1,
            hoursPlayed: 120,
            achievementsUnlocked: 120,
        },
    });

    const Info2 = await db.infoPlayer.create({
        data: {
            videogameId: 2,
            hoursPlayed: 5,
            achievementsUnlocked: 5,
        },
    });

    const Info3 = await db.infoPlayer.create({
        data: {
            videogameId: 3,
            hoursPlayed: 20,
            achievementsUnlocked: 25,
        },
    });
    const Info4 = await db.infoPlayer.create({
        data: {
            videogameId: 4,
            hoursPlayed: 200,
            achievementsUnlocked: 36,
        },
    });
    const Info5 = await db.infoPlayer.create({
        data: {
            videogameId: 5,
            hoursPlayed: 49,
            achievementsUnlocked: 48,
        },
    });
    const Info6 = await db.infoPlayer.create({
        data: {
            videogameId: 6,
            hoursPlayed: 203,
            achievementsUnlocked: 5,
        },
    });
    const Info7 = await db.infoPlayer.create({
        data: {
            videogameId: 7,
            hoursPlayed: 12,
            achievementsUnlocked: 15,
        },
    });
    const Info8 = await db.infoPlayer.create({
        data: {
            videogameId: 8,
            hoursPlayed: 1600,
            achievementsUnlocked: 52,
        },
    });
    const Info9 = await db.infoPlayer.create({
        data: {
            videogameId: 9,
            hoursPlayed: 1,
            achievementsUnlocked: 11,
        },
    });
    const Info10 = await db.infoPlayer.create({
        data: {
            videogameId: 10,
            hoursPlayed: 3,
            achievementsUnlocked: 23,
        },
    });
    const Info11 = await db.infoPlayer.create({
        data: {
            videogameId: 11,
            hoursPlayed: 37,
            achievementsUnlocked: 26,
        },
    });
    const Info12 = await db.infoPlayer.create({
        data: {
            videogameId: 12,
            hoursPlayed: 99,
            achievementsUnlocked: 35,
        },
    });
}

 await main();