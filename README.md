# Plan A

Plan A is a web application designed to provide information about carbon intensity in different states of Germany. The application uses ITCSS architecture and design tokens to maintain a clean and modular structure for styles.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Libraries](#libraries)
- [Project Structure](#project-structure)
- [Task Requeriments](#task-requirements)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/plan-a.git
2. Install the dependencies:
   ```bash
   npm install

## Usage

1. To run the application locally, use the following command:
   ```bash
   npm run dev

## Libraries

The following libraries where used for the solution.

- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [recharts](https://recharts.org/en-US/)   

## Project Structure

The project follows the ITCSS (Inverted Triangle CSS) architecture to organize styles. Here is an overview of the project structure:

src/
├── assets/
│   ├── icons.scss
├── styles/
│   ├── 1-settings/
│   │   ├── _colors.scss
│   │   ├── _fonts.scss
│   │   ├── _spacing.scss
│   │   ├── _icons.scss
│   │   ├── index.scss
│   ├── 2-tools/
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   ├── index.scss
│   ├── 3-generic/
│   │   ├── _normalize.scss
│   │   ├── index.scss
│   ├── 4-elements/
│   │   ├── _base.scss
│   │   ├── _typography.scss
│   │   ├── index.scss
│   ├── 5-objects/
│   │   ├── _layout.scss
│   │   ├── _grid.scss
│   │   ├── index.scss
│   ├── 6-components/
│   │   ├── _buttons.scss
│   │   ├── _forms.scss
│   │   ├── index.scss
│   ├── 7-utilities/
│   │   ├── _modifiers.scss
│   │   ├── _utilities.scss
│   │   ├── index.scss
│   ├── main.scss

## Task Requirements
To create a single page dashboard that shows the Carbon intensity for a selected German federal state over a predefined date range, with the following requirements:

The user should be able to select a German federal state. Please use this API to source the Carbon intensity data: [https://api.co2map.de/docs#/](https://api.co2map.de/docs#/)

Additionally, the following information should be displayed on the page

- Plan A logo
- The provided description
- The selected federal state
- The start (2019-02-01) and end date (2022-06-15)
- A chart (using the Recharts library)