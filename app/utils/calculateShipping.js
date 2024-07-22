export const calculateShipping = async (originZip, destinationZip, weight, height, width, length) => {
  try {
    const response = await fetch('/api/shipping/estimate/price', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originZip, destinationZip, weight, height, width, length })
    });

    const data = await response.json();
    if (data.rate) {
      return data.rate;
    } else {
      console.error("Error: Shipping cost not calculated", data);
      return 0;
    }
  } catch (error) {
    console.error("Error calculating shipping:", error);
    return 0;
  }
};
