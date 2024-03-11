


export default function Table (props: {
    tableHeadings: string[]
    tableDataFormat: string[]
    tableData: object[]
}){
    const tableName = 'border border-black p-1'

    const tableHead = props.tableHeadings.map(head => <th className={tableName}>{head}</th>)
    const tableRows = props.tableData.map((data:any) => 
        <tr className={tableName}>
            {
                props.tableDataFormat.map(format => <td className={tableName}>{data[format] ?? ''}</td>)
            }
        </tr>
    )

    return (
        <table className="text-xl table-auto border-collapse border-spacing-2 border-2 border-slate-950 my-10">
            <thead>
                <tr>{tableHead}</tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )

}