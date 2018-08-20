# 参考文档
## 项目使用说明

```
// 克隆远程项目
git clone https://github.com/JaylyLiu/blog.git
// 进入项目目录
cd blog
// 安装项目依赖
npm i
// 运行项目
npm start
```
# ReactJS 编码规范
## 目录
* [组件开发文件结构及命名规范](#1)
	* [组件内的文件结构](#1.1)
	* [组件内各文件的作用及命名规则](#1.2)
* [组件开发文件内容规范](#2)
	* [index.js](#2.1)
	* [ComponentName.js](#2.2)
		* [开发者声明](#2.2.1)
		* [需要引入的外部模块](#2.2.2)
		* [内部全局变量的声明](#2.2.3)
		* [主体类](#2.2.4)
		* [组件的默认值设置](#2.2.5)
		* [组件prop属性的类型检查规范声明](#2.2.6)
		* [返回文件默认类](#2.2.7)
	
	* [组件内各文件的内部结构规范](#2.2)
* [组件开发编程规范](#3)
	* [组件类编程规范]()
	* [组件样式规范]()
	* [组件图片管理规范]()

### <h2 id="1">组件内部文件命名规则</h2>

#### <h3 id="1.1">组件内的文件结构</h3>

	例：ComponentName 组件包含
	/ ComponentName.js 
	/ ComponentName.css 
	/ ComponentName.scss
	/ index.js 作为组件入口文件，指派默认主体文件，本组件的主体文件为ComponentName.js
	/ images （非必须）
	/ |-- index.js 引用images文件夹下全部图片，进行统一抛出（export）
	/ |-- img1.png image目录下的实例图片
	/ |-- img2.svg image目录下的实例图片
	/ |-- img...


#### <h3 id="1.2">组件内各文件的作用及命名规则</h3>

* 组件名一律用，帕斯卡命名法（又叫大驼峰式命名法，每个单词的第一个字母都大写）

> ComponentName

* index.js 作为组件入口文件，指派默认主体文件，本组件的主体文件为ComponentName.js

> export { default } from './ComponentName';

* ComponentName.js  为主体文件，其文件名必须和组件名保持一致
* ComponentName.css/.scss  css的文件名由组件名单词**首字母大写**中间以下划线分割构成，

> 如果使用sass，不需要单独建立css文件,新建.scss 文件时会自动生成相同文件名的.css 文件，保存编译后的样式代码；

* ComponentName.scss 

> 文件名和组件名保持一致

### <h2 id="2">组件开发文件内容规范</h2>

#### <h3 id="2.1">index.js</h3>

index.js作为组件入口文件，指派默认主体文件，本组件的主体文件为ComponentName.js,必须全小写为index；
				
```js
export { default } from './ComponentName';
```
				
#### <h3 id="2.2"> ComponentName.js</h3>

1. <h4 id="2.2.1">开发者声明</h4>
	
```js

/**
 * @author: Jayly 2018-09-01
 * @updatedBy: KG 2018-09-14（非必须,仅当有其他人修改时）
 * @updatedBY: Gulu 2018-10-10（非必须,仅当有其他人修改时）
 * TODO：表示这一阶段开发完成但是遗留的问题(非必须, 仅当有未完成任务时添加)
 *   1. 问题描述1
 *   2. 问题描述2
 */
```
2. <h4 id="2.2.2">需要引入的外部模块</h4>
	
```js
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
```
3. <h4 id="2.2.3">内部全局变量的声明</h4>

> 必须放在引入模块的后面，否则会报错

```js
let param1 = '' ...

```
4. <h4 id="2.2.4">主体类</h4>

> render中，return返回的元素必须有且仅有一个最外层元素<br>
	
```js

class ComponentName extends React.Component {
      /**
	* 这里要求统一写注释
	* 变量名: 数据类型 用途描述
	* value1: string 用途描述
	* number1: number 用途描述 
	* string1: string 用途描述
	* array1: array 用途描述
	* object1: object 用途描述
	*/
	state = {
		value1: '',
		number1: 12,
		string1: 'default value',
		array1: [],
		object1: this.props.someObject,
	}
	
	
	render() {
		const { 
			children, 
			classNames, 
			value1, 
			value2, 
			...others 
		} = this.props;
		
		return (
			<div className="ComponentName" {...others} ></div>
		)
	
	}
}

```
5. <h4 id="2.2.5">组件的默认值设置</h4>

> 为ComponentName的 **defaultProps** 属性赋值一个object对象；以prop属性为key,以将要设置的默认值为value；这里不强制要求备注，如需特殊说明自行备注；当且仅当外部prop.相应属性 没有传值时，才使用默认值；<br>
>  https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values


```js

/**
 * 这里不强制要求备注，如需特殊说明自行备注；
 * prop属性名：设此默认值的原因
 */
ComponentName.defaultProps = {
	color: 'default',
	component: 'button',
	disabled: false,
	disableFocusRipple: false,
	fullWidth: false,
	mini: false,
	size: 'medium',
	type: 'button',
	variant: 'text',
	object1: {
		key1: '',
	}
};
```
6. <h4 id="2.2.6">组件prop属性的类型检查规范声明</h4>

> 为ComponentName的 **propTypes** 属性赋一个object对象；以prop属性为key,以将要设置的数据类型为value；**需要为每一个prop的属性注释**；如果外部传入一个此处未声明过的props属性，在组件内部也是可以使用的，同理可类推于this.state;<br>
>  https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values


```js

例1：ComponentName 组件
单个注释和变量写在一起
ComponentName.propTypes = {
	/**
	 * 描述 The content of the button.
	 */
	children: PropTypes.node.isRequired,
	/**
	 * 描述Override or extend the styles applied to the component.
	 * See [CSS API](#css-api) below for more details.
	 */
	classes: PropTypes.object.isRequired,
};
---------------------------------------------------------------------
统一写注释和变量，更直观
ComponentName.propTypes = {
	/**
	 * children ：描述The content of the button.
	 * classes ：描述 Override or extend the styles applied to the component.
	 */
	children: PropTypes.node.isRequired,
	classes: PropTypes.object.isRequired,
};

```
7. <h4 id="2.2.7">返回文件默认类</h4>
> 将类抛出

```js
export default ComponentName
```



* 独立创建的组件样式必须包含在组件内部，不能放置在组件目录以外的地方（ComponentName.css，ComponentName.scss）	
* ComponentName.scss 里面包含sass语法编写的style样式，当文件夹内创建了该文件之后将自动生成一个对应的ComponentName.css文件；


### <h2 id="2"> 组件开发文件内容规范 </h2>

## css风格规范

[具体文档](https://github.com/JaylyLiu/blog/blob/master/css.md)

在对应的文件中创建 ComponentName.scss 文件之后，将自动创建一个对应编译后的 ComponentName.css 文件，直接引用css文件进行使用即可；

> import './ComponentName.css';<br/>
> import styles from './ComponentName.css';

* css/sass文件名一律和组件名保持一致
* 类选择器命名： 一律用中横线分割，首字母大写，首单词为组件名：.ComponentName-Filter-Box，命名语义化
* id选择去命名：一律用中横线分割，首字母大写，首单词为组件名#ComponentName-Target，命名语义化
* 组件中的类名：以组件名开头-功能;
	* 最外层元素的className必须同组件名保持一致


## HTML 使用规范

## Javascript 使用规范

## VScode 使用技巧

### 插件
**GitLens — Git supercharged**：用于Git追踪代码来源

**Mithril Emmet**：用于使用Emmet语法，快速编写代码

### 快捷键
参考以下文档<br>
Mac<br>
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf <br>
Linux<br>
https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

### 设置
可以将如下json拷贝至Vscode的Using Settings, 然后删除注释语句

```js
{
    // 控制何时自动保存已更新文件，此处是在设定的延迟时间之后自动保存，默认为1秒
    "files.autoSave": "afterDelay",
    // 调整窗口的缩放级别
    "window.zoomLevel": 1,
    // 一个制表符等于的空格数，这里固定为两个空格
    "editor.tabSize": 2,
    // 在 VS Code 中重命名或移动文件时启用或禁用自动更新 import 语句的路径。可选值有: "prompt" (在每次重命名时提示)、"always" (始终自动更新路径) 和 "never" (从不重命名路径且不要提示)。
    "javascript.updateImportsOnFileMove.enabled": "always",
    // 为指定的语法定义配置文件或使用带有特定规则的配置文件。
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
    // 控制折叠范围的计算方式。"auto" 将使用语言特定的折叠策略 (若可用)。"indentation" 将强制使用基于缩进的折叠策略。
    "editor.foldingStrategy": "indentation",
    // 启用后，按下 TAB 键，将展开 Emmet 缩写。
    "emmet.triggerExpansionOnTab": true,
    // 指定工作台中使用的颜色主题。
    "workbench.colorTheme": "Brackets Light Pro",
    // gitlens信息提示
    "gitlens.advanced.messages": {
        "suppressShowKeyBindingsNotice": true
    },
}
```





