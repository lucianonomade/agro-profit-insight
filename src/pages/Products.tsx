import { useState } from "react";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  costPrice: number;
  salePrice: number;
  stock: number;
  profitMargin: number;
}

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const products: Product[] = [
    {
      id: 1,
      name: "Ração Premium 25kg",
      category: "Alimentação",
      costPrice: 85.00,
      salePrice: 120.00,
      stock: 45,
      profitMargin: 41.2,
    },
    {
      id: 2,
      name: "Vitamina Bovino 500ml",
      category: "Medicamentos",
      costPrice: 45.00,
      salePrice: 68.00,
      stock: 32,
      profitMargin: 51.1,
    },
    {
      id: 3,
      name: "Antiparasitário 1L",
      category: "Medicamentos",
      costPrice: 120.00,
      salePrice: 180.00,
      stock: 18,
      profitMargin: 50.0,
    },
    {
      id: 4,
      name: "Suplemento Equino 2kg",
      category: "Suplementos",
      costPrice: 95.00,
      salePrice: 140.00,
      stock: 28,
      profitMargin: 47.4,
    },
    {
      id: 5,
      name: "Sal Mineral 15kg",
      category: "Alimentação",
      costPrice: 65.00,
      salePrice: 95.00,
      stock: 52,
      profitMargin: 46.2,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Produtos</h2>
          <p className="text-muted-foreground mt-1">
            Gerencie seu catálogo de produtos
          </p>
        </div>
        <Button onClick={() => navigate("/add-product")} className="gap-2">
          <Plus className="h-4 w-4" />
          Novo Produto
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Buscar produtos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-muted/30">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">
                    {product.category}
                  </Badge>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Custo:</span>
                <span className="font-semibold text-foreground">
                  R$ {product.costPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Venda:</span>
                <span className="font-semibold text-primary">
                  R$ {product.salePrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estoque:</span>
                <span className={`font-semibold ${product.stock < 20 ? "text-warning" : "text-success"}`}>
                  {product.stock} unidades
                </span>
              </div>
              <div className="pt-2 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Margem:</span>
                  <span className="text-lg font-bold text-success">
                    {product.profitMargin.toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
