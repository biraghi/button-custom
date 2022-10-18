import { MyHeaders } from "./MyHeaders";
import { MyOrder } from "./MyOrder";
import { MyPagination } from "./MyPagination";
import { MySearch } from "./MySearch";

export interface MyTableConfig{
  headers:MyHeaders[];
  order: MyOrder;
  search?:MySearch;
  paginationTable:MyPagination;
}
