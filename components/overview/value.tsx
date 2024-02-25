import { Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

type props = {
    value: number
}

export default function Value(props:props) {
    const { value } = props ;
    return (
        <Card sx={{
            height:'10em',
            padding:'2em'
        }}>
        <Typography>Value</Typography>
            {value} $
        </Card>
    );
}
