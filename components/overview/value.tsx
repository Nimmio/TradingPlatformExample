import { Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export default function Value() {
    return (
        <Card sx={{
            height:'10em',
            padding:'2em'
        }}>
        <Typography>Value</Typography>
            2020€
        </Card>
    );
}
