import { useRef, useCallback } from 'react';
import { FiDownload } from 'react-icons/fi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChartSe({
  eje,
  title,
  barLabels,
  label1,
  data1,
  borderColor1,
  bgColor1,
}) {
  const options = {
    // responsive: true,
    // maintainAspectRatio: false,
    indexAxis: eje,
    scales: {
      y: {
        ticks: {
          crossAlign: 'far',
          autoSkip: false,
        },
        grid: {
          display: true,
        },
      },
      x: {
        ticks: {
          align: 'left',
          //  autoSkip: false,
        },
        grid: {
          display: true,
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
      },

      // Change options for ALL labels of THIS CHART
      datalabels: {
        color: function (context) {
          const index = context.dataIndex;
          const value = context.dataset.data[index];
          return value < 1
            ? 'white' // draw negative values in red
            : index % 2
            ? 'grey' // else, alternate values in blue and green
            : 'grey';
        },
      },
    },
  };

  const labels = barLabels;

  const data = {
    labels,
    datasets: [
      {
        label: label1,
        data: data1,
        borderColor: borderColor1,
        backgroundColor: bgColor1,
      },
    ],
  };

  // download chart button
  const refBarChartSe = useRef(null);

  const downloadImageBarChartSe = useCallback(() => {
    const link = document.createElement('a');
    link.download = `${title}.png`;
    link.href = refBarChartSe.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div className='chart-container'>
      <Bar options={options} data={data} ref={refBarChartSe} />
      <button
        type='button'
        onClick={downloadImageBarChartSe}
        className='download-btn'
      >
        <FiDownload />
      </button>
    </div>
  );
}

export default BarChartSe;
