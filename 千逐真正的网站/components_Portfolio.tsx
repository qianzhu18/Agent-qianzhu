import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { 
    id: 1, 
    title: 'AI全方面嵌套能力', 
    description: '提供全方面AI学习的资源和博主推荐以及具备一定的帮助能力' 
  },
  { 
    id: 2, 
    title: '帮助提升认知', 
    description: '提供高认知信息源以及给出高认知的见解' 
  },
  { 
    id: 3, 
    title: '人际关系咨询', 
    description: '提供对于人际关系的独特视角，尤其擅长处理两性关系以及小团体的纠纷问题' 
  },
  { 
    id: 4, 
    title: 'Obsidian知识库管理', 
    description: '帮助您更好地管理和组织您的知识库' 
  },
]

const requirements = [
  { id: 1, title: '积极主动', description: '在交流中保持积极主动的态度' },
  { id: 2, title: '价值观认同', description: '与我的核心价值观保持一致' },
  { id: 3, title: '个人技能突出', description: '拥有独特的个人能力和专长' },
  { id: 4, title: '期待未来发展', description: '对未来充满热情，愿意不断学习和成长' },
]

const Portfolio = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">我能提供的服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="card-hover bg-opacity-10 bg-blue-900 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-400">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">我需要的</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req) => (
            <Card key={req.id} className="card-hover bg-opacity-10 bg-blue-900 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-400">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

