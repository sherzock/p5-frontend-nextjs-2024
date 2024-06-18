
import { db } from "@/db/db";

async function main() {
      const vg1 =await db.videogame.create({
        data: {
            name: 'The Legend of Zelda: Breath of the Wild',
            description: 'Un juego de acción y aventura',
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
            description: 'Un juego de rol',
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
            description: 'Un juego de rol de acción',
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
            description: 'Un juego de acción y aventura',
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
            description: 'Un juego de acción y aventura',
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
            description: 'Un juego de rol de acción',
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
            description: 'Un juego de rol',
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
            description: 'Un juego de acción y aventura',
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
            description: 'Un juego de acción y aventura',
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
            description: 'Un juego de rol de acción',
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
            description: 'Un juego de disparos en primera persona',
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
            description: 'Un juego de terror y supervivencia',
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