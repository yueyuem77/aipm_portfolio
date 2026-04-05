# React + TypeScript + Vite
frontend/
├── public/                  # 静态资源
├── src/
│   ├── assets/              # 图片、SVG 等资源文件
│   ├── components/
│   │   └── layout/          # 布局组件
│   │       ├── Header.tsx   # 顶部导航栏
│   │       ├── Footer.tsx   # 页脚
│   │       ├── Layout.tsx   # 整体布局（Header + Outlet + Footer）
│   │       └── index.ts     # 统一导出
│   ├── hooks/               # 自定义 Hooks（待填充）
│   ├── pages/               # 页面组件
│   │   ├── HomePage.tsx     # 首页占位
│   │   ├── AboutPage.tsx    # 关于页占位
│   │   ├── NotFoundPage.tsx # 404 页面
│   │   └── index.ts         # 统一导出
│   ├── styles/              # 样式文件（待填充）
│   ├── types/               # TypeScript 类型定义（待填充）
│   ├── utils/               # 工具函数（待填充）
│   ├── router.tsx           # 路由配置
│   ├── App.tsx              # 根组件
│   ├── main.tsx             # 入口文件
│   └── index.css            # 全局样式（已集成 Tailwind CSS）
├── vite.config.ts           # Vite 配置（含 @ 路径别名）
├── tsconfig.json            # TypeScript 配置
└── package.json

技术栈：

构建工具：Vite 8
框架：React 19 + TypeScript
路由：React Router v7（createBrowserRouter）
样式：Tailwind CSS v4
路径别名：@/ 指向 src/

```bash
cd frontend && npm run dev
```
# End of Selection
```


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
