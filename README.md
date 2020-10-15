## Translucent Statusbar Android

[![npm version](https://img.shields.io/npm/v/rn-translucent-statusbar-android?color=green)](https://www.npmjs.com/package/rn-translucent-statusbar-android)
[![npm download](https://img.shields.io/npm/dm/rn-translucent-statusbar-android?color=blue)](https://www.npmjs.com/package/rn-translucent-statusbar-android)

<img width="600px" src="./img/translucent-statusbar-android.png" />

### Installation

```sh
npm install rn-translucent-statusbar-android
```

or

```sh
yarn add rn-translucent-statusbar-android
```

### Usage

```diff
+++ index.js

import { AppRegistry } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";
+ import hiddenStatus from "rn-translucent-statusbar-android";

+ hiddenStatus("light-content");
AppRegistry.registerComponent(appName, () => App);
```

### License

MIT

### Pull requests

Always welcome!
