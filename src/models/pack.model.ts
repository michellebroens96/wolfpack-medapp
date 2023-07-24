import { Wolf } from "./wolf.model";

export interface Pack {
    id: number;
    name: string;
    lng: string;
    lat: string;
    wolves: Wolf[];
  }