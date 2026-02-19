export const createBooking = async (bookingData) => {

  try {

    const res = await fetch("http://localhost:5000/api/bookings", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(bookingData),

    });

    return await res.json();

  } catch (error) {

    console.error("Booking API error:", error);

    return {
      success: false,
      message: "Server error"
    };

  }

};
