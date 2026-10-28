import { TripPage } from "./components/trip";

interface TripProps {
    params: Promise<{
        type: 'home' | 'pickup' | 'drop'
    }>
};

export default async function Trip({
    params
}: TripProps) {

    const { type } = await params;

    return <TripPage type={type} />
}