const movies = [
    {
        "title": "Alice in Wonderland",
        "year": "2010",
        "runtime": "108",
        "genres": [
            "adventure",
            "family",
            "fantasy"
        ],
        "directors": [
            "Tim Burton"
        ],
        "actors": [
            "Johnny Depp",
            "Mia Wasikowska",
            "Helena Bonham Carter",
            "Anne Hathaway"
        ],
        "plot": "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg"
    },
    {
        "title": "Shrek 2",
        "year": "2004",
        "runtime": "93",
        "genres": [
            "animation",
            "adventure",
            "comedy"
        ],
        "directors": [
            "Andrew Adamson",
            "Kelly Asbury",
            "Conrad Vernon"
        ],
        "actors": [
            "Mike Myers",
            "Eddie Murphy",
            "Cameron Diaz",
            "Julie Andrews"
        ],
        "plot": "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg"
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "year": "2002",
        "runtime": "179",
        "genres": [
            "action",
            "adventure",
            "drama"
        ],
        "directors": [
            "Peter Jackson"
        ],
        "actors": [
            "Bruce Allpress",
            "Sean Astin",
            "John Bach",
            "Sala Baker"
        ],
        "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg"
    },
    {
        "title": "The Hobbit: An Unexpected Journey",
        "year": "2012",
        "runtime": "169",
        "genres": [
            "adventure",
            "fantasy"
        ],
        "directors": [
            "Peter Jackson"
        ],
        "actors": [
            "Ian McKellen",
            "Martin Freeman",
            "Richard Armitage",
            "Ken Stott"
        ],
        "plot": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg"
    },
    {
        "title": "Ice Age",
        "year": "2002",
        "runtime": "81",
        "genres": [
            "animation",
            "adventure",
            "comedy"
        ],
        "directors": [
            "Chris Wedge",
            "Carlos Saldanha"
        ],
        "actors": [
            "Ray Romano",
            "John Leguizamo",
            "Denis Leary",
            "Goran Visnjic"
        ],
        "plot": "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzI1ODA0MF5BMl5BanBnXkFtZTYwODIxODY3._V1_SX300.jpg"
    },
    {
        "title": "Crocodile Dundee",
        "year": "1986",
        "runtime": "97",
        "genres": [
            "adventure",
            "comedy"
        ],
        "directors": [
            "Peter Faiman"
        ],
        "actors": [
            "Paul Hogan",
            "Linda Kozlowski",
            "John Meillon",
            "David Gulpilil"
        ],
        "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
    },
    {
        "title": "Ratatouille",
        "year": "2007",
        "runtime": "111",
        "genres": [
            "animation",
            "comedy",
            "family"
        ],
        "directors": [
            "Brad Bird", "Jan Pinkava"
        ],
        "actors": [
            "Patton Oswalt",
            "Ian Holm",
            "Lou Romano",
            "Brian Dennehy"
        ],
        "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    },
    {
        "title": "Stardust",
        "year": "2007",
        "runtime": "127",
        "genres": [
            "adventure",
            "family",
            "fantasy"
        ],
        "directors": [
            "Matthew Vaughn"
        ],
        "actors": [
            "Ian McKellen",
            "Bimbo Hart",
            "Alastair MacIntosh",
            "David Kelly"
        ],
        "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    },
    {
        "title": "Apocalypto",
        "year": "2006",
        "runtime": "139",
        "genres": [
            "action",
            "adventure",
            "drama"
        ],
        "directors": [
            "Mel Gibson"
        ],
        "actors": [
            "Rudy Youngblood",
            "Dalia Hernández",
            "Jonathan Brewer",
            "Morris Birdyellowhead"
        ],
        "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
    },
    {
        "title": "No Country for Old Men",
        "year": "2007",
        "runtime": "122",
        "genres": [
            "crime",
            "drama",
            "thriller"
        ],
        "directors": [
            "Ethan Coen",
            "Joel Coen"
        ],
        "actors": [
            "Tommy Lee Jones",
            "Javier Bardem",
            "Josh Brolin",
            "Woody Harrelson"
        ],
        "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
    },
    {
        "title": "The Third Man",
        "year": "1949",
        "runtime": "93",
        "genres": [
            "film-noir",
            "mystery",
            "thriller"
        ],
        "directors": [
            "Carol Reed"
        ],
        "actors": [
            "Joseph Cotten",
            "Alida Valli",
            "Orson Welles",
            "Trevor Howard"
        ],
        "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
    },
    {
        "title": "The Beach",
        "year": "2000",
        "runtime": "119",
        "genres": [
            "adventure",
            "drama",
            "romance"
        ],
        "directors": [
            "Danny Boyle"
        ],
        "actors": [
            "Leonardo DiCaprio",
            "Daniel York",
            "Patcharawan Patarakijjanon",
            "Virginie Ledoyen"
        ],
        "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "title": "Scarface",
        "year": "1983",
        "runtime": "170",
        "genres": [
            "crime",
            "drama"
        ],
        "directors": [
            "Brian De Palma"
        ],
        "actors": [
            "Al Pacino",
            "Steven Bauer",
            "Michelle Pfeiffer",
            "Mary Elizabeth Mastrantonio"
        ],
        "plot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
    },
    {
        "title": "Sid and Nancy",
        "year": "1986",
        "runtime": "112",
        "genres": [
            "biography",
            "drama",
            "music"
        ],
        "directors": [
            "Alex Cox"
        ],
        "actors": [
            "Gary Oldman",
            "Chloe Webb",
            "David Hayman",
            "Debby Bishop"
        ],
        "plot": "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
    },
    {
        "title": "Black Swan",
        "year": "2010",
        "runtime": "108",
        "genres": [
            "drama",
            "thriller"
        ],
        "directors": [
            "Darren Aronofsky"
        ],
        "actors": [
            "Natalie Portman", "Mila Kunis", "Vincent Cassel", "Barbara Hershey"
        ],
        "plot": "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
    },
    {
        "title": "Inception",
        "year": "2010",
        "runtime": "148",
        "genres": [
            "action",
            "adventure",
            "sci-fi"
        ],
        "directors": [
            "Christopher Nolan"
        ],
        "actors": [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt",
            "Ellen Page",
            "Tom Hardy"
        ],
        "plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        "title": "Chasing Amy",
        "year": "1997",
        "runtime": "113",
        "genres": [
            "comedy",
            "drama",
            "romance"
        ],
        "directors": [
            "Kevin Smith"
        ],
        "actors": [
            "Ethan Suplee",
            "Ben Affleck",
            "Scott Mosier",
            "Jason Lee"
        ],
        "plot": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        "title": "The Silence of the Lambs",
        "year": "1991",
        "runtime": "118",
        "genres": [
            "crime",
            "drama",
            "thriller"
        ],
        "directors": [
            "Jonathan Demme"
        ],
        "actors": [
            "Jodie Foster",
            "Lawrence A. Bonney",
            "Kasi Lemmons",
            "Lawrence T. Wrentz"
        ],
        "plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
    },
    {
        "title": "Midnight Express",
        "year": "1978",
        "runtime": "121",
        "genres": [
            "crime",
            "drama",
            "thriller"
        ],
        "directors": [
            "Alan Parker"
        ],
        "actors": [
            "Brad Davis",
            "Irene Miracle",
            "Bo Hopkins",
            "Paolo Bonacelli"
        ],
        "plot": "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
    },
    {
        "title": "Pulp Fiction",
        "year": "1994",
        "runtime": "154",
        "genres": [
            "crime",
            "drama"
        ],
        "directors": [
            "Quentin Tarantino"
        ],
        "actors": [
            "Tim Roth",
            "Amanda Plummer",
            "Laura Lovelace",
            "John Travolta"
        ],
        "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
    },
    {
        "title": "Lock, Stock and Two Smoking Barrels",
        "year": "1998",
        "runtime": "107",
        "genres": [
            "comedy",
            "crime"
        ],
        "directors": [
            "Guy Ritchie"
        ],
        "actors": [
            "Jason Flemyng",
            "Dexter Fletcher",
            "Nick Moran",
            "Jason Statham"
        ],
        "plot": "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "title": "Mr. & Mrs. Smith",
        "year": "2005",
        "runtime": "120",
        "genres": [
            "action",
            "comedy",
            "crime"
        ],
        "directors": [
            "Doug Liman"
        ],
        "actors": [
            "Brad Pitt",
            "Angelina Jolie",
            "Vince Vaughn",
            "Adam Brody"
        ],
        "plot": "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.",
        "poster_url": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg"
    },
];

export default movies;
