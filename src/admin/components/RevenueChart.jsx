import { TrendingUp } from 'lucide-react';
import { monthlyRevenue, formatINR } from '../data/mockData.js';

const MAX = Math.max(...monthlyRevenue.map((m) => m.amount));
const AVG = Math.round(monthlyRevenue.reduce((s, m) => s + m.amount, 0) / monthlyRevenue.length);
const TOTAL = monthlyRevenue.reduce((s, m) => s + m.amount, 0);

export default function RevenueChart() {
  return (
    <div className="admin-card">
      <div className="admin-card__head">
        <div>
          <div className="admin-card__title">Revenue Overview</div>
          <div className="admin-card__subtitle">Monthly dāna &amp; course income</div>
        </div>
        <span className="admin-chart__delta">
          <TrendingUp /> +18.6% vs July
        </span>
      </div>
      <div className="admin-card__body">
        <div className="admin-chart__total">{formatINR(TOTAL)}</div>
        <div className="admin-card__subtitle">Total · March – August 2026</div>

        <div className="admin-chart">
          {monthlyRevenue.map((m, i) => (
            <div className="admin-chart__col" key={m.month}>
              <div className="admin-chart__value">{formatINR(m.amount)}</div>
              <div className="admin-chart__bar-wrap">
                <div
                  className={`admin-chart__bar${i === 5 ? ' admin-chart__bar--alt' : ''}`}
                  style={{ height: `${Math.max(8, (m.amount / MAX) * 100)}%` }}
                />
              </div>
              <div className="admin-chart__month">{m.month.slice(0, 3)}</div>
            </div>
          ))}
        </div>

        <div className="admin-chart__legend">
          <div className="admin-chart__legend-item">
            <span className="admin-chart__legend-swatch" /> Monthly revenue
          </div>
          <div className="admin-chart__legend-item">
            <span className="admin-chart__legend-swatch admin-chart__legend-swatch--maroon" /> Current month
          </div>
          <div className="admin-chart__legend-item">Average {formatINR(AVG)} / month</div>
        </div>
      </div>
    </div>
  );
}
