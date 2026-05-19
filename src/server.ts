import app from "./app";
import { envVars } from "./app/config/env";

const bootstrap = () => {
  try {
    app.listen(envVars.PORT, () => {
      console.log(`Server is running on port ${envVars.PORT} in ${envVars.NODE_ENV} mode`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

bootstrap();