# Project Images

This directory contains screenshots and images for portfolio projects.

## Current Projects

1. **streaming-app.jpg** - Live Streaming App project screenshot
2. **task-management.jpg** - Task Management App project screenshot
3. **beachsafe-india.jpg** - BeachSafe India app project screenshot

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600px or 16:9 aspect ratio
- **Quality**: High quality for best visual impact
- **Naming**: Use kebab-case matching project titles

## Adding New Images

1. Add your image file to this directory
2. Update the `image` field in `/src/lib/data.ts` projects array
3. Use relative path starting with `/projects/`

Example:

```javascript
{
  id: 4,
  title: "My New Project",
  image: "/projects/my-new-project.jpg",
  // ... other fields
}
```
