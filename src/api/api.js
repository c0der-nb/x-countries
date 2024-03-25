const API_ENDPOINT = "https://restcountries.com/v3.1/all";

export async function fetchCountryFlags() {
    try {
        const apiResponse = await fetch(API_ENDPOINT);
        const jsonResponse = await apiResponse.json();
        return jsonResponse;
    }
    catch (ex) {
        console.error(ex);
    }
}