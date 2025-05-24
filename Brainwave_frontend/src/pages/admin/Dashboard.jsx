import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='grid gap-6 grid-cols-1 '>
        <Card>
            <CardHeader>
                <CardTitle>Total Sales</CardTitle>
            </CardHeader>
        </Card>
    </div>
  )
}

export default Dashboard