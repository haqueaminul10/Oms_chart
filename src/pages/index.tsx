import AreaChartFillByValue from '@/component/rechart/AreaChartFillByValue';
import PieChartWithCustomizedLabel from '@/component/rechart/PieChartWithCustomizedLabel';
import SynchronizedLineChart from '@/component/rechart/SynchronizedLineChart';

export default function Home() {
  return (
    <div>
      <SynchronizedLineChart />
      <div style={{ width: '100%', height: 400, marginTop: 32 }}>
        <AreaChartFillByValue />
      </div>
      <div style={{ width: '100%', height: 400, marginTop: 32 }}>
        {' '}
        <PieChartWithCustomizedLabel />
      </div>
    </div>
  );
}
