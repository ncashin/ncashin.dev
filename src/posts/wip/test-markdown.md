---
title: "Markdown Style Test"
author: "Somebody"
description: "Testing all markdown elements"
---

# Main Heading (H1)

This is a comprehensive test of all markdown elements.

## Secondary Heading (H2)

### Tertiary Heading (H3)

#### Quaternary Heading (H4)

##### Quinary Heading (H5)

###### Senary Heading (H6)

## Text Formatting

**Bold text** and _italic text_ can be combined for **_bold italic text_**.

You can also use `inline code` within paragraphs.

Here's some ~~strikethrough text~~ and <mark>highlighted text</mark>.

## Lists

### Unordered Lists

- First item
- Second item with **bold text**
- Third item with `code`
- Nested list:
  - Sub-item 1
  - Sub-item 2
    - Deep nested item

### Ordered Lists

1. First numbered item
2. Second numbered item
3. Third numbered item with [a link](https://example.com)
4. Nested ordered list:
   1. Sub-item 1
   2. Sub-item 2

## Code Blocks

### Basic Code Block

```javascript
function helloWorld() {
  console.log("Hello, World!");
  return "Hello from Safari-style browser!";
}
```

### Python Code Block

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test the function
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### CSS Code Block

```css
.safari-style {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

## Blockquotes

> This is a blockquote. It should have a nice left border and background styling.
>
> It can span multiple lines and contain **bold text** and `code`.

> Another blockquote with different content to test spacing.

## Links

Here are various types of links:

- [Regular link](https://example.com)
- [Link with title](https://example.com "Example Website")
- [Internal link](#main-heading-h1)
- [Email link](mailto:test@example.com)

## Images

![Example Image](https://via.placeholder.com/400x200/4A90E2/FFFFFF?text=Safari+Style+Image)

## Tables

| Feature             | Description                     | Status      |
| ------------------- | ------------------------------- | ----------- |
| Safari-style window | Rounded corners, proper shadows | ✅ Complete |
| Markdown rendering  | Comprehensive element support   | ✅ Complete |
| Responsive design   | Mobile-friendly layout          | ✅ Complete |
| Code highlighting   | Syntax highlighting support     | ✅ Complete |

### Complex Table

| Language   | Paradigm       | Year Created | Popularity |
| ---------- | -------------- | ------------ | ---------- |
| JavaScript | Multi-paradigm | 1995         | Very High  |
| Python     | Multi-paradigm | 1991         | Very High  |
| Rust       | Systems        | 2010         | Growing    |
| Haskell    | Functional     | 1990         | Niche      |

## Definition Lists

HTML definition lists (though not standard markdown):

<dl>
  <dt>Safari</dt>
  <dd>A web browser developed by Apple Inc.</dd>
  <dt>Markdown</dt>
  <dd>A lightweight markup language for creating formatted text.</dd>
</dl>

## Horizontal Rules

---

Above is a horizontal rule.

## Keyboard and Sample Text

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

Sample output: <samp>Hello, World!</samp>

## Mathematical Expressions

Subscript: H<sub>2</sub>O

Superscript: E = mc<sup>2</sup>

## Small Text

<small>This is small text, often used for disclaimers or fine print.</small>

## Inserted and Deleted Text

This text has been <ins>inserted</ins> and this text has been <del>deleted</del>.

## Code with Language Specification

```typescript
interface BlogPost {
  title: string;
  author: string;
  content: string;
  tags?: string[];
}

const post: BlogPost = {
  title: "Test",
  author: "Natalie",
  content: "Beautiful markdown rendering",
};
```

## Long Content Test

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Nested Content

This section tests nested content rendering:

1. **Bold numbered item**
2. _Italic numbered item_
3. `Code numbered item`
4. [Link numbered item](https://example.com)

> Blockquote within a section

```bash
# Shell command example
echo "Testing nested code blocks"
```
