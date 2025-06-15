export const pageSizeList = [
  {
    label: "1 phần tử",
    value: 1,
  },
  {
    label: "10 phần tử",
    value: 10,
  },
  {
    label: "20 phần tử",
    value: 20,
  },
  {
    label: "50 phần tử",
    value: 50,
  },
  {
    label: "100 phần tử",
    value: 100,
  },
];
export function paginateItems<T>(
  items: T[],
  page: number,
  pageSize: number
): T[] {
  return items.slice((page - 1) * pageSize, page * pageSize);
}
