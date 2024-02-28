## Getting Started

First, install package:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Run test:

```bash
npm run test
```

## Technologies Used

React
Redux
Vite
Tailwind CSS
Jest and React Testing Library
Axios
TypeScript


## Application and code structure

The project follows a typical React project structure:
```bash
|-- public/                     # Public assets directory
    |-- weather.svg             # Favicon
|-- src/                        # Source code directory
    |-- tests/                  # Test files directory
    |-- api/                    # API services directory
    |-- components/             # React components directory
    |-- store/                  # Redux store setup and slices directory
    |-- index.css               # CSS styles
    |-- main.tsx                # React entry point
|-- index.html                  # HTML entry point
|-- jest.config.ts              # Jest testing configuration file
|-- .eslintrc.cjs               # ESLint configuration file
|-- tsconfig.build.json         # TypeScript build configuration file
|-- vite.config.ts              # Vite configuration file
|-- tsconfig.json               # TypeScript configuration file
|-- package.json                # Project dependencies and scripts
|-- postcss.config.js           # PostCSS configuration file
|-- tailwind.config.js          # Tailwind CSS configuration file
```


## Deployment
The project is deployed on Vercel.
https://weather-widget-seven-rho.vercel.app/


## Things to Work on to Improve User Experience

Create a List of Weather Data: Implement a feature to display a comprehensive list of weather data, including temperature, humidity, wind speed, etc., for the selected location.

Add Weather Data for a Week: Enhance the weather widget by integrating a weekly forecast feature, allowing users to view weather predictions for the upcoming week.

Link Location with Map: Improve user interaction by integrating location data with a map view, enabling users to visualize the selected location and its surroundings.