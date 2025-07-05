import mongoose, { Document, Schema } from 'mongoose';

export interface IVolunteer extends Document {
  name: string;
  email: string;
  phone: string;
  location: string;
  skills: string;
  availability: string;
  experience: string;
  createdAt: Date;
  updatedAt: Date;
}

const VolunteerSchema = new Schema<IVolunteer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    skills: { type: String },
    availability: { type: String },
    experience: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Volunteer ||
  mongoose.model<IVolunteer>('Volunteer', VolunteerSchema);
