import { forwardRef, Ref } from 'react';

export type TableExplorerRef = HTMLTableElement;

export interface TableExplorerProps {
  children?: Array<React.ReactElement<HTMLTableSectionElement>>;
}

export const TableExplorer = forwardRef(
  ({ children }: TableExplorerProps, ref: Ref<TableExplorerRef>) => {
    return (
      <table ref={ref} className="table-explorer">
        {children}
      </table>
    );
  }
);

TableExplorer.displayName = 'TableExplorer';

export default TableExplorer;
