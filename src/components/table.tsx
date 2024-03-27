import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/react";


export default function TableWrapper (props: {
    tableHeadings: string[]
    tableDataFormat: string[]
    tableData: object[],
    tableName: string
}){
    const rowClassName = 'text-xl'

    const tableHead = props.tableHeadings.map((head, index) => <TableColumn className={rowClassName} key={props.tableName + '_head_' + index}>{head}</TableColumn>)
    const tableRows = props.tableData.map((data:any, index) => 
        <TableRow className={rowClassName} key={props.tableName + '_row_' + index}>
            {
                props.tableDataFormat.map((format, index) => <TableCell key={props.tableName + '_col_' + index} className={rowClassName}>{data[format] ?? ''}</TableCell>)
            }
        </TableRow>
    )
    
    console.log(tableRows)

    return (
        <Table removeWrapper className="text-3xl table-auto md:w-full">
            <TableHeader>
                {tableHead}
            </TableHeader>
            <TableBody emptyContent={"No rows to display."}>
                {tableRows}
            </TableBody>
        </Table>
    )

}