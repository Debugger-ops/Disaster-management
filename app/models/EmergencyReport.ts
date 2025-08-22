import mongoose, { Document, Schema } from 'mongoose';

export interface IEmergencyReport extends Document {
  emergencyType: string;
  location: string;
  description: string;
  severity: string;
  contactName: string;
  contactPhone: string;
  injuries: string;
  additionalInfo?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmergencyReportSchema = new Schema<IEmergencyReport>(
  {
    emergencyType: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    severity: { type: String, required: true },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    injuries: { type: String, required: true },
    additionalInfo: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.EmergencyReport ||
  mongoose.model<IEmergencyReport>('EmergencyReport', EmergencyReportSchema);
