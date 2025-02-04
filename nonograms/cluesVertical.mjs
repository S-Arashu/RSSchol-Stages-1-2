const cluesVertical = [
[
  [0, 0, 2, 0, 2, 0],
  [0, 2, 1, 5, 1, 2]
],
[
  [0, 0, 0, 0, 2, 0],
  [0, 1, 2, 5, 1, 1]
],
[
  [0, 0, 0, 3, 1, 5, 2, 1]
],
[
  [0, 0, 0, 2, 0, 0, 0, 2],
  [0, 0, 0, 2, 3, 4, 3, 2],
],
[
  [0, 0, 0, 3, 2, 3, 0],
  [0, 0, 1, 1, 1, 1, 1],
],
[
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 0, 0],
  [0, 0, 0, 5, 4, 1, 1, 2, 2, 1, 1, 4, 5],
  [0, 0, 0, 1, 1, 3, 4, 5, 5, 2, 2, 3, 2],
],
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 2, 0, 3, 1, 3, 0],
  [0, 0, 0, 1, 4, 4, 1, 1, 1, 3, 1, 3, 4],
],
[
  [0, 0, 0, 0, 0, 1, 5, 6, 1, 1, 6, 5, 1, 0],
  [0, 0, 0, 0, 4, 1, 1, 2, 5, 5, 2, 1, 1, 4],
],
[
  [0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 4, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 4, 2],
  [0, 0, 0, 0, 1, 1, 4, 5, 7, 7, 6, 3, 1, 2],
],
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 6, 1, 0, 1, 1, 2, 1, 6, 3],
  [0, 0, 0, 0, 6, 1, 1, 4, 1, 1, 1, 1, 1, 6],
],
[
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 6, 2, 1, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 5, 3, 2, 7, 3, 4, 4, 5, 1, 3, 2, 1, 2, 3],
  [0, 0, 0, 0, 4, 3, 2, 4, 1, 2, 1, 3, 2, 2, 7, 5, 4, 4, 6],
],
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 2, 4, 4, 1, 4, 4, 2, 2, 6, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 4, 3, 3, 3, 3, 3, 4, 4, 2, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 2, 1, 6, 1, 5, 1, 5, 1, 6, 1, 2, 1, 9],
],
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 1, 4, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 2, 5, 2, 1, 1, 6, 0, 0],
  [0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 1, 5, 2, 2, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 5, 2, 3, 1, 9, 2, 2, 2, 1, 1, 1, 1, 4, 7, 4],
  [0, 0, 0, 0, 0, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 2],
],
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 1, 3, 0, 2, 3, 2, 2, 2, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 3, 2, 1, 1, 3, 3, 6, 3, 4, 3, 2],
  [0, 0, 0, 0, 0, 0, 3, 4, 5, 7, 3, 4, 5, 3, 2, 2, 3, 2, 1, 3, 3],
],
[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 1, 0, 2, 1, 2, 2, 1, 7, 1, 3, 4, 0, 0],
  [0, 0, 0, 0, 0, 4, 2, 4, 1, 1, 3, 1, 2, 4, 1, 1, 4, 2, 8, 4],
  [0, 0, 0, 0, 0, 2, 2, 2, 6, 6, 2, 2, 4, 2, 1, 1, 4, 4, 5, 8],
],
]

export default cluesVertical;