# Common Core Components

一个基于React和TypeScript的现代化UI组件库。

## 安装

```bash
npm install common-core-components
```

## 使用

```jsx
import { Button, Card } from 'common-core-components';
import 'common-core-components/dist/style.css'; // 导入样式

function App() {
  return (
    <div>
      <Button variant="primary">点击我</Button>
      
      <Card title="卡片标题">
        这是卡片内容
      </Card>
    </div>
  );
}
```

## 组件

### Button

按钮组件，用于触发操作。

```jsx
<Button 
  variant="primary" // 'primary' | 'secondary' | 'outline'
  onClick={() => console.log('按钮被点击')}
  disabled={false}
>
  按钮文本
</Button>
```

### Card

卡片组件，用于内容展示。

```jsx
<Card 
  title="卡片标题" 
  footer={<div>卡片底部内容</div>}
>
  卡片主体内容
</Card>
```

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建组件库

```bash
npm run build
```

## 许可证

MIT
