# Changelog
All notable changes to the 2022_Portfolio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2022-08-10
Initial building of the Portfolio App.

### Added
- Basic setup
- Font handling files/config
- Header section

### Changed
- Updated Changelog
- Updated package.json
- Updated Project Readme.md

## [1.0.1] - 2022-08-14

Overall
### Added
- Alias's for Global Assets and Global Config folder
- Added css_vars implementation

### Changed
- Updated file paths to Global Assets and Global Config files to use new aliases
- Updated styles to use new CSS declarations.

Header Image
### Added
- Hero Image BG Image asset
- Hero Image Component

## [1.0.2] - 2022-08-16

### Added
- Skills section wrap.
- Added Accordion.


## [1.0.3] - 2022-08-17

### Added
- Projects Wrap
- Projects Individual

## [1.0.4] - 2022-08-19

### Added
- Resume page

# [2.0.0]
This release is the addition of the responsive styles to the app.
This is a major refactor, and will effect ALL components

## [2.0.0] - 2022-08-20

### Added
- Mobile Configuration
- globalConfig/mobile JS
  - Added function to be used within the styled-components to handle media queries.

### Changed
- Global Styles Responsive styles.
- Header Component Responsive styles.

## [2.0.1] - 2022-08-24

### Added
- Edits to webpack config
- Config for Heroku hosting complete.

### Changed
- Webpack config updated for heroku configuration

## [2.0.2] - 2022-08-26

### Changed
- Cleaning up final documentation, and removal of unneeded code.

## [2.0.3] - 2022-09-15
Added Weather App Rebuild project

### Added
- ./src/globalAssets/images/projects/weather_rebuild.png

### Changed
- ./src/globalAssets/data/projects.js
  - Added Weather App details

## [2.0.2] - 2022-12-07
- ./src/components/pages/Resume/Resume.js
- ./src/components/pages/Resume/StyledResume.js
- ./src/globalAssets/data/resume.js
- ./src/globalAssets/data/skills.js
  - Updated content
  
## [2.1.0] - 2022-12-26
- Updated Nodejs Req to 19.x (Current)