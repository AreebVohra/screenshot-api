import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { Screenshot } from '@/interfaces/screenshots.interface';
import { ScreenshotService } from '@/services/screenshots.service';

export class ScreenshotController {
  public screenshot = Container.get(ScreenshotService);

  public getScreenshots = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllScreenshotsData: Screenshot[] = await this.screenshot.findAllScreenshot();

      res.status(200).json({ data: findAllScreenshotsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getScreenshotById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const screenshotId: string = req.params.id;
      const findOneScreenshotData: Screenshot = await this.screenshot.findScreenshotById(screenshotId);

      res.status(200).json({ data: findOneScreenshotData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createScreenshot = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const screenshotData: Screenshot = req.body;
      const createScreenshotData: Screenshot = await this.screenshot.createScreenshot(screenshotData);

      res.status(201).json({ data: createScreenshotData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateScreenshot = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const screenshotId: string = req.params.id;
      const screenshotData: Screenshot = req.body;
      const updateScreenshotData: Screenshot = await this.screenshot.updateScreenshot(screenshotId, screenshotData);

      res.status(200).json({ data: updateScreenshotData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteScreenshot = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const screenshotId: string = req.params.id;
      const deleteScreenshotData: Screenshot = await this.screenshot.deleteScreenshot(screenshotId);

      res.status(200).json({ data: deleteScreenshotData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}
