import Stock from "@/types/stocks";
import { Button, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

type props= {
  stocks: Stock[]
  buyStock:(id:number) => void;
  sellStock:(id:number) => void;
}

export default function TradingTable(props:props) {
  const { stocks,buyStock, sellStock} = props;
    return (
      <TableContainer sx={{marginTop:'2em'}}component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Bought</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Value of Bought Stocks</TableCell>
            <TableCell>Buy</TableCell>
            <TableCell>Sell</TableCell>
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
              <TableCell><Button onClick={() => buyStock(stock.id)}>Buy</Button></TableCell>
              <TableCell><Button onClick={() => sellStock(stock.id)}>Sell</Button></TableCell>

            </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
