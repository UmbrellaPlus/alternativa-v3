---
title: Собственно тестовая статья
created: 2026-07-02
lastmod: 2026-07-02
---

# Markdown syntax guide або Тест

## Headers Заголовки

# This is a Heading h1 Загловок 1
## This is a Heading h2 Заголовок 2
###### This is a Heading h6 Заголовок 6

## Emphasis

*This text will be italic*  
_This will also be italic_

*Італік шрифт*

**This text will be bold**  
__This will also be bold__

**Жирний шрифт **

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b
    * Item 3a
    * Item 3b

### Ordered

1. Item 1
2. Item 2
3. Item 3
    1. Item 3a
    2. Item 3b

## Images

![This is an alt text.](/image/Markdown-mark.svg "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns | Right columns |
| ------------- |:-------------:|
| left foo | right foo |
| left bar | right bar |
| left baz | right baz |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Mermaid diagrams
```mermaid
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Finish]
  B -->|No| D[Alternate]
```

## Inline code

This web site is using `markedjs/marked`.

