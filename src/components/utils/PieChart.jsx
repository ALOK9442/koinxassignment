import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(Colors);

function PieChart() {
    return (
        <Doughnut
            height={250}
            width={250}
            options={{
                responsive: false,
                maintainAspectRatio: false,
            }}
            data={{
                datasets: [
                    {
                        data: [80, 20],
                        backgroundColor: [
                            "#3b82f6",
                            "#f97316",
                        ]
                    }
                ],
                labels: ['Crowdsale Investors', 'Foundation'],
            }} />
    )
}

export default PieChart;