// Вычисление склонения слова
export function num2str(n, text) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return text[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text[1];
  }
  if (n1 === 1) {
    return text[0];
  }
  return text[2];
}
// Сортировка элементов
export function sortList(type, direction, array) {
  switch (type) {
    case "Name":
      return array.sort((a, b) => {
        var nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();
        if (direction === "Forward") {
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
        } else if (direction === "Backward") {
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
        }
        return 0;
      });
    case "Id":
      return array.sort((a, b) => {
        if (direction === "Forward") return a.id - b.id;
        else if (direction === "Backward") return b.id - a.id;
        return 0;
      });
    case "Age":
      return array.sort((a, b) => {
        if (direction === "Forward") return a.age - b.age;
        else if (direction === "Backward") return b.age - a.age;
        return 0;
      });
    default:
      break;
  }
}
