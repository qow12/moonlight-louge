import { Moon, Users, MessageCircle, Crown, Gamepad2, Music, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Moon className="h-4 w-4" />
              <span>Komunitas Discord Indonesia</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance">
              Selamat Datang di{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Moonlight</span>
            </h1>

            <p className="mb-8 text-lg text-muted-foreground md:text-xl text-balance max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan komunitas ramah dan seru! Main bareng, ngobrol santai, dan temukan teman baru di
              Moonlight Lounge.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="gap-2 text-lg h-14 px-8" asChild>
                <a href="https://discord.gg/moonl1ghtlounge" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Join Discord Sekarang
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg h-14 px-8 bg-transparent" asChild>
                <a href="#features">Lihat Fitur</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">1000+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">24/7 Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-balance">
              Kenapa Harus Join Moonlight?
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Komunitas yang asik dan supportif untuk semua kalangan
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Gaming Bareng</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Main game favorit bareng member lainnya. Dari Mobile Legends, Valorant, sampai Genshin Impact!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <MessageCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Chat Santai</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ngobrol santai tentang apapun. Cerita keseharian, sharing meme, atau diskusi random!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Music Bot</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dengerin musik bareng di voice channel dengan bot musik berkualitas tinggi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Trophy className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Event & Giveaway</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Event seru dan giveaway menarik setiap minggu. Kesempatan dapetin hadiah keren!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Komunitas Ramah</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Member yang friendly dan moderator yang aktif. Semua orang welcome di sini!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Crown className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Role & Level System</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sistem level dan role khusus untuk member aktif. Makin aktif, makin banyak benefit!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-balance">
                  Lebih Dari Sekedar Server Discord
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Moonlight adalah tempat dimana kamu bisa jadi diri sendiri, ketemu teman baru, dan have fun bareng
                  komunitas yang asik.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Voice channels untuk ngobrol dan gaming</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Channel khusus untuk berbagai topik dan minat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Bot interaktif dan mini games seru</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Partnership opportunities untuk content creators</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <div className="relative rounded-2xl border-2 border-border bg-card p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Moon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Moonlight Lounge</div>
                        <div className="text-sm text-muted-foreground">1000+ members online</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>124 online</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-2 w-2 rounded-full bg-gray-500" />
                        <span>876 members</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">
                        Last message: "Ada yang mau main Valorant? Need 2 more!"
                      </p>
                      <Button className="w-full gap-2" asChild>
                        <a href="https://discord.gg/moonl1ghtlounge" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          Join Sekarang
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-balance">Siap Join Moonlight?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed">
              Gabung sekarang dan jadilah bagian dari komunitas Discord Indonesia yang paling asik!
            </p>
            <Button size="lg" className="gap-2 text-lg h-14 px-8" asChild>
              <a href="https://discord.gg/moonl1ghtlounge" target="_blank" rel="noopener noreferrer">
                <Moon className="h-5 w-5" />
                Join Discord Moonlight
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <p className="mt-6 text-sm text-muted-foreground">Gratis dan bisa langsung mulai chat! 🌙</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Moon className="h-5 w-5 text-primary" />
              <span className="font-semibold">Moonlight Lounge</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Moonlight. Komunitas Discord Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
