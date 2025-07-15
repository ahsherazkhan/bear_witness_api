import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SolutionDemo = () => {
  const [demoUrl, setDemoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const samplePosts = [
    {
      id: 1,
      platform: "Twitter",
      content: "Just discovered this amazing new coffee shop downtown! The barista's latte art is absolutely incredible and the atmosphere is so cozy. Perfect spot for remote work! ☕️ #CoffeeLovers",
      isAI: false,
      confidence: 98.2,
      indicators: ["Natural language flow", "Personal experience markers", "Authentic emotional expression"]
    },
    {
      id: 2,
      platform: "Instagram",
      content: "Exploring the vibrant streets of downtown today! The architecture here is truly remarkable, with each building telling its own unique story. The blend of modern and historic elements creates such a captivating urban landscape.",
      isAI: true,
      confidence: 94.7,
      indicators: ["Generic descriptive language", "Lack of personal details", "AI writing patterns detected"]
    },
    {
      id: 3,
      platform: "LinkedIn",
      content: "Thrilled to announce my promotion to Senior Marketing Manager! This journey has been incredible, and I'm grateful for my amazing team's support. Looking forward to new challenges ahead! 🚀",
      isAI: false,
      confidence: 96.8,
      indicators: ["Personal milestone sharing", "Emotional authenticity", "Professional context appropriate"]
    }
  ];

  const handleAnalyze = () => {
    if (!demoUrl.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const randomResult = samplePosts[Math.floor(Math.random() * samplePosts.length)];
      setAnalysisResult({
        ...randomResult,
        url: demoUrl,
        analysisTime: (Math.random() * 2 + 1).toFixed(1)
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  const handleSampleTest = (post) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        ...post,
        url: `https://${post.platform.toLowerCase()}.com/sample-post`,
        analysisTime: (Math.random() * 2 + 1).toFixed(1)
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section id="demo-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            See Bear Witness AI in
            <span className="text-accent"> Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time AI content detection with our interactive demo. 
            Paste any social media URL or test our sample posts to see instant results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Demo Input */}
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Icon name="Link" size={24} className="mr-3 text-accent" />
              Test Any Social Media Post
            </h3>
            
            <div className="space-y-4 mb-6">
              <Input
                label="Social Media URL"
                type="url"
                placeholder="https://twitter.com/user/status/123... or paste content directly"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                description="Supports Twitter, Instagram, LinkedIn, Facebook, TikTok, and more"
              />
              
              <Button
                variant="default"
                fullWidth
                onClick={handleAnalyze}
                disabled={!demoUrl.trim() || isAnalyzing}
                loading={isAnalyzing}
                className="bg-accent hover:bg-accent/90 text-white"
                iconName="Search"
                iconPosition="left"
              >
                {isAnalyzing ? 'Analyzing Content...' : 'Analyze Content'}
              </Button>
            </div>

            {/* Sample Posts */}
            <div className="border-t pt-6">
              <h4 className="font-semibold text-foreground mb-4">Or try these sample posts:</h4>
              <div className="space-y-3">
                {samplePosts.map((post) => (
                  <div key={post.id} className="border rounded-lg p-4 hover:bg-gray-50 smooth-transition">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="MessageSquare" size={16} color="#6b7280" />
                        <span className="text-sm font-medium text-muted-foreground">{post.platform}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSampleTest(post)}
                        disabled={isAnalyzing}
                      >
                        Test
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Icon name="BarChart3" size={24} className="mr-3 text-accent" />
              Analysis Results
            </h3>

            {!analysisResult && !isAnalyzing && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={32} color="#6b7280" />
                </div>
                <p className="text-muted-foreground">
                  Enter a URL or select a sample post to see instant AI detection results
                </p>
              </div>
            )}

            {isAnalyzing && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Icon name="Loader2" size={32} color="var(--color-accent)" className="animate-spin" />
                </div>
                <p className="text-muted-foreground mb-2">Analyzing content...</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
              </div>
            )}

            {analysisResult && (
              <div className="space-y-6">
                {/* Detection Result */}
                <div className={`p-6 rounded-lg border-2 ${
                  analysisResult.isAI 
                    ? 'bg-red-50 border-red-200' :'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={analysisResult.isAI ? "AlertTriangle" : "CheckCircle"} 
                        size={24} 
                        color={analysisResult.isAI ? "#ef4444" : "#10b981"} 
                      />
                      <span className={`font-bold text-lg ${
                        analysisResult.isAI ? 'text-red-700' : 'text-green-700'
                      }`}>
                        {analysisResult.isAI ? 'AI-Generated Content' : 'Human-Created Content'}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${
                        analysisResult.isAI ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {analysisResult.confidence}%
                      </div>
                      <div className="text-sm text-muted-foreground">Confidence</div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    Analysis completed in {analysisResult.analysisTime}s
                  </div>
                </div>

                {/* Detection Indicators */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Detection Indicators:</h4>
                  <div className="space-y-2">
                    {analysisResult.indicators.map((indicator, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} color="#10b981" />
                        <span className="text-sm text-muted-foreground">{indicator}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Globe" size={16} color="#6b7280" />
                    <span className="text-sm font-medium">Platform: {analysisResult.platform}</span>
                  </div>
                  <div className="text-xs text-muted-foreground break-all">
                    {analysisResult.url}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionDemo;