class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}


try {

  const name = "ericl freitas";
  const myError = new CustomError({
    message: 'Custom Message',
    data: {
      type: "Server Error"
    }
  });

  throw myError;
} catch (err) {
  if (err.data.type === 'Server Error') {
  }
} finally {
  console.log("Keep going...");
}


