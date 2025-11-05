import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IoAdd, IoCloudUploadOutline, IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";

export const metadata = {
  title: "Dashboard - Postcards Studio Pro",
  description: "Interface principale pour les photographes.",
};

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <IoAdd className="mr-2 h-4 w-4" /> Créer un événement
          </Button>
          <Button>
            <IoCloudUploadOutline className="mr-2 h-4 w-4" /> Uploader des photos
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Total Revenu</CardTitle>
                <IoCalendarOutline className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% du mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Événements</CardTitle>
                <IoPeopleOutline className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% du mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Vues</CardTitle>
                <IoCalendarOutline className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% du mois dernier</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm">Téléchargements</CardTitle>
                <IoCloudUploadOutline className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">+573</div>
                <p className="text-xs text-muted-foreground">+201 depuis la dernière heure</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Aperçu</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                {/* Chart placeholder */}
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  [Graphique de revenus ici]
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Paiements Récents</CardTitle>
                <CardDescription>Vous avez reçu 265.00€ ce mois-ci.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Recent payments list placeholder */}
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  [Liste des paiements récents ici]
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}