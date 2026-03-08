import { ExternalLink, Key, Mic2 } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";

const platforms = [
  { name: "Medium", handle: "@john_doe_writer", connected: true, icon: "M" },
  { name: "WordPress", handle: "techblog.com", connected: true, icon: "🌐" },
];

const apis = [
  { name: "OpenAI", detail: "GPT-4, DALL-E 3 Access", connected: true },
  { name: "Claude (Anthropic)", detail: "Claude 3.5 Sonnet", connected: false },
  { name: "Unsplash", detail: "Image Search Library", connected: true },
];

const IntegrationsPage = () => {
  return (
    <AppLayout>
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground">Integrations & Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your connected platforms, API keys, and brand identity.</p>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 mb-8 border-b border-border">
          {["Connected Platforms", "API Management", "Brand Voice"].map((tab, i) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                i === 0 ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Connected Platforms */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Connected Platforms</h2>
          <button className="text-sm font-medium text-primary hover:underline">Add New Platform</button>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          {platforms.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center text-sm font-bold">
                  {p.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.handle}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="badge-status bg-success/10 text-success font-semibold">CONNECTED</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* API Management */}
        <h2 className="text-lg font-bold text-foreground mb-4">API Management</h2>
        <div className="space-y-3 mb-10">
          {apis.map((api) => (
            <div key={api.name} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Key className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{api.name}</p>
                  <p className="text-xs text-muted-foreground">{api.detail}</p>
                </div>
              </div>
              {api.connected ? (
                <div className="flex items-center gap-3">
                  <input type="password" value="sk-xxxxxxxxxxxxxxxx" readOnly className="h-9 px-3 text-sm border border-border rounded-lg bg-background w-56" />
                  <Button variant="default" size="sm">Edit</Button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <input placeholder="Enter API Key" className="h-9 px-3 text-sm border border-border rounded-lg bg-background w-56 placeholder:text-muted-foreground" />
                  <Button variant="default" size="sm">Connect</Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Brand Voice */}
        <h2 className="text-lg font-bold text-foreground mb-2">Brand Voice Settings</h2>
        <p className="text-sm text-muted-foreground mb-4">Instruct the AI on how to represent your brand across all generated content.</p>
        <div className="bg-card border border-border rounded-xl p-5">
          <label className="text-xs font-semibold text-muted-foreground tracking-wide">Custom Instructions</label>
          <textarea
            className="w-full mt-2 h-32 px-4 py-3 text-sm border border-border rounded-lg bg-background resize-none placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="e.g. Always use a professional yet witty tone. Avoid jargon. Focus on technical accuracy but keep it accessible for beginners..."
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { label: "TONE", value: "Professional" },
              { label: "LANGUAGE", value: "English (US)" },
              { label: "AUDIENCE", value: "Developers" },
            ].map((s) => (
              <div key={s.label}>
                <label className="text-xs font-semibold text-muted-foreground tracking-wide">{s.label}</label>
                <select className="w-full mt-1 h-10 px-3 text-sm border border-border rounded-lg bg-background text-foreground">
                  <option>{s.value}</option>
                </select>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3 mt-5">
            <Button variant="outline">Discard Changes</Button>
            <Button>Save Voice Profile</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default IntegrationsPage;
