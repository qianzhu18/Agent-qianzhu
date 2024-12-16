import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    id: 1,
    title: '浪前小组文案评论双榜一',
    description: '暑假期间担任小组积极成员，在文案和评论方面均取得优异成绩'
  },
  {
    id: 2,
    title: '深度阅读坚持者',
    description: '通过知识专栏、公众号以及系统书籍阅读成为一个文理兼备知识面广达的人'
  },
  {
    id: 3,
    title: '社交狂人',
    description: '学校分浪创立者，长沙线下浪前小组织群主以及学生会社团三个部门的重点成员'
  },
  {
    id: 4,
    title: 'AI深度体验者',
    description: '从大语言模型到用AI完成各类工作都有涉猎，致力于用AI赋能于我们的生活'
  }
]

export default function Experience() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">我的经历</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <Card key={exp.id} className="card-hover bg-opacity-10 bg-blue-900 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-400">{exp.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

