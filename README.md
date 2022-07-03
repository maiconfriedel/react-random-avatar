A React component to generate awesome random avatars using https://getavataaars.com

# Storybook
Storybook avaliable at https://maiconfriedel.github.io/react-random-avatar

# Installation

You can install it with `npm` or `yarn`

```sh
# npm
npm install react-random-avatar

#yarn
yarn add react-random-avatar
```

# Usage scenarios

## Default

Using the default component will generate a random avatar every time.

**The *size* parameter is required in all usage scenarios.**

```JSX
<RandomAvatar
  size={30}
/>
```
<img src="./assets/random.gif" style="height: 150px;width: 300px" />

## With a Seed

Using the component passing a seed parameter will generate everytime the same avatar.

```JSX
<RandomAvatar
  seed="seed"
  size={30}
/>
```

<img src="./assets/seeded.gif" style="height: 150px;width: 300px" />

## Transparent

Passing the `transparent` option to the component, will remove the blue circle behind the avatar.

### Normal
```JSX
<RandomAvatar
  size={30}
/>
```
<img src="./assets/normal.png" />

### Transparent
```JSX
<RandomAvatar
  size={30}
  transparent
/>
```
<img src="./assets/transparent.png" />
