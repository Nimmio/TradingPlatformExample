import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function TradingTable() {
    return (
            <TableContainer component={Paper} sx={{marginTop: '2em'}}>
      <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              key='key'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {'test1'}
              </TableCell>
              <TableCell align="right">{'test2'}</TableCell>
              <TableCell align="right">{'test3'}</TableCell>
              <TableCell align="right">{'test4'}</TableCell>
              <TableCell align="right">{'test5'}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
}
