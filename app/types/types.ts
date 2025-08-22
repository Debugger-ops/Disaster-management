// app/types/types.ts

export interface EmergencyReport {
  id: string;
  type: "fire" | "flood" | "medical" | "accident" | "other";
  location: string;
  coordinates: { lat: number; lng: number };
  severity: "low" | "medium" | "high" | "critical";
  timestamp: Date;
  description: string;
  status: "active" | "responding" | "resolved";
  reportedBy: string;
}

export interface MapLeafletProps {
  reports: EmergencyReport[];
  selectedReport: EmergencyReport | null;
  setSelectedReport: (report: EmergencyReport) => void;
}
