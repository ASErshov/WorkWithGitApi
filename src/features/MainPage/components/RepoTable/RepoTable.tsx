import React from 'react'
import { TableContainer, Table, TablePagination } from '@material-ui/core';
import CustomTableHead from '../../../../components/CustomTableHead';
import {headers} from '../../constants'
import CustomTableBody from '../../../../components/CustomTableBody';
import { useDispatch, useSelector } from 'react-redux';
import {Dispatch} from 'redux'
import {actions} from '../../ducks'
import { getQueryParams } from '../../ducks/selectors';

export type RepoTableProps={
    rows: Array<Array<string|number>>
    className?: string,
    paginationClassName?: string,
}

const RepoTable: React.FC<RepoTableProps> = ({className,paginationClassName,rows}):React.ReactElement =>{
    const dispatch: Dispatch = useDispatch()
    const query = useSelector(getQueryParams)

    const handleChangePage = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,newPage:number) => {
        dispatch(actions.fetchRepos({license: query.license, text: query.text, page:newPage+1, perPage:query.perPage}))
      };
    
    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(actions.fetchRepos({license: query.license, text: query.text, page:1, perPage:parseInt(event.target.value, 10)}))
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
                    rowsPerPage={query.perPage}
                    page={query.page-1}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    className={paginationClassName}
                />
        </TableContainer>
    )
}

export default RepoTable;