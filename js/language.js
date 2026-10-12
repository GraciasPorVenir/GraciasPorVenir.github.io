function checkObject(prefix = "", object) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const id = prefix ? `${prefix}-${key}` : key;
      const value = object[key];
      if (typeof value === "object" && value !== null)
        checkObject(id, value);
      else $(`#${id}`).text(value);
    }
  }
}

function changeLanguage(language = "en") {
  $.getJSON(`./locales/${language}.json`, (data) => checkObject("", data))
    .fail(() => console.error("Error loading language."));
}
