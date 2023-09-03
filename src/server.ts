import { App } from '@/app';
import { ScreenshotRoute } from '@routes/screenshots.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new ScreenshotRoute()]);

app.listen();
