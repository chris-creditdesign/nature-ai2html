// TODO: debug
const error = (msg: string): void => {
  var e = new Error(msg);
  // Does error have a name property?
  // e.name = "UserError";
  throw e;
};

export default error;
