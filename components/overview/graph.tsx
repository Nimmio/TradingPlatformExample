import { Card, Typography } from "@mui/material";
import { ChartContainer, LineChart } from "@mui/x-charts";

type props = {
    portfolioHistory: number[]
}

export default function Graph(props: props) {
    const {portfolioHistory} = props 
    console.log(portfolioHistory)

    return (
        <Card sx={{
            height:'10em',
            padding:'2em'
        }}>
                  <Typography variant="h5" align="center">
                  Trend
      </Typography>
        <LineChart
        disableAxisListener
            series={[
                { data: portfolioHistory, }
              ]}
        />
        </Card>
    );
}
