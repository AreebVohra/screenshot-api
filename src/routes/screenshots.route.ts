import { Router } from 'express';
import { ScreenshotController } from '@controllers/screenshots.controller';
import { CreateScreenshotDto } from '@/dtos/screenshots.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class ScreenshotRoute implements Routes {
  public path = '/screenshots';
  public router = Router();
  public screenshots = new ScreenshotController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.screenshots.getScreenshots);
    this.router.get(`${this.path}/:id`, this.screenshots.getScreenshotById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateScreenshotDto), this.screenshots.createScreenshot);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateScreenshotDto, true, true), this.screenshots.updateScreenshot);
    this.router.delete(`${this.path}/:id`, this.screenshots.deleteScreenshot);
  }
}
