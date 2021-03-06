# Changelog

All notable changes to this project will be documented in this file.

<!-- ## [1.0.0] - YYYY-MM-DD -->

<!-- ### Added
- anything you new added to the package -->

<!-- ### Changed
- anything that was pre exisiting that was changed in the package -->

<!-- ### Removed
- anything pre exisiting that has been removed from the package  -->

<!--
### Fixed
- anything bugs fixed in the package
-->

<!--
## [Unreleased]
- anything you're working on
--->

## [1.1.41] - 2021-04-29

### ADDED

the Form component now has an optional defaultValues object as supported by react-hook-form. https://react-hook-form.com/api/useform

it also has optional access to the mode controller which controls when validation occurs. default is onBlur

## [1.1.40] - 2021-04-28

### FIXED

fixed duplicate child rendering

## [1.1.39] - 2021-04-28

### Added

Grid and Grid Styles are now separate components

### Changed

Grid is a HOC and returns it's parent props. this is mainly used for forms and should be revised
Masonry is now it's own folder index

## [1.1.39] - 2021-04-28

### MISTAKE

## [1.1.37] - 2021-03-20

### Changed

updated layout styles

### Added

Added elipses constraints for list items

## [1.1.36] - 2021-03-20

### Added

Added height and width restrictions to modal section child

## [1.1.35] - 2020-03-05

Changed the CTALink and Button interfaces to not share unnecessary props

### Removed

- removed handleClick, isSubmit, isLoading, url from the IButton interface

### Added

- added handleClick, isSubmit, isLoading to the IButtonProps interface
- added url to the ICTALink interface

## [1.1.34] - 2020-03-04

### Fixed

- fixed button styles for grey and ghost props

### Changed

- form now validates on blur

## [1.1.33] - 2020-03-03

### Changed

- form now validates on blur

## [1.1.32] - 2020-03-03

### Changed

- changed build step script to "publish"

## [1.1.31] - 2020-03-03

### Added

- added build step to publish

## [1.1.30] - 2020-03-03

### Removed

- removed hasValidation prop on all inputs in favour of using validationRules as an indicator
- removed old **comoponents and **helpers folders

### Changed

- now passing reset prop from react hook form to all children of Form

## [1.1.29] - 2020-03-03

### Added

- updated IFormProps to accept a optional readonly boolean
- readonly prop added for Input and Textarea

## [1.1.28] - 2020-03-02

### Added

- disabled props for all inputs
