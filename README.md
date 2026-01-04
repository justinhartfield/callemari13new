# Martí 13 - El Gremio del Almorzar

A private social club website for Valencia's traditional "almorzar" (brunch) gatherings.

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS
- **Backend**: Express, tRPC, Drizzle ORM
- **Database**: MySQL (TiDB Cloud / PlanetScale compatible)
- **Storage**: AWS S3 for image uploads
- **Deployment**: Netlify (Functions + Static Hosting)

## 📦 Prerequisites

- Node.js 20+
- pnpm 10+
- MySQL-compatible database
- AWS S3 bucket (for image uploads)

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/justinhartfield/callemari13new.git
   cd callemari13new
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database and AWS credentials
   ```

4. **Run database migrations**
   ```bash
   pnpm run db:push
   ```

5. **Start development server**
   ```bash
   pnpm run dev
   ```

   The app will be available at `http://localhost:3000`

## 🌐 Netlify Deployment

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinhartfield/callemari13new)

### Manual Deployment

1. **Connect your repository to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

2. **Configure build settings** (auto-detected from `netlify.toml`):
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`

3. **Set environment variables in Netlify Dashboard**:
   - Go to Site settings → Environment variables
   - Add the following variables:
     ```
     DATABASE_URL=mysql://user:password@host:port/database
     AWS_ACCESS_KEY_ID=your_aws_access_key
     AWS_SECRET_ACCESS_KEY=your_aws_secret_key
     AWS_REGION=us-east-1
     AWS_S3_BUCKET=your-bucket-name
     NODE_ENV=production
     ```

4. **Deploy**
   - Push to your main branch to trigger automatic deployment
   - Or use Netlify CLI: `netlify deploy --prod`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and tRPC client
│   │   └── _core/         # Core utilities
│   └── public/            # Static assets
├── server/                 # Express backend
│   ├── _core/             # Core server utilities
│   ├── routers.ts         # tRPC routers
│   ├── db.ts              # Database connection
│   └── seed.ts            # Database seeding
├── drizzle/               # Database schema and migrations
├── netlify/
│   └── functions/         # Netlify serverless functions
├── shared/                # Shared types and constants
├── netlify.toml           # Netlify configuration
└── vite.config.ts         # Vite configuration
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm check` | TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm test` | Run tests |
| `pnpm db:push` | Run database migrations |

## 🗄️ Database Setup

This project uses Drizzle ORM with MySQL. Recommended database providers:

- **TiDB Cloud** (Serverless) - Free tier available
- **PlanetScale** - MySQL-compatible serverless
- **AWS RDS** - Traditional MySQL hosting

### Running Migrations

```bash
# Generate and apply migrations
pnpm run db:push
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MySQL connection string | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key for S3 | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key for S3 | Yes |
| `AWS_REGION` | AWS region (e.g., us-east-1) | Yes |
| `AWS_S3_BUCKET` | S3 bucket name | Yes |
| `NODE_ENV` | Environment (development/production) | No |

## 🔐 Admin Access

The admin panel is accessible at `/admin` with the access code.

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.
