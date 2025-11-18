# Next.js 16 Enterprise Folder Structure

## Overview
This is a professional, scalable folder structure for Next.js 16 applications, optimized for large-scale projects like property portals, e-commerce platforms, or SaaS applications.

## Folder Structure

```
bocum-next-js-16/
├── app/                                    # Next.js 16 App Router
│   ├── layout.tsx                          # Root layout with Navbar/Footer
│   ├── page.tsx                            # Homepage
│   ├── globals.css                         # Global styles
│   ├── properties/                         # Properties feature routes
│   │   ├── page.tsx                        # Properties list page
│   │   └── [id]/                          # Dynamic route for property details
│   │       └── page.tsx                    # Property detail page
│   └── api/                               # API Routes
│       └── properties/                     # Properties API endpoints
│           ├── route.ts                    # GET /api/properties, POST /api/properties
│           └── [id]/                      # Dynamic API route
│               └── route.ts                # GET, PUT, DELETE /api/properties/:id
│
├── src/                                    # Source code (all imports via @/)
│   ├── components/                         # React components
│   │   ├── ui/                            # Reusable UI components
│   │   │   ├── Button.tsx                  # Button component with variants
│   │   │   ├── Input.tsx                   # Input component with validation
│   │   │   ├── Card.tsx                    # Card component
│   │   │   └── index.ts                    # Export all UI components
│   │   └── shared/                         # Shared/layout components
│   │       ├── Navbar.tsx                  # Navigation bar
│   │       ├── Footer.tsx                  # Footer
│   │       └── index.ts                    # Export shared components
│   │
│   ├── features/                           # Feature-based modules
│   │   └── properties/                     # Properties feature
│   │       ├── components/                 # Feature-specific components
│   │       │   ├── PropertyCard.tsx        # Property card component
│   │       │   ├── PropertyFilters.tsx     # Filter panel
│   │       │   └── index.ts               # Export components
│   │       ├── hooks/                      # Feature-specific hooks
│   │       │   ├── useProperties.ts        # Hook for fetching properties
│   │       │   └── index.ts               # Export hooks
│   │       └── index.ts                   # Export feature module
│   │
│   ├── hooks/                              # Global custom hooks
│   │   ├── useAuth.ts                      # Authentication hook
│   │   ├── useDebounce.ts                  # Debounce hook
│   │   ├── useLocalStorage.ts              # LocalStorage hook
│   │   └── index.ts                        # Export all hooks
│   │
│   ├── services/                           # External service integrations
│   │   └── api/                           # API service layer
│   │       ├── client.ts                   # API client (fetch wrapper)
│   │       ├── properties.service.ts       # Properties API calls
│   │       ├── auth.service.ts             # Authentication API calls
│   │       └── index.ts                    # Export services
│   │
│   ├── lib/                                # Library code
│   │   ├── utils/                          # Utility functions
│   │   │   ├── format.ts                   # Formatting utilities
│   │   │   ├── validation.ts               # Validation utilities
│   │   │   ├── cn.ts                       # Class name merger (Tailwind)
│   │   │   └── index.ts                    # Export utils
│   │   └── constants/                      # Application constants
│   │       └── index.ts                    # Routes, config, etc.
│   │
│   └── types/                              # TypeScript type definitions
│       └── index.ts                        # Global types and interfaces
│
├── public/                                 # Static assets
│   ├── images/                            # Image assets
│   ├── icons/                             # Icon files
│   └── fonts/                             # Custom fonts
│
├── package.json                           # Dependencies
├── tsconfig.json                          # TypeScript configuration
├── next.config.ts                         # Next.js configuration
├── tailwind.config.ts                     # Tailwind CSS configuration
└── .env.local                             # Environment variables
```

## Key Principles

### 1. **Feature-Based Organization**
- Each major feature gets its own folder under `src/features/`
- Features are self-contained with their own components, hooks, and logic
- Example: `src/features/properties/`, `src/features/auth/`, `src/features/agents/`

### 2. **Separation of Concerns**
- **Components**: Pure presentation logic
- **Hooks**: Reusable stateful logic
- **Services**: External API communication
- **Utils**: Pure helper functions
- **Types**: Type definitions

### 3. **Import Aliases**
- All imports from `src/` use the `@/` prefix
- Example: `import { Button } from '@/components/ui'`
- Configured in `tsconfig.json` paths

### 4. **Component Organization**
- **UI Components** (`src/components/ui/`): Reusable, generic components
- **Shared Components** (`src/components/shared/`): Layout and common components
- **Feature Components** (`src/features/*/components/`): Feature-specific components

### 5. **Service Layer**
- Centralized API client with interceptors
- Feature-specific service files (e.g., `properties.service.ts`)
- Consistent error handling and response formatting

## File Naming Conventions

- **Components**: PascalCase (e.g., `PropertyCard.tsx`)
- **Hooks**: camelCase with "use" prefix (e.g., `useProperties.ts`)
- **Services**: camelCase with ".service" suffix (e.g., `properties.service.ts`)
- **Utils**: camelCase (e.g., `format.ts`)
- **Types**: PascalCase for interfaces/types, camelCase for files

## Adding New Features

When adding a new feature (e.g., "agents"):

1. Create feature folder: `src/features/agents/`
2. Add components: `src/features/agents/components/`
3. Add hooks: `src/features/agents/hooks/`
4. Add service: `src/services/api/agents.service.ts`
5. Add types: Update `src/types/index.ts`
6. Add routes: Create `app/agents/` pages

## Scalability Features

- ✅ **Type-safe** with TypeScript throughout
- ✅ **Modular** feature-based architecture
- ✅ **Reusable** UI component library
- ✅ **Centralized** API service layer
- ✅ **Consistent** naming conventions
- ✅ **Maintainable** separation of concerns
- ✅ **Testable** isolated components and logic

## Environment Variables

Create `.env.local` for environment-specific configuration:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

## Best Practices

1. **Keep components small and focused**
2. **Extract reusable logic into hooks**
3. **Use TypeScript for type safety**
4. **Follow consistent import ordering**
5. **Document complex logic**
6. **Use barrel exports (index.ts)**
7. **Keep API calls in service layer**
8. **Validate data at boundaries**

## Example Usage

### Using a Feature Component

```tsx
// In app/properties/page.tsx
import { PropertyCard, PropertyFilters } from '@/features/properties';
import { useProperties } from '@/features/properties';

export default function PropertiesPage() {
  const { properties, isLoading } = useProperties();
  
  return (
    <div>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
```

### Using Services

```tsx
// In a component or hook
import { propertiesService } from '@/services/api';

const properties = await propertiesService.getProperties({ page: 1, limit: 12 });
```

### Using Types

```tsx
import type { Property, PropertyFilters } from '@/types';

const property: Property = {
  // Type-safe property object
};
```

## Next Steps

1. Install dependencies: `npm install`
2. Add database integration (Prisma, Drizzle, etc.)
3. Implement authentication
4. Add state management (Zustand, Redux, etc.) if needed
5. Set up testing (Jest, React Testing Library)
6. Configure CI/CD pipeline
7. Add monitoring and analytics

---

**Note**: This structure is production-ready and scales well for teams of 5-50+ developers.
