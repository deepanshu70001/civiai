## AI Processing Flow

1. User uploads complaint image
2. Backend uploads image to Cloudinary
3. Backend sends Cloudinary-hosted image URL to Gemini API
4. Gemini classifies issue type, severity, department, and summary
5. Backend stores complaint and AI output in PostgreSQL