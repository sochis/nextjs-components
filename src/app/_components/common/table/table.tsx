import { TableProps } from "@/types/common/table/table";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export function TableComponent({
  className,
  classNames,
  isHeaderSticky,
  baseRef,
  bottomContent,
  sortDescriptor,
  onSortChange,
  columns,
  items,
  isLoading,
  loadingContent,
  allowsSorting,
  renderCell,
}: TableProps) {
  return (
    <Table
      className={className}
      classNames={classNames}
      isHeaderSticky={isHeaderSticky}
      aria-label="Table Component"
      baseRef={baseRef}
      bottomContent={bottomContent}
      sortDescriptor={sortDescriptor}
      onSortChange={onSortChange}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} allowsSorting={allowsSorting}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={items}
        isLoading={isLoading}
        loadingContent={loadingContent}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
