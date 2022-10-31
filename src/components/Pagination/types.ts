export type PaginationProps = {
  limit: number;
  pageCount: number;
  current: number;
  setIsPageClick: (val: boolean) => void;
};
