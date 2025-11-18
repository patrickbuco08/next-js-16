# PropertyHub - Next.js 16 Enterprise Folder Structure

A professional, production-ready Next.js 16 application with enterprise-grade folder structure designed for large-scale applications like property portals, e-commerce platforms, or SaaS products.

## 🚀 Features

- ✅ **Next.js 16** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Enterprise folder structure** with feature-based architecture
- ✅ **Reusable UI components** library
- ✅ **Centralized API service** layer
- ✅ **Custom hooks** for state management
- ✅ **Type-safe** imports with path aliases (@/)
- ✅ **Scalable** for teams of 5-50+ developers

## 📁 Folder Structure

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed documentation.

```
├── app/                    # Next.js App Router
├── src/                    # Source code (@ imports)
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── shared/        # Layout components
│   ├── features/          # Feature modules
│   ├── hooks/             # Custom hooks
│   ├── services/          # API services
│   ├── lib/               # Utilities & constants
│   └── types/             # TypeScript types
└── public/                # Static assets
```

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file (see [ENV_TEMPLATE.md](./ENV_TEMPLATE.md)):

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Project Structure Highlights

### Components Organization

- **UI Components** (`src/components/ui/`): Generic, reusable components like Button, Input, Card
- **Shared Components** (`src/components/shared/`): Layout components like Navbar, Footer
- **Feature Components** (`src/features/*/components/`): Feature-specific components

### Feature-Based Architecture

Each feature is self-contained:

```
src/features/properties/
├── components/          # PropertyCard, PropertyFilters
├── hooks/              # useProperties
└── index.ts            # Barrel export
```

### API Service Layer

Centralized API communication:

```typescript
// src/services/api/properties.service.ts
import { propertiesService } from '@/services/api';

const properties = await propertiesService.getProperties({ page: 1 });
```

### Custom Hooks

Reusable stateful logic:

```typescript
import { useAuth, useDebounce, useLocalStorage } from '@/hooks';
```

## 🎨 Styling

This project uses **Tailwind CSS** with a utility-first approach. UI components use the `cn()` utility for conditional class merging.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Technologies

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Utilities**: clsx, tailwind-merge
- **Font**: Geist Sans & Geist Mono

## 📚 Documentation

- [Folder Structure Guide](./FOLDER_STRUCTURE.md) - Detailed folder structure documentation
- [Environment Variables](./ENV_TEMPLATE.md) - Environment configuration template

## 🌟 Example Features

### Property Portal Example

The project includes a complete property portal example:

- **Homepage** with hero section and features
- **Properties listing** page with filters
- **Property details** page
- **API routes** for CRUD operations
- **Type-safe** data models

### Components Included

- ✅ Button (5 variants)
- ✅ Input (with validation)
- ✅ Card (3 variants)
- ✅ Navbar
- ✅ Footer
- ✅ PropertyCard
- ✅ PropertyFilters

### Services Included

- ✅ API Client (with auth headers)
- ✅ Properties Service
- ✅ Auth Service

### Hooks Included

- ✅ useAuth
- ✅ useDebounce
- ✅ useLocalStorage
- ✅ useProperties

## 🚀 Deployment

### Deploy to Vercel

```bash
vercel deploy
```

### Build for Production

```bash
npm run build
npm run start
```

## 📈 Scaling Considerations

This structure supports:

- **Multiple teams** working on different features
- **Code splitting** by feature
- **Easy testing** with isolated modules
- **Clear boundaries** between layers
- **Type safety** throughout the application

## 🤝 Contributing

When adding new features:

1. Create feature folder in `src/features/`
2. Add components, hooks, and logic
3. Create API service in `src/services/api/`
4. Add types to `src/types/`
5. Create routes in `app/`

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with Next.js 16, leveraging the latest App Router features and React Server Components.
