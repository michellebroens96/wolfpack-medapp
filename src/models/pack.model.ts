import { Wolf } from "./wolf.model";

export interface Pack {
    id: number;
    name: string;
    location: string;
    wolves: Wolf[];
  }