function jsonValueKey(jsonString, key) {
    try {
        // Parse the JSON string into an object
        const jsonObject = JSON.parse(jsonString);
        
        // Return the value associated with the given key
        return jsonObject[key];
    } catch (error) {
        // Handle parsing errors or any other issues
        console.error("Invalid JSON string provided", error);
        return null;
    }
}

// Example usage
const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

const key = "city";
const value = jsonValueKey(jsonString, key);
console.log(value); // Output: Marseille
