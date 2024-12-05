const errorMessages = (error, setResponseMessage) => {
    if (error.response && error.response.status === 403) {
      setResponseMessage("Forbidden: You do not have access to this resource");
    } else if (error.response && error.response.status === 401) {
      setResponseMessage("Unauthorized: Please log in");
    } else {
      setResponseMessage("An error occurred");
    }
    console.error("Error:", error.response || error);
};

export { errorMessages };

