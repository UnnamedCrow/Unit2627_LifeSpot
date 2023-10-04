// ������� ������ Map
let myMap = new Map();
myMap.set("��������", "������")
myMap.set("������", "���������")
myMap.set(1, "������")

let newArray = [];
// ������� Map � ����� for
for (let result of myMap) {
    newArray.push(result);
}
console.log(newArray);

let newArrayOfStrings = [];
// ������� Map � ������� Array.from
// ��������� �� ���� ��������� �������� � ����� ����-��������
Array.from(myMap, ([key, value]) => newArrayOfStrings.push(`${key} - ${value}`));
console.log(newArrayOfStrings);