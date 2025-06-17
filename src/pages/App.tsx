
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  Hash, 
  Volume2, 
  Settings, 
  Plus, 
  Search, 
  Mic, 
  Headphones, 
  Send,
  Smile,
  Paperclip,
  Phone,
  Video,
  Users,
  MoreVertical
} from 'lucide-react';

const App = () => {
  const [activeChannel, setActiveChannel] = useState('general');
  const [message, setMessage] = useState('');
  const [isVoiceConnected, setIsVoiceConnected] = useState(false);

  const servers = [
    { id: 1, name: 'Gaming Hub', icon: '🎮', active: true },
    { id: 2, name: 'Work Team', icon: '💼', active: false },
    { id: 3, name: 'Study Group', icon: '📚', active: false },
  ];

  const channels = [
    { id: 1, name: 'general', type: 'text', members: 1234 },
    { id: 2, name: 'announcements', type: 'text', members: 1234 },
    { id: 3, name: 'random', type: 'text', members: 567 },
    { id: 4, name: 'General Voice', type: 'voice', members: 5 },
    { id: 5, name: 'Gaming Session', type: 'voice', members: 3 },
  ];

  const messages = [
    {
      id: 1,
      user: 'Alex Rivera',
      avatar: '🦸',
      time: '2:45 PM',
      message: 'Hey everyone! Just finished the new feature implementation. What do you think?',
      reactions: ['👍', '🚀', '💯']
    },
    {
      id: 2,
      user: 'Sarah Chen',
      avatar: '👩‍💻',
      time: '2:47 PM',
      message: 'Looks amazing! The UI is so smooth now.',
      reactions: ['❤️']
    },
    {
      id: 3,
      user: 'Mike Johnson',
      avatar: '🎨',
      time: '2:50 PM',
      message: 'The animations are perfect! Great work team 🎉',
      reactions: ['🔥', '👏']
    }
  ];

  const onlineUsers = [
    { name: 'Alex Rivera', status: 'online', activity: 'Playing Valorant' },
    { name: 'Sarah Chen', status: 'online', activity: 'Coding' },
    { name: 'Mike Johnson', status: 'away', activity: 'In a meeting' },
    { name: 'Emma Davis', status: 'dnd', activity: 'Do not disturb' },
    { name: 'James Wilson', status: 'offline', activity: 'Last seen 2h ago' },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Send message logic
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Server Sidebar */}
      <div className="w-20 bg-muted/30 flex flex-col items-center py-4 space-y-3">
        <div className="w-12 h-12 vortex-gradient rounded-2xl flex items-center justify-center hover:rounded-xl transition-all cursor-pointer">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <Separator className="w-8" />
        {servers.map(server => (
          <div
            key={server.id}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center hover:rounded-xl transition-all cursor-pointer text-2xl
              ${server.active ? 'bg-primary' : 'bg-muted hover:bg-muted/70'}`}
          >
            {server.icon}
          </div>
        ))}
        <div className="w-12 h-12 rounded-2xl bg-muted hover:bg-primary/20 hover:text-primary flex items-center justify-center hover:rounded-xl transition-all cursor-pointer">
          <Plus className="w-6 h-6" />
        </div>
      </div>

      {/* Channel Sidebar */}
      <div className="w-64 bg-muted/20 flex flex-col">
        {/* Server Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border">
          <h2 className="font-semibold">Gaming Hub</h2>
          <MoreVertical className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
        </div>

        {/* Channels */}
        <ScrollArea className="flex-1 p-2">
          <div className="space-y-1">
            <div className="px-2 py-1 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              Text Channels
            </div>
            {channels.filter(c => c.type === 'text').map(channel => (
              <div
                key={channel.id}
                onClick={() => setActiveChannel(channel.name)}
                className={`flex items-center px-2 py-1 rounded cursor-pointer group
                  ${activeChannel === channel.name ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
              >
                <Hash className="w-4 h-4 mr-2" />
                <span className="flex-1">{channel.name}</span>
              </div>
            ))}
            
            <div className="px-2 py-1 text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-4">
              Voice Channels
            </div>
            {channels.filter(c => c.type === 'voice').map(channel => (
              <div
                key={channel.id}
                className="flex items-center px-2 py-1 rounded cursor-pointer group text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                <span className="flex-1">{channel.name}</span>
                <span className="text-xs">{channel.members}</span>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* User Panel */}
        <div className="h-16 bg-muted/30 px-2 flex items-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 ml-2">
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-muted-foreground">Online</div>
          </div>
          <div className="flex space-x-1">
            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
              <Mic className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
              <Headphones className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border">
          <div className="flex items-center">
            <Hash className="w-5 h-5 text-muted-foreground mr-2" />
            <h1 className="font-semibold">{activeChannel}</h1>
            <Separator orientation="vertical" className="mx-4 h-6" />
            <p className="text-sm text-muted-foreground">Welcome to #{activeChannel}!</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost">
              <Phone className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Video className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Users className="w-4 h-4" />
            </Button>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search" className="w-36 pl-9 h-8" />
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 chat-scroll">
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="flex space-x-3 hover:bg-muted/30 p-2 rounded">
                <Avatar className="w-10 h-10">
                  <AvatarFallback>{msg.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{msg.user}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm">{msg.message}</p>
                  {msg.reactions && (
                    <div className="flex space-x-1 mt-2">
                      {msg.reactions.map((reaction, idx) => (
                        <Button
                          key={idx}
                          size="sm"
                          variant="ghost"
                          className="h-6 px-2 text-xs bg-muted/50 hover:bg-muted"
                        >
                          {reaction}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-border">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                placeholder={`Message #${activeChannel}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="pr-20"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                  <Smile className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button type="submit" size="sm" className="vortex-gradient">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="w-64 bg-muted/20 border-l border-border">
        <div className="p-4">
          <h3 className="font-semibold mb-4">Members — {onlineUsers.length}</h3>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1">
              {onlineUsers.map((user, index) => (
                <div key={index} className="flex items-center p-2 rounded hover:bg-muted/50 cursor-pointer">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background
                      ${user.status === 'online' ? 'bg-green-500' : 
                        user.status === 'away' ? 'bg-yellow-500' : 
                        user.status === 'dnd' ? 'bg-red-500' : 'bg-gray-500'}`}
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="text-sm font-medium">{user.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{user.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default App;
