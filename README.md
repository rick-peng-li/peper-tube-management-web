# Peper Tube Management Web

> **项目 Git 地址**: `git@github.com:example/peper-tube-management-web.git`

## 项目简介

Peper Tube Management Web 是一个现代化的视频管管理后台系统，提供完整的商品管理、订单管理、客户管理等功能。

## 技术架构

### 前端技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^19.2.6 | 前端框架 |
| Vite | ^8.0.12 | 构建工具 |
| TailwindCSS | ^4.3.0 | CSS 框架 |
| React Router | ^7.15.1 | 路由管理 |
| Recharts | ^3.8.1 | 图表库 |
| Axios | ^1.16.1 | HTTP 客户端 |
| React Icons | ^5.6.0 | 图标库 |

### 后端技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Node.js | - | 运行时 |
| Express | ^5.2.1 | Web 框架 |
| MongoDB | - | 数据库 |
| Mongoose | ^9.6.2 | MongoDB ODM |
| JWT | ^9.0.3 | 身份认证 |
| bcryptjs | ^3.0.3 | 密码加密 |
| cors | ^2.8.6 | 跨域处理 |

## 项目结构

```
peper-tube-management-web/
├── client/                    # 前端项目
│   ├── public/               # 静态资源
│   ├── src/
│   │   ├── assets/          # 资源文件
│   │   ├── components/      # 公共组件
│   │   ├── context/         # React Context
│   │   ├── layouts/         # 布局组件
│   │   ├── pages/           # 页面组件
│   │   ├── routes/          # 路由配置
│   │   └── services/        # API 服务
│   └── package.json
├── server/                   # 后端项目
│   ├── config/              # 配置文件
│   ├── controllers/         # 控制器
│   ├── middleware/          # 中间件
│   ├── models/              # 数据模型
│   ├── routes/              # 路由定义
│   └── index.js             # 入口文件
└── README.md
```

## 功能模块

- **Dashboard**: 数据仪表盘，展示关键指标和图表
- **Products**: 商品管理（列表、新增、编辑）
- **Orders**: 订单管理（订单列表、状态管理）
- **Customers**: 客户管理（客户列表、详情）
- **Authentication**: 用户认证（登录、权限控制）

## 环境要求

- Node.js >= 18.x
- MongoDB >= 6.x

## 启动方式

### 开发环境

#### 1. 安装依赖

```bash
# 安装后端依赖
cd server
npm install

# 安装前端依赖
cd ../client
npm install
```

#### 2. 配置环境变量

在 `server/.env` 文件中配置：

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/peper-tube-db
JWT_SECRET=your_jwt_secret_key
```

#### 3. 启动服务

```bash
# 启动后端服务（终端1）
cd server
npm start

# 启动前端开发服务器（终端2）
cd client
npm run dev
```

#### 4. 访问项目

- 前端地址: `http://localhost:5173`
- 后端 API: `http://localhost:5000`

### 生产构建

```bash
# 构建前端
cd client
npm run build

# 启动生产服务器
cd server
npm start
```

## API 接口

### 认证接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/auth/login | 用户登录 |
| POST | /api/auth/register | 用户注册 |

### 商品接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | /api/products | 获取商品列表 |
| GET | /api/products/:id | 获取商品详情 |
| POST | /api/products | 创建商品 |
| PUT | /api/products/:id | 更新商品 |
| DELETE | /api/products/:id | 删除商品 |

### 订单接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | /api/orders | 获取订单列表 |
| GET | /api/orders/:id | 获取订单详情 |
| POST | /api/orders | 创建订单 |
| PUT | /api/orders/:id | 更新订单状态 |

## 开发规范

- 使用 ESLint 进行代码检查
- 遵循 React Hooks 规范
- 使用 async/await 处理异步操作
- 代码注释清晰，便于维护

## 许可证

MIT License
