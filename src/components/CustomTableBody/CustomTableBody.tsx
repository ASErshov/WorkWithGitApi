import React from 'react'
import {TableRow, TableCell, TableBody } from '@material-ui/core'
import styles from './CustomTableBody.module.css'

export type TableBodyProps= {
    records: Array<Array<string|number>>
}

const CustomTableBody: React.FC<TableBodyProps> = ({records}):React.ReactElement => {
    return(
        <TableBody className={styles.tableBody}>
          { records.map((row, indexRow) => (
            <TableRow key={`rowindex_${indexRow}`}>
               {row.map((item, indexItem)=>(
               <TableCell align='left' key={`cellIndex_${indexItem}`}>
                   {typeof item === 'string' && item.split(':')[0]==='https' ? <a href={item}>{item}</a>: item}
               </TableCell>
               ))}
            </TableRow>
          ))}
        </TableBody>
    )
}

export default CustomTableBody