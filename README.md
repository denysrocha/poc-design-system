
# POC Design System
This is a Vue 3 project with Storybook 8 and Jest 29.

The intention here is to show how to get a component created in [Figma](https://www.figma.com/file/NgN8onU79nZEIIJJXIEvls/Design-System---POC?type=design&node-id=12-1381&mode=design&t=BvnKIxG3EfRp5oqB-0) can be replicated in Storybook using design tokens to ensure consistency between the component created in design and in code. Remembering that this first version was developed in one day of work, from design to code.

This is a POC (Proof of Concept), so you will only see a button component, which was completely inspired by [Atlassian](https://www.atlassian.com/) products, such as Jira Software .

Notice how the `poc-button` component was created, mainly how its css is built from variables in the `design-tokens.css` file, where these were exported directly from the Figma file.

Take advantage and run unit tests, which test the added classes according to what is expected in the component's `props`.

## Project Setup
To run the project you need the most up-to-date version of node and yarn. Download the repository to your computer and start installing the dependencies.
```sh
npm install
```  
### Running the application
```sh
yarn storybook
```

### Running unit tests

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)
 
```sh
npm run lint
```

## Next steps
* Create more basic components (atoms) such as inputs, chips, alerts, etc.
* Create complex components (organisms) such as lists, cards, headers, etc.
* Use Vuex to manage component states.
* Create more complex tests that cover state behavior.
* Create documentation pages explaining in which cases and how the component should be used.