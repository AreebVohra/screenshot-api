import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import { Screenshot } from '@/interfaces/screenshots.interface';
import { ScreenshotModel } from '@/models/screenshots.model';

@Service()
export class ScreenshotService {
  public async findAllScreenshot(): Promise<Screenshot[]> {
    const screenshots: Screenshot[] = await ScreenshotModel.find();
    return screenshots;
  }

  public async findScreenshotById(screenshotId: string): Promise<Screenshot> {
    const findScreenshot: Screenshot = await ScreenshotModel.findOne({ _id: screenshotId });
    if (!findScreenshot) throw new HttpException(409, "Screenshot doesn't exist");

    return findScreenshot;
  }

  public async createScreenshot(screenshotData: Screenshot): Promise<Screenshot> {
    const findScreenshot: Screenshot = await ScreenshotModel.findOne({ imei: screenshotData.imei });
    if (findScreenshot) throw new HttpException(409, `This IMEI ${screenshotData.imei} already exists`);

    const createScreenshotData: Screenshot = await ScreenshotModel.create({ ...screenshotData });

    return createScreenshotData;
  }

  public async updateScreenshot(screenshotId: string, screenshotData: Screenshot): Promise<Screenshot> {
    if (screenshotData.imei) {
      const findScreenshot: Screenshot = await ScreenshotModel.findOne({ imei: screenshotData.imei });
      if (findScreenshot && findScreenshot._id != screenshotId) throw new HttpException(409, `This IMEI ${screenshotData.imei} already exists`);
    }

    const updateScreenshotById: Screenshot = await ScreenshotModel.findByIdAndUpdate(screenshotId, screenshotData, { new: true });
    if (!updateScreenshotById) throw new HttpException(409, "Screenshot doesn't exist");
    return updateScreenshotById;
  }

  public async deleteScreenshot(screenshotId: string): Promise<Screenshot> {
    const deleteScreenshotById: Screenshot = await ScreenshotModel.findByIdAndDelete(screenshotId);
    if (!deleteScreenshotById) throw new HttpException(409, "Screenshot doesn't exist");

    return deleteScreenshotById;
  }
}
