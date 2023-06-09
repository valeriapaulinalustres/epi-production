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

function BarChartThreeData({
  title,
  barLabels,
  label1,
  label2,
  label3,
  data1,
  data2,
  data3,
  borderColor1,
  borderColor2,
  borderColor3,
  bgColor1,
  bgColor2,
  bgColor3,
}) {
  const options = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
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
      {
        label: label2,
        data: data2,
        borderColor: borderColor2,
        backgroundColor: bgColor2,
      },
      {
        label: label3,
        data: data3,
        borderColor: borderColor3,
        backgroundColor: bgColor3,
      },
    ],
  };

  // download chart button
  const refChartFiveData = useRef(null);

  const downloadImageBarChartFive = useCallback(() => {
    const link = document.createElement('a');
    link.download = `${title}.png`;
    link.href = refChartFiveData.current.toBase64Image();
    link.click();
  }, []);

  return (
    <div className='chart-container'>
      <Bar options={options} data={data} ref={refChartFiveData} />
      <button
        type='button'
        onClick={downloadImageBarChartFive}
        className='download-btn'
      >
        <FiDownload />
      </button>
    </div>
  );
}

export default BarChartThreeData;
