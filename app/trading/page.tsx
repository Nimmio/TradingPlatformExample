import TradingTable from "@/components/trading/tradingTable";
import { Card, Container } from "@mui/material";

export default function Login() {
    return (
        <Container>
            <Card sx={{
                padding:'2em'
            }}>
                Available Money: 10000
            </Card>
            <TradingTable />
        </Container>
    );
}
