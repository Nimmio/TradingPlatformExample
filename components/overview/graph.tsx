import { Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";

export default function Graph() {
    return (
        <Card sx={{
            height:'10em',
            padding:'2em'
        }}>
        <Typography>Trend</Typography>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
        />
        </Card>
    );
}
