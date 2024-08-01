import { SlotsToClasses, SortDescriptor } from "@nextui-org/react";
import { ReactRef } from "@nextui-org/react-utils";

interface Column {
  uid: string;
  name: string;
}

interface Item {
  id: string | number;
  [key: string]: any;
}

export interface TableProps {
  className?: string | undefined;
  classNames?:
    | SlotsToClasses<
        | "table"
        | "base"
        | "tbody"
        | "td"
        | "tfoot"
        | "th"
        | "thead"
        | "tr"
        | "wrapper"
        | "sortIcon"
        | "emptyWrapper"
        | "loadingWrapper"
      >
    | undefined;
  isHeaderSticky?: boolean | undefined;
  baseRef?: ReactRef<HTMLElement | null> | undefined;
  bottomContent?: React.ReactNode;
  sortDescriptor?: SortDescriptor | undefined;
  onSortChange?: ((descriptor: SortDescriptor) => any) | undefined;
  columns: Column[];
  items: Item[];
  isLoading?: boolean | undefined;
  loadingContent?: React.ReactNode;
  allowsSorting?: boolean | undefined;
  renderCell: (item: Item, columnKey: string | number) => React.ReactNode;
}
