import { Activity, Clock, Server, Zap } from 'lucide-react';

interface DeviceCard {
  id: string;
  name: string;
  type: string;
  status: 'ok' | 'warn' | 'alarm';
  eta?: string;
  metrics: { label: string; value: string }[];
}

const devices: DeviceCard[] = [
  {
    id: '1',
    name: 'UPS-A1',
    type: 'Vertiv Liebert',
    status: 'alarm',
    eta: '04:22:11',
    metrics: [
      { label: 'Load', value: '87%' },
      { label: 'Temp', value: '42°C' },
      { label: 'Batt', value: '23%' },
    ],
  },
  {
    id: '2',
    name: 'CRAC-03',
    type: 'Schneider',
    status: 'warn',
    eta: '22:15:00',
    metrics: [
      { label: 'Temp', value: '24°C' },
      { label: 'Hum', value: '58%' },
      { label: 'Fan', value: '92%' },
    ],
  },
  {
    id: '3',
    name: 'DGU-M1',
    type: 'Caterpillar',
    status: 'ok',
    metrics: [
      { label: 'RPM', value: '1500' },
      { label: 'Oil', value: '85°C' },
      { label: 'Fuel', value: '94%' },
    ],
  },
  {
    id: '4',
    name: 'PDU-R2',
    type: 'APC',
    status: 'ok',
    metrics: [
      { label: 'Load', value: '45%' },
      { label: 'V', value: '230' },
      { label: 'A', value: '12.4' },
    ],
  },
];

export function DashboardMockup() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ok':
        return 'bg-[#4ade80]';
      case 'warn':
        return 'bg-[#facc15]';
      case 'alarm':
        return 'bg-[#ff6b4a]';
      default:
        return 'bg-[#888]';
    }
  };

  const getStatusBorder = (status: string) => {
    switch (status) {
      case 'ok':
        return 'border-[#4ade80]/30';
      case 'warn':
        return 'border-[#facc15]/30';
      case 'alarm':
        return 'border-[#ff6b4a]/50 alarm-pulse';
      default:
        return 'border-white/10';
    }
  };

  return (
    <div className="dashboard-float relative w-full max-w-2xl mx-auto">
      {/* Dashboard container */}
      <div className="relative bg-[#121416] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#c2e0d8]/20 flex items-center justify-center">
              <Activity className="w-3.5 h-3.5 text-[#c2e0d8]" />
            </div>
            <span className="font-mono text-xs text-[#c2e0d8]">LIVE MONITOR</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#888]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] status-pulse" />
              4 ONLINE
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" />
              1 ALARM
            </span>
          </div>
        </div>

        {/* Device grid */}
        <div className="p-4 grid grid-cols-2 gap-3">
          {devices.map((device) => (
            <div
              key={device.id}
              className={`relative p-3 rounded-xl border ${getStatusBorder(
                device.status
              )} bg-[#1a1a1a]`}
            >
              {/* Status indicator */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${getStatusColor(
                    device.status
                  )} status-pulse`}
                />
                <span className="font-mono text-[10px] uppercase text-[#888]">
                  {device.status}
                </span>
              </div>

              {/* Device info */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  {device.type.includes('UPS') ? (
                    <Zap className="w-3.5 h-3.5 text-[#c2e0d8]" />
                  ) : device.type.includes('CRAC') ? (
                    <Server className="w-3.5 h-3.5 text-[#c2e0d8]" />
                  ) : (
                    <Activity className="w-3.5 h-3.5 text-[#c2e0d8]" />
                  )}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    {device.name}
                  </div>
                  <div className="text-[10px] text-[#888]">{device.type}</div>
                </div>
              </div>

              {/* ETA countdown for alarm/warn */}
              {device.eta && (
                <div className="flex items-center gap-1.5 mb-2 px-2 py-1 rounded bg-[#ff6b4a]/10">
                  <Clock className="w-3 h-3 text-[#ff6b4a]" />
                  <span className="font-mono text-xs text-[#ff6b4a]">
                    ETA {device.eta}
                  </span>
                </div>
              )}

              {/* Metrics */}
              <div className="flex gap-3">
                {device.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="font-mono text-xs text-white">
                      {metric.value}
                    </div>
                    <div className="text-[9px] text-[#888]">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom chart area */}
        <div className="px-4 pb-4">
          <div className="h-16 bg-[#1a1a1a] rounded-lg border border-white/5 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-[#888]">Load Trend (24h)</span>
              <span className="font-mono text-[10px] text-[#c2e0d8]">AVG 67%</span>
            </div>
            {/* Mini chart */}
            <svg className="w-full h-6" viewBox="0 0 200 20" preserveAspectRatio="none">
              <path
                d="M0,15 Q25,12 50,14 T100,8 T150,12 T200,6"
                fill="none"
                stroke="#c2e0d8"
                strokeWidth="1.5"
              />
              <path
                d="M0,15 Q25,12 50,14 T100,8 T150,12 T200,6 L200,20 L0,20 Z"
                fill="url(#chartGradient)"
                opacity="0.2"
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c2e0d8" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-4 bg-[#c2e0d8]/5 rounded-3xl blur-2xl -z-10" />
    </div>
  );
}
