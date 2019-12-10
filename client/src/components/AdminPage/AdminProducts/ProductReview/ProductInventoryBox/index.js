import React, {useMemo} from 'react';
import { useTable } from 'react-table';

// import { Typography, Box, Grid, CssBaseline, MaUTable, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

// import useStyles from './useStyles';

// import makeData from './makeData';


export default props => {

    const {product} = props;

    const columns = useMemo(() => [
        {
            Header: 'Quantity',
            columns: [
                {
                    Header: 'Sizes',
                    accessor: 'sizes',
                }
            ],
        },
        {
            Header: 'Colors',
            columns:
            //  product.colors && product.colors[0] && product.colors[0].color ?
            //     product.colors.map(item =>({
            //         Header: item.color.name.toUpperCase(),
            //         accessor: item.color.name,
            //     })) :
                {
                    Header: 'No Color',
                    accessor: 'noColor',
                }
        }
    ],
    []
    );

    console.log(columns);

    // const data = useMemo(() => makeData(20), [])

  // Use the state and functions returned from useTable to build your UI
    // const { getTableProps,  getTableHeaderProps,  headerGroups,  rows, prepareRow } = useTable({ columns,  data });


    // const classes = useStyles();

    return (
        <>
        {/* <MaUTable {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps()}>
                        {column.render('Header')}
                    </TableCell>
                    ))}
                </TableRow>
                ))}
            </TableHead>
            <TableBody>
                {rows.map(
                (row, i) => {
                    prepareRow(row);
                    return (
                    <TableRow {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return (
                            <TableCell {...cell.getCellProps()}>
                            {cell.render('Cell')}
                            </TableCell>
                        )
                        })}
                    </TableRow>
                    )}
                )}
            </TableBody>
        </MaUTable> */}
        </>
    )
};
