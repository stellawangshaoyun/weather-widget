import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';
require('jest-fetch-mock').enableMocks();
fetchMock.enableMocks();
fetchMock.mockResponseOnce(JSON.stringify({ weather: { main: { temp: 25 } } }));