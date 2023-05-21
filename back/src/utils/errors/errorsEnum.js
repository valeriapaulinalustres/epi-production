export const ErrorsName = {
  USER_DATA_INCOMPLETE: "Error users",
  USER_DATA_NOT_FOUND_IN_DATABASE: "Error users",
  USER_DATA_INCORRECT_TYPE: "Error users",
  USER_DATA_INCORRECT_ID: "Error users",
  USER_DATA_INCORRECT_TOKEN: "Error user",
  USER_DATA_NOT_ALLOWED: "Error user",
  USER_DATA_ALLREADY_EXISTS: "Error users"
};

export const ErrorsMessage = {
  USER_DATA_INCOMPLETE: "Request failed. Valid properties required",
  USER_DATA_NOT_FOUND_IN_DATABASE: "Request failed. Not found in database",
  USER_DATA_INCORRECT_TYPE: "Request failed. Only numbers accepted",
  USER_DATA_INCORRECT_ID: "Request failed. ID must have 24 characters.",
  USER_DATA_INCORRECT_TOKEN: "Request failed. Incorrect or expired token",
  USER_DATA_NOT_ALLOWED:
    "Request failed. You do not have permissions for this operation.",
    USER_DATA_ALLREADY_EXISTS: "Request failed. Allready exists user with this mail"
};

export const ErrorsCause = {
  USER_DATA_INCOMPLETE: "Properties missing",
  USER_DATA_NOT_FOUND_IN_DATABASE: "Request failed. Not found in database",
  USER_DATA_INCORRECT_TYPE: "Request failed. Incorrect Data type of",
  USER_DATA_INCORRECT_ID: "Request failed. Invalid ID",
  USER_DATA_INCORRECT_TOKEN: "Request failed. Expired token",
  USER_DATA_NOT_ALLOWED: "Request failed. Missing permissions.",
  USER_DATA_ALLREADY_EXISTS: "Request failed. User allready exists."
};

//en rutas:

// app.post('/products', (req, res) => {
//   const { name, price } = req.body
//   if (!name || !price) {
//     CustomError.createCustomError({
//       name: ErrorsName.PRODUCT_DATA_INCOMPLETE,
//       cause: ErrorsCause.PRODUCT_DATA_INCOMPLETE,
//       message: ErrorsMessage.PRODUCT_DATA_INCOMPLETE,
//     })
//   } else {
