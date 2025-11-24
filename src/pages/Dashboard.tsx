import { DollarSign, Package, TrendingUp, ShoppingCart } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const stats = [
    {
      title: "Receita Total",
      value: "R$ 45.231,00",
      icon: DollarSign,
      trend: "+12% vs mês anterior",
      trendUp: true,
    },
    {
      title: "Lucro",
      value: "R$ 12.450,00",
      icon: TrendingUp,
      trend: "+8% vs mês anterior",
      trendUp: true,
    },
    {
      title: "Produtos em Estoque",
      value: "234",
      icon: Package,
      trend: "-5% vs mês anterior",
      trendUp: false,
    },
    {
      title: "Vendas do Mês",
      value: "156",
      icon: ShoppingCart,
      trend: "+23% vs mês anterior",
      trendUp: true,
    },
  ];

  const revenueData = [
    { month: "Jan", revenue: 32000, profit: 8000 },
    { month: "Fev", revenue: 35000, profit: 9500 },
    { month: "Mar", revenue: 38000, profit: 10200 },
    { month: "Abr", revenue: 42000, profit: 11000 },
    { month: "Mai", revenue: 45231, profit: 12450 },
  ];

  const topProducts = [
    { name: "Ração Premium 25kg", sales: 45 },
    { name: "Vitamina Bovino", sales: 38 },
    { name: "Antiparasitário", sales: 32 },
    { name: "Suplemento Equino", sales: 28 },
    { name: "Sal Mineral", sales: 25 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h2>
        <p className="text-muted-foreground mt-1">
          Visão geral do seu negócio
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Receita e Lucro</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="Receita"
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={2}
                  name="Lucro"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top 5 Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProducts} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  type="number"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  width={120}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={11}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
                <Bar 
                  dataKey="sales" 
                  fill="hsl(var(--accent))"
                  radius={[0, 8, 8, 0]}
                  name="Vendas"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
