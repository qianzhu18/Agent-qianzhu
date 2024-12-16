import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const hobbies = [
  {
    id: 1,
    title: '羽毛球爱好者',
    description: '具备一定练习时长，可以表现出一定水准'
  },
  {
    id: 2,
    title: '足球深度爱好者',
    description: '自小喜欢足球运动，具备阅读比赛以及比赛能力，喜欢的位置是前锋，喜欢的球星是梅西！'
  },
  {
    id: 3,
    title: '动漫学者',
    description: '喜欢阅读有思想深度的动漫，也不反感于纯粹的快乐'
  },
  {
    id: 4,
    title: '科技圈爱好者',
    description: '对于AI发展动态追随，有信息源关注同时本身也是各类AI使用爱好者'
  }
]

export default function Hobbies() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-glow">我的兴趣爱好</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => (
            <Card key={hobby.id} className="card-hover bg-opacity-10 bg-blue-900 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-400">{hobby.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

