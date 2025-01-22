export function convertToSerializableObject(leanDocument) {
  const processValue = (value) => {
    if (value && typeof value === "object") {
      if (value.toJSON) {
        return value.toJSON(); // Serialize Mongoose objects
      } else if (Array.isArray(value)) {
        return value.map(processValue); // Recursively process arrays
      } else {
        return convertToSerializableObject(value); // Recursively process objects
      }
    }
    return value;
  };

  const result = {};
  for (const key of Object.keys(leanDocument)) {
    result[key] = processValue(leanDocument[key]);
  }
  return result;
}
