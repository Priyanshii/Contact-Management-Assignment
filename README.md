# Contact Management App

This is Contact Management Application built with ReactJS, TypeScript, TailwindCSS, React Router v6, React Query (TanStack Query) and Redux Toolkit. It allows users to manage contacts and visualize COVID-19 data through interactive charts and maps.

### Features

- Add, view, edit, and delete contacts.
- Display a list of all contacts.
- Interactive dashboard with a line graph showing COVID-19 case fluctuations.
- Interactive map with markers displaying COVID-19 data by country.

### Getting Started

Prerequisites

Ensure you have the following installed:

*Node.js*

*npm or Yarn*

## Installation

Clone the Repository:

`git clone https://github.com/your-username/contact-management-app.git`

`cd contact-management-app`

Install Dependencies:

### `npm install`

Running the Application
Start the Development Server:

### `npm start`

This will start the app in development mode. Open your browser and navigate to http://localhost:3000.

Build the App for Production:

### `npm run build`

This will build the app for production in the build folder.

## API Endpoints

The app uses the following API endpoints to fetch COVID-19 data:


**Worldwide COVID-19 Data:**

URL: https://disease.sh/v3/covid-19/all

Description: Fetches global COVID-19 data including total cases, affected countries, deaths, recovered, and active cases, Test taken etc.


**Country-Specific COVID-19 Data:**

URL: https://disease.sh/v3/covid-19/countries

Description: Fetches COVID-19 data for each country including country name, total cases, deaths, recovered, and active cases.

**COVID-19 Historical Data:**

URL: https://disease.sh/v3/covid-19/historical/all?lastdays=all
Description: Fetches historical global COVID-19 data to visualize the cases over time.


## Usage

- Manage Contacts: Add new contacts, view contact details, edit or delete existing contacts.
- Dashboard: View a line graph of COVID-19 cases fluctuations and explore country-specific data on the interactive map.
