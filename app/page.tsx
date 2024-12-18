import { Header } from '@/components/header'
import { Button } from "@/components/ui/button"
import { CalendarBooking } from "@/components/cal"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Users, Zap, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-16 px-4 relative overflow-hidden" style={{ minHeight: 'calc(100vh * 0.6)' }}>
        <div className="absolute inset-0 grid-background opacity-20"></div>
        <div className="container mx-auto text-center relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white">Need Tech That Matters? Let's Talk.</h1>
          <p className="text-xl mb-8 text-muted-foreground leading-relaxed py-1">From AI breakthroughs to market-ready solutions, I build products that matter.</p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400">
              <a href="https://cal.com/samruddhi-mokal/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-purple-700 text-purple-300 hover:bg-purple-700 hover:text-white">
              <a href="https://x.com/samruddhi_mokal" target="_blank" rel="noopener noreferrer">Connect on X</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-purple-600 to-black"></div>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 px-4 mt-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">Why Choose Me?</h2>
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
            {[
              { title: 'Zero to Market Fast', description: 'From Idea to Market in Days, Not Months.', icon: Rocket },
              { title: 'Results That Matter', description: 'I build solutions that Attract Users and Generate Revenue.', icon: Users },
              { title: 'Technical Excellence', description: 'I turn Complex Requirements into Elegant Solutions.', icon: Zap }
            ].map((item) => (
              <Card key={item.title} className="glossy flex-1 flex flex-col items-center text-center">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 mb-4 border border-purple-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white" pb-1>
                    <span className="inline-block px-1">
                      {item.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ship Log Section */}
      <section id="ship-log" className="py-16 px-4 mt-16 bg-secondary/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-800">Ship Log</h2>
          
          {/* Text Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Advanced AI Voice Modeling System', description: 'Built sophisticated data pipelines for voice data processing, implemented efficient training workflows, and collaborated with leading AI experts.' },
              { title: 'BERT-Based Prediction Market', description: 'Created an opinion trading predictor that processed market sentiments and user behaviors to generate accurate forecasts.' },
              { title: 'AI Prompting System', description: 'Architected a sophisticated prompting system for an AI startup, enabling dynamic and context-aware AI interactions.' },
            ].map((project) => (
              <Card key={project.title} className="glossy overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white leading-relaxed">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rapid AI Product Suite */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4 text-center text-purple-600">Rapid AI Prototypes Gallery</h3>
            <p className="text-lg text-center mb-8 text-muted-foreground">
              A showcase of experimental AI projects built at lightning speed.
            </p>
          </div>

          {/* Video Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI Compatibility Matcher', description: 'Developed an engaging AI system that generates fun compatibility results between friends through quirky questions.', video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vidoe%201-zexfrtqQC4Qy3ZZW13bHKwXgjVZM8E.mp4' },
              { title: 'Interactive AI Debate Coach', description: 'Created an AI-powered debate partner that helps users improve their argumentation skills.', video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%202-6A1yxzyB70F5K5HcIMN4S3lTgW2ezd.mp4' },
              { title: 'AI Bully Bot & Sticker Generator', description: 'Built an entertaining AI bot that playfully bullies users and generates custom stickers.', video: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video%203-UHUU8wI32yJIwe3HcEEqxgvXj5Z8lL.mp4' },
            ].map((project) => (
              <Card key={project.title} className="glossy overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-white leading-relaxed">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <video src={project.video} controls className="w-full h-full object-cover">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* About Me Section */}
      <section id="about-me" className="py-16 px-4 mt-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile.jpg-J2fdMZ8wmy4OOj4teOpMnQjIOsrQEV.jpeg"
                alt="Samruddhi Mokal - Founder of Pace Labz" 
                width={300} 
                height={400} 
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                Hello! I'm Samruddhi Mokal, a technical founder and product builder who thrives at the intersection of innovation and execution. My journey started with founding a successful startup in college that was later acquihired, leading to valuable experience in product management for US healthcare and government sectors.
              </p>
              <p className="text-lg mb-4">
                My expertise spans from developing cutting-edge AI solutions to scaling startups (0 to 10M audience base with 300+ influencers in 4 countries 90 days). I've worked with industry leaders, including experience at a YC-backed company's Founder's Office, and have built everything from prediction markets to AI voice models.
              </p>
              <p className="text-lg mb-4">
                What sets me apart is my ability to understand both technical complexity and business needs. Whether it's creating prompting systems for AI firms or scaling influencer platforms across countries, I bring a unique blend of technical expertise and business acumen to every project.
              </p>
              <p className="text-lg mb-4">
                Currently, I'm focused on helping businesses leverage AI and modern technology to build efficient solutions that solve real problems. Every project starts with understanding your vision and ends with a product ready for real-world impact. 
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/samruddhi_mokal" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-100">
                  <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/in/samruddhi-mokal/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-100">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 px-4 mt-8 bg-secondary/10">
        <div className="container mx-auto text-center">
          <div className="glossy p-4 rounded-lg">
            <CalendarBooking calLink="samruddhi-mokal/30min" />
          </div>
          <Button size="lg" asChild className="mt-8 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400" px-8 py-6>
            <a href="https://cal.com/samruddhi-mokal/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-8 px-4 border-t border-purple-700">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Pace Labz. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}