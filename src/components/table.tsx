


export default function Table (props: {
    tableHeadings: string[]
    tableDataFormat: string[]
    tableData: object[],
    tableName: string
}){
    const rowClassName = 'border border-black p-1'

    const tableHead = props.tableHeadings.map((head, index) => <th className={rowClassName} key={props.tableName + '_head_' + index}>{head}</th>)
    const tableRows = props.tableData.map((data:any, index) => 
        <tr className={rowClassName} key={props.tableName + '_row_' + index}>
            {
                props.tableDataFormat.map((format, index) => <td key={props.tableName + '_col_' + index} className={rowClassName}>{data[format] ?? ''}</td>)
            }
        </tr>
    )
    return (
        <table className="text-xl table-auto md:w-full">
            <thead>
                <tr>{tableHead}</tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )

}