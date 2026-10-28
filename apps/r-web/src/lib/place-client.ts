import { PlacesClient, v1, protos } from "@googlemaps/places"


const client = new PlacesClient({
    apiKey: "AIzaSyDS9iAd2O04zfaHOPZTN26E5eqva9oW864"
});


export async function nearbySearch({
    latitude,
    longitude
}: {
    latitude: number,
    longitude: number
}) {
    const [response] = await client.searchNearby({
        locationRestriction: {
            circle: {
                center: {
                    latitude, longitude
                },
                radius: 3000
            }
        },
        includedTypes: ["restaurant", "cafe", "park", "school", "university", "lodging", "hotel"],
        rankPreference: 'DISTANCE',
        maxResultCount: 8
    }, {
        otherArgs: {
            headers: {
                // ESSENTIAL: types must be in the field mask
                'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.types,places.shortFormattedAddress,places.name',
            },
        }
    });


    return response.places?.map((p) => ({
        id: p.id,
        displayName: p.displayName,
        formattedAddress: p.formattedAddress,
        addressComponents: p.addressComponents,
        shortFormattedAddress: p.shortFormattedAddress,
        name: p.name,
        types: p.types
    }))

}
