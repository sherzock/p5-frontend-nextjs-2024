
import { db } from "@/db/db";

async function main() {
      const vg1 =await db.videogame.create({
        data: {
            name: 'The Legend of Zelda: Breath of the Wild',
            description: 'Un juego de acción y aventura',
            poster: 'https://example.com/zelda.jpg',
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
            poster: 'https://example.com/witcher3.jpg',
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
            poster: 'https://example.com/cyberpunk2077.jpg',
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
            poster: 'https://example.com/godofwar.jpg',
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
            poster: 'https://example.com/rdr2.jpg',
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
            poster: 'https://example.com/horizon.jpg',
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
            poster: 'https://example.com/ff7remake.jpg',
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
            poster: 'https://example.com/ghostoftsushima.jpg',
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
            poster: 'https://example.com/spiderman.jpg',
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
            poster: 'https://example.com/acvalhalla.jpg',
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
            poster: 'https://example.com/doometernal.jpg',
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
            poster: 'https://example.com/revillage.jpg',
            grades: 9.1,
            launchYear: 2021,
            developer: 'Capcom',
            totalAchievements: 40,
        }  
    });
    
}

 await main();