import { pool } from './database.js'
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

async function reset() {
    try {
        await pool.query(`
            DROP TABLE IF EXISTS events;
            DROP TABLE IF EXISTS locations;

            CREATE TABLE locations (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                address VARCHAR(255),
                image_url TEXT
            );

            CREATE TABLE events (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                date DATE,
                time TIME,
                image_url TEXT,
                location_id INTEGER REFERENCES locations(id)
            );

            INSERT INTO locations (name, address, image_url) VALUES
                ('Bryant Park', 'Bryant Park, New York, NY', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/960px-New-York_-_Bryant_Park.jpg'),
                ('Delacorte Theater', '81 Central Park W, New York, NY', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shakespeare_in_the_Park_July_2021.jpg/500px-Shakespeare_in_the_Park_July_2021.jpg'),
                ('Prospect Park', 'Prospect Park, Brooklyn, NY', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Prospect_Park_New_York_October_2015_003.jpg/960px-Prospect_Park_New_York_October_2015_003.jpg'),
                ('Central Park', 'Central Park, New York, NY', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg/960px-Global_Citizen_Festival_Central_Park_New_York_City_from_NYonAir_%2815351915006%29.jpg');

            INSERT INTO events (name, description, date, time, image_url, location_id) VALUES
                ('Bryant Park Movie Night', 'Free outdoor movie screening on the lawn', '2026-07-10', '20:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/960px-New-York_-_Bryant_Park.jpg', 1),
                ('Summer Fitness Classes', 'Free yoga and fitness classes in the park', '2026-07-18', '08:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/960px-New-York_-_Bryant_Park.jpg', 1),
                ('Winter Village Market', 'Seasonal market with food and crafts', '2026-08-05', '10:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/New-York_-_Bryant_Park.jpg/960px-New-York_-_Bryant_Park.jpg', 1),
                ('Shakespeare in the Park - Hamlet', 'Free performance of Hamlet by the Public Theater', '2026-07-15', '20:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shakespeare_in_the_Park_July_2021.jpg/500px-Shakespeare_in_the_Park_July_2021.jpg', 2),
                ('Shakespeare in the Park - A Midsummer Night Dream', 'Free performance by the Public Theater', '2026-07-22', '20:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shakespeare_in_the_Park_July_2021.jpg/500px-Shakespeare_in_the_Park_July_2021.jpg', 2),
                ('Theater Workshop', 'Free public theater workshop for all ages', '2026-08-01', '14:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Shakespeare_in_the_Park_July_2021.jpg/500px-Shakespeare_in_the_Park_July_2021.jpg', 2),
                ('Prospect Park Concert', 'Free summer concert series at the bandshell', '2026-07-20', '18:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Prospect_Park_New_York_October_2015_003.jpg/960px-Prospect_Park_New_York_October_2015_003.jpg', 3),
                ('Brooklyn BBQ Festival', 'Annual BBQ competition and food festival', '2026-07-25', '12:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Prospect_Park_New_York_October_2015_003.jpg/960px-Prospect_Park_New_York_October_2015_003.jpg', 3),
                ('Prospect Park 5K Run', 'Community fun run around the park loop', '2026-08-10', '07:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Prospect_Park_New_York_October_2015_003.jpg/960px-Prospect_Park_New_York_October_2015_003.jpg', 3),
                ('Central Park Summerstage', 'Free outdoor concert series', '2026-07-17', '19:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/The_Lake_Central_Park.jpg/960px-The_Lake_Central_Park.jpg', 4),
                ('Great Lawn Picnic Festival', 'Community picnic with live music', '2026-07-30', '11:00', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/The_Lake_Central_Park.jpg/960px-The_Lake_Central_Park.jpg', 4),
                ('Central Park Bird Watching Tour', 'Guided bird watching walk through the Ramble', '2026-08-08', '07:30', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/The_Lake_Central_Park.jpg/960px-The_Lake_Central_Park.jpg', 4);
    `)
        console.log('Tables created and seeded!')
    } catch (error) {
        console.error(error)
    } finally {
        pool.end()
    }
}

reset()