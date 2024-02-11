
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from "react-chartjs-2"
const Chart = () => {
    return (
        <>
            <Line
                data={{
                    labels: ['Temprature', 'Humidity', 'Wind Speed'],
                    datasets: [
                        {
                            label: "Temprature",
                            data: ['0',  '60']
                        }
                    ]
                }}
            />
        </>
    )
}
export default Chart