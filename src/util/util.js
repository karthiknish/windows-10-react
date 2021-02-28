/**
 * @param {string} baseURL      The baseURL is the hyperlink without any additional data.
 *                              It is important that you need to leave the slash ("/") character from the end of URL.
 * @param {object} queryParams  This object contains all of the query parameters.
 *
 * @return {string}             This function returns a string which was builed up from the arguments
 */
export function createURL(baseURL, queryParams) {
  let basicURL = baseURL + "?";
  for (let key in queryParams) {
    basicURL += key + "=" + queryParams[key] + "&";
  }
  basicURL = basicURL.substring(
    0,
    basicURL.length - 1 /* Removing the last unnecessary "&" character */
  );
  return basicURL;
}

/**
 * @param {Component} app  This component is a composition which aggregates all of the sub components of an application.
 *
 * @return {string}        This function returns a string which is the name of the app (comp)
 */
export function getAppName(app) {
  let appName;
  if (app._owner !== null) {
    appName = app._owner.type.name;
  } else appName = app.type.name;
  return appName;
}

/**
 * @param {Component} app This component is an element which will remove from the array.
 * @param {Array} arr     This is the array which contains apps.
 *
 * @return {Array}        This function returns an array without the app (comp).
 *
 * @description           This function takes an array and an element and remove that element from the array.
 */
export function removeApp(app, arr) {
  const appName = getAppName(app);
  const copyOfArray = [...arr];
  const index = arr.findIndex((app) => getAppName(app) === appName);
  copyOfArray.splice(index, 1);
  return copyOfArray;
}
