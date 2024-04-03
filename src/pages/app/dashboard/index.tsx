import { Helmet } from 'react-helmet-async'

import DaysOrdersAmountCard from './day-orders-amount-card'
import MonthCancelOrdersAmountCard from './month-cancel-orders-amount-card'
import MonthOrdersAmountCard from './month-orders-amount-card'
import MonthRevenueCard from './month-revenue-card'
import PopularProductsChart from './popular-products-chart'
import RevenueChart from './revenue-chart'

export default function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      <div className="gap4 grid grid-cols-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DaysOrdersAmountCard />
        <MonthCancelOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  )
}
