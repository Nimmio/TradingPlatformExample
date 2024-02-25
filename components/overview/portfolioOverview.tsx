import Stock from "@/types/stocks";
import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

type props= {
  stocks: Stock[]
}

export default function PortfolioOverview(props:props) {
  const { stocks } = props;
    return (
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Bought</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Value of Bought Stocks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {stocks.map((stock) => (
            <TableRow
              key={stock.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {stock.name}
              </TableCell>
              <TableCell>{stock.bought}</TableCell>
              <TableCell>{stock.value}</TableCell>
              <TableCell>{stock.bought * stock.value}</TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
