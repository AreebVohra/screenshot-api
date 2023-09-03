import { model, Schema, Document } from 'mongoose';
import { Screenshot } from '@/interfaces/screenshots.interface';

const ScreenshotSchema: Schema = new Schema({
  os: {
    type: String,
    required: true,
  },
  device_name: {
    type: String,
    required: true,
  },
  mac_address: {
    type: String,
    required: true,
  },
  imei: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  public_ip_address: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export const ScreenshotModel = model<Screenshot & Document>('Screenshot', ScreenshotSchema);
