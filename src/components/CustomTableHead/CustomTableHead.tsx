import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

export type TableHeadProps = {
    lables: Array<{
        text:string,
        width?: number,
    }>
}

const CustomTableHead: React.FC<TableHeadProps> = ({lables}):React.ReactElement => {
    return(
        <TableHead>
          <TableRow>
            {lables.map((lable)=>(
            <TableCell align='center'  key={lable.text} width={lable.width?lable.width:60}>
                {lable.text}
            </TableCell>
            )
            )}
          </TableRow>
        </TableHead>
    )
}

export default CustomTableHead