import { Filter, ArrowUpDown, MoreVertical, Plus } from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { Button } from "@/components/ui/button";

const tabs = ["Drafts", "In Review", "Approved", "Published"];

const posts = [
  {
    title: "The Future of Generative AI in SaaS",
    subtitle: "Edited 2 hours ago",
    topic: "Technology",
    topicColor: "bg-primary/10 text-primary",
    wordCount: "1,450",
    status: "Draft",
    statusColor: "bg-warning/10 text-warning",
    originality: 94,
    origColor: "bg-success",
  },
  {
    title: "10 Best SEO Practices for 2024",
    subtitle: "Created yesterday",
    topic: "Marketing",
    topicColor: "bg-success/10 text-success",
    wordCount: "2,100",
    status: "In Review",
    statusColor: "bg-info/10 text-info",
    originality: 82,
    origColor: "bg-warning",
  },
  {
    title: "Sustainable Energy Solutions in Tech",
    subtitle: "Edited 3 days ago",
    topic: "Green Tech",
    topicColor: "bg-success/10 text-success",
    wordCount: "980",
    status: "Approved",
    statusColor: "bg-success/10 text-success",
    originality: 98,
    origColor: "bg-success",
  },
  {
    title: "Remote Work Culture: The Complete Guide",
    subtitle: "Created 4 days ago",
    topic: "HR",
    topicColor: "bg-primary/10 text-primary",
    wordCount: "3,200",
    status: "Draft",
    statusColor: "bg-warning/10 text-warning",
    originality: 65,
    origColor: "bg-destructive",
  },
];

const ContentQueuePage = () => {
  return (
    <AppLayout>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Manage Pipeline</h1>
          <p className="text-muted-foreground mt-1">Monitor progress and optimize your AI-generated content strategy.</p>
        </div>
      </div>

      {/* Tabs + Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-1 bg-secondary rounded-lg p-1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                i === 0 ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary transition-colors">
            <ArrowUpDown className="w-4 h-4" /> Sort by Recent
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground tracking-wide">BLOG TITLE</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-muted-foreground tracking-wide">TOPIC</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground tracking-wide">WORD COUNT</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground tracking-wide">STATUS</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground tracking-wide">ORIGINALITY</th>
              <th className="text-center px-5 py-3 text-xs font-semibold text-muted-foreground tracking-wide">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.title} className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors">
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-foreground">{post.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{post.subtitle}</p>
                </td>
                <td className="px-5 py-4">
                  <span className={`badge-status ${post.topicColor}`}>{post.topic}</span>
                </td>
                <td className="px-5 py-4 text-center text-sm text-foreground">{post.wordCount}</td>
                <td className="px-5 py-4 text-center">
                  <span className={`badge-status ${post.statusColor}`}>{post.status}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-12 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${post.origColor}`} style={{ width: `${post.originality}%` }} />
                    </div>
                    <span className={`text-sm font-semibold ${
                      post.originality >= 90 ? "text-success" : post.originality >= 75 ? "text-warning" : "text-destructive"
                    }`}>{post.originality}%</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-center">
                  <button className="p-1 rounded hover:bg-secondary transition-colors">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 1-4 of 12 draft posts</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary">‹</button>
            <button className="w-8 h-8 rounded border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary">›</button>
          </div>
        </div>
      </div>

      {/* Create CTA */}
      <div className="mt-6">
        <Button className="gap-2 w-full max-w-xs">
          <Plus className="w-4 h-4" /> Create New Post
        </Button>
      </div>
    </AppLayout>
  );
};

export default ContentQueuePage;
