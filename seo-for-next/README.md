# 🌐 SeoForNext

Enhance the SEO of your Next.js applications with ease. `SeoForNext` provides you with simple yet powerful tools to embed various JSON-LD schema types directly into your projects.


## 🚀 Features

- **Plug & Play**: Designed specifically for seamless integration with Next.js projects.
- **Diverse Schema Support**: From websites and articles to organizations and breadcrumbs.
- **SEO Boost**: Improve your web application's visibility on search engines with structured data.
- **Dynamic & Flexible**: Accommodates a single or multiple schemas in a component.

## 📖 Table of Contents

- [Getting Started](#getting-started)
- [Usage Examples](#usage-examples)
- [Supported Schemas](#supported-schemas)
- [API Reference](#api-reference)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## 🎉 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Next.js](https://nextjs.org/)

### Installation

1. Install the `SeoForNext` package:
   ```bash
   npm install SeoForNext
   ```

## 🔍 Usage Examples

### Basic Usage

```jsx
import SeoForNext from 'SeoForNext';

function MyComponent() {
    return (
        <>
            <SeoForNext 
                title="My Awesome Article" 
                description="This article talks about awesome things." 
                image="/path_to_image.jpg" 
                schemaTypes={["article"]} 
                schemaDatas={[articleData]}
            />
            {/* Rest of your component */}
        </>
    );
}
```

### Multiple Schemas

```jsx
import SeoForNext from 'SeoForNext';

function MyComponent() {
    return (
        <>
            <SeoForNext 
                title="My Website" 
                description="Welcome to my cool website." 
                image="/path_to_main_image.jpg" 
                schemaTypes={["website", "article", "organization"]} 
                schemaDatas={[websiteData, articleData, organizationData]}
            />
            {/* Rest of your component */}
        </>
    );
}
```

## 📜 Supported Schemas

For an exhaustive list of supported schemas, refer to the utility functions in the `schemaGenerators.js` file. However, some of the most commonly used include:

- `website`: Represents a website.
- `article`: Represents an article or blog post.
- `organization`: Represents an organization or company.
- `breadcrumb`: Represents a breadcrumb trail on a page.

## 📚 API Reference

- **title**: Your page's title.
- **description**: A brief description of your page.
- **image**: URL to an image that represents your content.
- **schemaTypes**: An array of the schemas you wish to use.
- **schemaDatas**: An array of data objects for each schema.

## 🛠 Best Practices

1. **Optimized Images**: Ensure the images you use (especially in the `article` schema) are optimized for the web to improve loading times.
2. **Relevant Descriptions**: Make sure your descriptions are relevant and concise.

## 🔧 Troubleshooting

- **Schema Not Showing**: Ensure you've correctly matched the schema type in `schemaTypes` with the corresponding data in `schemaDatas`.

## 💼 Contributing

We welcome contributions of all sizes. Before submitting, please read our [Contributing Guidelines](./CONTRIBUTING.md).

## 📄 License
This project is licensed under the MIT License. Read the full terms in the [LICENSE.md](./LICENSE.md) file.
