# Quick Start Guide

## ⚡ Get Running in 3 Steps

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000
```

## 📝 Common Tasks

### Create a New Feature

```bash
# 1. Create feature folder
mkdir -p src/features/agents

# 2. Add components
mkdir src/features/agents/components

# 3. Add hooks
mkdir src/features/agents/hooks

# 4. Create service
touch src/services/api/agents.service.ts

# 5. Add route
mkdir app/agents
touch app/agents/page.tsx
```

### Add a New Component

```tsx
// src/components/ui/Badge.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  return (
    <span className={cn(
      'px-2 py-1 rounded text-sm',
      variant === 'primary' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
    )}>
      {children}
    </span>
  );
}

// Export in src/components/ui/index.ts
export { Badge } from './Badge';
```

### Create a Custom Hook

```tsx
// src/hooks/useWindowSize.ts
'use client';

import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

// Export in src/hooks/index.ts
export { useWindowSize } from './useWindowSize';
```

### Add an API Endpoint

```tsx
// app/api/agents/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Your logic here
  return NextResponse.json({ data: [] });
}
```

### Create a Type

```tsx
// src/types/index.ts
export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  properties: number;
  rating: number;
}
```

## 🎯 Import Examples

```tsx
// UI Components
import { Button, Input, Card } from '@/components/ui';

// Shared Components
import { Navbar, Footer } from '@/components/shared';

// Features
import { PropertyCard, PropertyFilters, useProperties } from '@/features/properties';

// Services
import { propertiesService, authService } from '@/services/api';

// Hooks
import { useAuth, useDebounce, useLocalStorage } from '@/hooks';

// Utils
import { formatCurrency, isValidEmail, cn } from '@/lib/utils';

// Constants
import { ROUTES, API_CONFIG, PAGINATION } from '@/lib/constants';

// Types
import type { Property, User, ApiResponse } from '@/types';
```

## 🔧 TypeScript Configuration

The `@/` alias points to `src/` directory:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🎨 Styling Tips

Use the `cn()` utility for conditional classes:

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  variant === 'primary' && 'primary-classes'
)} />
```

## 📂 Where to Put Files

| File Type | Location | Example |
|-----------|----------|---------|
| UI Component | `src/components/ui/` | Button, Input, Card |
| Layout Component | `src/components/shared/` | Navbar, Footer |
| Feature Component | `src/features/[feature]/components/` | PropertyCard |
| Custom Hook | `src/hooks/` (global) or `src/features/[feature]/hooks/` | useAuth, useProperties |
| API Service | `src/services/api/` | properties.service.ts |
| Utility Function | `src/lib/utils/` | format.ts, validation.ts |
| Type Definition | `src/types/` | index.ts |
| Route/Page | `app/` | page.tsx, layout.tsx |
| API Route | `app/api/` | route.ts |

## 🚀 Next Steps

1. **Read Documentation**: Check [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md)
2. **Set Environment Variables**: See [ENV_TEMPLATE.md](./ENV_TEMPLATE.md)
3. **Add Database**: Integrate Prisma, Drizzle, or your ORM of choice
4. **Add Authentication**: Implement NextAuth.js or custom auth
5. **Add State Management**: Add Zustand, Redux, or Context API if needed
6. **Set Up Testing**: Configure Jest and React Testing Library
7. **Configure CI/CD**: Set up GitHub Actions or similar

## 💡 Pro Tips

- Always use TypeScript types for props and data
- Keep components small and focused (< 200 lines)
- Extract reusable logic into custom hooks
- Use barrel exports (`index.ts`) for clean imports
- Follow the existing naming conventions
- Write self-documenting code with good names
- Add JSDoc comments for complex functions

## 🐛 Common Issues

### Import errors with `@/` alias
**Solution**: Restart your TypeScript server or IDE

### Tailwind classes not working
**Solution**: Make sure file is in `content` array in `tailwind.config.ts`

### Type errors
**Solution**: Check that path aliases are correctly configured in `tsconfig.json`

## 📚 Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
