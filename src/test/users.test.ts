import mongoose from 'mongoose';
import request from 'supertest';
import { App } from '@/app';
import { dbConnection } from '@database';
import { CreateScreenshotDto } from '@/dtos/screenshots.dto';
import { ScreenshotRoute } from '@/routes/screenshots.route';
import { ScreenshotModel } from '@/models/screenshots.model';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

afterAll(() => mongoose.disconnect());

const screenshotData: CreateScreenshotDto = {
  os: "IOS",
  device_name: "Apple 1",
  mac_address: "00:00:00:00:00:00",
  imei: "306917599720550",
  location: "Dubai, UAE 1",
  public_ip_address: "0.0.0.0",
  status: true
};

describe('Testing Screenshots', () => {
  describe('[GET] /screenshots', () => {
    it('response findAll Screenshots', async () => {
      const screenshotsRoute = new ScreenshotRoute();
      const screenshots = ScreenshotModel;

      screenshots.find = jest.fn().mockReturnValue([
        {
          _id: '64f0ab572b5e6a6c0acefbb1',
          os: "IOS",
          device_name: "Apple 1",
          mac_address: "00:00:00:00:00:00",
          imei: "306917599720550",
          location: "Dubai, UAE 1",
          public_ip_address: "0.0.0.0",
          status: true
        },
        {
          _id: '64f0aa6c0acefbb1b572b5e6',
          os: "IOS",
          device_name: "Samsung 3",
          mac_address: "00:00:00:00:00:00",
          imei: "306917599720550",
          location: "Karachi, Pakistan",
          public_ip_address: "0.0.0.0",
          status: true
        },
        {
          _id: '64f6a6c0acefbb10ab572b5e',
          os: "IOS",
          device_name: "Sony 1",
          mac_address: "00:00:00:00:00:00",
          imei: "306917599720550",
          location: "Dubai, UAE 2",
          public_ip_address: "0.0.0.0",
          status: true
        },
      ]);

      (mongoose as any).connect = jest.fn();
      const app = new App([screenshotsRoute]);
      return request(app.getServer()).get(`${screenshotsRoute.path}`).expect(200);
    });
  });

  describe('[GET] /screenshots/:id', () => {
    it('response findOne Screenshot', async () => {
      const screenshotId = '64f0ab572b5e6a6c0acefbb1';
      const screenshotsRoute = new ScreenshotRoute();
      const screenshots = ScreenshotModel;

      screenshots.findOne = jest.fn().mockReturnValue({
        _id: screenshotId,
        ...screenshotData
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([screenshotsRoute]);
      return request(app.getServer()).get(`${screenshotsRoute.path}/${screenshotId}`).expect(200);
    });
  });

  describe('[POST] /screenshots', () => {
    it('response Create Screenshot', async () => {

      const screenshotsRoute = new ScreenshotRoute();
      const screenshots = ScreenshotModel;

      screenshots.findOne = jest.fn().mockReturnValue(null);
      screenshots.create = jest.fn().mockReturnValue({
        _id: '60706478aad6c9ad19a31c84',
        ...screenshotData
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([screenshotsRoute]);
      return request(app.getServer()).post(`${screenshotsRoute.path}`).send(screenshotData).expect(201);
    });
  });

  describe('[PUT] /screenshots/:id', () => {
    it('response Update Screenshot', async () => {
      const screenshotId = '60706478aad6c9ad19a31c84';
      const screenshotsRoute = new ScreenshotRoute();
      const screenshots = ScreenshotModel;

      screenshots.findByIdAndUpdate = jest.fn().mockReturnValue({
        _id: screenshotId,
        ...screenshotData
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([screenshotsRoute]);
      return request(app.getServer()).put(`${screenshotsRoute.path}/${screenshotId}`).send(screenshotData).expect(200);
    });

    mongoose.disconnect();
  });

  describe('[DELETE] /screenshots/:id', () => {
    it('response Delete User', async () => {
      const screenshotId = '60706478aad6c9ad19a31c84';
      const screenshotsRoute = new ScreenshotRoute();
      const screenshots = ScreenshotModel;

      screenshots.findByIdAndDelete = jest.fn().mockReturnValue({
        _id: screenshotId,
        ...screenshotData
      });

      (mongoose as any).connect = jest.fn();
      const app = new App([screenshotsRoute]);
      return request(app.getServer()).delete(`${screenshotsRoute.path}/${screenshotId}`).expect(200);
    });
  });
});
