### ä»ç» ð

ððð å¢éç®¡çç»ä¸æ¡æ¶

ð

### å®è£ä½¿ç¨æ­¥éª¤ ð

- **Installï¼**

```text
npm install
cnpm install

# npm install å®è£å¤±è´¥ï¼è¯·åçº§ nodejs å° 16 ä»¥ä¸ï¼æå°è¯ä½¿ç¨ä»¥ä¸å½ä»¤ï¼
npm install --registry=https://registry.npm.taobao.org
```

- **Runï¼**

```text
npm run dev
npm run serve
```

- **Buildï¼**

```text
# å¼åç¯å¢
npm run build:dev

# æµè¯ç¯å¢
npm run build:test

# çäº§ç¯å¢
npm run build:pro
```

- **Lintï¼**

```text
# eslint æ£æµä»£ç 
npm run lint:eslint

# prettier æ ¼å¼åä»£ç 
npm run lint:prettier

# stylelint æ ¼å¼åæ ·å¼
lint:stylelint
```

- **commitï¼**

```text
# æäº¤ä»£ç ï¼ä¼èªå¨æ§è¡ lint:lint-staged å½ä»¤ï¼
npm run commit
```

### é¡¹ç®æªå¾

### æä»¶èµæºç®å½ ð

```text
ââ .vscode                # vscodeæ¨èéç½®
ââ public                 # éæèµæºæä»¶ï¼å¿½ç¥æåï¼
ââ src
â  ââ api                 # API æ¥å£ç®¡ç
â  ââ assets              # éæèµæºæä»¶
â  ââ components          # å¨å±ç»ä»¶
â  ââ config              # å¨å±éç½®é¡¹
â  ââ enums               # é¡¹ç®æä¸¾
â  ââ hooks               # å¸¸ç¨ Hooks
â  ââ language            # è¯­è¨å½éå
â  ââ layouts             # æ¡æ¶å¸å±
â  ââ routers             # è·¯ç±ç®¡ç
â  ââ store               # å¨å±store
â  ââ styles              # å¨å±æ ·å¼
â  ââ typings             # å¨å± ts å£°æ
â  ââ utils               # å·¥å·åº
â  ââ views               # é¡¹ç®ææé¡µé¢
â  ââ App.tsx             # å¥å£é¡µé¢
â  ââ main.tsx            # å¥å£æä»¶
â  ââ env.d.ts            # vite å£°ææä»¶
ââ .editorconfig          # ç¼è¾å¨éç½®ï¼æ ¼å¼åï¼
ââ .env                   # vite å¸¸ç¨éç½®
ââ .env.development       # å¼åç¯å¢éç½®
ââ .env.production        # çäº§ç¯å¢éç½®
ââ .env.test              # æµè¯ç¯å¢éç½®
ââ .eslintignore          # å¿½ç¥ Eslint æ ¡éª
ââ .eslintrc.js           # Eslint æ ¡éªéç½®
ââ .gitignore             # git æäº¤å¿½ç¥
ââ .prettierignore        # å¿½ç¥ prettier æ ¼å¼å
ââ .prettierrc.js         # prettier éç½®
ââ .stylelintignore       # å¿½ç¥ stylelint æ ¼å¼å
ââ .stylelintrc.js        # stylelint æ ·å¼æ ¼å¼åéç½®
ââ commitlint.config.js   # git æäº¤è§èéç½®
ââ index.html             # å¥å£ html
ââ LICENSE                # å¼æºåè®®æä»¶
ââ lint-staged.config     # lint-staged éç½®æä»¶
ââ package-lock.json      # ä¾èµååçæ¬é
ââ package.json           # ä¾èµåç®¡ç
ââ postcss.config.js      # postcss éç½®
ââ README.md              # README ä»ç»
ââ tsconfig.json          # typescript å¨å±éç½®
ââ vite.config.ts         # vite éç½®
```
