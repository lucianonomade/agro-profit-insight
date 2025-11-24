import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Reports = () => {
  const categoryData = [
    { name: "Alimentação", value: 35, color: "hsl(var(--primary))" },
    { name: "Medicamentos", value: 28, color: "hsl(var(--secondary))" },
    { name: "Suplementos", value: 22, color: "hsl(var(--accent))" },
    { name: "Equipamentos", value: 10, color: "hsl(var(--success))" },
    { name: "Higiene", value: 5, color: "hsl(var(--warning))" },
  ];

  const profitByMonth = [
    { month: "Janeiro", profit: 8200 },
    { month: "Fevereiro", profit: 9500 },
    { month: "Março", profit: 10200 },
    { month: "Abril", profit: 11000 },
    { month: "Maio", profit: 12450 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Relatórios</h2>
          <p className="text-muted-foreground mt-1">
            Análises e insights do seu negócio
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Filtrar Período
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Vendas por Categoria</CardTitle>
            <CardDescription>Distribuição percentual</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lucro Mensal</CardTitle>
            <CardDescription>Últimos 5 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {profitByMonth.map((item) => (
                <div key={item.month} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.month}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-success h-2 rounded-full transition-all"
                        style={{ width: `${(item.profit / 15000) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-success w-24 text-right">
                      R$ {item.profit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumo Financeiro</CardTitle>
          <CardDescription>Consolidado do período</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Receita Total</p>
              <p className="text-3xl font-bold text-foreground">R$ 45.231,00</p>
              <p className="text-xs text-success">+12% vs período anterior</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Custo Total</p>
              <p className="text-3xl font-bold text-foreground">R$ 32.781,00</p>
              <p className="text-xs text-muted-foreground">72.5% da receita</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Lucro Líquido</p>
              <p className="text-3xl font-bold text-success">R$ 12.450,00</p>
              <p className="text-xs text-success">27.5% margem</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
