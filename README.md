# Pokédex 
check it out here: http://alenpokedex.netlify.app

![WebImage](Webimage.png)





Pokédex is a web application built using React and Axios that lets you search for Pokémon by name, language, and type. You can also view detailed information about each Pokémon, such as its type, moves, and stats. By clicking on the pokemon yo'll get redirected to a youtube Video of the selected Pokemone in the language you have selected. The Pokedex is fully CSS and is open for modification.

## Getting Started

To get started, you'll need to install the dependencies by running the following command:

```
npm install
```

Once the dependencies are installed, you can start the development server by running:

```
npm start
```

This will launch the application in your browser at http://localhost:3070/.



## Installation
- Clone the repository to your local machine.
- Navigate to the project directory in your terminal.
- Run npm install to install the necessary dependencies.
- Create a .env file in the root directory of the project and set the MONGO_URL environment variable to the URL of your MongoDB database. For example:


```
MONGO_URL=mongodb://localhost:27017/mydatabase
```

- Ensure that you have a pokemon.json file in the root directory of the project. This file contains data about each Pokémon.
- Run npm run populate to populate the MongoDB database with the data from the pokemon.json file.


## Usage

Once the application is running, you can use the following features:

- Run npm start to start the development server.
- Navigate to http://localhost:5173/ in your web browser to use the application.

- Search for Pokémon by name: Enter a Pokémon name in the search bar and press enter. The search results will be displayed on the screen.

- Filter Pokémon by language: Use the drop-down menu to select a language. The Pokémon names will be displayed in the selected language.

- Filter Pokémon by type: Use the drop-down menu to select a Pokémon type. The search results will be filtered to display only the Pokémon of the selected type.

- View detailed information about a Pokémon: Click on a Pokémon card to view its detailed information, including its type, moves, and stats.

## Contributing

If you'd like to contribute to the project, feel free to submit a pull request or create an issue.

## Credits

The Pokédex application uses the following libraries and frameworks:

- React
- Axios
- MongoDB

