---
title: "TypeScript Hints and Navigation"
---

## Overview

The `@resourge/translations` library provides integration with VS Code, offering TypeScript hints for translations and easy navigation to translation files. This feature enhances your development experience by providing quick access to translation values and the ability to navigate to translation files directly from your code.

## Prerequisites

To benefit from the TypeScript hints and navigation, make sure you have the following set up:

- Visual Studio Code (VS Code) installed on your system
- The VS Code project workspace open and configured for your project

## Usage

1. Open your Vue.js or React component file that uses translations.

2. Place the cursor on top of a translation usage, such as `T.global.hello`.

<img src="/assets/translations/translations_1.png" alt="Hover translations">

3. VS Code will display a TypeScript hint that shows the translation values for each language. This helps you quickly identify the translation values without navigating to the translation file.

4. To navigate to the translation file, click on the translation key (e.g., `hello`). VS Code will open the translation file, allowing you to make edits or review the translations.

<img src="/assets/translations/translations_2.png" alt="Auto complete">

5. Make any necessary changes to the translations and save the file.

6. Return to your component file, and the updated translation values will automatically be reflected in the TypeScript hint.

This integration streamlines your translation workflow, providing a seamless experience for accessing and modifying translations without leaving your code editor.

## Configuration

The TypeScript hints and navigation feature is automatically enabled when using the `@resourge/translations` library. There is no additional configuration required to enable this functionality.
