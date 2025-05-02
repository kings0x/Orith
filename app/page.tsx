import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banknote, BookOpen, Building, CreditCard, Database, Globe, Wallet } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { WaitlistForm } from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforming Campus Payments
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Orith leverages blockchain technology to create a seamless, transparent, and secure payment ecosystem
                for academic institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Wallet}
                title="Stellar Wallets"
                description="Every student and department gets a Stellar wallet for payments, receipts, and record-keeping in USDC."
              />
              <FeatureCard
                icon={Banknote}
                title="USDC on Stellar"
                description="Fast, low-cost, and stable transactions that protect users from crypto volatility."
              />
              <FeatureCard
                icon={CreditCard}
                title="Fiat On/Off-Ramps"
                description="Top up wallets via card, mobile money, or bank transfer using Stellar anchor services."
              />
              <FeatureCard
                icon={Database}
                title="Smart Contracts"
                description="Automate fee routing, vendor settlements, invoice payments, and bursary disbursement."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Orith Works</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                A simple, secure process for all campus financial activities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    1
                  </div>
                  <CardTitle>Onboarding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Students and departments are provisioned with Stellar wallets upon registration. New departments
                    automatically receive wallets when created.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    2
                  </div>
                  <CardTitle>Funding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Students can top up their wallets using various payment methods through Stellar anchors, including
                    card payments, mobile money, or bank transfers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                    3
                  </div>
                  <CardTitle>Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Make payments for tuition, fees, and campus services instantly. Smart contracts automate the routing
                    and settlement of funds to the appropriate departments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* User Roles Section */}
        <section className="py-20 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                For Students & Institutions
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Orith provides tailored solutions for all campus stakeholders
              </p>
            </div>

            <Tabs defaultValue="students" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="institutions">Institutions</TabsTrigger>
              </TabsList>
              <TabsContent value="students" className="mt-6" id="for-students">
                <Card>
                  <CardHeader>
                    <CardTitle>For Students</CardTitle>
                    <CardDescription>Simplify your campus financial experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Easy Onboarding</h4>
                        <p className="text-sm text-gray-600">
                          Get your Stellar wallet upon registration and start managing your campus finances immediately.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Multiple Payment Options</h4>
                        <p className="text-sm text-gray-600">
                          Fund your wallet using cards, mobile money, or bank transfers through Stellar anchors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                        <Wallet className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Peer-to-Peer Transactions</h4>
                        <p className="text-sm text-gray-600">
                          Send and receive payments from other students instantly and securely.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="institutions" className="mt-6" id="for-institutions">
                <Card>
                  <CardHeader>
                    <CardTitle>For Institutions</CardTitle>
                    <CardDescription>Streamline financial operations and enhance transparency</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                        <Building className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Automated Fee Collection</h4>
                        <p className="text-sm text-gray-600">
                          Configure fee structures and receive payments in real-time with automated routing to
                          departments.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                        <Database className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Transparent Records</h4>
                        <p className="text-sm text-gray-600">
                          Access immutable payment records and comprehensive audit logs for all transactions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="mr-4 mt-1 bg-blue-100 p-1 rounded-full">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Financial Inclusion</h4>
                        <p className="text-sm text-gray-600">
                          Provide accessible financial services to all students, regardless of banking status.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Waitlist Section (replacing testimonials) */}
        <section id="waitlist" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Waitlist</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Be the first to experience Orith's revolutionary campus payment solution
              </p>
            </div>

            <WaitlistForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
