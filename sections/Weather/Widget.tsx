import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
    temperature: Temperature | null;
    location: string;
}

export function ErrorFallback({ error }: { error?: Error }) {
    console.log({error})

    return <div>Manaus, 200 °C</div>
}

export default function Widget({ temperature, location }: Props) {
    return (
        <div>
            {location}, {temperature?.celsius} °C
        </div>
    );
}
