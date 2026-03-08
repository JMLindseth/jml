export interface Band {
  navn: string;
}

export interface Konsert {
  id: string;
  dato: string; // ISO-dato, f.eks. "2024-05-23"
  sted: string;
  band: Band[];
  bilder: string[]; // Cloudinary public IDs
}
