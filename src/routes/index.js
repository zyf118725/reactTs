// 路由表
// 注意：路由表不能直接导出一个数组，会报错，需要包在一个函数组件中导出去
import { Navigate, useRoutes } from "react-router-dom";
import Home from '../pages/home';
import News from '../pages/news';
// 404页面

// 配置路由表
const routes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/news', element: <News /> },
]

// 使用useRoutes处理路由表
const AppRouter = () => useRoutes(routes)
export default AppRouter;