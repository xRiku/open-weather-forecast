<h1 align='Center'>
OpenWeather Forecast 
</h1>


This project creates a daily (or 5-day) forecast for some of the biggest cities in the US using the OpenWeather API. 

## What's Under The Hood 🧰

This app is built using a jam-packed tech stack including:

-   [React](https://react.dev/)
-   [Styled components](https://styled-components.com/)
-   [Zustand](https://github.com/pmndrs/zustand)
-   [React query](https://tanstack.com/query/latest)
-   [Vitest](https://vitest.dev/)
-   [Typescript](https://www.typescriptlang.org/)

## Getting Started :gear:

To get a local copy up and running, you'll need a few things installed on your machine.

### Prerequisites 🛠️

-   [Git](http://git-scm.com/)
-   [Node](http://nodejs.org/)

### Installation Steps :wrench:

In your terminal, run:

```sh
$ git clone https://github.com/xRiku/open-weather-forecast.git
$ cd open-weather-forecast
$ npm i
```

### API Key :key:

Before launching the app, you can see there's a ```.env.example``` file that contains a ```VITE_OPENWEATHER_API_KEY``` variable and expects a value, thus you need to create a file named ```.env``` with the same variable to enable the app to function. To get the value of said variable you should go to OpenWeather's [website](https://openweathermap.org/), log in or create an account, then in the header under your username click on ```My API keys```. There you can generate a random key. Copy the key and add it to the `.env```` file like the following ```VITE_OPENWEATHER_API_KEY=<your key>```. Please notice that it may take a few hours for the key to be activated, so running the app may not work properly right away.

### Running the Application :rocket:
After installation, you can start the application by running:
```sh
$ npm run dev
```
Navigate to `http://localhost:5173/` to see the app.

### Running the Tests (Optional) :white_check_mark:
To run the tests, use the following command:
```sh
$ npm run test
```

## Contributing :handshake:
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License :scroll:

This project is under the MIT License - see the [License](https://github.com/Vets-Who-Code/vwc-site/blob/master/LICENSE) for more details.