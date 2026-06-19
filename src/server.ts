import app from "./app";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seed";

const bootstrap = async() => {
  try {
    await seedSuperAdmin(); // Seed the super admin user before starting the server
    app.listen(envVars.PORT, () => {
      console.log(`Server is running on port ${envVars.PORT} in ${envVars.NODE_ENV} mode`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

bootstrap();