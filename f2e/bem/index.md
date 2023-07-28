# BEM 理论知识点

## BEM 架构是什么？

::: tip 什么是BEM？

BEM 架构是对前端样式命名的规范化，顾名思义，BEM 由 块【block】、元素【element】、修饰符【modifier】组成，其主要作用是方便开发团队对前端项目的样式命名进行统一化处理，加强后期的维护工作。

:::

## 浅谈 BEM 架构组成
>BEM代表 “块（block）,元素（element）,修饰符（modifier）”,我们常用这三个实体开发组件。

### 块【block】
 - 块 可以理解为一个作用域标签，附有独立实体的意义，例如我们常常将一个页面的头部命名为 header、内容命名为 content 等等，这在 BEM 架构中采用 - 横杠来连接，常见的有 ElementUI 中用来代表一个表单块的 el-form。
### 元素【element】
 - 元素 可以理解为 块 中的子项，没有独立实体的意义，但有一定的语义，例如我们常常将一个列表项命名为 item、头部的标题命名为 title 等等，这在 BEM 架构中采用 __ 双下划线来连接，常见的有 ElementUI 中用来代表一个表单项的 el-form__item。
### 修饰符【modifier】
 - 修饰符 可以理解为 块 或 元素 的一个额外标记，主要用来表示一个特定的外观或行为，例如我们常常用绿色来表示一个成功的提示、黄色来表示一个警告的提示等等，这在 BEM 架构中采用 -- 双横杠来连接，常见的有 ElementUI 中用来代表一个成功的按钮 el-button--success。

## BEM命名规则
:::tip 命名规则

- [block]
- [block]__[element]--[modifier]
- [block]--[modifier] 
- [block]__[element] 

:::
- __ 双下划线用于连接 block 与 element
- -- 双连字符用于连接 modifier
- -单连字符用于连接由多单词组成的名字，如.box__goods-image--big

## BEM命名的优势
   可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。
  ::: tip 优势

   - 样式隔离，避免样式污染
   - 代码更容易覆盖
   - 代码易读

  :::
## 应用
- mixins.scss
 ```css
 
$namespcae: 'qw' !default;
$block-sel: "-" !default;
$elem-sel: "__" !default;
$mod-sel: "--" !default;

// BEM
@mixin b($block, $selector: "") {
  $B: $namespace + $common-separator + $block !global;

  .#{$B + $selector} {
    @content;
  }
}

@mixin e($element) {
  $E: $element !global;
  $selector: &;
  $currentSelector: "";

  @each $unit in $element {
    $currentSelector: #{$currentSelector +
      "." +
      $B +
      $element-separator +
      $unit +
      ","};
  }

  @if hitAllSpecialNestRule($selector) {
    @at-root {
      #{$selector} {
        #{$currentSelector} {
          @content;
        }
      }
    }
  } @else {
    @at-root {
      #{$currentSelector} {
        @content;
      }
    }
  }
}

@mixin m($modifier) {
  $selector: &;
  $currentSelector: "";

  @each $unit in $modifier {
    $currentSelector: #{$currentSelector +
      $selector +
      $modifier-separator +
      $unit +
      ","};
  }

  @at-root {
    #{$currentSelector} {
      @content;
    }
  }
}

@mixin configurable-m($modifier, $E-flag: false) {
  $selector: &;
  $interpolation: "";

  @if $E-flag {
    $interpolation: $element-separator + $E-flag;
  }

  @at-root {
    #{$selector} {
      .#{$B + $interpolation + $modifier-separator + $modifier} {
        @content;
      }
    }
  }
}

@mixin spec-selector(
  $specSelector: "",
  $element: $E,
  $modifier: false,
  $block: $B
) {
  $modifierCombo: "";

  @if $modifier {
    $modifierCombo: $modifier-separator + $modifier;
  }

  @at-root {
    #{&}#{$specSelector}.#{$block
      + $element-separator
      + $element
      + $modifierCombo
      } {
      @content;
    }
  }
}

@mixin meb($modifier: false, $element: $E, $block: $B) {
  $selector: &;
  $modifierCombo: "";

  @if $modifier {
    $modifierCombo: $modifier-separator + $modifier;
  }

  @at-root {
    #{$selector} {
      .#{$block + $element-separator + $element + $modifierCombo} {
        @content;
      }
    }
  }
}

@mixin when($state) {
  @at-root {
    &.#{$state-prefix + $state} {
      @content;
    }
  }
}

@mixin extend-rule($name) {
  @extend #{"%shared-" + $name} !optional;
}

@mixin share-rule($name) {
  $rule-name: "%shared-" + $name;

  @at-root #{$rule-name} {
    @content;
  }
}

@mixin pseudo($pseudo) {
  @at-root #{&}#{":#{$pseudo}"} {
    @content;
  }
}

@mixin picker-popper($background, $border, $box-shadow) {
  &.#{$namespace}-popper {
    background: $background;
    border: $border;
    box-shadow: $box-shadow;

    .#{$namespace}-popper__arrow {
      &::before {
        border: $border;
      }
    }

    @each $placement,
      $adjacency
        in ("top": "left", "bottom": "right", "left": "bottom", "right": "top")
    {
      &[data-popper-placement^="#{$placement}"] {
        .#{$namespace}-popper__arrow::before {
          border-#{$placement}-color: transparent;
          border-#{$adjacency}-color: transparent;
        }
      }
    }
  }
}

 ```
 - tag.scss

```css

@use "./mixins/mixins.scss" as *;

@include b(tag) {
  width: 64px;
  height: 29px;
  margin-right: 15px;
  color: #e8f4ff;
  background: #0c2647;
  box-shadow: inset 0px 0px 3px 0px #277cf0;
  border-radius: 6px;
  border: 1px solid #277cf0;

  @include m(success) {
    color: #e8f4ff;
    background: rgba(0, 255, 83, 0.3);
    box-shadow: inset 0px 0px 2px 0px #00ff53;
    border-radius: 6px;
    border: 1px solid #00ff53;
  }

  @include m(info) {
    color: #e8f4ff;
    background: rgba(75, 75, 75, 0.68);
    box-shadow: inset 0px 0px 2px 0px #76b2c9;
    border-radius: 6px;
    border: 1px solid #cacaca;
  }

  @include m(danger) {
    color: #e8f4ff;
    background: rgba(255, 58, 0, 0.52);
    box-shadow: inset 0px 0px 2px 0px #ff3a00;
    border-radius: 6px;
    border: 1px solid #ff3a00;
  }
}


```
