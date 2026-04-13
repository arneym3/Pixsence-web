import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  FileCheck, 
  Lock, 
  Bell, 
  Search, 
  Users,
  Zap,
  Globe,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Tamper-Evident Audit',
    description: 'Every critical action is recorded in a hash chain, making tampering cryptographically detectable.',
    highlights: ['SHA-256 hashing', 'Hash chain linking', 'Verify endpoint'],
  },
  {
    icon: FileCheck,
    title: 'Event Lifecycle',
    description: 'Complete event management from detection through investigation to resolution.',
    highlights: ['State transitions', 'Operator actions', 'Investigation workflow'],
  },
  {
    icon: Lock,
    title: 'Role-Based Access',
    description: 'Granular permissions for Admin, Operator, and Viewer roles with clear separation of duties.',
    highlights: ['JWT authentication', 'Permission matrix', 'UI enforcement'],
  },
  {
    icon: Bell,
    title: 'Webhook Integrations',
    description: 'Reliable outbound notifications with exponential backoff retry and delivery logging.',
    highlights: ['Event filtering', 'Retry with backoff', 'HMAC signing'],
  },
  {
    icon: Search,
    title: 'AI Copilot',
    description: 'Intelligent assistance for root cause analysis with evidence-based suggestions.',
    highlights: ['RCA drafts', 'Evidence citations', 'Next actions'],
  },
  {
    icon: Users,
    title: 'Investigations',
    description: 'Case management for incidents with timeline, comments, and status tracking.',
    highlights: ['Timeline view', 'Context bundles', 'Status workflow'],
  },
  {
    icon: Zap,
    title: 'ETA Forecasting',
    description: 'Predictive analytics to anticipate risk evolution before intervention.',
    highlights: ['Horizon selection', 'Confidence scores', 'Risk probability'],
  },
  {
    icon: Globe,
    title: 'Edge Ready',
    description: 'Deploy agents at edge locations with store-and-forward for air-gapped environments.',
    highlights: ['Buffering', 'Protocol adapters', 'Heartbeat monitoring'],
  },
  {
    icon: Clock,
    title: 'Noise Control',
    description: 'Sophisticated mechanisms to prevent alert fatigue while maintaining safety.',
    highlights: ['Dwell timers', 'Hysteresis', 'Anti-flap cooldown'],
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-white/20">
            Capabilities
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for operational teams who need reliability, auditability, 
            and actionable intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 border-border hover:border-sky-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {feature.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* UI Preview Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Modern Operator Interface
            </h3>
            <p className="text-muted-foreground">
              Clean, responsive UI designed for operational efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Overview Dashboard',
                description: 'At-a-glance risk posture with KPI cards, trend charts, and risk registry.',
                items: ['State counts', 'Risk transitions', 'Filtered registry'],
              },
              {
                title: 'Channel Explorer',
                description: 'Browse channels with split view: list on left, detailed inspection on right.',
                items: ['Time series charts', 'Event history', 'Rule thresholds', 'AI forecast'],
              },
              {
                title: 'Investigation Detail',
                description: 'Complete case management with timeline and context bundles.',
                items: ['Status workflow', 'Action timeline', 'AI Copilot', 'Export report'],
              },
            ].map((view, i) => (
              <div key={i} className="glass rounded-xl p-6">
                <h4 className="text-lg font-medium text-white mb-2">{view.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{view.description}</p>
                <ul className="space-y-1.5">
                  {view.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
