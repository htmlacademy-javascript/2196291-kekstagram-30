// Длинна строки
function isLess(string, length) {
  if (string.length <= length) {
    return true;
  } else {
    return false;
  }
}

// Полиндром
const isPolindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(" ", "");
  let reverseString = "";
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
};

// Извлечение числа из строки
const extractNumber = (string) => {
  if (typeof string === "number") {
    return string;
  }
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};
