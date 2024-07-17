interface Column {
  uid: string;
  name: string;
}

interface Item {
  id: string | number;
  [key: string]: any;
}

export interface TableProps {
  columns: Column[];
  items: Item[];
  renderCell: (item: Item, columnKey: string | number) => React.ReactNode;
}
