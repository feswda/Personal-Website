"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', roas: 10.0 },
  { name: 'Feb', roas: 11.2 },
  { name: 'Mar', roas: 12.8 },
  { name: 'Apr', roas: 13.9 },
  { name: 'May', roas: 15.3 },
  { name: 'Jun', roas: 16.8 },
  { name: 'Jul', roas: 18.2 },
]

export function RoasChart() {
  return (
    <div className="w-full h-full min-h-[150px] p-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}x`} domain={[8, 20]} ticks={[8, 10, 12, 14, 16, 18, 20]} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0A0E27', borderColor: '#2A2D3E', borderRadius: '8px' }}
            itemStyle={{ color: '#6366F1' }}
          />
          <Line 
            type="monotone" 
            dataKey="roas" 
            stroke="#6366F1" 
            strokeWidth={3}
            dot={{ r: 4, fill: '#6366F1', strokeWidth: 2, stroke: '#0A0E27' }}
            activeDot={{ r: 6, fill: '#EC4899', stroke: '#0A0E27' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
