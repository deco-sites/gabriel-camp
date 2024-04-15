import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
    temperature: Temperature | null;
    location: string;
}

export default function Widget({ temperature, location }: Props) {
    return (
        <div>
            {location}, {temperature?.celsius} °C
        </div>
    );
}
