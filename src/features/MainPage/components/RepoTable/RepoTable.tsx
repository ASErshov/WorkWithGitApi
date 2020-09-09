import React from 'react'
import { TableContainer, Table, TablePagination } from '@material-ui/core';
import CustomTableHead from '../../../../components/CustomTableHead';
import {headers} from '../../constants'
import CustomTableBody from '../../../../components/CustomTableBody';
import { useDispatch, useSelector } from 'react-redux';
import {Dispatch} from 'redux'
import {actions} from '../../ducks'
import { getPagination } from '../../ducks/selectors';

export type RepoTableProps={
    rows: Array<Array<string|number>>
    className?: string,
    paginationClassName?: string,
}

const RepoTable: React.FC<RepoTableProps> = ({className,paginationClassName,rows}):React.ReactElement =>{
    const dispatch: Dispatch = useDispatch()
    const pagination = useSelector(getPagination)

    const handleChangePage = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,newPage:number) => {
        dispatch(actions.fetchRepos({page:newPage+1, perPage:pagination.perPage}))
      };
    
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.fetchRepos({page:1, perPage:parseInt(event.target.value, 10)}))
      };
    return(
        <TableContainer >
            <Table
                size={'medium'}
                className={className}
            >
                <CustomTableHead lables={headers} />
                <CustomTableBody records={rows}/>
            </Table>
            <TablePagination
                    rowsPerPageOptions={[10, 15, 25, 50]}
                    component="div" 
                    count={-1}
                    rowsPerPage={pagination.perPage}
                    page={pagination.page-1}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    className={paginationClassName}
                />
        </TableContainer>
    )
}

export default RepoTable;