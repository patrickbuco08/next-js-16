# Environment Variables Template

Copy this content to `.env.local` for local development:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database (example with PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/property_db

# Authentication (if using NextAuth.js)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Third-party Services (examples)
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-secret

# Email Service (example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Required Variables

- `NEXT_PUBLIC_API_URL`: Base URL for API endpoints
- `NEXT_PUBLIC_APP_URL`: Application base URL

## Optional Variables

Configure based on your project needs:
- Database connection strings
- Authentication providers
- File upload services
- Email services
- Payment gateways
- Analytics services
