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

```bash
src/
├── assets/                # Asset files such as images and icons
│   ├── icons.scss         # SVG icons stored as data URLs
├── components/            # React components
│   ├── Chart.tsx          # Chart component
│   ├── CoEmissionsFilters.tsx  # Filters component
├── services/              # Service files for API calls
│   ├── Co2MapDeService.ts # Service for fetching carbon intensity data
├── styles/                # Styles organized using ITCSS architecture
│   ├── 1-settings/        # Global settings and design tokens
│   │   ├── _colors.scss   # Color tokens
│   │   ├── _fonts.scss    # Font tokens
│   │   ├── _spacing.scss  # Spacing tokens
│   │   ├── _icons.scss    # Icon tokens
│   │   ├── index.scss     # Consolidated settings
│   ├── 2-tools/           # Mixins and functions
│   │   ├── _mixins.scss   # SCSS mixins
│   │   ├── _functions.scss # SCSS functions
│   │   ├── index.scss     # Consolidated tools
│   ├── 3-generic/         # Generic styles (resets, normalize)
│   │   ├── _normalize.scss # Normalize styles
│   │   ├── index.scss     # Consolidated generic styles
│   ├── 4-elements/        # Base styles for HTML elements
│   │   ├── _base.scss     # Base element styles
│   │   ├── _typography.scss # Typography styles
│   │   ├── index.scss     # Consolidated element styles
│   ├── 5-objects/         # Layout and grid styles
│   │   ├── _layout.scss   # Layout styles
│   │   ├── _grid.scss     # Grid styles
│   │   ├── index.scss     # Consolidated object styles
│   ├── 6-components/      # Component styles
│   │   ├── _buttons.scss  # Button styles
│   │   ├── _forms.scss    # Form styles
│   │   ├── index.scss     # Consolidated component styles
│   ├── 7-utilities/       # Utility and helper classes
│   │   ├── _modifiers.scss # Modifier classes
│   │   ├── _utilities.scss # Utility classes
│   │   ├── index.scss     # Consolidated utility styles
│   ├── main.scss          # Main SCSS file importing all styles
├── App.tsx                # Main application component
├── index.tsx              # Entry point for the React application

## Task Requirements
To create a single page dashboard that shows the Carbon intensity for a selected German federal state over a predefined date range, with the following requirements:

The user should be able to select a German federal state. Please use this API to source the Carbon intensity data: [https://api.co2map.de/docs#/](https://api.co2map.de/docs#/)

Additionally, the following information should be displayed on the page

- Plan A logo
- The provided description
- The selected federal state
- The start (2019-02-01) and end date (2022-06-15)
- A chart (using the Recharts library)