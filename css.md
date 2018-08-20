
# CSS编码规范

[参考文档一](https://github.com/fex-team/styleguide/blob/master/css.md)

[参考文档二](https://segmentfault.com/a/1190000007023192)



[1 前言](#1)

[2 代码风格](#2)

　　[2.1 文件](#2.1)

　　[2.2 缩进](#2.2)

　　[2.3 空格](#2.3)

　　[2.4 行长度](#2.4)

　　[2.5 选择器](#2.5)

　　[2.6 属性](#2.6)

[3 通用](#3)

　　[3.1 选择器](#3.1)

　　[3.2 属性缩写](#3.2)

　　[3.3 属性书写顺序](#3.3)

　　[3.4 清除浮动](#3.4)

　　[3.5 !important](#3.5)

　　[3.6 z-index](#3.6)

[4 值与单位](#4)

　　[4.1 文本](#4.1)

　　[4.2 数值](#4.2)

　　[4.3 url()](#4.3)

　　[4.4 长度](#4.4)

　　[4.5 颜色](#4.5)

　　[4.6 2D 位置](#4.6)



## 1 <h3 id="1">前言</h3>


本文档主要适用于ReactJs CSS编程规范


## 2 <h3 id="2">代码风格<h3>


### <h4 id="2.1">2.1 文件<h4>

#### [建议] `CSS` 文件使用无 `BOM` 的 `UTF-8` 编码。[charset参考文档](https://developer.mozilla.org/en-US/docs/Web/CSS/@charset)

> @charset "utf-8";

解释：

UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。

### <h4 id="2.2">2.2 ID 和 Class 命名</h4>
* id 和 class 应该尽量简短，同时要尽量语义化，便于理解
* 在React中，ID和类选择器，以中横线为分隔符，单词首字母大写，且以组件名开头，避免和其他组件内部的样式重合

示例：

```css
.ComponentName-Lists {
  ...
}
#ComponentName-Ammount {
  ...
}
```

### <h4 id="2.3">2.3 缩进</h4>


#### [强制] 使用 `2` 个空格做为一个缩进层级，不允许使用 `4` 个空格。


示例：

```css
.Selector {
  margin: 0;
  padding: 0;
}
```

### <h4 id="2.4">2.4 空格</h4>


#### [强制] `选择器` 与 `{` 之间必须包含一个空格。

示例：

```css
.Selector {
}
```

#### [强制] `属性名` 与之后的 `:` 之间不允许包含空格， `:` 与 `属性值` 之间必须包含一个空格。

示例：

```css
margin: 0;
```

#### [强制] `列表型属性值` 书写在单行时，`,` 后必须跟一个空格。

示例：

```css
font-family: Arial, sans-serif;
```

### <h4 id="2.5">2.5 行长度</h4>


#### [强制] 每行不得超过 `120` 个字符，除非单行不可分割。

解释：

常见不可分割的场景为URL超长。


#### [建议] 对于超长的样式，在样式值的 `空格` 处或 `,` 后换行，建议按逻辑分组。

示例：

```css
/* 不同属性值按逻辑分组 */
background:
  transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
  no-repeat 0 0;

/* 可重复多次的属性，每次重复一行 */
background-image:
  url(aVeryVeryVeryLongUrlIsPlacedHere)
  url(anotherVeryVeryVeryLongUrlIsPlacedHere);

/* 类似函数的属性值可以根据函数调用的缩进进行 */
background-image: -webkit-gradient(
  linear,
  left bottom,
  left top,
  color-stop(0.04, rgb(88, 94, 124)),
  color-stop(0.52, rgb(115, 123, 162))
);
```

### <h4 id="2.6">2.6 选择器</h4>


#### [强制] 当一个 rule 包含多个 selector 时，每个选择器声明必须独占一行。

#### [强制] 类选择器命名，每个单词首字母必须大写，且首部为该组件名，单词之间以中横线“-”连接；

示例：

```css
/* good */
.Post,
.Page,
.Comment {
  line-height: 1.5;
}

.ComponentName-Filter-Box {
  font-size: 24px;
}

/* bad */
.Post, .Page, .Comment {
  line-height: 1.5;
}
filter-box {
  font-size: 24px;
}
```

#### [强制] `>`、`+`、`~` 选择器的两边各保留一个空格。

示例：

```css
/* good */
Main > Nav {
  padding: 10px;
}

label + input {
  margin-left: 5px;
}

input:checked ~ button {
  background-color: #69C;
}

/* bad */
Main>Nav {
  padding: 10px;
}

label+input {
  margin-left: 5px;
}

input:checked~button {
  background-color: #69C;
}
```

#### [强制] 属性选择器中的值必须用双引号包围。

解释：

#### [强制] 不允许使用单引号，不允许不使用引号。


示例：

```css
/* good */
article[character="juliet"] {
  voice-family: "Vivien Leigh", victoria, female
}

/* bad */
article[character='juliet'] {
  voice-family: "Vivien Leigh", victoria, female
}
```

### <h4 id="2.7">2.7 属性</h4>


#### [强制] 属性定义必须另起一行。

示例：

```css
/* good */
.Selector {
  margin: 0;
  padding: 0;
}

/* bad */
.Selector { margin: 0; padding: 0; }
```

#### [强制] 属性定义后必须以分号结尾。

示例：

```css
/* good */
.selector {
  margin: 0;
}

/* bad */
.selector {
  margin: 0
}
```






## <h3 id="3">3 通用</h3>




### <h4 id="3.1">3.1 选择器</h4>


#### [强制] 如无必要，不得为 `id`、`class` 选择器添加类型选择器(元素名)进行限定。

解释：

在性能和维护性上，都有一定的影响。


示例：


```css
/* good */
#error,
.Danger-Message {
  font-color: #c00;
}

/* bad */
dialog#error,
p.Danger-Message {
  font-color: #c00;
}
```

#### [建议] 选择器的嵌套层级应不大于 3 级，位置靠后的限定条件应尽可能精确。

示例：

```css
/* good */
#username input {}
.Comment .Avatar {}

/* bad */
.Page .Header .Login #username input {}
.Comment div * {}
```



### <h4 id="3.2">3.2 属性缩写</h4>



#### [建议] 在可以使用缩写的情况下，尽量使用属性缩写。

示例：

```css
/* good */
.Post {
  font: 12px/1.5 arial, sans-serif;
}

/* bad */
.Post {
  font-family: arial, sans-serif;
  font-size: 12px;
  line-height: 1.5;
}
```

#### [建议] 使用 `border` / `margin` / `padding` 等缩写时，应注意隐含值对实际数值的影响，确实需要设置多个方向的值时才使用缩写。

解释：

border / margin / padding 等缩写会同时设置多个属性的值，容易覆盖不需要覆盖的设定。如某些方向需要继承其他声明的值，则应该分开设置。


示例：

```css
/* centering <article class="page"> horizontally and highlight featured ones */
Article {
  margin: 5px;
  border: 1px solid #999;
}

/* good */
.Page {
  margin-right: auto;
  margin-left: auto;
}

.Featured {
  border-color: #69c;
}

/* bad */
.Page {
  margin: 5px auto; /* introducing redundancy */
}

.Featured {
  border: 1px solid #69c; /* introducing redundancy */
}
```


### <h4 id="3.3">3.3 属性书写顺序</h4>


#### [建议] 同一 rule set 下的属性在书写时，应按功能进行分组，并以 **Formatting Model（布局方式、位置） > Box Model（尺寸） > Typographic（文本相关） > Visual（视觉效果）** 的顺序书写，以提高代码的可读性。

解释：

- Formatting Model 相关属性包括：`position` / `top` / `right` / `bottom` / `left` / `float` / `display` / `overflow` 等
- Box Model 相关属性包括：`border` / `margin` / `padding` / `width` / `height` 等
- Typographic 相关属性包括：`font` / `line-height` / `text-align` / `word-wrap` 等
- Visual 相关属性包括：`background` / `color` / `transition` / `list-style` 等

另外，如果包含 `content` 属性，应放在最前面。


示例：

```css
.Sidebar {
  /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
  position: absolute;
  top: 50px;
  left: 0;
  overflow-x: hidden;

  /* box model: sizes / margins / paddings / borders / ...  */
  width: 200px;
  padding: 5px;
  border: 1px solid #ddd;

  /* typographic: font / aligns / text styles / ... */
  font-size: 14px;
  line-height: 20px;

  /* visual: colors / shadows / gradients / ... */
  background: #f5f5f5;
  color: #333;
  -webkit-transition: color 1s;
  -moz-transition: color 1s;
  transition: color 1s;
}
```


### <h4 id="3.4">3.4 清除浮动</h4>



#### [建议] 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 `clear` 或触发 `BFC` 的方式进行 `clearfix`。尽量不使用增加空标签的方式。

解释：

触发 BFC 的方式很多，常见的有：

* float 非 none
* position 非 static
* overflow 非 visible

如希望使用更小副作用的清除浮动方法，参见 [A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) 一文。

另需注意，对已经触发 BFC 的元素不需要再进行 clearfix。


### <h4 id="3.5">3.5 !important</h4>


#### [建议] 尽量不使用 `!important` 声明。


#### [建议] 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 `!important` 定义样式。

解释：

必须注意的是，仅在设计上 `确实不允许任何其它场景覆盖样式` 时，才使用内联的 `!important` 样式。通常在第三方环境的应用中使用这种方案。下面的 z-index 章节是其中一个特殊场景的典型样例。



### <h4 id="3.6">3.6 z-index</h4>



#### [建议] 将 `z-index` 进行分层，对文档流外绝对定位元素的视觉层级关系进行管理。

解释：

同层的多个元素，如多个由用户输入触发的 Dialog，在该层级内使用相同的 `z-index` 或递增 `z-index`。

建议每层包含100个 `z-index` 来容纳足够的元素，如果每层元素较多，可以调整这个数值。


#### [建议] 在可控环境下，期望显示在最上层的元素，`z-index` 指定为 `999999`。

解释：

可控环境分成两种，一种是自身产品线环境；还有一种是可能会被其他产品线引用，但是不会被外部第三方的产品引用。

不建议取值为 `2147483647`。以便于自身产品线被其他产品线引用时，当遇到层级覆盖冲突的情况，留出向上调整的空间。


#### [建议] 在第三方环境下，期望显示在最上层的元素，通过标签内联和 `!important`，将 `z-index` 指定为 `2147483647`。

解释：

第三方环境对于开发者来说完全不可控。在第三方环境下的元素，为了保证元素不被其页面其他样式定义覆盖，需要采用此做法。




## <h3 id="4">4 值与单位</h3>


### <h4 id="4.1">4.1 文本</h4>


#### [强制] 文本内容必须用双引号包围。

解释：

文本类型的内容可能在选择器、属性值等内容中。


示例：

```css
/* good */
html[lang|="zh"] q:before {
  font-family: "Microsoft YaHei", sans-serif;
  content: "“";
}

html[lang|="zh"] q:after {
  font-family: "Microsoft YaHei", sans-serif;
  content: "”";
}

/* bad */
html[lang|=zh] q:before {
  font-family: 'Microsoft YaHei', sans-serif;
  content: '“';
}

html[lang|=zh] q:after {
  font-family: "Microsoft YaHei", sans-serif;
  content: "”";
}
```

### <h4 id="4.2">4.2 数值</h4>


#### [强制] 当数值为 0 - 1 之间的小数时，省略整数部分的 `0`。

示例：

```css
/* good */
panel {
  opacity: .8
}

/* bad */
panel {
  opacity: 0.8
}
```

### <h4 id="4.3">4.3 url()</h4>


#### [强制] `url()` 函数中的路径不加引号。

示例：

```css
body {
  background: url(bg.png);
}
```


#### [建议] `url()` 函数中的绝对路径可省去协议名（https:/http:）。


示例：

```css
body {
  background: url(//baidu.com/img/bg.png) no-repeat 0 0;
}
```


### <h4 id="4.4">4.4 长度</h4>


#### [强制] 长度为 `0` 时须省略单位。 (也只有长度单位可省)

示例：

```css
/* good */
body {
  padding: 0 5px;
}

/* bad */
body {
  padding: 0px 5px;
}
```


### <h4 id="4.5">4.5 颜色</h4>


#### [强制] RGB颜色值必须使用十六进制记号形式 `#rrggbb`。不允许使用 `rgb()`。 

解释：

带有alpha的颜色信息可以使用 `rgba()`。使用 `rgba()` 时每个逗号后必须保留一个空格。


示例：

```css
/* good */
.Success {
  box-shadow: 0 0 2px rgba(0, 128, 0, .3);
  border-color: #008000;
}

/* bad */
.Success {
  box-shadow: 0 0 2px rgba(0,128,0,.3);
  border-color: rgb(0, 128, 0);
}
```

#### [强制] 颜色值可以缩写时，必须使用缩写形式。

示例：

```css
/* good */
.Success {
  background-color: #aca;
}

/* bad */
.Success {
  background-color: #aaccaa;
}
```

#### [强制] 颜色值不允许使用命名色值。

示例：

```css
/* good */
.Success {
  color: #90ee90;
}

/* bad */
.Success {
  color: lightgreen;
}
```

#### [建议] 颜色值中的英文字符采用小写。


示例：

```css
/* good */
.Success {
  background-color: #aca;
  color: #90ee90;
}

/* bad */
.Success {
  background-color: #ACA;
  color: #90ee90;
}
```


### <h4 id="4.6">4.6 2D 位置</h4>


#### [强制] 必须同时给出水平和垂直方向的位置。

解释：

2D 位置初始值为 `0% 0%`，但在只有一个方向的值时，另一个方向的值会被解析为 center。为避免理解上的困扰，应同时给出两个方向的值。[background-position属性值的定义](http://www.w3.org/TR/CSS21/colors.html#propdef-background-position)


示例：

```css
/* good */
body {
  background-position: center top; /* 50% 0% */
}

/* bad */
body {
  background-position: top; /* 50% 0% */
}
```













