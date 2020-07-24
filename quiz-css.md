# CSS 的使用

如果你最近不常写 CSS，那么写上简单的文字说明也行，  
如果你常写 CSS，那么附上简单的 Demo 代码更好。

Demo 代码可以新建一个或多个文件（不限），  
例如新建一个 `writing-style.css`，并在其中完成。

## Q1

下面是 PostCSS 编译后生成的代码，如果你来写源码，你会怎么写。
（实现方式不限，比如可以用 CSS in JS、Vue style 等方式）

```css
.container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.container > div:nth-child(1) {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}
```

## Q2

你用过哪些 CSS 的方法论和工具  
简单描述即可，例如：

> - PostCSS + autoprefixer 用来编译 CSS 代码，提高部分 CSS 的浏览器兼容性。
>
> - BEM 是用来处理 class 命名的，有一个三段式命名规则，形如 ↓：
>
> ```css
> .form--theme-xmas {
> }
> ```

答：
1.PostCss和autoprefixer都只听说过，没用过，大概知道是用来加浏览器前缀的,css兼容和回退基本上没怎么考虑，公司最近的项目就是浏览器上
移动端除了ipad之外能正常显示就可以了，这方面比较欠缺吧
2.命名方式参考BEM的，感觉可以这样：
    以main-footer-btn-disabled为例：
    (1).BEM写法:
    类名如下：
    main-footer__btn     main-footer__btn--disabled

    scss如下：
    .main-footer__btn{
      //按钮样式
    }
    .main-footer__btn--disabled{
      //按钮样式
    pointer-events:none;
    opacity:.5;
    }


    (2).个人考虑的写法:

    类名如下：
    main-footer__btn    __disabled

    scss如下：
    .main-footer__btn{
      //按钮样式
      &.__disabled{
      pointer-events:none;
      opacity:.5;
      }
    }
    相比较BEM写法，感觉更简洁

3.浏览器前缀:
    以flex布局为例，scss 利用@mixin保存所有display:flex相关兼容：
    @mixin flexbox() {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
    }
    在需要的容器上调用：
    .wrapper {
      @include flexbox();
    }

    详细的flex布局：
    @mixin flex-row($justify:flex-start,$align:center){
      display:flex;
      justify-content: $justify;
      align-items: $align;
    }
    
    @mixin flex-column($justify:flex-start,$align:center){
      display:flex;
      flex-direction:column;
      justify-content: $justify;
      align-items: $align;
    }
    .class{
        @include flex-row(flex-start,center )
    }