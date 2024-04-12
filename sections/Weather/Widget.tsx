import { Temperature } from "deco-sites/gabriel-camp/apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
}

export default function Widget({ temperature }: Props) {
  return (
    <div>
      {temperature?.celsius} °C
    </div>
  );
}
