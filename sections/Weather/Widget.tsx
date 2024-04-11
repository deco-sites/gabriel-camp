import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
}

export default function Widget({ temperature }: Props) {
  return (
    <h1>
      {temperature?.celsius} °C
    </h1>
  );
}
